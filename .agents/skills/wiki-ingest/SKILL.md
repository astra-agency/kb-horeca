---
name: wiki-ingest
description: Use when adding a new source (file or URL) into the HoReCa knowledge base with synthesis, cross-linking, index updates, and log bookkeeping.
---

# Wiki Ingest

Compile a new source into the persistent wiki. **База знаний сфокусирована на HoReCa IT-сервисах и операциях.** Источники адаптируются под контекст гостинично-ресторанного бизнеса.

## Pre-condition

0. **⚠️ Всегда `summarize` для URL:** `summarize "URL" --extract --format md`. Не используй `web_fetch` или `browser`.
1. **Проверить `inbox/`:** если в `inbox/` есть файлы — перенести их в `raw/YYYY/MMDD/` (текущая дата), затем инжестить оттуда.
2. Read `src/content/docs/index.md` first.
3. Read related existing pages before writing.
4. Confirm source location:
   - **Inbox:** `inbox/` → переместить в `raw/YYYY/MMDD/` (первичная проверка)
   - **Local:** `raw/YYYY/MMDD/filename.{md,pdf}` — date-organized, immutable
   - **URL:** fetch with `summarize "URL" --extract --format md` (primary), fallback to `web_fetch` or `skills/jina-ai/extract.mjs`
5. If source is a URL, extract and save it to `raw/YYYY/MMDD/` (using current date), then ingest from that local copy.

## Process

1. Read the source fully.
2. Adapt source to HoReCa context — если источник общий (IT, SaaS, hospitality-общий), адаптируй под специфику ресторанов/отелей/кафе. Используй web_search для уточнений.
3. Present key takeaways to user before writing:
- 3-5 main points.
- What to emphasize/de-emphasize.
- Potential contradictions with existing pages.
3. Create or update relevant pages in the correct category folder.
4. Add or update cross-references in both directions.
5. Update `src/content/docs/index.md` entries.
6. Append `./LOG.md` (in English):
   - `## [YYYY-MM-DD] ingest | <source title>`
7. Report all touched files.

## Placement Heuristic

- Core concepts -> `how-to/`
- FAQ/comparisons -> `faq/`
- Plugin-specific -> `plugins/`
- Theme-specific -> `themes/`
- Security -> `security/`
- Performance -> `performance/`
- Reusable recipes -> `snippets/`

If none fit, propose a new category before creating it.

## Quality Bar

- Wiki content in ru-RU.
- No copy-paste dumps from source; synthesize.
- Every new page has frontmatter (`title`, `description`).
- Do NOT start pages with an `# H1` heading; Starlight renders frontmatter `title` as H1. Start content from `##`.
- **«Материалы и источники» обязательны:** каждая страница заканчивается ссылкой на оригинальный URL. Внешние ссылки автоматически получают `target="_blank"` при сборке — в исходниках пиши обычный markdown: `[текст](https://...)`.
- **Ссылки всегда с `.md`:** все относительные ссылки на wiki-страницы пиши с расширением `.md` (напр. `[text](./page.md)`). Для index-файлов: `./category/index.md`. НИКОГДА не пиши без `.md` или с `/` в конце. Плагин `remarkStripMdLinks` сам уберёт расширения при сборке.
- Backlink pass is mandatory.

## Done Criteria

- Pages created/updated.
- Cross-links reconciled.
- `index.md` updated.
- `LOG.md` appended.
