# HoReCa KB — Обзор проекта

## Что это

**kb-horeca** — публичная база знаний по ИТ-сервисам для индустрии HoReCa (Hotel, Restaurant, Café).

Охватывает: PMS-системы, Channel Manager, онлайн-бронирование, репутационный менеджмент, CRM, POS-системы, доставку, программы лояльности, резервацию столиков, нетехнический контент (управление, персонал, гостевой опыт, операции).

## Технологии

| Слой | Стек |
|---|---|
| Генератор | Astro 6.4.4 |
| Тема | @astrojs/starlight 0.39.3 |
| Деплой | GitHub Pages via GitHub Actions |
| Домен | https://kb-horeca.site/ |
| Языки | en (root, без префикса) + ru-RU (prefix `/ru/`) |

## i18n структура

```
src/content/docs/       ← EN (root locale, URL без префикса)
└── ru/                 ← RU locale (URL /ru/...)
    ├── index.mdx
    ├── hotels/
    │   ├── revenue/
    │   ├── staff/
    │   ├── guest-experience/
    │   └── operations/
    └── restaurants/
        ├── menu/
        ├── staff/
        ├── operations/
        └── guest-experience/
```

## Структура контента

```
src/content/docs/
├── index.mdx                   # EN главная
├── log.md                      # Лог изменений
├── hotels/
│   ├── revenue/                # Revenue Management (5 статей)
│   ├── staff/                  # Staff (3 статьи)
│   ├── guest-experience/       # Guest Experience (4 статьи)
│   ├── operations/             # Operations (3 статьи)
│   ├── pms/                    # PMS (7 систем + comparison)
│   ├── website-booking.md
│   ├── channel-manager.md
│   ├── reputation.md
│   └── crm.md
├── restaurants/
│   ├── menu/                   # Menu & Economics (4 статьи)
│   ├── staff/                  # Staff (2 статьи)
│   ├── operations/             # Operations (3 статьи)
│   ├── guest-experience/       # Guest Experience (3 статьи)
│   ├── pos/                    # POS (iiko, r_keeper, Poster + comparison)
│   ├── delivery.md
│   ├── loyalty.md
│   └── reservation.md
├── cases/                      # 16 кейсов EN + index
├── services/
│   └── index.md
├── guides/                     # Selection Guides + Operations + Sanitation (10 файлов EN)
├── reference/                  # Integration Map, Glossary, Checklists (3 файла EN)
├── trends/                     # HoReCa IT Market 2025–2026
├── regulations/                # 54-FZ, EGAIS, FMS (стабы)
└── ru/                         # RU locale
    ├── index.mdx               # RU главная
    ├── hotels/                 # RU нетехнический контент
    └── restaurants/            # RU нетехнический контент
```

## Репозиторий

- GitHub: `git@github.com:astra-agency/kb-horeca.git`
- Основная ветка: `main` (задеплоена)
- Текущая ветка разработки: `en-version`

## Деплой

Push в `main` → GitHub Actions → `npm run build` → GitHub Pages.

## Команды

```bash
npm run dev      # Локалка: http://localhost:4321/
npm run build    # Сборка в dist/
npm run preview  # Превью сборки
```
