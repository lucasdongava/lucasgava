/* Botão de tema (claro/escuro) ao lado do seletor de idioma. A escolha fica salva no navegador. */
(function () {
  var root = document.documentElement;
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';

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
    btn.innerHTML = dark ? SUN : MOON;          // mostra o ícone do modo para o qual vai mudar
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
