/* Botão de tema (claro/escuro) ao lado do seletor de idioma. A escolha fica salva no navegador. */
(function () {
  var root = document.documentElement;
  // círculo vazado = modo claro; círculo cheio = modo escuro
  var RING = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  var DISC = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="currentColor" stroke="currentColor" stroke-width="1.6"/></svg>';

  var wrap = document.createElement('div');
  wrap.className = 'theme-corner';
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'ls-btn theme-btn';
  wrap.appendChild(btn);
  document.body.appendChild(wrap);

  function current() { return root.dataset.theme === 'dark' ? 'dark' : 'light'; }
  function paint() {
    var dark = current() === 'dark';
    btn.innerHTML = dark ? DISC : RING;
    btn.setAttribute('aria-label', dark ? 'switch to light mode' : 'switch to dark mode');
    btn.setAttribute('aria-pressed', String(dark));
  }
  function set(t) {
    var apply = function () { root.dataset.theme = t; paint(); };
    try { localStorage.setItem('theme', t); } catch (e) {}
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(apply); else apply();
  }
  btn.addEventListener('click', function () { set(current() === 'dark' ? 'light' : 'dark'); });
  paint();
})();
