import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://kb-horeca.site',
  integrations: [
    starlight({
      title: 'HoReCa KB',
      description: 'Knowledge base for HoReCa IT services — hotels, restaurants, cafés',
      favicon: '/favicon.png',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ru: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/astra-agency/kb-horeca' },
      ],
      components: {
        Head: './src/components/Head.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/astra-agency/kb-horeca/edit/main/',
      },
      head: [
        {
          tag: 'script',
          content: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=109685688','ym');ym(109685688,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`,
        },
        {
          tag: 'noscript',
          content: '<div><img src="https://mc.yandex.ru/watch/109685688" style="position:absolute; left:-9999px;" alt="" /></div>',
        },
      ],
      sidebar: [
        {
          label: 'Home',
          translations: { ru: 'Главная' },
          items: [
            { label: 'Catalog', translations: { ru: 'Каталог' }, slug: 'index' },
          ],
        },
        {
          label: 'Hotels',
          translations: { ru: 'Отели' },
          items: [
            {
              label: 'Revenue Management',
              translations: { ru: 'Управление доходом' },
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'hotels/revenue' },
                { label: 'RevPAR, ADR, Occupancy', slug: 'hotels/revenue/revpar-adr-occupancy' },
                { label: 'Seasonality', translations: { ru: 'Сезонность' }, slug: 'hotels/revenue/seasonality' },
                { label: 'Direct Sales vs OTA', translations: { ru: 'Прямые продажи vs OTA' }, slug: 'hotels/revenue/direct-vs-ota' },
                { label: 'Upselling & Cross-Selling', translations: { ru: 'Upselling и cross-selling' }, slug: 'hotels/revenue/upselling' },
                { label: 'Rate Strategy', translations: { ru: 'Тарифная политика' }, slug: 'hotels/revenue/rate-strategy' },
              ],
            },
            {
              label: 'Staff',
              translations: { ru: 'Персонал' },
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'hotels/staff' },
                { label: 'Front Desk Scripts', translations: { ru: 'Скрипты ресепшена' }, slug: 'hotels/staff/front-desk-scripts' },
                { label: 'Hiring & Onboarding', translations: { ru: 'Найм и адаптация' }, slug: 'hotels/staff/hiring-onboarding' },
                { label: 'Retention & Motivation', translations: { ru: 'Удержание и мотивация' }, slug: 'hotels/staff/retention-motivation' },
              ],
            },
            {
              label: 'Guest Experience',
              translations: { ru: 'Гостевой опыт' },
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'hotels/guest-experience' },
                { label: 'Guest Cycle', translations: { ru: 'Гостевой цикл' }, slug: 'hotels/guest-experience/guest-cycle' },
                { label: 'Complaints', translations: { ru: 'Работа с жалобами' }, slug: 'hotels/guest-experience/complaints' },
                { label: 'Mystery Guest', slug: 'hotels/guest-experience/mystery-guest' },
                { label: 'Review Responses', translations: { ru: 'Ответы на отзывы' }, slug: 'hotels/guest-experience/review-responses' },
              ],
            },
            {
              label: 'Operations',
              translations: { ru: 'Операции' },
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'hotels/operations' },
                { label: 'Housekeeping', translations: { ru: 'Хаускипинг' }, slug: 'hotels/operations/housekeeping' },
                { label: 'Lobby & Breakfast', translations: { ru: 'Лобби и завтрак' }, slug: 'hotels/operations/lobby-breakfast' },
                { label: 'Corporate Clients', translations: { ru: 'Корпоративные клиенты' }, slug: 'hotels/operations/corporate-clients' },
              ],
            },
          ],
        },
        {
          label: 'Restaurants',
          translations: { ru: 'Рестораны' },
          items: [
            {
              label: 'Menu & Economics',
              translations: { ru: 'Меню и экономика' },
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'restaurants/menu' },
                { label: 'Menu Engineering', translations: { ru: 'Инжиниринг меню' }, slug: 'restaurants/menu/menu-engineering' },
                { label: 'Food Cost & Pricing', translations: { ru: 'Себестоимость и цены' }, slug: 'restaurants/menu/food-cost-pricing' },
                { label: 'Stop List', translations: { ru: 'Стоп-лист' }, slug: 'restaurants/menu/stop-list' },
                { label: 'Seasonal Menu', translations: { ru: 'Сезонное меню' }, slug: 'restaurants/menu/seasonal-menu' },
              ],
            },
            {
              label: 'Staff',
              translations: { ru: 'Персонал' },
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'restaurants/staff' },
                { label: 'Service Standards', translations: { ru: 'Стандарты обслуживания' }, slug: 'restaurants/staff/service-standards' },
                { label: 'Motivation & KPI', translations: { ru: 'Мотивация и KPI' }, slug: 'restaurants/staff/motivation-kpi' },
              ],
            },
            {
              label: 'Operations',
              translations: { ru: 'Операции' },
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'restaurants/operations' },
                { label: 'Table Turnover', translations: { ru: 'Оборачиваемость столов' }, slug: 'restaurants/operations/table-turnover' },
                { label: 'Reservations', translations: { ru: 'Бронирование столов' }, slug: 'restaurants/operations/reservations' },
                { label: 'Banquets & Events', translations: { ru: 'Банкеты и мероприятия' }, slug: 'restaurants/operations/banquets' },
              ],
            },
            {
              label: 'Guest Experience',
              translations: { ru: 'Гостевой опыт' },
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'restaurants/guest-experience' },
                { label: 'Regular Guests', translations: { ru: 'Постоянные гости' }, slug: 'restaurants/guest-experience/regular-guests' },
                { label: 'Complaints', translations: { ru: 'Работа с жалобами' }, slug: 'restaurants/guest-experience/complaints' },
                { label: 'Atmosphere', translations: { ru: 'Атмосфера' }, slug: 'restaurants/guest-experience/atmosphere' },
              ],
            },
          ],
        },
        {
          label: 'Cases',
          translations: { ru: 'Кейсы' },
          items: [
            { label: 'All Cases', translations: { ru: 'Все кейсы' }, slug: 'cases' },
            {
              label: 'CRM & Sales',
              translations: { ru: 'CRM и продажи' },
              items: [
                { label: 'CRM Setup', translations: { ru: 'Внедрение CRM' }, slug: 'cases/crm-setup' },
                { label: 'PMS/CRM Integration', translations: { ru: 'Интеграция CRM с PMS/POS' }, slug: 'cases/pms-crm-integration' },
                { label: 'Personalized Proposals', translations: { ru: 'Персонализированные КП' }, slug: 'cases/personalized-proposals' },
                { label: 'Online Payment Link', translations: { ru: 'Онлайн-оплата по ссылке' }, slug: 'cases/online-payment-link' },
              ],
            },
            {
              label: 'Loyalty & Guest Experience',
              translations: { ru: 'Лояльность и гостевой опыт' },
              items: [
                { label: 'Loyalty Program', translations: { ru: 'Программа лояльности' }, slug: 'cases/loyalty-program' },
                { label: 'Referral System', translations: { ru: 'Реферальная система' }, slug: 'cases/referral-system' },
                { label: 'Guest Portal', translations: { ru: 'Личный кабинет гостя' }, slug: 'cases/guest-portal' },
              ],
            },
            {
              label: 'Booking & Pricing',
              translations: { ru: 'Бронирование и ценообразование' },
              items: [
                { label: 'Booking Engine', translations: { ru: 'Модуль онлайн-бронирования' }, slug: 'cases/booking-engine' },
                { label: 'RMS — Dynamic Pricing', translations: { ru: 'RMS — динамические цены' }, slug: 'cases/rms-dynamic-pricing' },
                { label: 'Rate Shopper', slug: 'cases/rate-shopper' },
              ],
            },
            {
              label: 'Department Automation',
              translations: { ru: 'Автоматизация департаментов' },
              items: [
                { label: 'HR Processes', translations: { ru: 'HR-процессы' }, slug: 'cases/hr-automation' },
                { label: 'Legal Department', translations: { ru: 'Юридический отдел' }, slug: 'cases/legal-automation' },
                { label: 'Marketing & Feedback', translations: { ru: 'Маркетинг и обратная связь' }, slug: 'cases/marketing-feedback-automation' },
              ],
            },
            {
              label: 'Mobile & Kiosk Solutions',
              translations: { ru: 'Мобильные и терминальные решения' },
              items: [
                { label: 'Staff Mobile App', translations: { ru: 'Приложение для персонала' }, slug: 'cases/staff-mobile-app' },
                { label: 'Self-Service Kiosks', translations: { ru: 'Киоски самообслуживания' }, slug: 'cases/kiosk-apps' },
              ],
            },
            {
              label: 'Operations & Supply Chain',
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Inventory Management', slug: 'cases/inventory-management' },
                { label: 'Vendor Management', slug: 'cases/vendor-management' },
                { label: 'Logistics Optimization', slug: 'cases/logistics-optimization' },
              ],
            },
            {
              label: 'Staff & Compliance',
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Employee Training', slug: 'cases/employee-training' },
                { label: 'Compliance & Risk', slug: 'cases/compliance-risk' },
              ],
            },
            {
              label: 'Finance & IT',
              badge: { text: 'EN', variant: 'tip' },
              items: [
                { label: 'Financial Management', slug: 'cases/financial-management' },
                { label: 'IT Infrastructure', slug: 'cases/it-infrastructure' },
              ],
            },
          ],
        },
        {
          label: 'Services',
          translations: { ru: 'Сервисы' },
          items: [
            { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'services' },
            {
              label: 'Hotels — IT',
              translations: { ru: 'Отели — IT' },
              badge: { text: 'RU', variant: 'caution' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'hotels' },
                { label: 'Website & Online Booking', translations: { ru: 'Сайт и онлайн-бронирование' }, slug: 'hotels/website-booking' },
                {
                  label: 'PMS — Property Management',
                  translations: { ru: 'PMS — системы управления' },
                  items: [
                    { label: 'PMS Overview', translations: { ru: 'Обзор PMS' }, slug: 'hotels/pms' },
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
                { label: 'Reputation Management', translations: { ru: 'Репутационный менеджмент' }, slug: 'hotels/reputation' },
                { label: 'CRM & Sales Management', translations: { ru: 'CRM и управление продажами' }, slug: 'hotels/crm' },
              ],
            },
            {
              label: 'Restaurants — IT',
              translations: { ru: 'Рестораны — IT' },
              badge: { text: 'RU', variant: 'caution' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор' }, slug: 'restaurants' },
                {
                  label: 'POS Systems',
                  translations: { ru: 'POS-системы' },
                  items: [
                    { label: 'POS Overview', translations: { ru: 'Обзор POS' }, slug: 'restaurants/pos' },
                    { label: 'iiko', slug: 'restaurants/pos/iiko' },
                    { label: 'r_keeper', slug: 'restaurants/pos/rkeeper' },
                    { label: 'Poster', slug: 'restaurants/pos/poster' },
                    { label: 'iiko vs r_keeper', slug: 'restaurants/pos/iiko-vs-rkeeper' },
                  ],
                },
                { label: 'Delivery & Aggregators', translations: { ru: 'Доставка и агрегаторы' }, slug: 'restaurants/delivery' },
                { label: 'Loyalty Programs', translations: { ru: 'Программы лояльности' }, slug: 'restaurants/loyalty' },
                { label: 'Table Reservations', translations: { ru: 'Резервация столиков' }, slug: 'restaurants/reservation' },
              ],
            },
          ],
        },
        {
          label: 'Russian Regulations',
          translations: { ru: 'Регуляторика РФ' },
          badge: { text: 'RU', variant: 'caution' },
          items: [
            { label: '54-FZ — Online Cash Registers', translations: { ru: '54-ФЗ — онлайн-кассы' }, slug: 'regulations/54-fz' },
            { label: 'EGAIS — Alcohol Tracking', translations: { ru: 'ЕГАИС — учёт алкоголя' }, slug: 'regulations/egais' },
            { label: 'Guest Registration with Police', translations: { ru: 'Регистрация гостей в МВД' }, slug: 'regulations/fms-hotels' },
          ],
        },
        {
          label: 'Trends',
          translations: { ru: 'Тренды' },
          badge: { text: 'RU', variant: 'caution' },
          items: [
            { label: 'HoReCa IT Market 2025–2026', translations: { ru: 'Рынок HoReCa IT 2025–2026' }, slug: 'trends/market-2026' },
          ],
        },
        {
          label: 'Selection Guides',
          translations: { ru: 'Гайды по выбору' },
          badge: { text: 'RU', variant: 'caution' },
          items: [
            { label: 'How to Choose a POS', translations: { ru: 'Как выбрать POS-систему' }, slug: 'guides/how-to-choose-pos' },
            { label: 'How to Choose a PMS', translations: { ru: 'Как выбрать PMS для отеля' }, slug: 'guides/how-to-choose-pms' },
          ],
        },
        {
          label: 'Operations',
          translations: { ru: 'Операции' },
          badge: { text: 'RU', variant: 'caution' },
          items: [
            { label: 'Quick Start', translations: { ru: 'Быстрый старт' }, slug: 'guides/quick-start' },
            { label: 'Front of House', translations: { ru: 'Зал — работа персонала' }, slug: 'guides/front-of-house' },
            { label: 'Back of House', translations: { ru: 'Кухня — работа персонала' }, slug: 'guides/back-of-house' },
            { label: 'Inventory Management', translations: { ru: 'Управление запасами' }, slug: 'guides/inventory' },
            { label: 'Staff Management', translations: { ru: 'Управление персоналом' }, slug: 'guides/staff' },
          ],
        },
        {
          label: 'Sanitation & Licensing',
          translations: { ru: 'Санитария и лицензирование' },
          badge: { text: 'RU', variant: 'caution' },
          items: [
            { label: 'Food Safety Standards', translations: { ru: 'Стандарты пищевой безопасности' }, slug: 'guides/food-safety' },
            { label: 'Health & Hygiene', translations: { ru: 'Санитария и гигиена' }, slug: 'guides/health-hygiene' },
            { label: 'Licensing & Regulations', translations: { ru: 'Лицензирование и регуляторика' }, slug: 'guides/licensing' },
          ],
        },
        {
          label: 'Reference',
          translations: { ru: 'Справочник' },
          badge: { text: 'RU', variant: 'caution' },
          items: [
            { label: 'Integration Map', translations: { ru: 'Карта интеграций' }, slug: 'reference/integrations' },
            { label: 'Glossary', translations: { ru: 'Глоссарий' }, slug: 'reference/glossary' },
            { label: 'Checklists', translations: { ru: 'Чеклисты' }, slug: 'reference/checklists' },
          ],
        },
      ],
    }),
  ],
});
