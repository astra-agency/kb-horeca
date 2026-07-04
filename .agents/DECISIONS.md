# Architecture Decision Records (ADR)

Archive of key project decisions. Each entry: date, decision, alternatives, rationale.

---

## [2026-06-04] ADR-001: Astro + Starlight as the KB foundation

**Decision:** Use the existing Astro 6.4.4 + Starlight 0.39.3 project.

**Alternatives:** Notion, Confluence, GitBook, MkDocs, Docusaurus.

**Rationale:** The project was already initialized. Starlight is the best option for static documentation: fast, SEO-friendly, search out of the box, sidebar navigation, MDX.

---

## [2026-06-04] ADR-002: Deploy to GitHub Pages

**Decision:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

**Alternatives:** Netlify, Vercel, Cloudflare Pages.

**Rationale:** Free. The repository is already on GitHub. Zero config for static sites.

**Requirement:** Subdirectory deploy required `base: '/kb-horeca'`. After moving to the custom domain (`kb-horeca.site`), `base` was removed — the site is served from the root.

---

## [2026-06-04] ADR-003: Keep original English content

**Decision:** Leave the original Operations / Compliance & Safety / Reference sections unchanged.

**Alternatives:** Delete, translate.

**Rationale:** Direct user request. The content does not interfere; deletion is unnecessary work.

---

## [2026-06-04] ADR-004: Sidebar structure — slug without /index

**Decision:** In the Starlight sidebar for `index.md`, use the folder slug (`hotels`), not `hotels/index`.

**Alternatives:** `hotels/index`.

**Rationale:** Starlight resolves `index.md` → folder slug. Using `hotels/index` causes a build error: `"The slug 'hotels/index' specified in the Starlight sidebar config does not exist"`.

---

## [2026-06-04] ADR-005: Content language — ru-RU

**Decision:** Primary content in Russian. Config: `defaultLocale: 'root'`, `lang: 'ru'`.

**Rationale:** Target audience is the Russian HoReCa market. EN is an additional locale.

---

## [2026-06-04] ADR-006: Stub pages for unavailable sites

**Decision:** For services with unavailable websites, create a stub with known data and enrich it via search.

**Rationale:** Better to have a basic page with correct data than an empty slot in navigation.

---

## [2026-06-04] ADR-008: Absolute paths in links between pages

**Decision:** All internal links are absolute, without `.md`, with a trailing `/`.

**Alternatives:** Relative paths (`./delivery.md`), paths with a base prefix.

**Rationale:** Starlight does not resolve `.md` extensions → 404 in the browser.

**Format (current, domain kb-horeca.site):** `/<section>/<slug>/`

**EN format:** `/en/<section>/<slug>/`

---

## [2026-06-04] ADR-007: Blocksy as the recommended WordPress theme

**Decision:** Recommend Blocksy + MotoPress plugins for hotel and restaurant websites.

**Rationale:** Blocksy ships ready-made starter sites for Travel, Restaurant, and Catering. MotoPress Hotel Booking is the leading booking plugin for WordPress.

---

## [2026-06-05] ADR-009: YAML frontmatter — quotes for values containing `: `

**Decision:** Any `title:` or `description:` field containing `: ` MUST be wrapped in double quotes.

**Incorrect:** `title: Guest cycle: from booking to repeat visit`
**Correct:** `title: "Guest cycle: from booking to repeat visit"`

---

## [2026-06-05] ADR-010: "Cases" section structure

**Decision:** Cases are stored in `src/content/docs/cases/`, each case as a separate file. Structure: frontmatter → Context → Task → What was done → Result → What to keep in mind → Related materials.

---

## [2026-06-05] ADR-011: Sidebar — non-technical content in Hotels/Restaurants, IT in Services

**Decision:** The "Hotels" and "Restaurants" sections contain only non-technical content. IT (PMS, POS, Channel Manager) lives in the "Services" section.

**Rationale:** Managers and owners have different needs for non-technical vs. IT content.

---

## [2026-06-05] ADR-012: Custom domain instead of GitHub Pages subdirectory

**Decision:** Use `https://kb-horeca.site/` instead of `https://astra-agency.github.io/kb-horeca/`.

**Changes:** `site: 'https://kb-horeca.site'`, removed `base: '/kb-horeca'`.

---

## [2026-06-05] ADR-013: Yandex Metrica via Starlight head config

**Decision:** The Yandex Metrica counter (ID 109685688) was added via `head: []` in the Starlight config.

---

## [2026-06-07] ADR-014: Starlight i18n — root locale for RU, EN in /en/

**Decision:** `defaultLocale: 'root'` with `lang: 'ru'`. EN content in `src/content/docs/en/`.

**Alternatives:** Separate `ru/` and `en/` folders, a separate site for EN.

**Rationale:** Starlight root locale is the standard pattern when the primary language has no prefix. RU content stays in `src/content/docs/` unchanged. EN is added in `src/content/docs/en/` without restructuring.

**Consequence:** Sidebar slugs are locale-agnostic — `hotels/revenue/revpar-adr-occupancy` resolves to the RU file for the root locale and the EN file for the EN locale automatically.

---

## [2026-06-08] ADR-016: EN as root locale — EN without prefix, RU at /ru/

**Decision:** Change `defaultLocale: 'root'` from `lang: 'ru'` to `lang: 'en'`. EN content in `src/content/docs/` (no prefix), RU in `src/content/docs/ru/`.

**Alternatives:** Keep RU as root (EN at `/en/`), a separate site for EN.

**Rationale:** The primary target audience is expanding to the US/EU market. EN as root gives SEO priority for Google. The RU audience is accustomed to `/ru/` as a standard pattern.

**Consequence:** All 34 technical articles were translated to EN and placed in root. RU versions of technical articles do not yet exist — `ru/hotels/pms/`, `ru/restaurants/pos/`, etc. need to be created.

---

## [2026-06-07] ADR-015: EN-only cases — RU stubs in root locale

**Decision:** For 7 cases that exist only in EN (`cases/inventory-management` and others), create minimal RU stubs with a redirect to the EN version.

**Alternatives:** Remove from sidebar, create a separate EN-only sidebar section.

**Rationale:** Starlight sidebar looks up the slug in both locales at build time. A missing root-locale file → `slug does not exist` error. Stubs are a minimal fix without reworking the sidebar.
