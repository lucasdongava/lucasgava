/* scroll suave (Lenis, mesmos parametros do Nuwa) */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !window.Lenis) return;
  var lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, smoothWheel: true });
  function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    var target = id === '#topo' || id === '#top' ? 0 : document.querySelector(id);
    if (target === null) return;
    e.preventDefault();
    lenis.scrollTo(target);
  });
})();
