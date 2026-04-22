'use strict';

// ─── View metadata ─────────────────────────────────────────────
const VIEW_META = {
  dashboard: { title: 'Overview' },
  leads:     { title: 'Leads' },
  clients:   { title: 'Clients' },
  quotes:    { title: 'Quotes' },
  bookings:  { title: 'Bookings' },
  pipeline:  { title: 'Pipeline' },
  reports:   { title: 'Reports' },
  settings:  { title: 'Settings' },
};

// ─── Data ──────────────────────────────────────────────────────
const ACTIVITY = [
  { icon: 'lead',    color: '#6366f1', bg: 'rgba(99,102,241,.12)',
    text: '<strong>Marcus Delray</strong> submitted an inquiry — web design retainer',
    time: '4 min ago', tag: 'New Lead' },
  { icon: 'quote',   color: '#f59e0b', bg: 'rgba(245,158,11,.12)',
    text: 'Proposal <strong>#QT-2847</strong> dispatched to Hartwell Properties · $14,200',
    time: '22 min ago', tag: 'Quote Sent' },
  { icon: 'booking', color: '#34d399', bg: 'rgba(52,211,153,.12)',
    text: 'Discovery call confirmed with <strong>Priya Nair</strong> · Fri Apr 25, 10:00 AM',
    time: '47 min ago', tag: 'Meeting Booked' },
  { icon: 'quote',   color: '#f59e0b', bg: 'rgba(245,158,11,.12)',
    text: '<strong>#QT-2844</strong> accepted by Pinnacle Group — deal closed at $28,500',
    time: '1h 12m ago', tag: 'Deal Closed' },
  { icon: 'update',  color: '#60a5fa', bg: 'rgba(96,165,250,.12)',
    text: 'Client workspace updated for <strong>Meridian Consulting</strong> · portal access granted',
    time: '2h 4m ago', tag: 'Portal' },
  { icon: 'follow',  color: '#a78bfa', bg: 'rgba(167,139,250,.12)',
    text: 'Day-3 follow-up triggered for <strong>Devon Cross Ventures</strong> — awaiting reply',
    time: '3h 18m ago', tag: 'Follow-up' },
  { icon: 'lead',    color: '#6366f1', bg: 'rgba(99,102,241,.12)',
    text: '<strong>Solène Beaumont</strong> reopened proposal #QT-2839 — 4:22 on page',
    time: '4h 51m ago', tag: 'Proposal View' },
  { icon: 'booking', color: '#34d399', bg: 'rgba(52,211,153,.12)',
    text: '<strong>Lakewood Studio</strong> onboarding confirmed — kickoff Monday Apr 28',
    time: '6h ago', tag: 'Onboarding' },
];

const DEALS = [
  { name: 'Hartwell Properties',    initials: 'HP', color: '#6366f1',
    ref: 'QT-2847', service: 'Brand Identity System',         stage: 'sent',      stageLabel: 'Proposal Sent',  value: '$14,200', date: 'Apr 22', status: 'pending' },
  { name: 'Meridian Consulting',    initials: 'MC', color: '#34d399',
    ref: 'QT-2841', service: 'Web Platform & CMS',            stage: 'won',       stageLabel: 'Closed · Won',   value: '$38,500', date: 'Apr 21', status: 'active'  },
  { name: 'Priya Nair',             initials: 'PN', color: '#60a5fa',
    ref: 'QT-2846', service: 'Growth & Demand Strategy',      stage: 'qualified', stageLabel: 'Qualified',      value: '$8,900',  date: 'Apr 20', status: 'review'  },
  { name: 'Pinnacle Group',         initials: 'PG', color: '#f59e0b',
    ref: 'QT-2844', service: 'SEO & Analytics Setup',         stage: 'won',       stageLabel: 'Closed · Won',   value: '$28,500', date: 'Apr 19', status: 'active'  },
  { name: 'Solène Beaumont',        initials: 'SB', color: '#a78bfa',
    ref: 'QT-2839', service: 'Editorial & Content Direction', stage: 'followup',  stageLabel: 'In Negotiation', value: '$5,200',  date: 'Apr 18', status: 'pending' },
  { name: 'Devon Cross Ventures',   initials: 'DC', color: '#f87171',
    ref: 'QT-2848', service: 'CRM Configuration & Training',  stage: 'inquiry',   stageLabel: 'New Inquiry',    value: '$12,100', date: 'Apr 17', status: 'review'  },
  { name: 'Lakewood Studio',        initials: 'LS', color: '#34d399',
    ref: 'QT-2836', service: 'Client Onboarding Suite',       stage: 'won',       stageLabel: 'Closed · Won',   value: '$19,800', date: 'Apr 16', status: 'active'  },
  { name: 'Arcstone Capital',       initials: 'AC', color: '#6366f1',
    ref: 'QT-2845', service: 'Market Positioning Report',     stage: 'sent',      stageLabel: 'Proposal Sent',  value: '$7,600',  date: 'Apr 15', status: 'pending' },
];

const CHART_DATA = {
  leads: {
    label: 'New Inquiries',   color: '#6366f1',
    values:    [18, 24, 15, 31, 28, 22, 37],
    days:      ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    secondaryLabel: 'Qualified', secondaryColor: '#a78bfa',
    secondary: [8, 11, 7, 18, 13, 9, 21], yMax: 40,
  },
  conversions: {
    label: 'Closed Deals',    color: '#34d399',
    values:    [3, 5, 2, 7, 6, 4, 9],
    days:      ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    secondaryLabel: 'Meetings', secondaryColor: '#60a5fa',
    secondary: [4, 6, 3, 8, 7, 5, 10], yMax: 12,
  },
  revenue: {
    label: 'Revenue ($k)',    color: '#f59e0b',
    values:    [12, 18, 8, 24, 21, 15, 29],
    days:      ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    secondaryLabel: 'Target', secondaryColor: 'rgba(245,158,11,.28)',
    secondary: [15, 15, 15, 15, 15, 15, 15], yMax: 32,
  },
};

const SPARKLINES = {
  'spark-leads':    [102, 118, 131, 139, 148],
  'spark-clients':  [48,  54,  57,  61,  63],
  'spark-quotes':   [21,  19,  23,  20,  17],
  'spark-bookings': [22,  25,  27,  26,  29],
};

const SPARK_COLORS = {
  'spark-leads':    '#6366f1',
  'spark-clients':  '#60a5fa',
  'spark-quotes':   '#f59e0b',
  'spark-bookings': '#34d399',
};

// ─── DOM helpers ───────────────────────────────────────────────
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

// ─── View switching ────────────────────────────────────────────
let currentView = 'dashboard';

function switchView(name) {
  if (!VIEW_META[name] || name === currentView) return;

  const current = $(`#view-${currentView}`);
  const next    = $(`#view-${name}`);
  if (!next) return;

  current?.classList.remove('active');
  next.classList.add('active');
  currentView = name;

  // Update page title
  const titleEl = $('#pageTitle');
  if (titleEl) titleEl.textContent = VIEW_META[name].title;

  // Scroll to top
  next.scrollTop = 0;

  // Animate pipeline bars if switching to pipeline view
  if (name === 'pipeline') {
    setTimeout(() => animateFunnelBars(), 80);
  }

  // Animate dashboard pipeline bars on return
  if (name === 'dashboard') {
    setTimeout(animatePipeline, 80);
  }
}

// ─── Date ──────────────────────────────────────────────────────
function setDate() {
  const el = $('#currentDate');
  if (!el) return;
  el.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

// ─── Sidebar ───────────────────────────────────────────────────
function initSidebar() {
  const sidebar   = $('#sidebar');
  const main      = $('#main');
  const toggle    = $('#sidebarToggle');
  const mobileBtn = $('#mobileMenuBtn');

  toggle?.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
  });

  mobileBtn?.addEventListener('click', () => sidebar.classList.toggle('mobile-open'));

  document.addEventListener('click', e => {
    if (window.innerWidth <= 768 &&
        sidebar.classList.contains('mobile-open') &&
        !sidebar.contains(e.target) &&
        e.target !== mobileBtn) {
      sidebar.classList.remove('mobile-open');
    }
  });

  $$('.sidebar-nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const section = a.dataset.section;

      // Update nav active state
      $$('.sidebar-nav li').forEach(li => li.classList.remove('active'));
      a.closest('li').classList.add('active');

      // Switch view
      switchView(section);

      if (window.innerWidth <= 768) sidebar.classList.remove('mobile-open');
    });
  });
}

// ─── Sparklines ────────────────────────────────────────────────
function renderSparklines() {
  Object.entries(SPARKLINES).forEach(([id, vals]) => {
    const el = $(`#${id}`);
    if (!el) return;
    const W = 56, H = 24;
    const min = Math.min(...vals), max = Math.max(...vals), range = max - min || 1;
    const pts = vals.map((v, i) => {
      const x = (i / (vals.length - 1)) * W;
      const y = H - ((v - min) / range) * H * 0.85 - H * 0.075;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    const color = SPARK_COLORS[id];
    const lastPt = pts.split(' ').pop().split(',');
    el.innerHTML = `
      <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none">
        <polyline points="${pts}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="${lastPt[0]}" cy="${lastPt[1]}" r="2" fill="${color}"/>
      </svg>`;
  });
}

// ─── Activity feed ─────────────────────────────────────────────
const ICONS = {
  lead:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  quote:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  booking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  update:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  follow:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
};

function renderActivity() {
  const list = $('#activityList');
  if (!list) return;
  list.innerHTML = ACTIVITY.map(item => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${item.bg};color:${item.color};">
        ${ICONS[item.icon] || ''}
      </div>
      <div class="activity-body">
        <div class="activity-text">${item.text}</div>
        <div class="activity-meta">
          <span class="activity-time">${item.time}</span>
          <span class="activity-tag">${item.tag}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ─── Deals table ───────────────────────────────────────────────
function renderDeals() {
  const tbody = $('#dealsBody');
  if (!tbody) return;
  tbody.innerHTML = DEALS.map(d => `
    <tr>
      <td><div class="client-cell"><div class="client-avatar" style="background:${d.color}22;color:${d.color};">${d.initials}</div><span class="client-name">${d.name}</span></div></td>
      <td><span class="ref-cell">${d.ref}</span></td>
      <td><span class="service-tag">${d.service}</span></td>
      <td><span class="stage-badge ${d.stage}">${d.stageLabel}</span></td>
      <td><span class="value-cell">${d.value}</span></td>
      <td style="color:var(--text-muted);font-size:11.5px;">${d.date}</td>
      <td><span class="status-badge ${d.status}">${cap(d.status)}</span></td>
    </tr>
  `).join('');
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// ─── Chart ─────────────────────────────────────────────────────
let activeTab = 'leads';

function renderChart(key) {
  const area   = $('#chartArea');
  const legend = $('#chartLegend');
  const yAxis  = $('#chartYAxis');
  if (!area) return;

  const data = CHART_DATA[key];
  const yMax = data.yMax;
  const steps = [0, Math.round(yMax * .25), Math.round(yMax * .5), Math.round(yMax * .75), yMax];

  if (yAxis) {
    yAxis.innerHTML = [...steps].reverse().map(v => `<span class="y-label">${v}</span>`).join('');
  }

  area.innerHTML = data.days.map((day, i) => {
    const h1 = Math.round((data.values[i]    / yMax) * 100);
    const h2 = Math.round((data.secondary[i] / yMax) * 100);
    return `
      <div class="bar-group">
        <div class="bar" style="height:${h1}%;background:${data.color};" data-val="${data.values[i]}"></div>
        <div class="bar" style="height:${h2}%;background:${data.secondaryColor};" data-val="${data.secondary[i]}"></div>
        <span class="bar-label">${day}</span>
      </div>
    `;
  }).join('');

  if (legend) {
    legend.innerHTML = `
      <div class="legend-item"><div class="legend-dot" style="background:${data.color}"></div>${data.label}</div>
      <div class="legend-item"><div class="legend-dot" style="background:${data.secondaryColor}"></div>${data.secondaryLabel}</div>
    `;
  }
}

function initTabs() {
  $$('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      renderChart(activeTab);
    });
  });
}

// ─── Counter animation ─────────────────────────────────────────
function animateCounters() {
  $$('.stat-value').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;
    const start = performance.now(), dur = 950;
    const tick = now => {
      const t = Math.min((now - start) / dur, 1);
      el.textContent = Math.round((1 - Math.pow(1 - t, 3)) * target);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

// ─── Pipeline bars ─────────────────────────────────────────────
function animatePipeline() {
  $$('.stage-bar').forEach(bar => {
    const target = bar.style.getPropertyValue('--pct');
    bar.style.setProperty('--pct', '0%');
    setTimeout(() => bar.style.setProperty('--pct', target), 60);
  });
}

// ─── Funnel bars (pipeline view) ───────────────────────────────
function animateFunnelBars() {
  $$('.funnel-bar').forEach(bar => {
    const target = bar.style.getPropertyValue('--w');
    bar.style.setProperty('--w', '0%');
    setTimeout(() => bar.style.setProperty('--w', target), 60);
  });
}

// ─── Refresh ───────────────────────────────────────────────────
function initRefresh() {
  const btn = $('#refreshBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.classList.add('spinning');
    showToast('Dashboard refreshed');
    setTimeout(() => btn.classList.remove('spinning'), 600);
  });
}

// ─── Search keyboard shortcut ──────────────────────────────────
function initSearch() {
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      $('#searchInput')?.focus();
    }
    if (e.key === 'Escape') {
      const input = $('#searchInput');
      if (document.activeElement === input) input?.blur();
    }
  });
}

// ─── Toast ─────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const toast = $('#toast');
  const msgEl = $('#toastMsg');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

window.showToast = showToast;

// ─── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setDate();
  initSidebar();
  initSearch();
  renderActivity();
  renderDeals();
  renderChart(activeTab);
  initTabs();
  initRefresh();
  renderSparklines();

  setTimeout(animateCounters, 100);
  setTimeout(animatePipeline, 160);
});
