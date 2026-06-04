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
                { label: 'MaxiBooking', slug: 'hotels/pms/maxibooking' },
                { label: 'TravelLine vs Bnovo', slug: 'hotels/pms/travelline-vs-bnovo' },
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
            {
              label: 'POS-системы',
              items: [
                { label: 'Обзор POS', slug: 'restaurants/pos' },
                { label: 'iiko', slug: 'restaurants/pos/iiko' },
                { label: 'r_keeper', slug: 'restaurants/pos/rkeeper' },
                { label: 'Poster', slug: 'restaurants/pos/poster' },
                { label: 'iiko vs r_keeper', slug: 'restaurants/pos/iiko-vs-rkeeper' },
              ],
            },
            { label: 'Доставка и агрегаторы', slug: 'restaurants/delivery' },
            { label: 'Программы лояльности', slug: 'restaurants/loyalty' },
            { label: 'Резервация столиков', slug: 'restaurants/reservation' },
          ],
        },
        {
          label: 'Сервисы',
          items: [
            { label: 'Обзор', slug: 'services' },
          ],
        },
        {
          label: 'Регуляторика РФ',
          items: [
            { label: '54-ФЗ — онлайн-кассы', slug: 'regulations/54-fz' },
            { label: 'ЕГАИС — учёт алкоголя', slug: 'regulations/egais' },
            { label: 'Регистрация гостей в МВД', slug: 'regulations/fms-hotels' },
          ],
        },
        {
          label: 'Тренды',
          items: [
            { label: 'Рынок HoReCa IT 2025–2026', slug: 'trends/market-2026' },
          ],
        },
        {
          label: 'Гайды по выбору',
          items: [
            { label: 'Как выбрать POS-систему', slug: 'guides/how-to-choose-pos' },
            { label: 'Как выбрать PMS для отеля', slug: 'guides/how-to-choose-pms' },
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
          label: 'Справочник',
          items: [
            { label: 'Карта интеграций', slug: 'reference/integrations' },
            { label: 'Glossary', slug: 'reference/glossary' },
            { label: 'Checklists', slug: 'reference/checklists' },
          ],
        },
      ],
    }),
  ],
});
