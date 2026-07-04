---
id: kb_conventions
title: kb-horeca content conventions — links, frontmatter, sidebar, new pages
importance: high
tags: kb-horeca, conventions, links, frontmatter, sidebar
---

# kb-horeca Content Conventions

Technical rules for creating and editing pages in this knowledge base.

## Internal Links — ABSOLUTE, no `.md`, trailing `/`

```
❌ [text](./delivery.md)
❌ [text](../crm.md)
❌ [text](/hotels/crm)            ← missing trailing /

✅ [text](/kb-horeca/hotels/crm/)         ← for GitHub Pages subdirectory
✅ [text](/hotels/crm/)                   ← for custom domain (current)
```

**Rule:** always absolute path + slug without extension + trailing `/`.

## YAML Frontmatter — Quote Values with `: `

Any `title:` or `description:` containing `: ` (colon+space) MUST be double-quoted.

```yaml
❌ title: Гостевой цикл: от бронирования до визита
✅ title: "Гостевой цикл: от бронирования до визита"
```

## Sidebar Slugs — Folders, Not Index Files

For `index.md` inside a folder, use the folder name as the slug:
```js
❌ { slug: 'hotels/index' }
✅ { slug: 'hotels' }           // for hotels/index.md
```
Starlight resolves `index.md` → parent folder slug automatically.

## Adding a New Page

1. Create the `.md`/`.mdx` file in the correct locale folder
2. Add it to the sidebar in `astro.config.mjs` (with `translations` for all locales: `ru`, `zh`)
3. Use `slug:` matching the file path without extension

## Content Language

- New content: **Russian (RU)** unless specified otherwise
- Existing EN content (guides/, reference/) — do not touch
