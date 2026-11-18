(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var OUT = 'cubic-bezier(.16,1,.3,1)';

  /* ---------- scroll suave (Lenis, mesmos parametros do Nuwa) ---------- */
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, smoothWheel: true });
    var lraf = function (t) { lenis.raf(t); requestAnimationFrame(lraf); };
    requestAnimationFrame(lraf);
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href');
      var el = id === '#top' ? 0 : document.querySelector(id);
      if (el === null) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -72 });
    });
  }

  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function fmt(ms) {
    var t = Math.floor(ms / 100);
    var tenth = t % 10, s = Math.floor(t / 10) % 60, m = Math.floor(t / 600);
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s + '.' + tenth;
  }
  function swapIn(el, text) {
    el.textContent = text;
    if (reduce || !el.animate) return;
    el.animate(
      [{ opacity: 0, transform: 'translateY(8px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'none', filter: 'none' }],
      { duration: 420, easing: OUT }
    );
  }

  /* roda um ciclo em loop enquanto o elemento esta visivel */
  function autoplay(el, cycle) {
    var inView = false, running = false;
    function go() {
      if (running) return;
      running = true;
      (async function () {
        while (inView) { await cycle(function () { return inView; }); }
        running = false;
      })();
    }
    if (!('IntersectionObserver' in window)) { inView = true; go(); return; }
    new IntersectionObserver(function (en) {
      inView = en[0].isIntersecting;
      if (inView) go();
    }, { threshold: 0.35 }).observe(el);
  }

  /* ---------- relogio compartilhado por instancia ---------- */
  function Clock(onTick) {
    var elapsed = 0, startedAt = 0, timer = null;
    return {
      get running() { return !!timer; },
      get ms() { return elapsed + (timer ? Date.now() - startedAt : 0); },
      start: function () { if (timer) return; startedAt = Date.now(); timer = setInterval(onTick, 100); onTick(); },
      pause: function () { if (!timer) return; elapsed += Date.now() - startedAt; clearInterval(timer); timer = null; onTick(); },
      reset: function () { if (timer) { clearInterval(timer); timer = null; } elapsed = 0; onTick(); }
    };
  }

  /* ---------- HERO: a ilha se abre e se usa sozinha ---------- */
  var island = document.getElementById('island');
  var pill = document.getElementById('pill');
  var timeEl = document.getElementById('time');
  var timePill = document.getElementById('timePill');
  var toggle = document.getElementById('toggle');
  var note = document.getElementById('note');

  var hero = Clock(function () {
    var f = fmt(hero ? hero.ms : 0);
    timeEl.textContent = f;
    timePill.textContent = f;
  });
  function setOpen(open) {
    island.setAttribute('data-open', open);
    pill.setAttribute('aria-expanded', open);
  }
  function heroRun() { hero.start(); island.classList.add('running'); toggle.textContent = 'Pause'; }
  function heroPause() { hero.pause(); island.classList.remove('running'); toggle.textContent = 'Start'; }
  function heroReset() { hero.reset(); island.classList.remove('running'); toggle.textContent = 'Start'; note.value = ''; }
  function press(btn) {
    btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(.92)' }, { transform: 'scale(1)' }], { duration: 260, easing: OUT });
  }
  async function type(el, text, alive) {
    for (var i = 1; i <= text.length; i++) {
      if (!alive()) return;
      el.value = text.slice(0, i);
      await sleep(55 + Math.random() * 45);
    }
  }

  if (reduce) {
    setOpen(true);
    note.value = 'Call with Ana - scope';
  } else {
    autoplay(document.querySelector('.stage'), async function (alive) {
      heroReset(); setOpen(false);
      await sleep(1100); if (!alive()) return;
      setOpen(true);
      await sleep(1100); if (!alive()) return;
      press(toggle); heroRun();
      await sleep(700); if (!alive()) return;
      await type(note, 'Call with Ana - scope', alive);
      await sleep(900); if (!alive()) return;
      setOpen(false);                       /* fecha com o cronometro rodando */
      await sleep(3600); if (!alive()) return;
      setOpen(true);
      await sleep(1000); if (!alive()) return;
      press(toggle); heroPause();
      await sleep(1700); if (!alive()) return;
      setOpen(false);
      await sleep(2200);
    });
  }

  /* ---------- entrada ao rolar ---------- */
  var targets = document.querySelectorAll('.feature .copy, .feature .visual, .cta h2, .cta .btn, .cta .req');
  Array.prototype.forEach.call(targets, function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add('in'); });
  }

  /* ---------- CARD 1: atalho Option + Space aperta sozinho ---------- */
  var keysCard = document.getElementById('keysCard');
  var klabel = document.getElementById('klabel');
  var kOpt = document.getElementById('kOpt');
  var kSpace = document.getElementById('kSpace');
  var ping = document.getElementById('ping');

  var kclock = Clock(function () {
    klabel.textContent = kclock.running ? fmt(kclock.ms) : (kclock.ms ? 'Paused  ' + fmt(kclock.ms) : '00:00.0');
  });
  async function shortcut() {
    kOpt.classList.add('down'); kSpace.classList.add('down');
    if (ping.animate) {
      ping.animate([{ opacity: 0.55, transform: 'scale(.94)' }, { opacity: 0, transform: 'scale(1.16)' }], { duration: 650, easing: OUT });
    }
    await sleep(140);
    kOpt.classList.remove('down'); kSpace.classList.remove('down');
    if (kclock.running) { kclock.pause(); keysCard.classList.remove('running'); }
    else { kclock.start(); keysCard.classList.add('running'); }
    swapIn(klabel, klabel.textContent);
  }
  if (!reduce) {
    autoplay(keysCard, async function (alive) {
      kclock.reset(); keysCard.classList.remove('running');
      await sleep(1400); if (!alive()) return;
      await shortcut();
      await sleep(3600); if (!alive()) return;
      await shortcut();
      await sleep(2000); if (!alive()) return;
      await shortcut();
      await sleep(2600); if (!alive()) return;
      await shortcut();
      await sleep(2400);
    });
  }

  /* ---------- CARD 2: as sessoes sao selecionadas em sequencia ---------- */
  var sessions = document.getElementById('sessions');
  var sel = document.getElementById('sel');
  var rows = Array.prototype.slice.call(sessions.querySelectorAll('.row'));
  var active = null, tick = null;

  function hms(sec) {
    var h = Math.floor(sec / 3600), m = Math.floor(sec / 60) % 60, s = sec % 60;
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  function moveSel(row) {
    var first = !sel.classList.contains('on');
    if (first) sel.style.transition = 'none';   /* primeira posicao sem deslizar do topo */
    sel.style.height = row.offsetHeight + 'px';
    sel.style.transform = 'translateY(' + row.offsetTop + 'px)';
    if (first) {
      void sel.offsetWidth;
      sel.style.transition = '';
    }
    sel.classList.add('on');
  }
  function deselect() {
    if (!active) return;
    clearInterval(tick);
    active.classList.remove('active');
    active = null;
  }
  function select(row) {
    deselect();
    active = row;
    row.classList.add('active');
    moveSel(row);
    var t = row.querySelector('time');
    var base = parseInt(row.getAttribute('data-base'), 10);
    var t0 = Date.now();
    tick = setInterval(function () {
      var sec = base + Math.floor((Date.now() - t0) / 1000);
      t.textContent = hms(sec);
      row.setAttribute('data-base-live', sec);
    }, 250);
    /* guarda o progresso quando sair da linha */
    row._save = function () {
      var live = parseInt(row.getAttribute('data-base-live'), 10);
      if (live) row.setAttribute('data-base', live);
    };
  }
  rows.forEach(function (row) {
    var p = row.querySelector('time').textContent.split(':');
    row.setAttribute('data-base', (+p[0]) * 3600 + (+p[1]) * 60 + (+p[2]));
  });
  var prevSelect = select;
  select = function (row) { if (active && active._save) active._save(); prevSelect(row); };
  window.addEventListener('resize', function () { if (active) moveSel(active); });

  if (reduce) {
    select(rows[0]);
  } else {
    autoplay(sessions, async function (alive) {
      for (var i = 0; i < rows.length; i++) {
        await sleep(i === 0 ? 1600 : 3200); if (!alive()) return;
        select(rows[i]);
      }
      await sleep(2800);
    });
  }

  /* ---------- CARD: projetos em pastas ---------- */
  var projectsEl = document.getElementById('projects');
  var pbody = document.getElementById('pbody');
  var ptitle = document.getElementById('ptitle');
  var plist = document.getElementById('plist');
  var ptot = document.getElementById('ptot');
  var folders = Array.prototype.slice.call(projectsEl.querySelectorAll('.folder'));
  var PROJECTS = [
    { name: 'Acme Studio', total: '04:15', items: [['Homepage review', '01:20'], ['Brand call', '00:45'], ['Moodboard', '02:10']] },
    { name: 'Nova Legal', total: '03:45', items: [['Contract draft', '02:05'], ['Client email', '00:20'], ['Research', '01:20']] },
    { name: 'Personal', total: '01:25', items: [['Reading', '00:50'], ['Invoices', '00:35']] }
  ];
  var curProject = 0;
  function renderProject(i) {
    var p = PROJECTS[i];
    ptitle.textContent = p.name;
    ptot.textContent = p.total;
    plist.innerHTML = p.items.map(function (it) {
      return '<li><span>' + it[0] + '</span><time>' + it[1] + '</time></li>';
    }).join('');
  }
  async function showProject(i) {
    if (i === curProject) return;
    curProject = i;
    folders.forEach(function (f, k) { f.classList.toggle('active', k === i); });
    if (reduce || !pbody.animate) { renderProject(i); return; }
    await pbody.animate([{ opacity: 1, transform: 'none', filter: 'none' }, { opacity: 0, transform: 'translateY(6px)', filter: 'blur(4px)' }],
      { duration: 220, easing: 'ease-in', fill: 'forwards' }).finished;
    renderProject(i);
    pbody.animate([{ opacity: 0, transform: 'translateY(-6px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'none', filter: 'none' }],
      { duration: 520, easing: OUT, fill: 'forwards' });
  }
  renderProject(0);
  if (!reduce) {
    autoplay(projectsEl, async function (alive) {
      for (var i = 0; i < PROJECTS.length; i++) {
        await sleep(i === 0 ? 1800 : 3200); if (!alive()) return;
        await showProject(i);
      }
      await sleep(3000);
    });
  }

  /* ---------- CARD: calendario sugere a partir da nota ---------- */
  var ctext = document.getElementById('ctext');
  var cmark = document.getElementById('cmark');
  var calask = document.getElementById('calask');
  var cbAdd = document.getElementById('cbAdd');
  async function typeInto(el, text, alive) {
    for (var i = 1; i <= text.length; i++) {
      if (!alive()) return;
      el.textContent = text.slice(0, i);
      await sleep(55 + Math.random() * 45);
    }
  }
  if (reduce) {
    ctext.textContent = 'Meeting with Ana ';
    cmark.textContent = 'at 3pm';
    cmark.classList.add('hit');
    calask.classList.add('show');
  } else {
    autoplay(calask.parentNode, async function (alive) {
      ctext.textContent = ''; cmark.textContent = ''; cmark.classList.remove('hit');
      calask.classList.remove('show', 'done');
      await sleep(1200); if (!alive()) return;
      await typeInto(ctext, 'Meeting with Ana ', alive); if (!alive()) return;
      await typeInto(cmark, 'at 3pm', alive); if (!alive()) return;
      await sleep(450); if (!alive()) return;
      cmark.classList.add('hit');
      await sleep(800); if (!alive()) return;
      calask.classList.add('show');
      await sleep(2300); if (!alive()) return;
      cbAdd.animate([{ transform: 'scale(1)' }, { transform: 'scale(.9)' }, { transform: 'scale(1)' }], { duration: 280, easing: OUT });
      await sleep(320);
      calask.classList.add('done');
      await sleep(3800);
    });
  }

  /* ---------- CARD 3: o cadeado barra os dados sozinho ---------- */
  var lockCard = document.getElementById('lockCard');
  var lockwrap = document.getElementById('lockwrap');
  var shield = document.getElementById('shield');

  function sendPackets() {
    [-58, 0, 58].forEach(function (dx, i) {
      var p = document.createElement('span');
      p.className = 'pkt';
      lockwrap.appendChild(p);
      var a = p.animate([
        { transform: 'translate(0,0) scale(.5)', opacity: 0, offset: 0 },
        { transform: 'translate(' + dx * 0.55 + 'px,-52px) scale(1)', opacity: 1, offset: 0.35 },
        { transform: 'translate(' + dx + 'px,-92px) scale(1.25)', opacity: 1, offset: 0.55 },
        { transform: 'translate(' + dx * 0.35 + 'px,-30px) scale(.4)', opacity: 0, offset: 1 }
      ], { duration: 900, delay: i * 90, easing: 'cubic-bezier(.4,0,.3,1)', fill: 'both' });
      a.onfinish = function () { p.remove(); };
    });
  }
  function flashShield() {
    shield.animate([
      { opacity: 0, transform: 'scale(.82)', offset: 0 },
      { opacity: 0, transform: 'scale(.9)', offset: 0.45 },
      { opacity: 0.9, transform: 'scale(1)', offset: 0.6 },
      { opacity: 0, transform: 'scale(1.12)', offset: 1 }
    ], { duration: 1000, easing: OUT });
  }
  if (!reduce) {
    autoplay(lockCard, async function (alive) {
      await sleep(1200); if (!alive()) return;
      sendPackets(); flashShield();
      lockwrap.classList.add('hit');
      await sleep(520);
      lockwrap.classList.remove('hit');
      await sleep(2400);
    });
  }
})();
