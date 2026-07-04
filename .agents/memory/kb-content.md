---
id: kb_content
title: kb-horeca content structure — i18n, content map, three-language reality, raw materials
importance: high
tags: kb-horeca, i18n, content-map, raw, zh, ru
---

# kb-horeca Content Structure

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

## Three-Language Reality

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
1. Source material arrives in `inbox/` or `raw/` (manual download, web search, PDF)
2. Log status in `LOG.md`
3. Process into proper KB pages under `src/content/docs/<locale>/`
4. Mark as processed in `raw/README.md`
