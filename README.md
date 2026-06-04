# kb-horeca

A knowledge base for the **HoReCa** (Hotels, Restaurants, and Cafés) industry, built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v7 or higher

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

Build the site for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
kb-horeca/
├── astro.config.mjs        # Astro + Starlight configuration
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    └── content/
        ├── config.ts
        └── docs/
            ├── index.mdx           # Home page
            ├── guides/
            │   ├── quick-start.md
            │   ├── front-of-house.md
            │   ├── back-of-house.md
            │   ├── inventory.md
            │   ├── staff.md
            │   ├── food-safety.md
            │   ├── health-hygiene.md
            │   └── licensing.md
            └── reference/
                ├── glossary.md
                └── checklists.md
```

## Content

The knowledge base covers:

- **Operations** — Front of house, back of house, inventory, and staff management
- **Compliance & Safety** — Food safety (HACCP), health & hygiene, and licensing
- **Reference** — Glossary and operational checklists
