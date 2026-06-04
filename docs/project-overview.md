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
├── hotels/                 # Отели и гостиницы
│   ├── index.md            # Обзор
│   ├── website-booking.md  # Сайт + бронирование
│   ├── channel-manager.md  # Channel Manager
│   ├── reputation.md       # Репутационный менеджмент
│   ├── crm.md              # CRM и продажи
│   └── pms/                # PMS-системы
│       ├── index.md        # Сравнение PMS
│       ├── travelline.md
│       ├── bnovo.md
│       ├── kontur-hotel.md
│       ├── saby-hotel.md
│       ├── logus-hms.md
│       └── maxibooking.md
├── restaurants/            # Рестораны и кафе
│   ├── index.md            # Обзор + Blocksy шаблоны
│   ├── delivery.md
│   ├── loyalty.md
│   ├── reservation.md
│   └── pos/                # POS-системы
│       ├── index.md
│       ├── iiko.md
│       ├── rkeeper.md
│       └── poster.md
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
