/* Menu: "pill" compartilhado que desliza entre os itens (mola sem quique), no estilo da lista de raphaelsalaja.com.
 * Só em dispositivos com mouse e sem "reduzir movimento". */
(function () {
  var nav = document.querySelector('.links');
  if (!nav || !matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var items = [].slice.call(nav.querySelectorAll('a'));
  if (!items.length) return;

  nav.classList.add('sp');
  var pill = document.createElement('span');
  pill.className = 'sp-pill';
  pill.setAttribute('aria-hidden', 'true');
  nav.insertBefore(pill, nav.firstChild);

  // mola criticamente amortecida (sem quique): rigidez = (2π/duração)², amortecimento = 2ω
  var w0 = 2 * Math.PI / 0.5, K = w0 * w0, C = 2 * w0;
  function sp() { return { x: 0, v: 0, t: 0 }; }
  var S = { left: sp(), top: sp(), w: sp(), h: sp() };
  var all = [S.left, S.top, S.w, S.h];
  var visible = false, timer = 0, raf = 0, last = 0;

  function step(s, dt) { var a = -K * (s.x - s.t) - C * s.v; s.v += a * dt; s.x += s.v * dt; }
  function settled(s) { return Math.abs(s.x - s.t) < 0.01 && Math.abs(s.v) < 0.01; }
  function paint() {
    pill.style.left = S.left.x + 'px';
    pill.style.top = S.top.x + 'px';
    pill.style.width = Math.max(0, S.w.x) + 'px';
    pill.style.height = Math.max(0, S.h.x) + 'px';
  }
  function frame(now) {
    var dt = Math.min(Math.max((now - last) / 1000, 0), 0.05);
    last = now;
    var n = Math.max(1, Math.ceil(dt / 0.004)), h = dt / n, rest = true;
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
    if (instant) all.forEach(function (s) { s.x = s.t; s.v = 0; });
  }
  function enter(a) {
    clearTimeout(timer);
    place(a, !visible);          // pill escondido: aparece direto no item, sem viajar da posição antiga
    visible = true;
    pill.style.opacity = 1;
    paint(); kick();
  }
  function leave() {
    clearTimeout(timer);
    timer = setTimeout(function () { visible = false; pill.style.opacity = 0; }, 500);
  }

  var current = null;
  items.forEach(function (a) {
    a.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch') { current = a; enter(a); } });
    a.addEventListener('pointerleave', function (e) { if (e.pointerType !== 'touch') leave(); });
    a.addEventListener('focus', function () { if (a.matches(':focus-visible')) { current = a; enter(a); } });
    a.addEventListener('blur', leave);
  });
  addEventListener('resize', function () { if (current && visible) { place(current, true); paint(); } });
})();
