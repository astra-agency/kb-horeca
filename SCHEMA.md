# Схема проекта HoReCa

> Автосгенерировано 2026-07-04 на основе анализа файловой структуры

## Общая архитектура

```
~/Projects/ddhq/projects/horeca/          ← Корень монорепозитория
├── 📄 AGENTS.md, README.md, ROADMAP.md    ← Документация проекта
├── 📄 PRODUCTS.md, MARKETING.md, DESIGN.md ← Продукты/маркетинг/дизайн
├── 📁 src/                                ← Исходники маркетингового сайта
├── 📁 kb-horeca/                          ← Подпроект: база знаний
├── 📁 docs/                               ← RFC-документы
├── 📁 public/                             ← Статические ассеты сайта
├── 📁 dist/                               ← Сборка (gitignored)
├── 📁 .agents/                            ← AI-агенты, скиллы, команды
├── 📁 .vscode/                            ← Настройки редактора
└── 📁 .kilo/                              ← Инструменты управления проектом
```

---

## 🔵 Продукт 1: Маркетинговый сайт (aa-horeca)

**Сайт:** https://horeca.ddpa.ru  
**Репозиторий:** https://github.com/aiiddqd/aa-horeca  
**Стек:** Astro, статический HTML/CSS  
**Цель:** Конверсионный лендинг агентства — объясняет услуги, показывает кейсы, собирает заявки

### 📁 src/ — структура сайта

```
src/
├── assets/
│   └── app.css                    ← Глобальные стили
├── components/                    ← Переиспользуемые компоненты
│   ├── CTA.astro                  ← Call-to-action блоки
│   ├── Expertise.astro            ← Блок экспертизы
│   ├── Footer.astro               ← Футер
│   ├── Header.astro               ← Шапка с навигацией
│   ├── HeroSection.astro          ← Главный экран
│   ├── ServiceCard.astro          ← Карточка услуги
│   └── ThemeInit.astro            ← Инициализация темы
├── data/                          ← Данные (TypeScript)
│   ├── locations.ts               ← Города: Анапа, Сочи, Алматы
│   ├── specialists.ts             ← Специалисты по городам
│   └── use-cases.ts               ← 16 сценариев автоматизации
├── layouts/
│   ├── Layout.astro               ← Главный лейаут
│   └── PageLayout.astro           ← Лейаут внутренних страниц
└── pages/                         ← Страницы (файловая маршрутизация Astro)
    ├── index.astro                ← Главная
    ├── about.astro                ← О компании
    ├── services.astro             ← Услуги
    ├── pricing.astro              ← Цены
    ├── contact.astro              ← Контакты
    ├── club.astro                 ← Клуб
    ├── kb.astro                   ← Страница-мостик к базе знаний
    ├── hotels.astro               ← Решения для отелей
    ├── use-cases.astro            ← Список всех use-case
    ├── use-cases/[slug].astro     ← Динамическая страница use-case
    ├── anapa.astro                ← Городская страница: Анапа
    │   ├── anapa/hotels.astro     ← Анапа → отели
    │   └── anapa/restaurants.astro← Анапа → рестораны
    ├── sochi.astro                ← Городская страница: Сочи
    │   ├── sochi/hotels.astro
    │   └── sochi/restaurants.astro
    └── almaty.astro               ← Городская страница: Алматы
        ├── almaty/hotels.astro
        └── almaty/restaurants.astro
```

### 16 Use Cases (из src/data/use-cases.ts)

| ID | Slug | Сегмент | Название |
|----|------|---------|----------|
| UC-R1 | pos-sklad-finansy | 🍽 Рестораны | POS + склад + финансы |
| UC-R2 | kds-mobilnye-ofitsianty | 🍽 Рестораны | Kitchen Display + мобильные официанты |
| UC-R3 | self-service-kioski-qr | 🍽 Рестораны | Self‑service: киоски, QR, предзаказ |
| UC-R4 | dostavka-dark-kitchen | 🍽 Рестораны | Доставка и Dark Kitchen |
| UC-R5 | ai-analitika-dinamicheskoe-menu | 🍽 Рестораны | AI-аналитика и динамическое меню |
| UC-R6 | ai-prognoz-sprosa-zakupok | 🍽 Рестораны | AI-прогноз спроса и закупок |
| UC-R7 | egais-uchet-alkogolya | 🍽 Рестораны | ЕГАИС и учёт алкоголя |
| UC-R8 | reputation-management-loyalty | 🍽 Рестораны | Репутация и лояльность |
| UC-R9 | kpi-motivatsiya-personala | 🍽 Рестораны | KPI и мотивация персонала |
| UC-H1 | pms-upravlenie-otelem | 🏨 Отели | PMS: управление отелем |
| UC-H2 | crm-bitrix24-gostevoy-servis | 🏨 Отели | CRM на базе Bitrix24 |
| UC-H3 | channel-manager-online-prodazhi | 🏨 Отели | Channel Manager и онлайн-продажи |
| UC-H4 | ai-revenue-management | 🏨 Отели | AI Revenue Management |
| UC-H5 | ai-chat-boty-konserzhi | 🏨 Отели | AI чат-боты и консьержи |
| UC-H6 | self-check-in | 🏨 Отели | Self Check-in |
| UC-H7 | integratsiya-pms-pos | 🏨 Отели | Интеграция PMS-POS |
| UC-H8 | ai-prognoz-zagruzki | 🏨 Отели | AI-прогноз загрузки |
| UC-H9 | upravlenie-otzyvami-nps | 🏨 Отели | Управление отзывами и NPS |

### 3 Города (из src/data/locations.ts)
- **Анапа** — специалист: Евгений
- **Сочи** — специалист: Ирина
- **Алматы** — специалист: Антон

---

## 🟢 Продукт 2: База знаний kb-horeca

**Сайт:** https://kb-horeca.site  
**Репозиторий:** https://github.com/astra-agency/kb-horeca  
**Стек:** Astro + Starlight, GitHub Pages  
**Цель:** Публичная база знаний по информатизации HoReCa на российском рынке

### 📁 kb-horeca/ — структура

```
kb-horeca/
├── 📄 AGENTS.md, README.md, ROADMAP.md, LOG.md, SCHEMA.md
├── 📄 astro.config.mjs            ← Конфиг Starlight + sidebar
├── 📁 src/
│   ├── components/Head.astro     ← Кастомный <head> (Яндекс.Метрика и др.)
│   ├── content.config.ts         ← Конфиг коллекций контента
│   └── content/docs/             ← Контент (MDX)
│       ├── index.mdx             ← EN: главная
│       ├── hotels/               ← EN: отели
│       ├── restaurants/          ← EN: рестораны
│       ├── guides/               ← EN: руководства
│       ├── reference/            ← EN: справочник
│       ├── regulations/          ← EN: законы
│       ├── services/             ← EN: сервисы
│       ├── use-cases/            ← EN: 23 кейса
│       ├── trends/               ← EN: тренды
│       ├── ru/                   ← RU: русская версия (основной контент)
│       │   ├── index.mdx
│       │   ├── hotels/           ← Отели (revenue, staff, guest-experience, pms, operations...)
│       │   ├── restaurants/      ← Рестораны (menu, staff, guest-experience, pos, operations...)
│       │   ├── guides/           ← Руководства (quick-start, inventory, food-safety, licensing...)
│       │   ├── reference/        ← Справочник (glossary, checklists, integrations)
│       │   ├── regulations/      ← Законы (54-ФЗ, ЕГАИС, FMS, digital-id)
│       │   ├── services/         ← Обзоры сервисов (GoodStay, GuestPulse, HotBot, TeamJet, Wazzup24)
│       │   ├── use-cases/        ← 23 кейса внедрения
│       │   └── trends/           ← Тренды рынка
│       └── zh/                   ← ZH: китайская версия (99 файлов)
├── 📁 raw/                       ← Сырые материалы (не публикуются)
│   ├── 📄 README.md
│   ├── inbox/                    ← Входящие: свежесобранные материалы
│   │   └── *.md                  ← (временные, подлежат обработке)
│   ├── 2026/0611/                ← Архив сырых материалов по датам
│   ├── 2026/0704/
│   └── other/                    ← Тематические коллекции
│       ├── cases/                ← Кейсы (RU)
│       ├── cases-en/             ← Кейсы (EN)
│       ├── delivery/             ← Доставка
│       ├── hospitality-en/       ← Гостеприимство (EN)
│       │   ├── pack1/
│       │   └── pack2/
│       ├── hotels-restaurant/    ← Отели + рестораны
│       ├── pms/                  ← PMS-системы
│       ├── pos/                  ← POS-системы
│       └── reservation/          ← Бронирование
├── 📁 public/                    ← Статика (favicon)
├── 📁 .agents/                   ← AI-конфиг kb-horeca
│   ├── DECISIONS.md              ← Архитектурные решения
│   ├── memory/                   ← Память агента
│   │   ├── kb-content.md         ← Структура контента, i18n
│   │   ├── kb-conventions.md     ← Конвенции оформления
│   │   └── project-state.md      ← Состояние проекта
│   └── skills/                   ← Локальные скиллы
│       ├── astro-knowledge/      ← Знания об Astro
│       ├── legal-response/       ← Юридические ответы
│       ├── llm-wiki/             ← LLM Wiki (база знаний Карпаты)
│       ├── summarize/            ← Суммаризация
│       ├── wiki-ingest/          ← Ingest сырых материалов
│       ├── wiki-init/            ← Инициализация wiki
│       ├── wiki-lint/            ← Линтинг wiki
│       ├── wiki-query/           ← Запросы к wiki
│       └── wiki-update/          ← Обновление wiki
└── 📁 .github/workflows/         ← CI/CD
    └── deploy.yml                ← Деплой на GitHub Pages
```

### 🌍 Три языка (i18n)

| Код | URL | Статус |
|-----|-----|--------|
| `root` (EN) | `kb-horeca.site/` | Основной, все страницы |
| `ru` | `kb-horeca.site/ru/` | Основной, все страницы |
| `zh` | `kb-horeca.site/zh/` | 1-2 уровни переведены, глубокие страницы — EN копии |

### 📚 Разделы kb-horeca (RU)

| Раздел | Подразделы |
|--------|------------|
| **Отели** | Revenue (RevPAR/ADR/Occupancy, ценообразование, сезонность, OTA vs Direct, upselling), Staff (скрипты, найм, мотивация), Guest Experience (жалобы, mystery guest, guest cycle, отзывы), PMS (TravelLine, Bnovo, Контур.Отель, Logus, Saby, MaxiBooking, сравнение), Operations (housekeeping, корп. клиенты, lobby/breakfast), CRM, Channel Manager, Website/Booking, Reputation |
| **Рестораны** | Menu (food cost, menu engineering, seasonal, stop-list), Staff (стандарты, KPI), Guest Experience (атмосфера, жалобы, постоянные гости), POS (iiko vs R-Keeper, iiko, R-Keeper, Poster), Operations (банкеты, бронирования, table turnover), Delivery, Loyalty, Reservation |
| **Guides** | Quick Start, FOH, BOH, Inventory, Staff, Food Safety, Health &amp; Hygiene, Licensing, How to Choose PMS, How to Choose POS |
| **Reference** | Glossary, Checklists, Integrations (карта интеграций) |
| **Regulations** | 54-ФЗ, ЕГАИС, FMS (регистрация гостей), Digital ID |
| **Services** | GoodStay, GuestPulse, HotBot, TeamJet, Wazzup24 |
| **Use Cases** | 23 кейса: booking-engine, crm-setup, pms-crm-integration, rms-dynamic-pricing, guest-portal, kiosk-apps, loyalty-program, staff-mobile-app, inventory-management, financial-management, hr-automation, logistics-optimization, it-infrastructure, compliance-risk, legal-automation, vendor-management, referral-system, rate-shopper, personalized-proposals, marketing-feedback-automation, employee-training, online-payment-link |
| **Trends** | Market 2026 |

---

## 📁 docs/ — RFC-документы

```
docs/
├── README.md
└── rfc/
    ├── 260601-first-website-mvp/         ← MVP первого сайта
    ├── 260607-bitrix24-widget-integration/ ← Интеграция виджета Bitrix24
    ├── 260607-hotels-services-page/      ← Страница услуг для отелей
    ├── 2026-06-07-about-page/            ← Страница «О компании»
    ├── 2026-06-07-horeca-use-cases/      ← Use-case страницы
    ├── 2026-06-07-marketing-plan-anapa/  ← Маркетинг-план: Анапа
    ├── 2026-06-07-yandex-metrica-analytics/ ← Яндекс.Метрика
    └── 260613-pricing.md                 ← Страница цен
```

---

## 📁 .agents/ — AI-агенты проекта

```
.agents/
├── agents.md                    ← Глобальные инструкции проекта
├── mcp.json                     ← MCP-серверы и инструменты
├── agents/
│   └── horeca-site-builder/     ← Профиль под-агента: билдер сайта
│       └── agent.md
├── commands/
│   └── deploy-sftp.mjs          ← Команда SFTP-деплоя
├── memories/
│   └── project-context.md       ← Память проекта
├── skills/                      ← Скиллы (копии из ~/.agents/skills/)
│   ├── horeca-site-foundation/  ← Специфичный скилл для HoReCa
│   ├── deploy/                  ← Деплой
│   ├── site-architecture/       ← Архитектура сайта
│   ├── ai-seo, programmatic-seo, seo-audit, schema  ← SEO
│   ├── copywriting, copy-editing, content-strategy   ← Контент
│   ├── cro, signup, paywalls, popups, onboarding     ← CRO
│   ├── ads, ad-creative, ab-testing                   ← Реклама
│   ├── cold-email, emails, sms, prospecting           ← Коммуникации
│   ├── referrals, loyalty, churn-prevention           ← Retention
│   ├── pricing, launch, co-marketing                  ← Стратегия
│   ├── social, video, image                           ← Контент-продакшн
│   ├── analytics, competitors, customer-research       ← Исследования
│   ├── marketing-ideas, marketing-plan, marketing-psychology ← Маркетинг
│   ├── product-marketing, sales-enablement, revops    ← Продукт
│   ├── community-marketing, directory-submissions     ← Outreach
│   ├── free-tools, lead-magnets, aso                  ← Инструменты
│   └── rfc                                            ← RFC
└── tasks/
    └── content-qa/               ← Задача: QA контента
        └── task.md
```

---

## 🔄 Workflow обработки контента

```
raw/inbox/                          ← Сбор материалов
    │
    ▼ (анализ, структурирование)
    │
raw/YYYY/MMDD/                     ← Архивация по датам
    │
    ▼ (ingest: wiki-ingest skill)
    │
src/content/docs/ru/               ← Публикация в базу знаний
```

## 🚀 Команды (Makefile)

| Команда | Действие |
|---------|----------|
| `make install` | Установка зависимостей |
| `make dev` | Запуск dev-сервера Astro |
| `make build` | Сборка статического сайта |
| `make preview` | Предпросмотр сборки |
| `make deploy` | SFTP-деплой на хостинг |
| `make clean` | Очистка dist/ и .astro/ |
