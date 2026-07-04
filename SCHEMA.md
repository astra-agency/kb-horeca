# Схема проекта kb-horeca

> Публичная база знаний по информатизации HoReCa на российском рынке.

**Сайт:** https://kb-horeca.site  
**Репозиторий:** https://github.com/astra-agency/kb-horeca  
**Стек:** Astro + Starlight, GitHub Pages  
**Языки:** EN (root) + RU (`/ru/`) + ZH (`/zh/`)

---

## 🌍 Три языка (i18n)

| Код | URL | Статус |
|-----|-----|--------|
| `root` (EN) | `kb-horeca.site/` | Основной, все страницы |
| `ru` | `kb-horeca.site/ru/` | Основной, все страницы |
| `zh` | `kb-horeca.site/zh/` | 1-2 уровни переведены, глубокие страницы — EN копии |

---

## Ключевые разделы - папки

### Services (`src/content/docs/ru/services/`)

```
services/
├── index.md
├── goodstay.md
├── guestpulse.md
├── hotbot.md
├── teamjet.md
└── wazzup24.md
```

### Use Cases (`src/content/docs/ru/use-cases/`)

23 кейса внедрения:

```
use-cases/
├── index.md
├── booking-engine.md
├── compliance-risk.md
├── crm-setup.md
├── employee-training.md
├── financial-management.md
├── guest-portal.md
├── hr-automation.md
├── inventory-management.md
├── it-infrastructure.md
├── kiosk-apps.md
├── legal-automation.md
├── logistics-optimization.md
├── loyalty-program.md
├── marketing-feedback-automation.md
├── online-payment-link.md
├── personalized-proposals.md
├── pms-crm-integration.md
├── rate-shopper.md
├── referral-system.md
├── rms-dynamic-pricing.md
├── staff-mobile-app.md
└── vendor-management.md
```

### Guides (`src/content/docs/ru/guides/`)

```
guides/
├── quick-start.md
├── front-of-house.md
├── back-of-house.md
├── inventory.md
├── staff.md
├── food-safety.md
├── health-hygiene.md
├── licensing.md
├── how-to-choose-pms.md
└── how-to-choose-pos.md
```

### Reference (`src/content/docs/ru/reference/`)

```
reference/
├── glossary.md
├── checklists.md
└── integrations.md
```



### Отели (`src/content/docs/ru/hotels/`)

```
hotels/
├── index.md
├── channel-manager.md
├── crm.md
├── pms.md
├── reputation.md
├── website-booking.md
├── revenue/                      ← RevPAR/ADR/Occupancy, ценообразование, сезонность, OTA vs Direct, upselling
│   ├── index.md
│   ├── direct-vs-ota.md
│   ├── rate-strategy.md
│   ├── revpar-adr-occupancy.md
│   ├── seasonality.md
│   └── upselling.md
├── staff/                        ← Скрипты, найм, мотивация
│   ├── index.md
│   ├── front-desk-scripts.md
│   ├── hiring-onboarding.md
│   └── retention-motivation.md
├── guest-experience/             ← Жалобы, mystery guest, guest cycle, отзывы
│   ├── index.md
│   ├── complaints.md
│   ├── guest-cycle.md
│   ├── mystery-guest.md
│   └── review-responses.md
├── pms/                          ← TravelLine, Bnovo, Контур.Отель, Logus, Saby, MaxiBooking, сравнение
│   ├── index.md
│   ├── bnovo.md
│   ├── kontur-hotel.md
│   ├── logus-hms.md
│   ├── maxibooking.md
│   ├── saby-hotel.md
│   ├── travelline.md
│   └── travelline-vs-bnovo.md
└── operations/                   ← Housekeeping, корп. клиенты, lobby/breakfast
    ├── index.md
    ├── corporate-clients.md
    ├── housekeeping.md
    └── lobby-breakfast.md
```

### Рестораны (`src/content/docs/ru/restaurants/`)

```
restaurants/
├── index.md
├── delivery.md
├── loyalty.md
├── pos.md
├── reservation.md
├── menu/                         ← Food cost, menu engineering, seasonal, stop-list
│   ├── index.md
│   ├── food-cost-pricing.md
│   ├── menu-engineering.md
│   ├── seasonal-menu.md
│   └── stop-list.md
├── staff/                        ← Стандарты, KPI
│   ├── index.md
│   ├── motivation-kpi.md
│   └── service-standards.md
├── guest-experience/             ← Атмосфера, жалобы, постоянные гости
│   ├── index.md
│   ├── atmosphere.md
│   ├── complaints.md
│   └── regular-guests.md
├── pos/                          ← iiko vs R-Keeper, iiko, R-Keeper, Poster
│   ├── index.md
│   ├── iiko.md
│   ├── iiko-vs-rkeeper.md
│   ├── poster.md
│   └── rkeeper.md
└── operations/                   ← Банкеты, бронирования, table turnover
    ├── index.md
    ├── banquets.md
    ├── reservations.md
    └── table-turnover.md
```
### Regulations (`src/content/docs/ru/regulations/`)

```
regulations/
├── 54-fz.md
├── egais.md
├── fms-hotels.md
└── digital-id-max.md
```

### Trends (`src/content/docs/ru/trends/`)

```
trends/
└── market-2026.md
```


## 📁 Структура проекта

```
./
├── 📄 AGENTS.md                  ← Инструкции проекта
├── 📄 README.md
├── 📄 ROADMAP.md
├── 📄 LOG.md                     ← Журнал изменений (newest first)
├── 📄 SCHEMA.md                  ← Этот файл
├── 📄 astro.config.mjs           ← Конфиг Starlight + sidebar + i18n
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 kb-horeca.code-workspace
│
├── 📁 src/
│   ├── content.config.ts         ← Конфиг коллекций контента
│   ├── components/
│   │   └── Head.astro            ← Кастомный <head> (Яндекс.Метрика и др.)
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
│       └── zh/                   ← ZH: китайская версия
│
├── 📁 raw/                       ← Сырые материалы (не публикуются)
│   ├── 📄 README.md
│   ├── inbox/                    ← Входящие: свежесобранные материалы
│   ├── 2026/                     ← Архив по датам
│   │   ├── 0611/
│   │   └── 0704/
│   └── other
│
├── 📁 public/                    ← Статика
│   └── favicon.png
│
├── 📁 docs/                      ← (пусто, зарезервировано)
│
├── 📁 .agents/                   ← AI-конфиг kb-horeca
│   ├── 📄 DECISIONS.md           ← Архитектурные решения
│   ├── memory/                   ← Память агента
│   │   ├── kb-content.md         ← Структура контента, i18n
│   │   ├── kb-conventions.md     ← Конвенции оформления
│   │   └── project-state.md      ← Состояние проекта
│   └── skills/                   ← Локальные скиллы
│       ├── astro-knowledge/      ← Знания об Astro
│       ├── legal-response/       ← Юридические ответы
│       ├── llm-wiki/             ← LLM Wiki (оркестратор)
│       ├── summarize/            ← Суммаризация
│       ├── wiki-ingest/          ← Ingest сырых материалов
│       ├── wiki-init/            ← Инициализация wiki
│       ├── wiki-lint/            ← Линтинг wiki
│       ├── wiki-query/           ← Запросы к wiki
│       └── wiki-update/          ← Обновление wiki
│
└── 📁 .github/workflows/         ← CI/CD
    └── deploy.yml                ← Деплой на GitHub Pages
```

---

