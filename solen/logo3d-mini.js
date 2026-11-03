/* Logo 3D no cabeçalho e no rodapé (Three.js, carregado só depois da página).
 * Um único renderizador desenha todos os logos; o SVG original fica como reserva se não houver WebGL. */
(function () {
  var marks = [].slice.call(document.querySelectorAll('svg.brand-mark'));
  if (!marks.length) return;
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SHAPE = {"paths":["M296,168 L549,295 L549,165 L802,292 L802,555 L549,428 L549,545 L296,418 Z","M549,545 L802,672 L802,922 L549,795 Z"],"extrude":{"depth":64,"bevelEnabled":true,"bevelThickness":16,"bevelSize":9,"bevelSegments":8,"curveSegments":40}};
  var finishOf = function () { return document.documentElement.getAttribute('data-theme') === 'dark' ? 'chrome' : 'lacquer'; };

  function load(src) { return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  function start() {
    var THREE = window.THREE; if (!THREE) return;
    var R;
    try { R = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return; }
    var N = 160;
    R.setPixelRatio(1); R.setSize(N, N, false); R.setClearColor(0x000000, 0);
    R.outputEncoding = THREE.sRGBEncoding; R.toneMapping = THREE.ACESFilmicToneMapping; R.toneMappingExposure = 1.05; R.physicallyCorrectLights = true;

    var scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(20, 1, 0.1, 100);
    camera.position.set(0, 0, 14.5); camera.lookAt(0, 0, 0);
    var pm = new THREE.PMREMGenerator(R), env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial({ color: 0x2a2a2c, side: THREE.BackSide })));
    [[0, 6, 0, 14, 1, 14, 0xffffff], [-9, 1, 2, 1, 8, 6, 0xffffff], [9, 2, -2, 1, 6, 10, 0xd8d8d8], [0, 0, 9.5, 8, 3, 1, 0xbdbdbd], [0, -6, 0, 10, 1, 10, 0x111111]].forEach(function (a) {
      var m = new THREE.Mesh(new THREE.BoxGeometry(a[3], a[4], a[5]), new THREE.MeshBasicMaterial({ color: a[6] })); m.position.set(a[0], a[1], a[2]); env.add(m);
    });
    scene.environment = pm.fromScene(env, 0.04).texture;
    var key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(4, 6, 8); scene.add(key);
    var rim = new THREE.DirectionalLight(0xffffff, 1.2); rim.position.set(-6, 2, -5); scene.add(rim);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 0.6));

    function toShape(d) {
      var t = d.match(/[MLQCZ]|-?\d*\.?\d+/g), s = new THREE.Shape(), i = 0, c;
      var n = function () { return parseFloat(t[i++]); }, p = function () { var x = n(), y = n(); return [x, -y]; };
      while (i < t.length) {
        if (/[MLQCZ]/.test(t[i])) c = t[i++];
        if (c === 'M') { var a = p(); s.moveTo(a[0], a[1]); c = 'L'; }
        else if (c === 'L') { var l = p(); s.lineTo(l[0], l[1]); }
        else if (c === 'C') { var c1 = p(), c2 = p(), e = p(); s.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], e[0], e[1]); }
        else if (c === 'Z') { s.closePath(); }
      }
      return s;
    }
    var geo = new THREE.ExtrudeGeometry(SHAPE.paths.map(toShape), SHAPE.extrude);
    geo.center(); geo.computeVertexNormals();
    var sz = new THREE.Box3().setFromBufferAttribute(geo.attributes.position).getSize(new THREE.Vector3());
    var k = 4 / Math.max(sz.x, sz.y); geo.scale(k, k, k);
    var MAT = {
      lacquer: new THREE.MeshPhysicalMaterial({ color: 0x070708, roughness: 0.2, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 0.85 }),
      chrome: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.08, metalness: 1, envMapIntensity: 1.4 })
    };
    var mesh = new THREE.Mesh(geo, MAT.lacquer), pivot = new THREE.Group(); pivot.add(mesh); scene.add(pivot);

    var items = marks.map(function (svg, idx) {
      var r = svg.getBoundingClientRect(), css = Math.round(r.height || r.width || 26), dpr = Math.min(devicePixelRatio || 1, 2);
      var cv = document.createElement('canvas');
      cv.className = svg.getAttribute('class') + ' brand-mark-3d';
      cv.width = cv.height = Math.round(css * dpr); cv.setAttribute('role', 'img'); cv.setAttribute('aria-hidden', 'true');
      svg.parentNode.insertBefore(cv, svg);
      return { svg: svg, cv: cv, ctx: cv.getContext('2d'), host: svg.closest('a, button') || svg.parentNode, visible: true, shown: false, angle: 0, drawn: NaN, hover: false };
    });
    function drawItem(it) {
      mesh.material = MAT[finishOf(it.svg)];
      pivot.rotation.set(0, it.angle, 0);   // 0 = de frente
      R.render(scene, camera);
      it.ctx.clearRect(0, 0, it.cv.width, it.cv.height);
      it.ctx.drawImage(R.domElement, 0, 0, N, N, 0, 0, it.cv.width, it.cv.height);
      it.drawn = it.angle;
      if (!it.shown) { it.shown = true; it.svg.style.display = 'none'; }
    }
    var raf = 0, last = 0, TAU = Math.PI * 2, SPIN = TAU / 2.4;
    function frame(now) {
      raf = 0;
      var dt = Math.min((now - last) / 1000, 0.05); last = now;
      var animating = false;
      items.forEach(function (it) {
        if (it.hover) { it.angle += dt * SPIN; animating = true; }
        else if (it.angle !== 0) {                       // termina a volta e para de frente
          var tgt = Math.ceil(it.angle / TAU - 1e-4) * TAU, d = tgt - it.angle;
          if (d > 0.002) { it.angle += d * (1 - Math.exp(-dt * 7)); animating = true; }
          else it.angle = 0;
        }
        if (it.visible && it.drawn !== it.angle) drawItem(it);
      });
      if (animating) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }
    items.forEach(function (it) {
      if (reduced) return;                                // sem movimento: fica sempre de frente
      it.host.addEventListener("pointerenter", function (e) { if (e.pointerType === "touch") return; it.hover = true; kick(); });
      it.host.addEventListener("pointerleave", function () { it.hover = false; kick(); });
      it.host.addEventListener("touchstart", function () { it.hover = true; kick(); clearTimeout(it.tt); it.tt = setTimeout(function () { it.hover = false; kick(); }, 900); }, { passive: true });
    });
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { items.forEach(function (it) { if (it.cv === e.target) { it.visible = e.isIntersecting; if (it.visible) it.drawn = NaN; } }); }); kick(); });
    items.forEach(function (it) { io.observe(it.cv); });
    document.addEventListener('visibilitychange', function () { if (!document.hidden) kick(); });
    new MutationObserver(function () { items.forEach(function (it) { it.drawn = NaN; }); kick(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    kick();
  }
  function init() { (window.__three = window.__three || load('js/three.min.js')).then(start).catch(function () {}); }
  if (document.readyState === 'complete') (window.requestIdleCallback || setTimeout)(init);
  else addEventListener('load', function () { (window.requestIdleCallback || setTimeout)(init); });
})();
