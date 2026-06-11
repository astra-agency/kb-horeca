# AGENTS.md — AI Agent Instructions for kb-horeca

> **Purpose:** Give any AI agent (Claude, Copilot, Cursor, etc.) the context needed to work on this project correctly from the first turn.
>
> **Keep this file current.** After any structural change, update the relevant section.

---

## Project Identity

**kb-horeca** — public knowledge base for HoReCa (Hotels, Restaurants, Cafés) IT services & operations.

| Attribute | Value |
|-----------|-------|
| Site | [kb-horeca.site](https://kb-horeca.site) |
| Repo | `git@github.com:astra-agency/kb-horeca.git` |
| Branch | `en-version` (active), `main` (deployed) |
| Stack | Astro 6.4.4 + Starlight 0.39.3 |
| Hosting | GitHub Pages via GitHub Actions |
| Languages | EN (root) + RU (`/ru/`) + ZH (`/zh/`) |

---

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server → http://localhost:4321/
npm run build        # Production build
npm run preview      # Preview production build
```

---

## i18n Structure

```
src/content/docs/           ← EN (root locale, no URL prefix)
├── index.mdx
├── hotels/  restaurants/  cases/  services/  guides/
├── reference/  regulations/  trends/
│
├── ru/                    ← RU locale (URL: /ru/...)
│   ├── index.mdx
│   ├── hotels/  restaurants/  cases/  services/
│   ├── guides/  reference/  regulations/  trends/
│   └── log.md
│
└── zh/                    ← ZH locale (URL: /zh/...) — ADDED 2026-06-11
    ├── index.mdx          ← 1-2 level pages translated (ZH), deeper pages still EN
    ├── hotels/  restaurants/  cases/  services/
    ├── guides/  reference/  regulations/  trends/
    │                       ← PMS, POS, delivery, CRM adapted for China market
```

**Locale config** (in `astro.config.mjs`):
- `root` → `lang: 'en'`, `label: 'English'`
- `ru` → `lang: 'ru'`, `label: 'Русский'`
- `zh` → `lang: 'zh-CN'`, `label: '中文'`

**Fallback behavior:** Starlight falls back to root (EN) for any page missing in `ru/` or `zh/`. ZH has 99 files — 1-2 level pages translated to Chinese, deeper pages (PMS/POS detail, cases, guides) still EN copies pending translation.

---

## ⚠️ Critical Rules

### 1. Never do without explicit user request
- ❌ Don't commit or push
- ❌ Don't delete existing content
- ❌ Don't create pages not in the plan or sidebar

### 2. Internal links — ABSOLUTE, no `.md`, trailing `/`

```
❌ [text](./delivery.md)
❌ [text](../crm.md)
❌ [text](/hotels/crm)            ← missing trailing /

✅ [text](/kb-horeca/hotels/crm/)         ← for GitHub Pages subdirectory
✅ [text](/hotels/crm/)                   ← for custom domain (current)
```

**Rule:** always absolute path + slug without extension + trailing `/`.

### 3. YAML frontmatter — quote values with `: `
Any `title:` or `description:` containing `: ` (colon+space) MUST be double-quoted.

```yaml
❌ title: Гостевой цикл: от бронирования до визита
✅ title: "Гостевой цикл: от бронирования до визита"
```

### 4. Sidebar slugs — folders, not index files
For `index.md` inside a folder, use the folder name as the slug:
```js
❌ { slug: 'hotels/index' }
✅ { slug: 'hotels' }           // for hotels/index.md
```
Starlight resolves `index.md` → parent folder slug automatically.

### 5. Adding a new page
1. Create the `.md`/`.mdx` file in the correct locale folder
2. Add it to the sidebar in `astro.config.mjs` (with `translations` for all locales: `ru`, `zh`)
3. Use `slug:` matching the file path without extension

### 6. Content language
- New content: **Russian (RU)** unless specified otherwise
- Existing EN content (guides/, reference/) — do not touch

---

## Content Map

| Section | EN (root) | RU | ZH | Description |
|---------|:---:|:---:|:---:|-------------|
| Hotels — Revenue | ✅ | ✅ | 📋 | RevPAR, seasonality, OTA, upselling, rates |
| Hotels — Staff | ✅ | ✅ | 📋 | Front desk, hiring, retention |
| Hotels — Guest Exp | ✅ | ✅ | 📋 | Guest cycle, complaints, mystery guest |
| Hotels — Operations | ✅ | ✅ | 📋 | Housekeeping, lobby, corporate |
| Hotels — PMS | ✅ | ❌ | 📋 | 7 systems + comparison |
| Hotels — IT Services | ✅ | ❌ | 📋 | Website, channel-mgr, reputation, CRM |
| Restaurants — Menu | ✅ | ✅ | 📋 | Engineering, food cost, stop-list |
| Restaurants — Staff | ✅ | ✅ | 📋 | Service standards, motivation |
| Restaurants — Operations | ✅ | ✅ | 📋 | Table turnover, reservations, banquets |
| Restaurants — Guest Exp | ✅ | ✅ | 📋 | Regular guests, complaints, atmosphere |
| Restaurants — POS | ✅ | ❌ | 📋 | iiko, r_keeper, Poster, comparison |
| Restaurants — IT | ✅ | ❌ | 📋 | Delivery, loyalty, reservations |
| Cases (23) | ✅ | ⚠️ | 📋 | EN full text, RU stubs, ZH copies |
| Services | ✅ | ✅ | 📋 | Comparison tables & matrix |
| Selection Guides | ✅ | ✅ | 📋 | How to choose POS/PMS |
| Operations Guides | ✅ | ✅ | 📋 | Quick start, FOH, BOH, inventory, staff |
| Sanitation | ✅ | ✅ | 📋 | Food safety, health, licensing |
| Reference | ✅ | ✅ | 📋 | Integrations map, glossary, checklists |
| Regulations | ⚠️ | ✅ | 📋 | 54-FZ, EGAIS, FMS (EN = stubs) |
| Trends | ✅ | ✅ | 📋 | HoReCa IT Market 2025–2026 |

> 📋 = EN copies (awaiting translation) | ⚠️ = stubs (minimal content)

---

## ⚠️ Three-Language Reality

This knowledge base works in **three languages**. Always be aware of language when creating or editing content:

| Lang | Code | URL | Status |
|------|------|-----|--------|
| English | `en` | root `/` | **Base language** — all content originates here |
| Russian | `ru` | `/ru/` | Mostly translated, missing technical articles |
| Chinese | `zh-CN` | `/zh/` | Added 2026-06-11. 1-2 level pages translated. PMS/POS/delivery/CRM adapted for China market (石基, 美团, 携程, etc.) |

**Rules:**
- When writing a new article, create it first in the correct locale folder
- When translating, copy from EN → translate to RU or ZH
- Sidebar translations must cover all three languages (`ru`, `zh`)
- `raw/` source materials may be in any of the three languages — check before using
- **ZH China-adaptation:** PMS, POS, delivery, CRM, regulations → use China-market equivalents, not Russian ones

---

## Raw Materials (`raw/`)

The `raw/` directory holds source materials, research notes, and drafts — **not published content**, but feedstock for KB pages. Treat it as the project's "inbox".

```
raw/
├── README.md                  # Log of loaded files & processing status
├── 2026/                      # Research notes by date
│   └── 0611/                  # e.g., web-search results, article drafts
├── other/
│   ├── hotels-restaurant/     # RU source articles (01–27 numbered .md files)
│   │   ├── 00-INDEX.md        # Pack 1 index (hotels + restaurants)
│   │   ├── 00-INDEX-PACK2.md  # Pack 2 index (ops + guest experience)
│   │   └── 01-hotel-revenue-...md  ...  27 files total
│   ├── hospitality-en/        # EN source articles
│   │   ├── 00-INDEX-EN.md
│   │   └── pack1/, pack2/
│   ├── cases/                 # RU case source texts (16 files)
│   ├── cases-en/              # EN case source texts (16 files)
│   ├── pms/                   # PMS pricing PDFs (to download → process)
│   ├── pos/                   # POS pricing PDFs
│   ├── delivery/              # Delivery aggregator terms
│   └── reservation/           # Table reservation pricing
```

**Language awareness in `raw/`:**
- `hotels-restaurant/` — Russian (RU source articles)
- `hospitality-en/` — English (EN source articles)
- `cases/` — Russian, `cases-en/` — English
- `2026/` — mixed; check individual files

**Workflow:**
1. Source material arrives in `raw/` (manual download, web search, PDF)
2. Log status in `raw/README.md`
3. Process into proper KB pages under `src/content/docs/<locale>/`
4. Mark as processed in `raw/README.md`

---

## Known Vendor Website Issues

When researching these vendors, use WebSearch + review sites (saasmarket.ru, a2is.ru, picktech.ru) instead of direct fetch:

| Site | Issue |
|------|-------|
| `kontur.ru/hotel` | 403 Forbidden |
| `saby.ru/hotel` | 404 / timeout |
| `hotel.logus.ru` | ECONNREFUSED |
| `iiko.ru` | Timeout |
| `creativethemes.com` | 403 Forbidden |

---

## Key Files Reference

| File | What It Does |
|------|-------------|
| `astro.config.mjs` | Sidebar, locales, site config — **edit carefully** |
| `src/content/docs/index.mdx` | EN homepage (CardGrid layout) |
| `src/content/docs/ru/index.mdx` | RU homepage |
| `src/content/docs/zh/index.mdx` | ZH homepage (EN copy) |
| `src/content/docs/log.md` | Content change log |
| `src/content/docs/ru/log.md` | RU content change log |
| `src/components/Head.astro` | Custom `<head>` component |
| `.github/workflows/deploy.yml` | GitHub Actions deploy |
| `src/content.config.ts` | Astro content collections config |

### Project docs (this folder)

| File | Content |
|------|---------|
| `docs/DECISIONS.md` | Architecture decision records (ADR) |

---

## Current State (2026-06-11)

- **Branch `en-version`** has uncommitted changes from session 7
- **ZH locale added** — sidebar configured, 99 files total. 1-2 level pages translated to Chinese with China-market adaptations (PMS→石基/绿云, POS→美团收银/客桌, delivery→美团外卖/饿了么, regulations→中国法规)
- **RU technical articles missing** — RU has no PMS/POS/services/guides/reference content yet
- **RU cases are stubs** — need full content
- **DNS not configured** — `kb-horeca.site` custom domain still pending

### Backlog (priority order)

| Pri | Task |
|:---:|------|
| 🔴 | Commit & push `en-version` branch |
| 🔴 | DNS + custom domain `kb-horeca.site` |
| 🟡 | Fix sidebar badges (Services/Guides/Reference show `RU` but content is EN) |
| 🟡 | Create RU technical articles (PMS, POS, services, guides, reference) |
| 🟡 | Translate ZH content from EN |
| 🟡 | New PMS pages: Avtoportye, HotelCloud |
| 🟢 | Replace RU case stubs with full text |
| 🟢 | Fill regulation stubs (54-FZ, EGAIS, FMS) |
| 🟢 | Cross-link cases in remaining articles |

---

## Quick Start for a New Agent

```bash
# 1. Read the key files
cat AGENTS.md                   # You are here
cat docs/DECISIONS.md           # Architecture decisions
cat astro.config.mjs            # Sidebar & locale config

# 2. Start dev server
npm install && npm run dev

# 3. Open http://localhost:4321/
```
