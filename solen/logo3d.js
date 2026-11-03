/* Solen: logo em 3D no topo da página inicial (Three.js, carregado só depois da página).
 * Arraste para girar. Acabamento acompanha o tema: laca preta no claro, cromo no escuro. */
(function () {
  var host = document.querySelector('.hx-media');
  if (!host) return;
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // a mesma forma do logo, dividida em dois blocos para a triangulação não falhar no ponto de encontro
  var PATHS = [
    'M296,168 L549,295 L549,165 L802,292 L802,555 L549,428 L549,545 L296,418 Z',
    'M549,545 L802,672 L802,922 L549,795 Z'
  ];

  function load(src) {
    return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
  }
  function start() {
    if (!window.THREE) return;
    var THREE = window.THREE;
    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return; }   // sem WebGL: fica só o gradiente
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.physicallyCorrectLights = true;
    var cv = renderer.domElement;
    cv.className = 'logo3d';
    cv.setAttribute('role', 'img');
    cv.setAttribute('aria-label', 'Solen logo in 3D. Drag to rotate.');
    host.appendChild(cv);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);

    // ambiente de estúdio para os reflexos
    var pmrem = new THREE.PMREMGenerator(renderer);
    var env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial({ color: 0x2a2a2c, side: THREE.BackSide })));
    [[0, 6, 0, 14, 1, 14, 0xffffff], [-9, 1, 2, 1, 8, 6, 0xffffff], [9, 2, -2, 1, 6, 10, 0xd8d8d8], [0, 0, 9.5, 8, 3, 1, 0xbdbdbd], [0, -6, 0, 10, 1, 10, 0x111111]].forEach(function (a) {
      var m = new THREE.Mesh(new THREE.BoxGeometry(a[3], a[4], a[5]), new THREE.MeshBasicMaterial({ color: a[6] }));
      m.position.set(a[0], a[1], a[2]); env.add(m);
    });
    scene.environment = pmrem.fromScene(env, 0.04).texture;
    var key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(4, 6, 8); scene.add(key);
    var rim = new THREE.DirectionalLight(0xffffff, 1.2); rim.position.set(-6, 2, -5); scene.add(rim);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 0.6));

    function toShape(d) {
      var t = d.match(/[MLZ]|-?\d*\.?\d+/g), s = new THREE.Shape(), i = 0, c;
      while (i < t.length) {
        if (/[MLZ]/.test(t[i])) c = t[i++];
        if (c === 'M') { s.moveTo(parseFloat(t[i++]), -parseFloat(t[i++])); c = 'L'; }
        else if (c === 'L') { s.lineTo(parseFloat(t[i++]), -parseFloat(t[i++])); }
        else if (c === 'Z') { s.closePath(); }
      }
      return s;
    }
    var geo = new THREE.ExtrudeGeometry(PATHS.map(toShape), { depth: 64, bevelEnabled: true, bevelThickness: 16, bevelSize: 9, bevelSegments: 8, curveSegments: 40 });
    geo.center(); geo.computeVertexNormals();
    var sz = new THREE.Box3().setFromBufferAttribute(geo.attributes.position).getSize(new THREE.Vector3());
    var k = 4 / Math.max(sz.x, sz.y); geo.scale(k, k, k);

    var FIN = {
      light: function () { return new THREE.MeshPhysicalMaterial({ color: 0x070708, roughness: 0.2, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 0.85 }); },
      dark: function () { return new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.08, metalness: 1, envMapIntensity: 1.4 }); }
    };
    var themeOf = function () { return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; };
    var mesh = new THREE.Mesh(geo, FIN[themeOf()]());
    var pivot = new THREE.Group(); pivot.add(mesh); scene.add(pivot);
    new MutationObserver(function () { mesh.material.dispose(); mesh.material = FIN[themeOf()](); draw(); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // arrastar para girar (rolagem vertical da página continua funcionando no celular)
    var TAU = Math.PI * 2, rotY = 0, rotX = 0, velY = 0, drag = null, hover = false, visible = true, raf = 0, last = performance.now();
    cv.style.touchAction = 'pan-y';
    cv.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, y: e.clientY }; velY = 0; cv.classList.add('drag'); cv.setPointerCapture(e.pointerId); kick(); });
    cv.addEventListener('pointermove', function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      rotY += dx * 0.008; rotX = Math.max(-1.2, Math.min(1.2, rotX + dy * 0.008)); velY = dx * 0.008; drag = { x: e.clientX, y: e.clientY };
      draw();
    });
    function end() { drag = null; cv.classList.remove('drag'); kick(); }
    cv.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch') { hover = true; kick(); } });
    cv.addEventListener('pointerleave', function () { hover = false; kick(); });
    cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);

    function resize() {
      var w = host.clientWidth, h = host.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false); camera.aspect = w / h;
      camera.position.set(0, 0, w / h < 1.2 ? 13.5 : 11.5); camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
      draw();
    }
    function draw() { pivot.rotation.set(rotX, rotY, 0); renderer.render(scene, camera); }
    function loop(t) {
      raf = 0;
      var dt = Math.min((t - last) / 1000, 0.05); last = t;
      var moving = false;
      if (!drag) {
        if (Math.abs(velY) > 0.0002) { velY *= 0.94; rotY += velY; moving = true; }
        if (hover && !reduced) { rotY += dt * (TAU / 6); moving = true; }
        else if (Math.abs(velY) < 0.002) {            // sem o mouse em cima: termina o giro e volta de frente
          var tgt = Math.round(rotY / TAU) * TAU, dY = tgt - rotY;
          if (Math.abs(dY) > 0.002) { rotY += dY * (1 - Math.exp(-dt * 6)); moving = true; } else rotY = tgt;
        }
        var back = (0 - rotX) * 0.08; if (Math.abs(back) > 0.0002) { rotX += back; moving = true; }
      } else moving = true;
      draw();
      if (moving && visible) raf = requestAnimationFrame(loop);
    }
    function kick() { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(loop); } }

    new ResizeObserver(resize).observe(host);
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible) kick(); }).observe(host);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) kick(); });
    resize(); kick();
    requestAnimationFrame(function () { host.classList.add('has3d'); });
  }

  function init() { (window.__three = window.__three || load('js/three.min.js')).then(start).catch(function () {}); }
  if (document.readyState === 'complete') (window.requestIdleCallback || setTimeout)(init);
  else addEventListener('load', function () { (window.requestIdleCallback || setTimeout)(init); });
})();
