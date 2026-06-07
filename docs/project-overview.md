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
| Языки | ru-RU (root), en (prefix `/en/`) |

## i18n структура

```
src/content/docs/       ← RU (root locale, URL без префикса)
└── en/                 ← EN locale (URL /en/...)
    ├── index.mdx
    ├── cases/
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
├── index.mdx                   # RU главная
├── log.md                      # Лог изменений
├── hotels/
│   ├── revenue/                # Управление доходом (5 статей)
│   ├── staff/                  # Персонал (3 статьи)
│   ├── guest-experience/       # Гостевой опыт (4 статьи)
│   ├── operations/             # Операции (3 статьи)
│   ├── pms/                    # PMS-системы (7 систем + сравнение)
│   ├── website-booking.md
│   ├── channel-manager.md
│   ├── reputation.md
│   └── crm.md
├── restaurants/
│   ├── menu/                   # Меню и экономика (4 статьи)
│   ├── staff/                  # Персонал (2 статьи)
│   ├── operations/             # Операции (3 статьи)
│   ├── guest-experience/       # Гостевой опыт (3 статьи)
│   ├── pos/                    # POS-системы (iiko, r_keeper, Poster)
│   ├── delivery.md
│   ├── loyalty.md
│   └── reservation.md
├── cases/                      # Кейсы (16 RU + 7 RU-стабов для EN-only)
│   ├── index.md
│   ├── crm-setup.md
│   ├── ... (15 RU кейсов)
│   ├── inventory-management.md # stub → /en/cases/inventory-management/
│   ├── vendor-management.md
│   ├── logistics-optimization.md
│   ├── employee-training.md
│   ├── compliance-risk.md
│   ├── financial-management.md
│   └── it-infrastructure.md
├── services/
│   └── index.md
├── guides/                     # Оригинальный EN контент (заглушки)
├── reference/                  # Заглушки
└── en/                         # EN locale
    ├── index.mdx               # EN главная (CardGrid)
    ├── cases/                  # 7 EN-only кейсов + индекс
    ├── hotels/
    │   ├── revenue/            # 5 статей
    │   ├── staff/              # 3 статьи
    │   ├── guest-experience/   # 4 статьи
    │   └── operations/         # 3 статьи
    └── restaurants/
        ├── menu/               # 4 статьи
        ├── staff/              # 2 статьи
        ├── operations/         # 3 статьи
        └── guest-experience/   # 3 статьи
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
