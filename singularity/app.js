(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const chapters = window.BOOK.chapters;
  const key = 'reader-' + window.BOOK.sha256.slice(0, 12);
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch {}
  let chapter = 0, restoring = false, saveTimer;
  let size = Number(saved.size) || (innerWidth <= 600 ? 20 : 22);
  size = Math.min(32, Math.max(16, size));
  let dark = saved.dark ?? matchMedia('(prefers-color-scheme: dark)').matches;
  const positions = saved.positions && typeof saved.positions === 'object' ? saved.positions : {};
  const number = n => String(n + 1).padStart(2, '0');
  const asset = n => `assets/chapter-${number(n)}.jpg`;
  function save() {
    try { localStorage.setItem(key, JSON.stringify({ chapter, size, dark, positions })); } catch {}
  }
  function progress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const fraction = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 1;
    $('progress').style.width = `${(chapter + fraction) / chapters.length * 100}%`;
    if (!restoring) { positions[chapter] = fraction; clearTimeout(saveTimer); saveTimer = setTimeout(save, 150); }
  }
  function settings() {
    document.documentElement.style.setProperty('--size', size + 'px');
    document.body.classList.toggle('dark', dark);
    $('theme').setAttribute('aria-pressed', String(dark));
    $('smaller').disabled = size <= 16;
    $('larger').disabled = size >= 32;
  }
  function closeMenu() { $('chapters').hidden = true; $('contents').setAttribute('aria-expanded', 'false'); }
  function show(n, restore = false, focus = false) {
    chapter = Math.min(chapters.length - 1, Math.max(0, n));
    restoring = true;
    $('text').textContent = chapters[chapter];
    $('illustration').src = asset(chapter);
    $('current').textContent = $('chapter-number').textContent = number(chapter);
    $('total').textContent = number(chapters.length - 1);
    $('footer-number').textContent = `${number(chapter)} / ${number(chapters.length - 1)}`;
    $('previous').disabled = chapter === 0;
    $('next').disabled = chapter === chapters.length - 1;
    [...$('chapters').children].forEach((button, i) => {
      if (i === chapter) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    closeMenu();
    history.replaceState(null, '', `#${chapter + 1}`);
    const fraction = restore ? Math.min(1, Math.max(0, Number(positions[chapter]) || 0)) : 0;
    requestAnimationFrame(() => {
      if (focus) $('text').focus({ preventScroll: true });
      scrollTo(0, fraction * Math.max(0, document.documentElement.scrollHeight - innerHeight));
      requestAnimationFrame(() => { restoring = false; progress(); save(); });
    });
  }
  chapters.forEach((_, i) => {
    const button = document.createElement('button');
    button.setAttribute('aria-label', `Глава ${i + 1}`);
    const img = document.createElement('img'); img.src = asset(i); img.alt = ''; img.loading = 'lazy';
    const label = document.createElement('span'); label.textContent = number(i);
    button.append(img, label); button.addEventListener('click', () => show(i, true, true));
    $('chapters').append(button);
  });
  $('contents').onclick = () => { const open = $('chapters').hidden; $('chapters').hidden = !open; $('contents').setAttribute('aria-expanded', String(open)); };
  $('previous').onclick = () => show(chapter - 1, false, true);
  $('next').onclick = () => show(chapter + 1, false, true);
  $('smaller').onclick = () => { size = Math.max(16, size - 2); settings(); progress(); save(); };
  $('larger').onclick = () => { size = Math.min(32, size + 2); settings(); progress(); save(); };
  $('theme').onclick = () => { dark = !dark; settings(); save(); };
  document.addEventListener('click', e => { if (!e.target.closest('#chapters, #contents')) closeMenu(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); $('contents').focus(); }
    if (e.target.closest('button') || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === 'ArrowRight' && chapter < chapters.length - 1) show(chapter + 1, false, true);
    if (e.key === 'ArrowLeft' && chapter > 0) show(chapter - 1, false, true);
  });
  addEventListener('scroll', progress, { passive: true });
  addEventListener('resize', progress);
  addEventListener('pagehide', save);
  addEventListener('hashchange', () => { const n = Number(location.hash.slice(1)); if (Number.isInteger(n) && n > 0 && n <= chapters.length) show(n - 1); });
  settings();
  const hash = Number(location.hash.slice(1));
  const initial = Number.isInteger(hash) && hash > 0 && hash <= chapters.length ? hash - 1 : (Number.isInteger(saved.chapter) ? saved.chapter : 0);
  show(initial, true);
})();
