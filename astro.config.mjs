import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://kb-horeca.pages.dev',
  integrations: [
    starlight({
      title: 'HoReCa Knowledge Base',
      description: 'Knowledge base for Hotels, Restaurants and Cafes',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      social: [],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'index' },
            { label: 'Quick Start', slug: 'guides/quick-start' },
          ],
        },
        {
          label: 'Operations',
          items: [
            { label: 'Front of House', slug: 'guides/front-of-house' },
            { label: 'Back of House', slug: 'guides/back-of-house' },
            { label: 'Inventory Management', slug: 'guides/inventory' },
            { label: 'Staff Management', slug: 'guides/staff' },
          ],
        },
        {
          label: 'Compliance & Safety',
          items: [
            { label: 'Food Safety Standards', slug: 'guides/food-safety' },
            { label: 'Health & Hygiene', slug: 'guides/health-hygiene' },
            { label: 'Licensing & Regulations', slug: 'guides/licensing' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Glossary', slug: 'reference/glossary' },
            { label: 'Checklists', slug: 'reference/checklists' },
          ],
        },
      ],
    }),
  ],
});
