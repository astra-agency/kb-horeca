# HoReCa KB — Knowledge Base for Hotels & Restaurants

Public knowledge base covering IT services and operations for the HoReCa industry. Practical guides for hotel and restaurant owners, managers, and IT professionals.


git: https://github.com/astra-agency/kb-horeca
website: https://kb-horeca.site


---

## What is HoReCa KB?

HoReCa KB is a **structured public reference** for anyone running or automating a hotel, restaurant, or café. It bridges the gap between hospitality operations and the IT systems that power them — helping you choose the right tools, set up processes, and solve real-world problems.

**Problem it solves:** HoReCa professionals spend weeks researching PMS/POS systems, comparing vendors, and figuring out operational standards. HoReCa KB consolidates that knowledge in one place — structured, searchable, and multilingual.

**Format:** Static documentation site built with Astro + Starlight. Fast, SEO-friendly, zero JavaScript overhead for readers.

---

## What it covers

| Domain | Topics |
|--------|--------|
| **Hotels** | Revenue management (RevPAR, ADR, seasonality, OTA vs direct), front desk scripts, housekeeping standards, guest complaints, mystery guest audits |
| **Restaurants** | Menu engineering, food cost & pricing, table turnover, service standards, stop-list management, banquet operations |
| **IT Systems** | PMS (TravelLine, Bnovo, Kontur.Hotel, Logus, Saby, MaxiBooking), POS (iiko, r_keeper, Poster), channel managers, CRM, loyalty, delivery aggregators |
| **Cases** | 23 real-world implementation stories: booking engines, CRM setups, dynamic pricing, guest portals, kiosk apps, mobile staff apps |
| **Regulations** | 54-FZ (online cash registers), EGAIS (alcohol tracking), guest registration with police |
| **Operations Guides** | Quick start, FOH/BOH workflows, inventory management, staff management, food safety, licensing |
| **Reference** | Integration map, glossary, checklists, vendor comparison tables |

---

## Who is it for? (Use cases)

### 🏨 Hotel owner / General manager
- Compare PMS systems side-by-side → pick the right one
- Learn revenue tactics: when to raise rates, how to fight seasonality
- Set up front desk scripts and complaint handling procedures
- Understand Russian regulatory requirements (54-FZ, EGAIS, guest registration)

### 🍽️ Restaurant owner / Manager
- Choose a POS: iiko vs r_keeper vs Poster — feature comparison
- Engineer your menu for profit, calculate food cost correctly
- Improve table turnover and service speed
- Set up delivery aggregators and loyalty programs

### 💻 IT professional / System integrator
- Reference integration map: what connects to what
- Real case studies with implementation details and ROI data
- Technical deep-dives into PMS and POS APIs and capabilities

### 📊 Consultant / Agency
- Use as a knowledge source for client recommendations
- Structured comparison tables ready to reference
- Ready-made checklists for audits

### 📚 Student / Career switcher
- Learn HoReCa IT landscape from scratch
- Understand how hotels and restaurants operate
- Glossary of industry terms

---

## Key features

- **🌍 Trilingual** — English (root), Russian (`/ru/`), Chinese (`/zh/`). Sidebar and navigation in all three languages.
- **🔍 Full-text search** — built into Starlight, no external dependencies.
- **📱 Mobile-friendly** — responsive design, readable on any device.
- **⚡ Static & fast** — Astro SSG, no client-side JS bloat. Lighthouse 95+.
- **🏷️ Structured navigation** — hierarchical sidebar, breadcrumbs, prev/next page links.
- **📊 Comparison tables** — PMS and POS systems compared by features, pricing, integrations.
- **📖 Real cases** — 23 detailed implementation stories with context → solution → results.
- **🔗 Cross-linked** — every page links to related topics, guides, and cases.
- **🆓 Free & open** — CC BY-SA 4.0 content, MIT code. Hosted on GitHub Pages.
- **📝 Edit-on-GitHub** — every page has an «Edit page» link for community contributions.

---

## Site Sections

| Section | Description |
|---------|-------------|
| [Hotels](https://kb-horeca.site/hotels/) | Revenue management, staff, guest experience, operations |
| [Restaurants](https://kb-horeca.site/restaurants/) | Menu engineering, staff, service, guest experience |
| [PMS Systems](https://kb-horeca.site/hotels/pms/) | TravelLine, Bnovo, Kontur.Hotel, Logus HMS, Saby Hotel, MaxiBooking |
| [POS Systems](https://kb-horeca.site/restaurants/pos/) | iiko, r_keeper, Poster — comparison and deep dives |
| [Cases](https://kb-horeca.site/cases/) | 23 real-world HoReCa IT implementation stories |
| [IT Services](https://kb-horeca.site/services/) | CRM, channel managers, online booking, loyalty, delivery |

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | [Astro](https://astro.build/) 6.4 |
| Documentation theme | [Starlight](https://starlight.astro.build/) 0.39 |
| Content format | MDX (Markdown + JSX) |
| Hosting | GitHub Pages via GitHub Actions |
| Analytics | Yandex Metrika |
| Languages | TypeScript, CSS, MDX |
| Package manager | npm |

---

## Project structure

```
src/content/docs/           ← EN content (root locale)
├── index.mdx
├── hotels/  restaurants/  cases/  services/  guides/
├── reference/  regulations/  trends/
├── ru/                    ← RU locale
│   └── ...
└── zh/                    ← ZH locale (China-market adapted)
    └── ...
raw/                        ← Source materials, research notes, drafts
astro.config.mjs            ← Sidebar, locales, site config
docs/DECISIONS.md           ← Architecture decision records
```

---

## About

HoReCa KB is a structured reference for anyone running or automating a hotel, restaurant, or café. It covers both operational know‑how and the IT systems that power modern hospitality — from PMS and POS selection to revenue strategy and staff management.

**Languages:** English (root) + Russian (`/ru/`) + Chinese (`/zh/`).

📖 [Browse all topics →](https://kb-horeca.site)

---

🔧 Developer guide — [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)
📋 Architecture decisions — [docs/DECISIONS.md](docs/DECISIONS.md)
