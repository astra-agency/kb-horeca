import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://astra-agency.github.io',
  base: '/kb-horeca',
  integrations: [
    starlight({
      title: 'HoReCa KB',
      description: 'База знаний по ИТ-сервисам для HoReCa',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      social: [],
      sidebar: [
        {
          label: 'Главная',
          items: [
            { label: 'Каталог', slug: 'index' },
          ],
        },
        {
          label: 'Отели и гостиницы',
          items: [
            { label: 'Обзор', slug: 'hotels' },
            { label: 'Сайт и онлайн-бронирование', slug: 'hotels/website-booking' },
            {
              label: 'PMS — системы управления',
              items: [
                { label: 'Обзор PMS', slug: 'hotels/pms' },
                { label: 'TravelLine', slug: 'hotels/pms/travelline' },
                { label: 'Bnovo', slug: 'hotels/pms/bnovo' },
                { label: 'Контур.Отель', slug: 'hotels/pms/kontur-hotel' },
                { label: 'Saby Hotel', slug: 'hotels/pms/saby-hotel' },
                { label: 'Logus HMS', slug: 'hotels/pms/logus-hms' },
              ],
            },
            { label: 'Channel Manager', slug: 'hotels/channel-manager' },
            { label: 'Репутационный менеджмент', slug: 'hotels/reputation' },
            { label: 'CRM и управление продажами', slug: 'hotels/crm' },
          ],
        },
        {
          label: 'Рестораны и кафе',
          items: [
            { label: 'Обзор', slug: 'restaurants' },
          ],
        },
        {
          label: 'Сервисы',
          items: [
            { label: 'Обзор', slug: 'services' },
          ],
        },
        {
          label: 'Operations',
          items: [
            { label: 'Quick Start', slug: 'guides/quick-start' },
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
