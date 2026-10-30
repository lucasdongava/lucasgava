// url limpa: /works.html -> /works, /index.html -> /
try {
  var p = location.pathname;
  var clean = p.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (clean !== p) history.replaceState(null, "", clean + location.search + location.hash);
} catch (e) {}

(function () {
  var sel = document.querySelector("select.lang-select");
  if (!sel) return;
  var wrap = sel.parentNode;
  wrap.classList.add("ls", "ls-corner");
  document.body.appendChild(wrap);
  sel.setAttribute("tabindex", "-1");
  sel.setAttribute("aria-hidden", "true");

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "ls-btn";
  btn.setAttribute("aria-haspopup", "listbox");
  btn.setAttribute("aria-label", "language");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = '<svg class="ls-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3z"/></svg><span class="ls-label"></span>';

  var menu = document.createElement("ul");
  menu.className = "ls-menu";
  menu.setAttribute("role", "listbox");

  Array.prototype.forEach.call(sel.options, function (o) {
    var li = document.createElement("li");
    li.setAttribute("role", "option");
    li.setAttribute("data-value", o.value);
    li.tabIndex = -1;
    li.innerHTML = '<span>' + o.textContent + '</span><svg class="ls-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 10 17.5 19 7"/></svg>';
    menu.appendChild(li);
  });

  wrap.appendChild(btn);
  wrap.appendChild(menu);

  var label = btn.querySelector(".ls-label");
  function sync() {
    var o = sel.options[sel.selectedIndex];
    label.textContent = o ? o.textContent : "";
    Array.prototype.forEach.call(menu.children, function (li) {
      li.setAttribute("aria-selected", li.getAttribute("data-value") === sel.value ? "true" : "false");
    });
  }
  function open() { wrap.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
  function close() { wrap.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  function pick(v) {
    close();
    if (sel.value !== v) {
      sel.value = v;
      sel.dispatchEvent(new Event("change", { bubbles: true }));
    }
    sync();
    btn.focus();
  }

  btn.addEventListener("click", function () { wrap.classList.contains("open") ? close() : open(); });
  menu.addEventListener("click", function (e) {
    var li = e.target.closest("li");
    if (li) pick(li.getAttribute("data-value"));
  });
  document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) close(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { close(); btn.blur(); }
    if (!wrap.contains(document.activeElement)) return;
    var items = Array.prototype.slice.call(menu.children);
    var i = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); open(); (items[i + 1] || items[0]).focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); open(); (items[i - 1] || items[items.length - 1]).focus(); }
    if ((e.key === "Enter" || e.key === " ") && i > -1) { e.preventDefault(); pick(document.activeElement.getAttribute("data-value")); }
  });
  sel.addEventListener("change", sync);
  document.addEventListener("DOMContentLoaded", sync);
  sync();
})();