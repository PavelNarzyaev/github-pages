(() => {
  'use strict';
  const key = 'free-write-reader-v1';
  const root = document.documentElement;
  const article = document.querySelector('#text');
  const paragraphs = [...article.querySelectorAll('p')];
  const theme = document.querySelector('#theme');
  const font = document.querySelector('#font');
  const smaller = document.querySelector('#smaller');
  const larger = document.querySelector('#larger');
  const resume = document.querySelector('#resume');
  const defaults = { theme: 'auto', size: 21, font: 'serif' };
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch { /* Storage is optional. */ }
  if (!saved || typeof saved !== 'object') saved = {};
  const settings = {
    theme: ['auto', 'light', 'sepia', 'dark'].includes(saved.theme) ? saved.theme : defaults.theme,
    size: Number.isFinite(saved.size) ? Math.max(17, Math.min(29, saved.size)) : defaults.size,
    font: saved.font === 'sans' ? 'sans' : 'serif'
  };
  let position = saved.position;
  const validPosition = (p) => p && Number.isInteger(p.index) && p.index >= 0 && p.index < paragraphs.length && Number.isFinite(p.fraction) && p.fraction >= 0 && p.fraction <= 1;
  if (!validPosition(position)) position = null;
  const initialPosition = position;
  function persist() {
    try { localStorage.setItem(key, JSON.stringify({ ...settings, position })); } catch { /* Reading also works without storage. */ }
  }
  function applySettings() {
    root.dataset.theme = settings.theme;
    root.style.setProperty('--font-size', `${settings.size}px`);
    root.style.setProperty('--reading-font', settings.font === 'sans' ? "system-ui, -apple-system, 'Segoe UI', sans-serif" : "Georgia, 'Times New Roman', serif");
    theme.value = settings.theme;
    font.value = settings.font;
    document.querySelector('#font-size').textContent = `${settings.size} px`;
    smaller.disabled = settings.size <= 17;
    larger.disabled = settings.size >= 29;
    updateProgress();
  }
  function updateProgress() {
    const rect = article.getBoundingClientRect();
    const total = Math.max(1, rect.height - window.innerHeight + 30);
    const progress = Math.max(0, Math.min(1, (30 - rect.top) / total));
    document.querySelector('#progress-bar').style.transform = `scaleX(${progress})`;
  }
  function rememberPosition() {
    if (article.getBoundingClientRect().top > 30) return;
    let index = paragraphs.findIndex(p => p.getBoundingClientRect().bottom > 30);
    if (index < 0) index = paragraphs.length - 1;
    const rect = paragraphs[index].getBoundingClientRect();
    position = { index, fraction: Math.max(0, Math.min(1, (30 - rect.top) / rect.height)) };
    persist();
  }
  // Preserve the visible passage when changing typography.
  function changeSettings(change) {
    const index = paragraphs.findIndex(p => p.getBoundingClientRect().bottom > 30);
    const paragraph = paragraphs[index];
    const before = paragraph?.getBoundingClientRect();
    const reading = article.getBoundingClientRect().top < 30 && before;
    const fraction = reading ? (30 - before.top) / before.height : 0;
    change();
    applySettings();
    if (reading) {
      const after = paragraph.getBoundingClientRect();
      window.scrollBy(0, after.top + fraction * after.height - 30);
    }
    persist();
  }
  theme.addEventListener('change', () => changeSettings(() => { settings.theme = theme.value; }));
  font.addEventListener('change', () => changeSettings(() => { settings.font = font.value; }));
  smaller.addEventListener('click', () => changeSettings(() => { settings.size = Math.max(17, settings.size - 2); }));
  larger.addEventListener('click', () => changeSettings(() => { settings.size = Math.min(29, settings.size + 2); }));
  document.querySelector('#reset').addEventListener('click', () => changeSettings(() => Object.assign(settings, defaults)));
  document.querySelector('#settings').hidden = false;
  if (initialPosition && (initialPosition.index > 0 || initialPosition.fraction > .1) && !location.hash) resume.hidden = false;
  document.querySelector('#resume-button').addEventListener('click', () => {
    if (!initialPosition) return;
    const paragraph = paragraphs[initialPosition.index];
    const rect = paragraph.getBoundingClientRect();
    resume.hidden = true;
    const updated = paragraph.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + updated.top + rect.height * initialPosition.fraction - 30);
    paragraph.setAttribute('tabindex', '-1');
    paragraph.focus({ preventScroll: true });
    updateProgress();
  });
  const words = article.textContent.trim().split(/\s+/u).length;
  document.querySelector('#reading-time').textContent = `≈ ${Math.ceil(words / 180)} мин чтения`;
  let frame = null;
  let saveTimer;
  window.addEventListener('scroll', () => {
    if (!frame) frame = requestAnimationFrame(() => { updateProgress(); frame = null; });
    clearTimeout(saveTimer);
    saveTimer = setTimeout(rememberPosition, 250);
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  window.addEventListener('pagehide', rememberPosition);
  document.addEventListener('visibilitychange', () => { if (document.hidden) rememberPosition(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') document.querySelector('#settings').open = false; });
  document.addEventListener('click', event => { const panel = document.querySelector('#settings'); if (!panel.contains(event.target)) panel.open = false; });
  applySettings();
})();
