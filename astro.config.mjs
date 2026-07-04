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
        zh: {
          label: '中文',
          lang: 'zh-CN',
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
          translations: { ru: 'Главная', zh: '首页' },
          items: [
            { label: 'Catalog', translations: { ru: 'Каталог', zh: '目录' }, slug: 'index' },
          ],
        },
        {
          label: 'Hotels',
          translations: { ru: 'Отели', zh: '酒店' },
          items: [
            {
              label: 'Revenue Management',
              translations: { ru: 'Управление доходом', zh: '收益管理' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'hotels/revenue' },
                { label: 'RevPAR, ADR, Occupancy', translations: { zh: 'RevPAR、ADR、入住率' }, slug: 'hotels/revenue/revpar-adr-occupancy' },
                { label: 'Seasonality', translations: { ru: 'Сезонность', zh: '季节性' }, slug: 'hotels/revenue/seasonality' },
                { label: 'Direct Sales vs OTA', translations: { ru: 'Прямые продажи vs OTA', zh: '直销 vs OTA' }, slug: 'hotels/revenue/direct-vs-ota' },
                { label: 'Upselling & Cross-Selling', translations: { ru: 'Upselling и cross-selling', zh: '升级销售与交叉销售' }, slug: 'hotels/revenue/upselling' },
                { label: 'Rate Strategy', translations: { ru: 'Тарифная политика', zh: '价格策略' }, slug: 'hotels/revenue/rate-strategy' },
              ],
            },
            {
              label: 'Staff',
              translations: { ru: 'Персонал', zh: '员工' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'hotels/staff' },
                { label: 'Front Desk Scripts', translations: { ru: 'Скрипты ресепшена', zh: '前台话术' }, slug: 'hotels/staff/front-desk-scripts' },
                { label: 'Hiring & Onboarding', translations: { ru: 'Найм и адаптация', zh: '招聘与入职' }, slug: 'hotels/staff/hiring-onboarding' },
                { label: 'Retention & Motivation', translations: { ru: 'Удержание и мотивация', zh: '留任与激励' }, slug: 'hotels/staff/retention-motivation' },
              ],
            },
            {
              label: 'Guest Experience',
              translations: { ru: 'Гостевой опыт', zh: '宾客体验' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'hotels/guest-experience' },
                { label: 'Guest Cycle', translations: { ru: 'Гостевой цикл', zh: '宾客周期' }, slug: 'hotels/guest-experience/guest-cycle' },
                { label: 'Complaints', translations: { ru: 'Работа с жалобами', zh: '投诉处理' }, slug: 'hotels/guest-experience/complaints' },
                { label: 'Mystery Guest', translations: { zh: '神秘顾客' }, slug: 'hotels/guest-experience/mystery-guest' },
                { label: 'Review Responses', translations: { ru: 'Ответы на отзывы', zh: '评价回复' }, slug: 'hotels/guest-experience/review-responses' },
              ],
            },
            {
              label: 'Operations',
              translations: { ru: 'Операции', zh: '运营' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'hotels/operations' },
                { label: 'Housekeeping', translations: { ru: 'Хаускипинг', zh: '客房清洁' }, slug: 'hotels/operations/housekeeping' },
                { label: 'Lobby & Breakfast', translations: { ru: 'Лобби и завтрак', zh: '大堂与早餐' }, slug: 'hotels/operations/lobby-breakfast' },
                { label: 'Corporate Clients', translations: { ru: 'Корпоративные клиенты', zh: '企业客户' }, slug: 'hotels/operations/corporate-clients' },
              ],
            },
          ],
        },
        {
          label: 'Restaurants',
          translations: { ru: 'Рестораны', zh: '餐厅' },
          items: [
            {
              label: 'Menu & Economics',
              translations: { ru: 'Меню и экономика', zh: '菜单与经济' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'restaurants/menu' },
                { label: 'Menu Engineering', translations: { ru: 'Инжиниринг меню', zh: '菜单工程' }, slug: 'restaurants/menu/menu-engineering' },
                { label: 'Food Cost & Pricing', translations: { ru: 'Себестоимость и цены', zh: '食材成本与定价' }, slug: 'restaurants/menu/food-cost-pricing' },
                { label: 'Stop List', translations: { ru: 'Стоп-лист', zh: '停售清单' }, slug: 'restaurants/menu/stop-list' },
                { label: 'Seasonal Menu', translations: { ru: 'Сезонное меню', zh: '季节性菜单' }, slug: 'restaurants/menu/seasonal-menu' },
              ],
            },
            {
              label: 'Staff',
              translations: { ru: 'Персонал', zh: '员工' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'restaurants/staff' },
                { label: 'Service Standards', translations: { ru: 'Стандарты обслуживания', zh: '服务标准' }, slug: 'restaurants/staff/service-standards' },
                { label: 'Motivation & KPI', translations: { ru: 'Мотивация и KPI', zh: '激励与KPI' }, slug: 'restaurants/staff/motivation-kpi' },
              ],
            },
            {
              label: 'Operations',
              translations: { ru: 'Операции', zh: '运营' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'restaurants/operations' },
                { label: 'Table Turnover', translations: { ru: 'Оборачиваемость столов', zh: '翻台率' }, slug: 'restaurants/operations/table-turnover' },
                { label: 'Reservations', translations: { ru: 'Бронирование столов', zh: '预订' }, slug: 'restaurants/operations/reservations' },
                { label: 'Banquets & Events', translations: { ru: 'Банкеты и мероприятия', zh: '宴会与活动' }, slug: 'restaurants/operations/banquets' },
              ],
            },
            {
              label: 'Guest Experience',
              translations: { ru: 'Гостевой опыт', zh: '宾客体验' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'restaurants/guest-experience' },
                { label: 'Regular Guests', translations: { ru: 'Постоянные гости', zh: '常客' }, slug: 'restaurants/guest-experience/regular-guests' },
                { label: 'Complaints', translations: { ru: 'Работа с жалобами', zh: '投诉处理' }, slug: 'restaurants/guest-experience/complaints' },
                { label: 'Atmosphere', translations: { ru: 'Атмосфера', zh: '氛围' }, slug: 'restaurants/guest-experience/atmosphere' },
              ],
            },
          ],
        },
        {
          label: 'Use Cases',
          translations: { ru: 'Кейсы', zh: '案例' },
          items: [
            { label: 'All Use Cases', translations: { ru: 'Все кейсы', zh: '全部案例' }, slug: 'use-cases' },
            {
              label: 'CRM & Sales',
              translations: { ru: 'CRM и продажи', zh: 'CRM与销售' },
              items: [
                { label: 'CRM Setup', translations: { ru: 'Внедрение CRM', zh: 'CRM实施' }, slug: 'use-cases/crm-setup' },
                { label: 'PMS/CRM Integration', translations: { ru: 'Интеграция CRM с PMS/POS', zh: 'PMS/CRM集成' }, slug: 'use-cases/pms-crm-integration' },
                { label: 'Personalized Proposals', translations: { ru: 'Персонализированные КП', zh: '个性化提案' }, slug: 'use-cases/personalized-proposals' },
                { label: 'Online Payment Link', translations: { ru: 'Онлайн-оплата по ссылке', zh: '在线支付链接' }, slug: 'use-cases/online-payment-link' },
              ],
            },
            {
              label: 'Loyalty & Guest Experience',
              translations: { ru: 'Лояльность и гостевой опыт', zh: '忠诚度与宾客体验' },
              items: [
                { label: 'Loyalty Program', translations: { ru: 'Программа лояльности', zh: '忠诚度计划' }, slug: 'use-cases/loyalty-program' },
                { label: 'Referral System', translations: { ru: 'Реферальная система', zh: '推荐系统' }, slug: 'use-cases/referral-system' },
                { label: 'Guest Portal', translations: { ru: 'Личный кабинет гостя', zh: '宾客门户' }, slug: 'use-cases/guest-portal' },
              ],
            },
            {
              label: 'Booking & Pricing',
              translations: { ru: 'Бронирование и ценообразование', zh: '预订与定价' },
              items: [
                { label: 'Booking Engine', translations: { ru: 'Модуль онлайн-бронирования', zh: '预订引擎' }, slug: 'use-cases/booking-engine' },
                { label: 'RMS — Dynamic Pricing', translations: { ru: 'RMS — динамические цены', zh: 'RMS — 动态定价' }, slug: 'use-cases/rms-dynamic-pricing' },
                { label: 'Rate Shopper', translations: { zh: '价格对比' }, slug: 'use-cases/rate-shopper' },
              ],
            },
            {
              label: 'Department Automation',
              translations: { ru: 'Автоматизация департаментов', zh: '部门自动化' },
              items: [
                { label: 'HR Processes', translations: { ru: 'HR-процессы', zh: 'HR流程' }, slug: 'use-cases/hr-automation' },
                { label: 'Legal Department', translations: { ru: 'Юридический отдел', zh: '法务部门' }, slug: 'use-cases/legal-automation' },
                { label: 'Marketing & Feedback', translations: { ru: 'Маркетинг и обратная связь', zh: '营销与反馈' }, slug: 'use-cases/marketing-feedback-automation' },
              ],
            },
            {
              label: 'Mobile & Kiosk Solutions',
              translations: { ru: 'Мобильные и терминальные решения', zh: '移动与自助终端' },
              items: [
                { label: 'Staff Mobile App', translations: { ru: 'Приложение для персонала', zh: '员工移动应用' }, slug: 'use-cases/staff-mobile-app' },
                { label: 'Self-Service Kiosks', translations: { ru: 'Киоски самообслуживания', zh: '自助服务终端' }, slug: 'use-cases/kiosk-apps' },
              ],
            },
            {
              label: 'Operations & Supply Chain',
              translations: { zh: '运营与供应链' },
              items: [
                { label: 'Inventory Management', translations: { zh: '库存管理' }, slug: 'use-cases/inventory-management' },
                { label: 'Vendor Management', translations: { zh: '供应商管理' }, slug: 'use-cases/vendor-management' },
                { label: 'Logistics Optimization', translations: { zh: '物流优化' }, slug: 'use-cases/logistics-optimization' },
              ],
            },
            {
              label: 'Staff & Compliance',
              translations: { zh: '员工与合规' },
              items: [
                { label: 'Employee Training', translations: { zh: '员工培训' }, slug: 'use-cases/employee-training' },
                { label: 'Compliance & Risk', translations: { zh: '合规与风险' }, slug: 'use-cases/compliance-risk' },
              ],
            },
            {
              label: 'Finance & IT',
              translations: { zh: '财务与IT' },
              items: [
                { label: 'Financial Management', translations: { zh: '财务管理' }, slug: 'use-cases/financial-management' },
                { label: 'IT Infrastructure', translations: { zh: 'IT基础设施' }, slug: 'use-cases/it-infrastructure' },
              ],
            },
          ],
        },
        {
          label: 'Services',
          translations: { ru: 'Сервисы', zh: '服务' },
          items: [
            { label: 'Services', translations: { ru: 'Сервисы', zh: '概述' }, slug: 'services' },
            {
              label: 'Hotels — IT',
              translations: { ru: 'Отели — IT', zh: '酒店 — IT' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'hotels' },
                { label: 'Website & Online Booking', translations: { ru: 'Сайт и онлайн-бронирование', zh: '网站与在线预订' }, slug: 'hotels/website-booking' },
                {
                  label: 'PMS — Property Management',
                  translations: { ru: 'PMS — системы управления', zh: 'PMS — 物业管理系统' },
                  items: [
                    { label: 'PMS Overview', translations: { ru: 'Обзор PMS', zh: 'PMS概述' }, slug: 'hotels/pms' },
                    { label: 'TravelLine', slug: 'hotels/pms/travelline' },
                    { label: 'Bnovo', slug: 'hotels/pms/bnovo' },
                    { label: 'Контур.Отель', slug: 'hotels/pms/kontur-hotel' },
                    { label: 'Saby Hotel', slug: 'hotels/pms/saby-hotel' },
                    { label: 'Logus HMS', slug: 'hotels/pms/logus-hms' },
                    { label: 'MaxiBooking', slug: 'hotels/pms/maxibooking' },
                    { label: 'TravelLine vs Bnovo', slug: 'hotels/pms/travelline-vs-bnovo' },
                  ],
                },
                { label: 'Channel Manager', translations: { zh: '渠道管理' }, slug: 'hotels/channel-manager' },
                { label: 'Reputation Management', translations: { ru: 'Репутационный менеджмент', zh: '声誉管理' }, slug: 'hotels/reputation' },
                { label: 'CRM & Sales Management', translations: { ru: 'CRM и управление продажами', zh: 'CRM与销售管理' }, slug: 'hotels/crm' },
              ],
            },
            {
              label: 'Hotel Platforms',
              translations: { ru: 'Платформы для отелей', zh: '酒店平台' },
              items: [
                { label: 'TeamJet', translations: { ru: 'TeamJet — операции' }, link: '/ru/services/teamjet/' },
                { label: 'GoodStay', translations: { ru: 'GoodStay — продажи услуг' }, link: '/ru/services/goodstay/' },
                { label: 'GuestPulse', translations: { ru: 'GuestPulse — репутация' }, link: '/ru/services/guestpulse/' },
                { label: 'HotBot.ai', translations: { ru: 'HotBot.ai — чат-бот' }, link: '/ru/services/hotbot/' },
                { label: 'Wazzup24', translations: { ru: 'Wazzup24 — WhatsApp API' }, link: '/ru/services/wazzup24/' },
              ],
            },
            {
              label: 'Restaurants — IT',
              translations: { ru: 'Рестораны — IT', zh: '餐厅 — IT' },
              items: [
                { label: 'Overview', translations: { ru: 'Обзор', zh: '概述' }, slug: 'restaurants' },
                {
                  label: 'POS Systems',
                  translations: { ru: 'POS-системы', zh: 'POS系统' },
                  items: [
                    { label: 'POS Overview', translations: { ru: 'Обзор POS', zh: 'POS概述' }, slug: 'restaurants/pos' },
                    { label: 'iiko', slug: 'restaurants/pos/iiko' },
                    { label: 'r_keeper', slug: 'restaurants/pos/rkeeper' },
                    { label: 'Poster', slug: 'restaurants/pos/poster' },
                    { label: 'iiko vs r_keeper', slug: 'restaurants/pos/iiko-vs-rkeeper' },
                  ],
                },
                { label: 'Delivery & Aggregators', translations: { ru: 'Доставка и агрегаторы', zh: '外卖与聚合平台' }, slug: 'restaurants/delivery' },
                { label: 'Loyalty Programs', translations: { ru: 'Программы лояльности', zh: '忠诚度计划' }, slug: 'restaurants/loyalty' },
                { label: 'Table Reservations', translations: { ru: 'Резервация столиков', zh: '桌位预订' }, slug: 'restaurants/reservation' },
              ],
            },
          ],
        },
        {
          label: 'Russian Regulations',
          translations: { ru: 'Регуляторика РФ', zh: '俄罗斯法规' },
          items: [
            { label: '54-FZ — Online Cash Registers', translations: { ru: '54-ФЗ — онлайн-кассы', zh: '54-FZ — 在线收银机' }, slug: 'regulations/54-fz' },
            { label: 'EGAIS — Alcohol Tracking', translations: { ru: 'ЕГАИС — учёт алкоголя', zh: 'EGAIS — 酒类追踪' }, slug: 'regulations/egais' },
            { label: 'Guest Registration with Police', translations: { ru: 'Регистрация гостей в МВД', zh: '警方宾客登记' }, slug: 'regulations/fms-hotels' },
          ],
        },
        {
          label: 'Trends',
          translations: { ru: 'Тренды', zh: '趋势' },
          items: [
            { label: 'HoReCa IT Market 2025–2026', translations: { ru: 'Рынок HoReCa IT 2025–2026', zh: 'HoReCa IT市场 2025–2026' }, slug: 'trends/market-2026' },
          ],
        },
        {
          label: 'Selection Guides',
          translations: { ru: 'Гайды по выбору', zh: '选购指南' },
          items: [
            { label: 'How to Choose a POS', translations: { ru: 'Как выбрать POS-систему', zh: '如何选择POS系统' }, slug: 'guides/how-to-choose-pos' },
            { label: 'How to Choose a PMS', translations: { ru: 'Как выбрать PMS для отеля', zh: '如何选择PMS系统' }, slug: 'guides/how-to-choose-pms' },
          ],
        },
        {
          label: 'Operations',
          translations: { ru: 'Операции', zh: '运营' },
          items: [
            { label: 'Quick Start', translations: { ru: 'Быстрый старт', zh: '快速入门' }, slug: 'guides/quick-start' },
            { label: 'Front of House', translations: { ru: 'Зал — работа персонала', zh: '前厅' }, slug: 'guides/front-of-house' },
            { label: 'Back of House', translations: { ru: 'Кухня — работа персонала', zh: '后厨' }, slug: 'guides/back-of-house' },
            { label: 'Inventory Management', translations: { ru: 'Управление запасами', zh: '库存管理' }, slug: 'guides/inventory' },
            { label: 'Staff Management', translations: { ru: 'Управление персоналом', zh: '员工管理' }, slug: 'guides/staff' },
          ],
        },
        {
          label: 'Sanitation & Licensing',
          translations: { ru: 'Санитария и лицензирование', zh: '卫生与许可' },
          items: [
            { label: 'Food Safety Standards', translations: { ru: 'Стандарты пищевой безопасности', zh: '食品安全标准' }, slug: 'guides/food-safety' },
            { label: 'Health & Hygiene', translations: { ru: 'Санитария и гигиена', zh: '健康与卫生' }, slug: 'guides/health-hygiene' },
            { label: 'Licensing & Regulations', translations: { ru: 'Лицензирование и регуляторика', zh: '许可与法规' }, slug: 'guides/licensing' },
          ],
        },
        {
          label: 'Reference',
          translations: { ru: 'Справочник', zh: '参考' },
          items: [
            { label: 'Integration Map', translations: { ru: 'Карта интеграций', zh: '集成地图' }, slug: 'reference/integrations' },
            { label: 'Glossary', translations: { ru: 'Глоссарий', zh: '术语表' }, slug: 'reference/glossary' },
            { label: 'Checklists', translations: { ru: 'Чеклисты', zh: '检查清单' }, slug: 'reference/checklists' },
          ],
        },
      ],
    }),
  ],
});
