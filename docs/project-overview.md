# HoReCa KB — Обзор проекта

## Что это

**kb-horeca** — публичная база знаний по ИТ-сервисам для индустрии HoReCa (Hotel, Restaurant, Café).

Охватывает: PMS-системы, Channel Manager, онлайн-бронирование, репутационный менеджмент, CRM, POS-системы для ресторанов, доставку, программы лояльности, резервацию столиков.

## Технологии

| Слой | Стек |
|---|---|
| Генератор | Astro 6.4.4 |
| Тема | @astrojs/starlight 0.39.3 |
| Деплой | GitHub Pages via GitHub Actions |
| Домен | https://astra-agency.github.io/kb-horeca/ |
| Язык контента | ru-RU |

## Структура контента

```
src/content/docs/
├── index.mdx               # Главная — каталог разделов
├── log.md                  # Лог изменений
├── hotels/                 # Отели — нетехнический контент
│   ├── revenue/            # Управление доходом
│   │   ├── index.md
│   │   ├── revpar-adr-occupancy.md
│   │   ├── seasonality.md
│   │   ├── direct-vs-ota.md
│   │   ├── upselling.md
│   │   └── rate-strategy.md
│   ├── staff/              # Персонал
│   │   ├── index.md
│   │   ├── front-desk-scripts.md
│   │   ├── hiring-onboarding.md
│   │   └── retention-motivation.md
│   ├── guest-experience/   # Гостевой опыт
│   │   ├── index.md
│   │   ├── guest-cycle.md
│   │   ├── complaints.md
│   │   ├── mystery-guest.md
│   │   └── review-responses.md
│   ├── operations/         # Операции
│   │   ├── index.md
│   │   ├── housekeeping.md
│   │   ├── lobby-breakfast.md
│   │   └── corporate-clients.md
│   ├── index.md            # IT-обзор (в Сервисах)
│   ├── website-booking.md
│   ├── channel-manager.md
│   ├── reputation.md
│   ├── crm.md
│   └── pms/                # PMS-системы
│       ├── index.md
│       ├── travelline.md
│       ├── bnovo.md
│       ├── kontur-hotel.md
│       ├── saby-hotel.md
│       ├── logus-hms.md
│       ├── maxibooking.md
│       └── travelline-vs-bnovo.md
├── restaurants/            # Рестораны — нетехнический контент
│   ├── menu/               # Меню и экономика
│   │   ├── index.md
│   │   ├── menu-engineering.md
│   │   ├── food-cost-pricing.md
│   │   ├── stop-list.md
│   │   └── seasonal-menu.md
│   ├── staff/              # Персонал
│   │   ├── index.md
│   │   ├── service-standards.md
│   │   └── motivation-kpi.md
│   ├── operations/         # Операции
│   │   ├── index.md
│   │   ├── table-turnover.md
│   │   ├── reservations.md
│   │   └── banquets.md
│   ├── guest-experience/   # Гостевой опыт
│   │   ├── index.md
│   │   ├── regular-guests.md
│   │   ├── complaints.md
│   │   └── atmosphere.md
│   ├── index.md            # IT-обзор (в Сервисах)
│   ├── delivery.md
│   ├── loyalty.md
│   ├── reservation.md
│   └── pos/                # POS-системы
│       ├── index.md
│       ├── iiko.md
│       ├── rkeeper.md
│       ├── poster.md
│       └── iiko-vs-rkeeper.md
├── cases/                  # Кейсы внедрений
│   ├── index.md            # Каталог кейсов
│   ├── crm-setup.md
│   ├── pms-crm-integration.md
│   ├── personalized-proposals.md
│   ├── online-payment-link.md
│   ├── loyalty-program.md
│   ├── referral-system.md
│   ├── guest-portal.md
│   ├── booking-engine.md
│   ├── rms-dynamic-pricing.md
│   ├── rate-shopper.md
│   ├── hr-automation.md
│   ├── legal-automation.md
│   ├── marketing-feedback-automation.md
│   ├── staff-mobile-app.md
│   └── kiosk-apps.md
├── services/
│   └── index.md            # Сводные таблицы + матрица выбора
└── guides/                 # Оригинальный английский контент (сохранён)
```

## Репозиторий

- GitHub: `git@github.com:astra-agency/kb-horeca.git`
- Основная ветка: `main`
- Рабочая ветка: `feature/restructure-horeca-kb`

## Деплой

Push в `main` → GitHub Actions → `npm run build` → GitHub Pages.

Настройка Pages: Settings → Pages → Source → GitHub Actions.

## Команды

```bash
npm run dev      # Локалка: http://localhost:4321/kb-horeca/
npm run build    # Сборка в dist/
npm run preview  # Превью сборки
```
