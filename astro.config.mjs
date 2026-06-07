import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://kb-horeca.site',
  integrations: [
    starlight({
      title: 'HoReCa KB',
      description: 'База знаний по ИТ-сервисам для HoReCa',
      favicon: '/favicon.png',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
        en: {
          label: 'English',
          lang: 'en',
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
          label: 'Главная',
          translations: { en: 'Home' },
          items: [
            { label: 'Каталог', translations: { en: 'Catalog' }, slug: 'index' },
          ],
        },
        {
          label: 'Отели',
          translations: { en: 'Hotels' },
          items: [
            {
              label: 'Управление доходом',
              translations: { en: 'Revenue Management' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'hotels/revenue' },
                { label: 'RevPAR, ADR, Occupancy', slug: 'hotels/revenue/revpar-adr-occupancy' },
                { label: 'Сезонность', translations: { en: 'Seasonality' }, slug: 'hotels/revenue/seasonality' },
                { label: 'Прямые продажи vs OTA', translations: { en: 'Direct Sales vs OTA' }, slug: 'hotels/revenue/direct-vs-ota' },
                { label: 'Upselling и cross-selling', slug: 'hotels/revenue/upselling' },
                { label: 'Тарифная политика', translations: { en: 'Rate Strategy' }, slug: 'hotels/revenue/rate-strategy' },
              ],
            },
            {
              label: 'Персонал',
              translations: { en: 'Staff' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'hotels/staff' },
                { label: 'Скрипты ресепшена', translations: { en: 'Front Desk Scripts' }, slug: 'hotels/staff/front-desk-scripts' },
                { label: 'Найм и адаптация', translations: { en: 'Hiring & Onboarding' }, slug: 'hotels/staff/hiring-onboarding' },
                { label: 'Удержание и мотивация', translations: { en: 'Retention & Motivation' }, slug: 'hotels/staff/retention-motivation' },
              ],
            },
            {
              label: 'Гостевой опыт',
              translations: { en: 'Guest Experience' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'hotels/guest-experience' },
                { label: 'Гостевой цикл', translations: { en: 'Guest Cycle' }, slug: 'hotels/guest-experience/guest-cycle' },
                { label: 'Работа с жалобами', translations: { en: 'Complaints' }, slug: 'hotels/guest-experience/complaints' },
                { label: 'Mystery Guest', slug: 'hotels/guest-experience/mystery-guest' },
                { label: 'Ответы на отзывы', translations: { en: 'Review Responses' }, slug: 'hotels/guest-experience/review-responses' },
              ],
            },
            {
              label: 'Операции',
              translations: { en: 'Operations' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'hotels/operations' },
                { label: 'Хаускипинг', translations: { en: 'Housekeeping' }, slug: 'hotels/operations/housekeeping' },
                { label: 'Лобби и завтрак', translations: { en: 'Lobby & Breakfast' }, slug: 'hotels/operations/lobby-breakfast' },
                { label: 'Корпоративные клиенты', translations: { en: 'Corporate Clients' }, slug: 'hotels/operations/corporate-clients' },
              ],
            },
          ],
        },
        {
          label: 'Рестораны',
          translations: { en: 'Restaurants' },
          items: [
            {
              label: 'Меню и экономика',
              translations: { en: 'Menu & Economics' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'restaurants/menu' },
                { label: 'Инжиниринг меню', translations: { en: 'Menu Engineering' }, slug: 'restaurants/menu/menu-engineering' },
                { label: 'Себестоимость и цены', translations: { en: 'Food Cost & Pricing' }, slug: 'restaurants/menu/food-cost-pricing' },
                { label: 'Стоп-лист', translations: { en: 'Stop List' }, slug: 'restaurants/menu/stop-list' },
                { label: 'Сезонное меню', translations: { en: 'Seasonal Menu' }, slug: 'restaurants/menu/seasonal-menu' },
              ],
            },
            {
              label: 'Персонал',
              translations: { en: 'Staff' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'restaurants/staff' },
                { label: 'Стандарты обслуживания', translations: { en: 'Service Standards' }, slug: 'restaurants/staff/service-standards' },
                { label: 'Мотивация и KPI', translations: { en: 'Motivation & KPI' }, slug: 'restaurants/staff/motivation-kpi' },
              ],
            },
            {
              label: 'Операции',
              translations: { en: 'Operations' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'restaurants/operations' },
                { label: 'Оборачиваемость столов', translations: { en: 'Table Turnover' }, slug: 'restaurants/operations/table-turnover' },
                { label: 'Бронирование столов', translations: { en: 'Reservations' }, slug: 'restaurants/operations/reservations' },
                { label: 'Банкеты и мероприятия', translations: { en: 'Banquets & Events' }, slug: 'restaurants/operations/banquets' },
              ],
            },
            {
              label: 'Гостевой опыт',
              translations: { en: 'Guest Experience' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'restaurants/guest-experience' },
                { label: 'Постоянные гости', translations: { en: 'Regular Guests' }, slug: 'restaurants/guest-experience/regular-guests' },
                { label: 'Работа с жалобами', translations: { en: 'Complaints' }, slug: 'restaurants/guest-experience/complaints' },
                { label: 'Атмосфера', translations: { en: 'Atmosphere' }, slug: 'restaurants/guest-experience/atmosphere' },
              ],
            },
          ],
        },
        {
          label: 'Кейсы',
          translations: { en: 'Cases' },
          items: [
            { label: 'Все кейсы', translations: { en: 'All Cases' }, slug: 'cases' },
            {
              label: 'CRM и продажи',
              translations: { en: 'CRM & Sales' },
              items: [
                { label: 'Внедрение CRM', translations: { en: 'CRM Setup' }, slug: 'cases/crm-setup' },
                { label: 'Интеграция CRM с PMS/POS', translations: { en: 'PMS/CRM Integration' }, slug: 'cases/pms-crm-integration' },
                { label: 'Персонализированные КП', translations: { en: 'Personalized Proposals' }, slug: 'cases/personalized-proposals' },
                { label: 'Онлайн-оплата по ссылке', translations: { en: 'Online Payment Link' }, slug: 'cases/online-payment-link' },
              ],
            },
            {
              label: 'Лояльность и гостевой опыт',
              translations: { en: 'Loyalty & Guest Experience' },
              items: [
                { label: 'Программа лояльности', translations: { en: 'Loyalty Program' }, slug: 'cases/loyalty-program' },
                { label: 'Реферальная система', translations: { en: 'Referral System' }, slug: 'cases/referral-system' },
                { label: 'Личный кабинет гостя', translations: { en: 'Guest Portal' }, slug: 'cases/guest-portal' },
              ],
            },
            {
              label: 'Бронирование и ценообразование',
              translations: { en: 'Booking & Pricing' },
              items: [
                { label: 'Модуль онлайн-бронирования', translations: { en: 'Booking Engine' }, slug: 'cases/booking-engine' },
                { label: 'RMS — динамические цены', translations: { en: 'RMS — Dynamic Pricing' }, slug: 'cases/rms-dynamic-pricing' },
                { label: 'Rate Shopper', slug: 'cases/rate-shopper' },
              ],
            },
            {
              label: 'Автоматизация департаментов',
              translations: { en: 'Department Automation' },
              items: [
                { label: 'HR-процессы', translations: { en: 'HR Processes' }, slug: 'cases/hr-automation' },
                { label: 'Юридический отдел', translations: { en: 'Legal Department' }, slug: 'cases/legal-automation' },
                { label: 'Маркетинг и обратная связь', translations: { en: 'Marketing & Feedback' }, slug: 'cases/marketing-feedback-automation' },
              ],
            },
            {
              label: 'Мобильные и терминальные решения',
              translations: { en: 'Mobile & Kiosk Solutions' },
              items: [
                { label: 'Приложение для персонала', translations: { en: 'Staff Mobile App' }, slug: 'cases/staff-mobile-app' },
                { label: 'Киоски самообслуживания', translations: { en: 'Self-Service Kiosks' }, slug: 'cases/kiosk-apps' },
              ],
            },
            {
              label: 'Operations & Supply Chain',
              items: [
                { label: 'Inventory Management', slug: 'cases/inventory-management' },
                { label: 'Vendor Management', slug: 'cases/vendor-management' },
                { label: 'Logistics Optimization', slug: 'cases/logistics-optimization' },
              ],
            },
            {
              label: 'Staff & Compliance',
              items: [
                { label: 'Employee Training', slug: 'cases/employee-training' },
                { label: 'Compliance & Risk', slug: 'cases/compliance-risk' },
              ],
            },
            {
              label: 'Finance & IT',
              items: [
                { label: 'Financial Management', slug: 'cases/financial-management' },
                { label: 'IT Infrastructure', slug: 'cases/it-infrastructure' },
              ],
            },
          ],
        },
        {
          label: 'Сервисы',
          translations: { en: 'Services' },
          items: [
            { label: 'Обзор', translations: { en: 'Overview' }, slug: 'services' },
            {
              label: 'Отели — IT',
              translations: { en: 'Hotels — IT' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'hotels' },
                { label: 'Сайт и онлайн-бронирование', translations: { en: 'Website & Online Booking' }, slug: 'hotels/website-booking' },
                {
                  label: 'PMS — системы управления',
                  translations: { en: 'PMS — Property Management' },
                  items: [
                    { label: 'Обзор PMS', translations: { en: 'PMS Overview' }, slug: 'hotels/pms' },
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
                { label: 'Репутационный менеджмент', translations: { en: 'Reputation Management' }, slug: 'hotels/reputation' },
                { label: 'CRM и управление продажами', translations: { en: 'CRM & Sales Management' }, slug: 'hotels/crm' },
              ],
            },
            {
              label: 'Рестораны — IT',
              translations: { en: 'Restaurants — IT' },
              items: [
                { label: 'Обзор', translations: { en: 'Overview' }, slug: 'restaurants' },
                {
                  label: 'POS-системы',
                  translations: { en: 'POS Systems' },
                  items: [
                    { label: 'Обзор POS', translations: { en: 'POS Overview' }, slug: 'restaurants/pos' },
                    { label: 'iiko', slug: 'restaurants/pos/iiko' },
                    { label: 'r_keeper', slug: 'restaurants/pos/rkeeper' },
                    { label: 'Poster', slug: 'restaurants/pos/poster' },
                    { label: 'iiko vs r_keeper', slug: 'restaurants/pos/iiko-vs-rkeeper' },
                  ],
                },
                { label: 'Доставка и агрегаторы', translations: { en: 'Delivery & Aggregators' }, slug: 'restaurants/delivery' },
                { label: 'Программы лояльности', translations: { en: 'Loyalty Programs' }, slug: 'restaurants/loyalty' },
                { label: 'Резервация столиков', translations: { en: 'Table Reservations' }, slug: 'restaurants/reservation' },
              ],
            },
          ],
        },
        {
          label: 'Регуляторика РФ',
          translations: { en: 'Russian Regulations' },
          items: [
            { label: '54-ФЗ — онлайн-кассы', translations: { en: '54-FZ — Online Cash Registers' }, slug: 'regulations/54-fz' },
            { label: 'ЕГАИС — учёт алкоголя', translations: { en: 'EGAIS — Alcohol Tracking' }, slug: 'regulations/egais' },
            { label: 'Регистрация гостей в МВД', translations: { en: 'Guest Registration with Police' }, slug: 'regulations/fms-hotels' },
          ],
        },
        {
          label: 'Тренды',
          translations: { en: 'Trends' },
          items: [
            { label: 'Рынок HoReCa IT 2025–2026', translations: { en: 'HoReCa IT Market 2025–2026' }, slug: 'trends/market-2026' },
          ],
        },
        {
          label: 'Гайды по выбору',
          translations: { en: 'Selection Guides' },
          items: [
            { label: 'Как выбрать POS-систему', translations: { en: 'How to Choose a POS' }, slug: 'guides/how-to-choose-pos' },
            { label: 'Как выбрать PMS для отеля', translations: { en: 'How to Choose a PMS' }, slug: 'guides/how-to-choose-pms' },
          ],
        },
        {
          label: 'Операции',
          translations: { en: 'Operations' },
          items: [
            { label: 'Быстрый старт', translations: { en: 'Quick Start' }, slug: 'guides/quick-start' },
            { label: 'Зал — работа персонала', translations: { en: 'Front of House' }, slug: 'guides/front-of-house' },
            { label: 'Кухня — работа персонала', translations: { en: 'Back of House' }, slug: 'guides/back-of-house' },
            { label: 'Управление запасами', translations: { en: 'Inventory Management' }, slug: 'guides/inventory' },
            { label: 'Управление персоналом', translations: { en: 'Staff Management' }, slug: 'guides/staff' },
          ],
        },
        {
          label: 'Санитария и лицензирование',
          translations: { en: 'Sanitation & Licensing' },
          items: [
            { label: 'Стандарты пищевой безопасности', translations: { en: 'Food Safety Standards' }, slug: 'guides/food-safety' },
            { label: 'Санитария и гигиена', translations: { en: 'Health & Hygiene' }, slug: 'guides/health-hygiene' },
            { label: 'Лицензирование и регуляторика', translations: { en: 'Licensing & Regulations' }, slug: 'guides/licensing' },
          ],
        },
        {
          label: 'Справочник',
          translations: { en: 'Reference' },
          items: [
            { label: 'Карта интеграций', translations: { en: 'Integration Map' }, slug: 'reference/integrations' },
            { label: 'Глоссарий', translations: { en: 'Glossary' }, slug: 'reference/glossary' },
            { label: 'Чеклисты', translations: { en: 'Checklists' }, slug: 'reference/checklists' },
          ],
        },
      ],
    }),
  ],
});
