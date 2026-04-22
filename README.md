# CNR Ops Dashboard

A premium front-end operations dashboard built for service businesses — managing leads, clients, proposals, meetings, and reporting from a single, polished internal interface.

Designed and built by **CNR Solutions** as a product-quality portfolio demo.

---

## Overview

CNR Ops is a fully navigable internal operations dashboard that models the kind of custom tooling a service agency, consultancy, or client-facing business would use to run its operations day-to-day.

Every section is independently rendered and navigable through the sidebar. The tool covers the full client lifecycle: inbound lead capture, qualification, proposal dispatch, meeting scheduling, account management, pipeline analysis, and reporting — all in one consistent interface.

The design intent is clear: premium dark SaaS UI, tight information hierarchy, realistic demo data, and production-grade interaction patterns. This is not a component showcase or a styled template. It is a demonstration of what a real internal tool looks like.

---

## Features

- **8-section sidebar navigation** — instant view switching with smooth fade transitions and live page title updates
- **KPI stat cards** — animated counters with inline SVG sparkline trends for Leads, Clients, Quotes, and Meetings
- **Conversion pipeline** — animated stage bars with counts, pipeline value, win rate, and deal size totals
- **Funnel analytics** — conversion rates between every stage, lead source breakdown, and quarter-over-quarter comparison
- **Live activity log** — timestamped, type-tagged operations feed covering leads, quotes, bookings, and follow-ups
- **Deals table** — reference numbers, scope labels, stage badges, value, and status across all open records
- **Performance chart** — 3-tab bar chart (Leads / Conversions / Revenue) with Y-axis labels and hover values
- **Booking schedule** — day-grouped meeting calendar with client, type, duration, platform, and confirmation state
- **Quick action commands** — premium command-card panel for logging leads, sending proposals, booking meetings, and exporting
- **Report library** — downloadable report cards with file type, generation date, and size metadata
- **Settings panel** — profile form, notification toggles, integration connection states, and workspace details
- **Collapsible sidebar** — collapses to icon-only rail; mobile drawer with outside-click dismiss
- **Keyboard shortcut** — `⌘K` / `Ctrl+K` focuses the global search input
- **Toast notifications** — confirmation feedback on every interactive action
- **Fully responsive** — layout adapts cleanly across desktop, tablet, and mobile

---

## Screenshots

### Dashboard Overview
![Dashboard Overview](/public/screenshots/dashboard-overview.png)

### Leads
![Leads View](/public/screenshots/leads-view.png)

### Clients
![Clients View](/public/screenshots/clients-view.png)

### Quotes & Proposals
![Quotes View](/public/screenshots/quotes-view.png)

### Bookings & Meetings
![Bookings View](/public/screenshots/bookings-view.png)

---

## Views

### Overview
The primary dashboard. KPI cards with sparklines, animated conversion pipeline, real-time activity log, weekly performance chart, recent deals table, quick action commands, and a monthly snapshot panel.

### Leads
Lead management table with contact, company, acquisition source, pipeline stage, assigned owner, and color-coded lead score. Filter bar for stage, source, and owner.

### Clients
Account roster showing MRR, contract start date, account status, and a 5-point health indicator. Filters for status and MRR range.

### Quotes
Open proposal tracker with `QT-XXXX` reference numbers, scope of work, value, sent and expiry dates, and status. Expiring and overdue entries are visually flagged.

### Bookings
Chronological meeting schedule grouped by day. Each entry includes time, client, meeting type, duration, platform, and confirmation state. Sidebar shows a weekly call summary and meeting-type breakdown.

### Pipeline
Funnel analytics with stage-by-stage conversion rates, lead source percentages, and a five-metric Q2 vs Q1 comparison.

### Reports
Report library with six entries — monthly performance, Q1 summary, lead source analysis, client health, 90-day pipeline forecast, and a scheduled revenue model. Each card shows format, generation date, and file size.

### Settings
Profile editing form (name, email, role, timezone), six notification preference toggles, integration panel (Slack, Zapier, Google Calendar, HubSpot, DocuSign), and workspace plan details.

---

## Tech Stack

| Layer | Detail |
|---|---|
| Markup | HTML5 |
| Styling | CSS — custom properties, Grid, Flexbox |
| Logic | Vanilla JavaScript (ES2020) |
| Typography | Inter via Google Fonts |
| Charts | Hand-coded CSS bar chart + SVG sparklines |
| Icons | Inline SVG |
| Dependencies | None |
| Build | None — open `index.html` and it runs |

No React, Vue, Tailwind, or any runtime dependency beyond a single Google Font. The project works offline.

---

## Project Structure

```
cnr-analytics-dashboard/
├── index.html            # All markup — sidebar, topbar, and 8 view sections
├── styles.css            # Design system, layout, components, responsive rules
├── app.js                # View switching, data rendering, chart logic, interactions
├── public/
│   └── screenshots/      # Dashboard screenshots for README and portfolio use
└── README.md
```

All views are sibling `<div class="view">` elements inside `#view-container`. The active view is controlled by a single `switchView()` function that toggles a CSS class — no router, no hash navigation, no framework overhead.

---

## Installation

```bash
git clone https://github.com/your-handle/cnr-analytics-dashboard.git
cd cnr-analytics-dashboard
open index.html
```

Or simply drag `index.html` into a browser. No server, no build step, no configuration.

---

## Why I Built This

Most portfolio dashboards demonstrate the same thing: four stat cards, a chart, and a table with placeholder data. They show component styling, not product thinking.

CNR Ops was built to demonstrate the full picture — information architecture across multiple views, realistic operational data, consistent design language throughout, and interaction patterns that mirror what a real business tool needs. The code is framework-free and readable without a build system to untangle.

The goal is to show: I can scope, design, and build internal business tooling that a client can understand and hand to their team on day one.

---

## Branding

CNR Ops carries a restrained product signature from **CNR Solutions** — visible in the sidebar header, the page title, and the footer. It reads as a studio mark, not a watermark. The intent is to make the dashboard feel like a real shipped product with an identity, not a generic demo.

---

## Future Improvements

The following are intentionally out of scope for this front-end demo but represent the logical next layer for a production build:

- **API integration** — replace demo data with live records via a REST or GraphQL backend
- **Authentication** — login flow, session management, and protected routes
- **Database** — persistent storage for leads, clients, quotes, and activity log (PostgreSQL, Supabase, PlanetScale, or similar)
- **Real-time sync** — WebSocket or Server-Sent Events for live activity feed and notification state
- **Role-based access** — admin, account manager, and read-only permission tiers
- **Live search and filtering** — activate the existing filter UI against real data
- **Export workflows** — generate and download actual PDF/CSV reports from live records
- **Email triggers** — automated notifications for quote expiry, new lead, and deal closed events
- **Calendar sync** — two-way Google Calendar integration for the bookings view
- **Richer analytics** — replace the hand-coded chart with Chart.js or Recharts for interactive, data-driven graphs

---

## License

MIT — free to use, adapt, and extend for personal or commercial projects.

---

*Designed & built by [CNR Solutions](https://cnrsolutions.co) · v2.0*
