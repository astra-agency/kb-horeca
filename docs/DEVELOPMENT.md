# Developer Guide

## Tech Stack

| Layer | Stack |
|-------|-------|
| Generator | [Astro](https://astro.build) 6 |
| Theme | [Starlight](https://starlight.astro.build) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Domain | [kb-horeca.site](https://kb-horeca.site) |

## Getting Started

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Content Structure

```
src/content/docs/       ← EN (root locale, no URL prefix)
├── index.mdx
├── hotels/
│   ├── revenue/
│   ├── staff/
│   ├── guest-experience/
│   ├── operations/
│   └── pms/
├── restaurants/
│   ├── menu/
│   ├── staff/
│   ├── operations/
│   ├── guest-experience/
│   └── pos/
├── cases/
├── services/
├── guides/
├── reference/
├── regulations/
└── trends/
src/content/docs/ru/    ← RU locale (/ru/ prefix)
├── index.mdx
├── hotels/
└── restaurants/
```

## i18n

- **Default locale:** `root` (English)
- **Russian locale:** `ru` with `/ru/` URL prefix
- Convention: `.md` files in `ru/` mirror the English structure

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

## Configuration

Main config: [`astro.config.mjs`](../astro.config.mjs) — defines Starlight with dual locales, sidebar, social links, and Head component.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
