# AGENTS.md — kb-horeca

> Public knowledge base for HoReCa IT services & operations. Astro + Starlight, 3 locales (EN/RU/ZH), GitHub Pages.

## Project Identity

- **Site:** [kb-horeca.site](https://kb-horeca.site)
- **Repo:** `git@github.com:astra-agency/kb-horeca.git`
- **Branch:** `en-version` (active), `main` (deployed)
- **Stack:** Astro 6.4.4 + Starlight 0.39.3
- **Hosting:** GitHub Pages via GitHub Actions
- **Languages:** EN (root) + RU (`/ru/`) + ZH (`/zh/`)

## Commands

```bash
npm install && npm run dev      # → http://localhost:4321/
npm run build && npm run preview
```

## ⚠️ Critical Rules

1. **Never without explicit user request:** no commit/push, no deleting content, no pages outside plan/sidebar.
2. **Internal links:** absolute, no `.md`, trailing `/` — e.g. `/hotels/crm/`. Details: `kb-conventions` memory.
3. **YAML frontmatter:** quote any `title:`/`description:` containing `: `. Details: `kb-conventions` memory.
4. **Sidebar slugs:** use folder name, not `index` — `{ slug: 'hotels' }`. Details: `kb-conventions` memory.
5. **New page:** create file in locale folder → add to sidebar in `astro.config.mjs` with `translations` (`ru`, `zh`) → match `slug:` to file path. Details: `kb-conventions` memory.
6. **Content language:** new content in RU; don't touch existing EN (guides/, reference/).

## Memory 

[Use](.agents/memory/)

Persistent facts about this codebase. Read the relevant file before working on a task.

### `kb-content.md`
- i18n structure, Content Map, three-language rules, `raw/` workflow
- Read when: creating, translating, or organizing content

### `kb-conventions.md`
- Link/frontmatter/sidebar rules, how to add a page
- Read when: editing or creating any page

### `project-state.md`
- Current state, backlog, vendor issues, key files reference
- Read when: starting any session; check status & priorities

## Routes — when to call which skill

Skills live in `.agents/skills/`. Load the matching `SKILL.md` when the task fits.

### Astro/Starlight API
- **Skill:** `astro-knowledge`
- Confirm current syntax before editing `astro.config.mjs`

### Add a new source into the wiki
- **Skill:** `wiki-ingest`
- Synthesis, cross-linking, index + log updates

### Answer a question strictly from wiki pages
- **Skill:** `wiki-query`
- Citations required; optional filing to `queries/`

### Revise an existing wiki page
- **Skill:** `wiki-update`
- Source attribution + downstream consistency checks

### Audit wiki health
- **Skill:** `wiki-lint`
- Broken links, orphans, stale content; logs findings

### Bootstrap or repair the wiki structure
- **Skill:** `wiki-init`
- Run once or in repair mode

### Any wiki task — unsure which sub-skill
- **Skill:** `llm-wiki`
- Umbrella orchestrator, routes to the above

### Extract web page content as Markdown
- **Skill:** `summarize`
- Fetching URL content for ingest/research

### Respond to a legal inquiry
- **Skill:** `legal-response`
- DSR, subpoena, NDA, vendor Q; templated reply with escalation checks

## Where to Find Details

### Architecture decisions
- `docs/DECISIONS.md`

### Sidebar & locale config
- `astro.config.mjs` (edit carefully)

