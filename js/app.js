import { icon } from './icons.js';
import steps from './steps/index.js';

const $ = (id) => document.getElementById(id);
const toc = $('toc');
const stage = $('stage');
const progressN = $('progressN');
const progressBar = $('progressBar');

if (!toc || !stage || !progressN || !progressBar) {
  throw new Error('Не найдены ключевые элементы интерфейса (toc/stage/progress).');
}

// Storage helpers
const STEP_KEY = 've_demo_step';
const READ_KEY = 've_demo_readSteps';
const getReadSet = () => {
  try { return new Set(JSON.parse(localStorage.getItem(READ_KEY) || '[]')); }
  catch { return new Set(); }
};
const setReadSet = (set) => {
  try { localStorage.setItem(READ_KEY, JSON.stringify(Array.from(set))); } catch {}
};
const isStepRead = (i) => getReadSet().has(i);
const markStepRead = (i) => {
  const s = getReadSet();
  if (!s.has(i)) {
    s.add(i);
    setReadSet(s);
    updateReadBadges();
  }
};

// Build menu
steps.forEach((s, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.dataset.index = i;
  b.setAttribute('data-testid', 'toc-item-' + i);
  b.innerHTML = `<span class="icon">${icon(s.icon)}</span><span class="text">${s.title}</span>`;
  b.addEventListener('click', () => gotoStep(i));
  toc.appendChild(b);
});

function updateReadBadges() {
  const rs = getReadSet();
  Array.from(toc.children).forEach((el, i) => {
    el.setAttribute('data-read', rs.has(i) ? '1' : '0');
  });
}

function updateProgress(val) {
  val = Math.max(0, Math.min(100, Number(val) || 0));
  progressN.textContent = val + '%';
  progressBar.style.width = val + '%';
}

function updateNextDisabled(index) {
  const next = $('nextBtn');
  if (!next) return;
  const last = index === steps.length - 1;
  next.disabled = !isStepRead(index) && !last;
}

// Render
function renderStep(index) {
  const s = steps[index];
  document.title = `${s.title} — Vysotsky Estate`;

  stage.innerHTML = `
    <div id="content">${s.html}</div>
    <div class="hint" id="guardHint" hidden>Прокрутите страницу до конца шага, чтобы активировать «Продолжить».</div>
    <div class="nav">
      <div class="bar">
        ${
          index === 0
          ? `<button class="btn primary" id="nextBtn" data-testid="next" style="flex:1">Продолжить</button>`
          : `<button class="btn ghost" id="prevBtn" data-testid="prev">Назад</button>
             <button class="btn primary" id="nextBtn" data-testid="next">Продолжить</button>`
        }
      </div>
    </div>
  `;

  const prev = $('prevBtn');
  const next = $('nextBtn');
  if (prev) prev.onclick = () => gotoStep(index - 1);
  if (next) next.onclick = () => gotoStep(index + 1);
  if (prev) prev.disabled = index === 0;

  // Scroll-guard
  const nav = stage.querySelector('.nav');
  const sentinel = document.createElement('div');
  sentinel.id = 'sentinel';
  sentinel.style.height = '1px';
  nav.parentNode.insertBefore(sentinel, nav);

  const guardHint = $('guardHint');
  if (!isStepRead(index)) guardHint.hidden = false;

  function unlock() {
    markStepRead(index);
    guardHint.hidden = true;
    updateNextDisabled(index);
    if (observer) observer.disconnect();
    window.removeEventListener('scroll', onScroll, { passive: true });
  }
  const onScroll = () => {
    const r = sentinel.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top <= vh) unlock();
  };
  let observer = null;
  try {
    observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) unlock();
    }, { threshold: 0.6 });
    observer.observe(sentinel);
  } catch {}

  window.addEventListener('scroll', onScroll, { passive: true });

  // UI sync
  updateProgress(Math.round(((index + 1) / steps.length) * 100));
  Array.from(toc.children).forEach((el, i) => {
    el.setAttribute('aria-current', i === index ? 'step' : 'false');
  });
  updateReadBadges();
  updateNextDisabled(index);

  // URL & storage
  const url = new URL(location.href);
  url.searchParams.set('step', String(index + 1));
  history.replaceState(null, '', url);
  try { localStorage.setItem(STEP_KEY, String(index)); } catch {}
}

function gotoStep(i) {
  if (i < 0) i = 0;
  if (i >= steps.length) i = steps.length - 1;
  current = i;
  renderStep(i);
}

// Init
let current = 0;
const qs = new URLSearchParams(location.search);
const qsStep = parseInt(qs.get('step') || '1', 10);
const saved = parseInt(localStorage.getItem(STEP_KEY) || '0', 10);
if (!isNaN(qsStep) && qsStep >= 1 && qsStep <= steps.length) current = qsStep - 1;
else if (!isNaN(saved) && saved >= 0 && saved < steps.length) current = saved;
renderStep(current);

// Cross-tab sync
window.addEventListener('storage', (e) => {
  if (e.key === STEP_KEY && e.newValue != null) {
    const idx = parseInt(e.newValue, 10);
    if (!isNaN(idx) && idx !== current) {
      current = idx;
      renderStep(current);
    }
  }
  if (e.key === READ_KEY && e.newValue != null) {
    updateReadBadges();
    updateNextDisabled(current);
  }
});

// Dev helpers/tests (optional)
window.__dev_markRead = function() {
  markStepRead(current);
  updateReadBadges();
  updateNextDisabled(current);
};
