# CLAUDE.md — инструкции для Claude

Этот файл содержит обязательный контекст для работы с проектом kb-horeca.

---

## Проект

**kb-horeca** — база знаний по ИТ-сервисам для HoReCa на русском языке.
Стек: Astro 6.4.4 + Starlight 0.39.3. Деплой: GitHub Pages.
URL: `https://astra-agency.github.io/kb-horeca/`
Локалка: `http://localhost:4321/kb-horeca/` (запуск: `npm run dev` из `kb-horeca/`)

---

## Правила работы с контентом

### Никогда не делать без явного запроса
- Не коммитить — только если пользователь явно попросил
- Не удалять существующий контент — только добавлять/обновлять
- Не создавать страницы, которых нет в плане

### Ссылки между страницами — ВАЖНО

**Никогда не использовать `.md` в ссылках.** Starlight не резолвит их — браузер получает 404.

| Неправильно | Правильно |
|---|---|
| `[текст](./delivery.md)` | `[текст](/kb-horeca/restaurants/delivery/)` |
| `[текст](./pms/index.md)` | `[текст](/kb-horeca/hotels/pms/)` |
| `[текст](../crm.md)` | `[текст](/kb-horeca/hotels/crm/)` |

**Правило:** всегда абсолютный путь с префиксом `/kb-horeca/` + slug без расширения + завершающий `/`.

Формула: `/kb-horeca/<папка>/<slug>/`
- `hotels/pms/travelline.md` → `/kb-horeca/hotels/pms/travelline/`
- `restaurants/index.md` → `/kb-horeca/restaurants/`
- `services/index.md` → `/kb-horeca/services/`

### Sidebar в astro.config.mjs
- Slug для `index.md` в папке = slug папки, не `папка/index`
  - Правильно: `slug: 'hotels'` (для `hotels/index.md`)
  - Неправильно: `slug: 'hotels/index'` → ошибка сборки
- При добавлении новой страницы — обязательно добавить в sidebar

### Язык контента
- Весь новый контент: **ru-RU**
- Оригинальные EN страницы (`guides/`, `reference/`) — не трогать

### Структура страницы
```md
---
title: Название
description: Описание для SEO
---

## Секции...
```

---

## Известные проблемы с сайтами вендоров

| Сайт | Проблема |
|---|---|
| kontur.ru/hotel | 403 Forbidden (WebFetch) |
| saby.ru/hotel | 404 / timeout |
| hotel.logus.ru | ECONNREFUSED |
| iiko.ru | Timeout |
| creativethemes.com | 403 Forbidden |

Решение: использовать WebSearch + WebFetch на страницах обзоров (saasmarket.ru, a2is.ru, picktech.ru и т.д.).

---

## Структура проекта

```
kb-horeca/
├── astro.config.mjs          # Конфиг — sidebar, site, base
├── src/content/docs/         # Весь контент
│   ├── hotels/pms/           # PMS страницы
│   ├── restaurants/pos/      # POS страницы
│   └── services/             # Сводные таблицы
├── .github/workflows/        # GitHub Actions
└── docs/                     # Проектная документация (эта папка)
```

---

## Документация проекта (эта папка)

| Файл | Содержание |
|---|---|
| `project-overview.md` | Структура проекта, технологии, команды |
| `DECISIONS.md` | Журнал архитектурных решений |
| `PROJECT_STATE.md` | Что работает / в разработке / не начато |
| `CONTEXT.md` | Цель, сделанное, открытые задачи, риски |
| `NEXT_TASK.md` | Backlog и шаги для деплоя |
| `CLAUDE.md` | Этот файл |

---

## Как обновлять документацию

После каждой значимой сессии:
1. Обновить `PROJECT_STATE.md` — переместить задачи из «В разработке» в «Работает»
2. Добавить запись в `src/content/docs/log.md`
3. Обновить `NEXT_TASK.md` — убрать выполненные, добавить новые
4. При новых решениях — добавить ADR в `DECISIONS.md`
