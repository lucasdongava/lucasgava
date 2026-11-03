/* Menu: "pill" compartilhado que desliza entre os itens (mola), segue o cursor e inclina em perspectiva.
 * Mesmo comportamento da lista de projetos de raphaelsalaja.com. Só em dispositivos com mouse e sem "reduzir movimento". */
(function () {
  var nav = document.querySelector('.links');
  if (!nav || !matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var items = [].slice.call(nav.querySelectorAll('a'));
  if (!items.length) return;

  nav.classList.add('sp');
  var stage = document.createElement('div');
  stage.className = 'sp-stage';
  stage.setAttribute('aria-hidden', 'true');
  var pill = document.createElement('span');
  pill.className = 'sp-pill';
  stage.appendChild(pill);
  nav.insertBefore(stage, nav.firstChild);

  // mola no estilo "duration + bounce": rigidez = (2π/duração)², amortecimento = 2·(1-bounce)·ω
  function cfg(duration, bounce) { var w = 2 * Math.PI / duration; return { k: w * w, c: 2 * (1 - bounce) * w }; }
  var POS = cfg(0.72, 0.22), OFF = cfg(0.6, 0.15), ROT = cfg(0.45, 0.06), CONTENT = cfg(0.6, 0);
  function sp(c, v) { return { c: c, x: v || 0, v: 0, t: v || 0 }; }

  var S = { left: sp(POS), top: sp(POS), w: sp(POS), h: sp(POS), x: sp(OFF), y: sp(OFF), rx: sp(ROT), ry: sp(ROT) };
  var content = new Map();
  items.forEach(function (a) { content.set(a, { x: sp(CONTENT), y: sp(CONTENT) }); });
  var origin = { x: 50, y: 50 };
  var cur = null, visible = false, timer = 0, raf = 0, last = 0;

  var clamp = function (v) { return Math.min(1, Math.max(-1, v)); };
  var ease = function (e) { return Math.sign(e) * (1 - Math.sqrt(1 - Math.abs(e))); };

  function step(s, dt) { var a = -s.c.k * (s.x - s.t) - s.c.c * s.v; s.v += a * dt; s.x += s.v * dt; }
  function settled(s) { return Math.abs(s.x - s.t) < 0.01 && Math.abs(s.v) < 0.01; }
  function allSprings() {
    var all = [S.left, S.top, S.w, S.h, S.x, S.y, S.rx, S.ry];
    content.forEach(function (c) { all.push(c.x, c.y); });
    return all;
  }
  function paint() {
    pill.style.left = S.left.x + 'px';
    pill.style.top = S.top.x + 'px';
    pill.style.width = Math.max(0, S.w.x) + 'px';
    pill.style.height = Math.max(0, S.h.x) + 'px';
    pill.style.transformOrigin = origin.x + '% ' + origin.y + '%';
    pill.style.transform = 'translate3d(' + S.x.x + 'px,' + S.y.x + 'px,0) rotateX(' + S.rx.x + 'deg) rotateY(' + S.ry.x + 'deg)';
    content.forEach(function (c, a) { a.style.translate = c.x.x.toFixed(2) + 'px ' + c.y.x.toFixed(2) + 'px'; });
  }
  function frame(now) {
    var dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    var n = Math.max(1, Math.ceil(dt / 0.004)), h = dt / n, all = allSprings(), rest = true;
    all.forEach(function (s) {
      for (var i = 0; i < n; i++) step(s, h);
      if (!settled(s)) rest = false;
    });
    if (rest) all.forEach(function (s) { s.x = s.t; s.v = 0; });
    paint();
    raf = rest ? 0 : requestAnimationFrame(frame);
  }
  function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  function place(a, instant) {
    S.left.t = a.offsetLeft; S.top.t = a.offsetTop; S.w.t = a.offsetWidth; S.h.t = a.offsetHeight;
    if (instant) [S.left, S.top, S.w, S.h].forEach(function (s) { s.x = s.t; s.v = 0; });
  }
  function resetTilt() {
    S.x.t = 0; S.y.t = 0; S.rx.t = 0; S.ry.t = 0; origin.x = 50; origin.y = 50;
    content.forEach(function (c) { c.x.t = 0; c.y.t = 0; });
  }
  function enter(a) {
    clearTimeout(timer);
    var instant = !visible;           // pill escondido: aparece direto no item, sem viajar da posição antiga
    cur = a; visible = true;
    place(a, instant);
    content.forEach(function (c, el) { if (el !== a) { c.x.t = 0; c.y.t = 0; } });
    pill.style.opacity = 1;
    paint(); kick();
  }
  function leave() {
    clearTimeout(timer);
    timer = setTimeout(function () { visible = false; cur = null; pill.style.opacity = 0; resetTilt(); kick(); }, 500);
  }

  items.forEach(function (a) {
    a.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch') enter(a); });
    a.addEventListener('pointerleave', function (e) { if (e.pointerType !== 'touch') leave(); });
    a.addEventListener('focus', function () { if (a.matches(':focus-visible')) enter(a); });
    a.addEventListener('blur', leave);
  });
  nav.addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch' || !cur) return;
    var r = cur.getBoundingClientRect();
    var px = clamp((e.clientX - r.left) / r.width * 2 - 1), py = clamp((e.clientY - r.top) / r.height * 2 - 1);
    var aspect = Math.max(1, r.width / r.height);
    S.x.t = 12 * ease(px); S.y.t = 8 * ease(py);
    S.rx.t = -py * Math.min(1.6, 0.7 + 0.18 * aspect); S.ry.t = 0.8 * px;
    origin.x = 30 + 20 * (px + 1); origin.y = 30 + 20 * (py + 1);
    var c = content.get(cur); c.x.t = 0.18 * S.x.t; c.y.t = 0.18 * S.y.t;
    kick();
  });
  nav.addEventListener('pointerleave', function () { S.x.t = 0; S.y.t = 0; S.rx.t = 0; S.ry.t = 0; origin.x = 50; origin.y = 50; content.forEach(function (c) { c.x.t = 0; c.y.t = 0; }); kick(); });
  addEventListener('resize', function () { if (cur) { place(cur, true); paint(); } });
})();
