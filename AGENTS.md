# AGENTS.md — kb-horeca

> Public knowledge base for HoReCa IT services & operations. Astro + Starlight, 3 locales (EN/RU/ZH), GitHub Pages.

## Project Identity

- **Site:** [kb-horeca.site](https://kb-horeca.site)
- **Repo:** `git@github.com:astra-agency/kb-horeca.git`
- **Stack:** Astro 6.4.4 + Starlight 0.39.3
- **Hosting:** GitHub Pages via GitHub Actions
- **Languages:** EN (root) + RU (`/ru/`) + ZH (`/zh/`)

## ⚠️ Critical Rules

1. **Never without explicit user request:** no commit/push, no deleting content, no pages outside plan/sidebar.
2. **Internal links:** absolute, no `.md`, trailing `/` — e.g. `/hotels/crm/`. Details: `kb-conventions` memory.
3. **YAML frontmatter:** quote any `title:`/`description:` containing `: `. Details: `kb-conventions` memory.
4. **Sidebar slugs:** use folder name, not `index` — `{ slug: 'hotels' }`. Details: `kb-conventions` memory.
5. **New page:** create file in locale folder → add to sidebar in `astro.config.mjs` with `translations` (`ru`, `zh`) → match `slug:` to file path. Details: `kb-conventions` memory.
6. **Content language:** new content in RU; don't touch existing EN (guides/, reference/).

## Logger

All changes are tracked in `LOG.md` (project root). Rules:

1. **Language:** entries in **English**. Wiki page content stays ru-RU; only the log is English.
2. **Append-only, newest first:** new entries go at the top, right under `# LOG` / `from latest to earliest.`. Never rewrite or delete past entries.
3. **Entry format:**
   ```
   ## [YYYY-MM-DD]

   - <operation> | <short summary>
     - <file> — <what changed>
     - <file> — <what changed>
   ```
   `<operation>` is one of: `init`, `ingest`, `update`, `lint`, `query`, `fix`, `refactor`, `docs`.
4. **When to log:** every session that touches content, config, or docs — including changes to `AGENTS.md` itself, skills, and memory files.
5. **One file per change:** list each touched file as a sub-bullet. Group related files under a single operation line.
6. **No log for:** pure whitespace/formatting fixes with no semantic change, or `raw/` source files (immutable).

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
- `.agents/DECISIONS.md`

### Sidebar & locale config
- `astro.config.mjs` (edit carefully)

