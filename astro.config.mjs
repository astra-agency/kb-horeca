import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://kb-horeca.site',
  integrations: [
    starlight({
      title: 'HoReCa KB',
      description: 'База знаний по ИТ-сервисам для HoReCa',
      favicon: '/favicon.png',
      sidebar: [
        {
          label: 'Главная',
          items: [
            { label: 'Каталог', slug: 'index' },
          ],
        },
        {
          label: 'Отели',
          items: [
            {
              label: 'Управление доходом',
              items: [
                { label: 'Обзор', slug: 'hotels/revenue' },
                { label: 'RevPAR, ADR, Occupancy', slug: 'hotels/revenue/revpar-adr-occupancy' },
                { label: 'Сезонность', slug: 'hotels/revenue/seasonality' },
                { label: 'Прямые продажи vs OTA', slug: 'hotels/revenue/direct-vs-ota' },
                { label: 'Upselling и cross-selling', slug: 'hotels/revenue/upselling' },
                { label: 'Тарифная политика', slug: 'hotels/revenue/rate-strategy' },
              ],
            },
            {
              label: 'Персонал',
              items: [
                { label: 'Обзор', slug: 'hotels/staff' },
                { label: 'Скрипты ресепшена', slug: 'hotels/staff/front-desk-scripts' },
                { label: 'Найм и адаптация', slug: 'hotels/staff/hiring-onboarding' },
                { label: 'Удержание и мотивация', slug: 'hotels/staff/retention-motivation' },
              ],
            },
            {
              label: 'Гостевой опыт',
              items: [
                { label: 'Обзор', slug: 'hotels/guest-experience' },
                { label: 'Гостевой цикл', slug: 'hotels/guest-experience/guest-cycle' },
                { label: 'Работа с жалобами', slug: 'hotels/guest-experience/complaints' },
                { label: 'Mystery Guest', slug: 'hotels/guest-experience/mystery-guest' },
                { label: 'Ответы на отзывы', slug: 'hotels/guest-experience/review-responses' },
              ],
            },
            {
              label: 'Операции',
              items: [
                { label: 'Обзор', slug: 'hotels/operations' },
                { label: 'Хаускипинг', slug: 'hotels/operations/housekeeping' },
                { label: 'Лобби и завтрак', slug: 'hotels/operations/lobby-breakfast' },
                { label: 'Корпоративные клиенты', slug: 'hotels/operations/corporate-clients' },
              ],
            },
          ],
        },
        {
          label: 'Рестораны',
          items: [
            {
              label: 'Меню и экономика',
              items: [
                { label: 'Обзор', slug: 'restaurants/menu' },
                { label: 'Инжиниринг меню', slug: 'restaurants/menu/menu-engineering' },
                { label: 'Себестоимость и цены', slug: 'restaurants/menu/food-cost-pricing' },
                { label: 'Стоп-лист', slug: 'restaurants/menu/stop-list' },
                { label: 'Сезонное меню', slug: 'restaurants/menu/seasonal-menu' },
              ],
            },
            {
              label: 'Персонал',
              items: [
                { label: 'Обзор', slug: 'restaurants/staff' },
                { label: 'Стандарты обслуживания', slug: 'restaurants/staff/service-standards' },
                { label: 'Мотивация и KPI', slug: 'restaurants/staff/motivation-kpi' },
              ],
            },
            {
              label: 'Операции',
              items: [
                { label: 'Обзор', slug: 'restaurants/operations' },
                { label: 'Оборачиваемость столов', slug: 'restaurants/operations/table-turnover' },
                { label: 'Бронирование столов', slug: 'restaurants/operations/reservations' },
                { label: 'Банкеты и мероприятия', slug: 'restaurants/operations/banquets' },
              ],
            },
            {
              label: 'Гостевой опыт',
              items: [
                { label: 'Обзор', slug: 'restaurants/guest-experience' },
                { label: 'Постоянные гости', slug: 'restaurants/guest-experience/regular-guests' },
                { label: 'Работа с жалобами', slug: 'restaurants/guest-experience/complaints' },
                { label: 'Атмосфера', slug: 'restaurants/guest-experience/atmosphere' },
              ],
            },
          ],
        },
        {
          label: 'Кейсы',
          items: [
            { label: 'Все кейсы', slug: 'cases' },
            {
              label: 'CRM и продажи',
              items: [
                { label: 'Внедрение CRM', slug: 'cases/crm-setup' },
                { label: 'Интеграция CRM с PMS/POS', slug: 'cases/pms-crm-integration' },
                { label: 'Персонализированные КП', slug: 'cases/personalized-proposals' },
                { label: 'Онлайн-оплата по ссылке', slug: 'cases/online-payment-link' },
              ],
            },
            {
              label: 'Лояльность и гостевой опыт',
              items: [
                { label: 'Программа лояльности', slug: 'cases/loyalty-program' },
                { label: 'Реферальная система', slug: 'cases/referral-system' },
                { label: 'Личный кабинет гостя', slug: 'cases/guest-portal' },
              ],
            },
            {
              label: 'Бронирование и ценообразование',
              items: [
                { label: 'Модуль онлайн-бронирования', slug: 'cases/booking-engine' },
                { label: 'RMS — динамические цены', slug: 'cases/rms-dynamic-pricing' },
                { label: 'Rate Shopper', slug: 'cases/rate-shopper' },
              ],
            },
            {
              label: 'Автоматизация департаментов',
              items: [
                { label: 'HR-процессы', slug: 'cases/hr-automation' },
                { label: 'Юридический отдел', slug: 'cases/legal-automation' },
                { label: 'Маркетинг и обратная связь', slug: 'cases/marketing-feedback-automation' },
              ],
            },
            {
              label: 'Мобильные и терминальные решения',
              items: [
                { label: 'Приложение для персонала', slug: 'cases/staff-mobile-app' },
                { label: 'Киоски самообслуживания', slug: 'cases/kiosk-apps' },
              ],
            },
          ],
        },
        {
          label: 'Сервисы',
          items: [
            { label: 'Обзор', slug: 'services' },
            {
              label: 'Отели — IT',
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
              label: 'Рестораны — IT',
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
          label: 'Операции',
          items: [
            { label: 'Быстрый старт', slug: 'guides/quick-start' },
            { label: 'Зал — работа персонала', slug: 'guides/front-of-house' },
            { label: 'Кухня — работа персонала', slug: 'guides/back-of-house' },
            { label: 'Управление запасами', slug: 'guides/inventory' },
            { label: 'Управление персоналом', slug: 'guides/staff' },
          ],
        },
        {
          label: 'Санитария и лицензирование',
          items: [
            { label: 'Стандарты пищевой безопасности', slug: 'guides/food-safety' },
            { label: 'Санитария и гигиена', slug: 'guides/health-hygiene' },
            { label: 'Лицензирование и регуляторика', slug: 'guides/licensing' },
          ],
        },
        {
          label: 'Справочник',
          items: [
            { label: 'Карта интеграций', slug: 'reference/integrations' },
            { label: 'Глоссарий', slug: 'reference/glossary' },
            { label: 'Чеклисты', slug: 'reference/checklists' },
          ],
        },
      ],

      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/astra-agency/kb-horeca' },
      ],
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
    }),
  ],
});
