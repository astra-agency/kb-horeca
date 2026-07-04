---
id: kb_project_state
title: kb-horeca project state — current status, backlog, key files, vendor issues
importance: high
tags: kb-horeca, state, backlog, vendors, key-files
---

## Current State (2026-07-04)

- **Active branch: `main`** — `en-version` was merged into `main` (commit `76fbeb7`). Uncommitted local changes: docs reorganization (DECISIONS.md moved to `.agents/`), LOG.md switched to English, wiki-* skills de-WordPressified.
- **ZH locale added** — sidebar configured, 99 files total. 1-2 level pages translated to Chinese with China-market adaptations (PMS→石基/绿云, POS→美团收银/客桌, delivery→美团外卖/饿了么, regulations→中国法规)
- **RU technical articles missing** — RU has no PMS/POS/services/guides/reference content yet
- **RU cases are stubs** — need full content
- **DNS not configured** — `kb-horeca.site` custom domain still pending

## Backlog (priority order)

| Pri | Task |
|:---:|------|
| 🔴 | Commit & push current `main` changes (docs reorg, LOG.md, wiki skills) |
| 🔴 | DNS + custom domain `kb-horeca.site` |
| 🟡 | Fix sidebar badges (Services/Guides/Reference show `RU` but content is EN) |
| 🟡 | Create RU technical articles (PMS, POS, services, guides, reference) |
| 🟡 | Translate ZH content from EN |
| 🟡 | New PMS pages: Avtoportye, HotelCloud |
| 🟢 | Replace RU case stubs with full text |
| 🟢 | Fill regulation stubs (54-FZ, EGAIS, FMS) |
| 🟢 | Cross-link cases in remaining articles |

## Known Vendor Website Issues

When researching these vendors, use WebSearch + review sites (saasmarket.ru, a2is.ru, picktech.ru) instead of direct fetch:

| Site | Issue |
|------|-------|
| `kontur.ru/hotel` | 403 Forbidden |
| `saby.ru/hotel` | 404 / timeout |
| `hotel.logus.ru` | ECONNREFUSED |
| `iiko.ru` | Timeout |
| `creativethemes.com` | 403 Forbidden |

## Key Files Reference

| File | What It Does |
|------|-------------|
| `astro.config.mjs` | Sidebar, locales, site config — **edit carefully** |
| `src/content/docs/index.mdx` | EN homepage (CardGrid layout) |
| `src/content/docs/ru/index.mdx` | RU homepage |
| `src/content/docs/zh/index.mdx` | ZH homepage (EN copy) |
| `LOG.md` | Единый лог изменений (корень проекта) |
| `src/content/docs/ru/log.md` | RU locale log (удалён 2026-07-04, всё в LOG.md) |
| `src/components/Head.astro` | Custom `<head>` component |
| `.github/workflows/deploy.yml` | GitHub Actions deploy |
| `src/content.config.ts` | Astro content collections config |

### Project docs

| File | Content |
|------|---------|
| `.agents/DECISIONS.md` | Architecture decision records (ADR) |
