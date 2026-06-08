# Контекст проекта

## Цель

Создать публичную базу знаний по ИТ-сервисам для HoReCa (отели, рестораны, кафе). Целевая аудитория — владельцы и управляющие HoReCa, включая англоязычных профессионалов (US/EU рынок).

Деплой: GitHub Pages, домен `https://kb-horeca.site/`.

---

## Что сделано

### Инфраструктура
- Astro 6.4.4 + Starlight 0.39.3 — настроен и работает
- `astro.config.mjs` — `site`, root locale (EN) + RU locale `/ru/`, полный sidebar с `translations`
- `.github/workflows/deploy.yml` — GitHub Actions для деплоя в Pages
- **i18n:** `defaultLocale: 'root'` (EN без префикса) + `ru` (`/ru/` prefix)

### EN контент — нетехнический (27 статей)
- Hotels: Revenue Management (5), Staff (3), Guest Experience (4), Operations (3)
- Restaurants: Menu & Economics (4), Staff (2), Operations (3), Guest Experience (3)
- Sidebar badge: `EN` на всех этих секциях

### EN контент — технический (34 статьи, переведены из RU)
- Selection Guides: How to Choose POS, How to Choose PMS
- Hotels IT: PMS overview + 7 систем (TravelLine, Bnovo, Контур.Отель, Saby Hotel, Logus HMS, MaxiBooking, TravelLine vs Bnovo), Channel Manager, Website & Booking, Reputation, CRM
- Restaurants IT: POS overview + iiko, r_keeper, Poster, iiko vs r_keeper, Delivery, Loyalty, Reservation
- Trends: HoReCa IT Market 2025–2026
- Guides (Operations): Quick Start, Front of House, Back of House, Inventory, Staff
- Sanitation & Licensing: Food Safety, Health & Hygiene, Licensing & Regulations
- Reference: Integration Map, Glossary, Checklists

### Раздел «Кейсы»
- 16 кейсов на EN (root locale): CRM, Loyalty, Booking, Automation, Mobile, Operations, Compliance, Finance
- RU кейсы: есть стабы, нужно полноценное содержимое

### Sidebar badges
- `EN` (blue/tip): Hotels (Revenue, Staff, Guest Experience, Operations), Restaurants (Menu, Staff, Operations, Guest Experience), Cases (Operations & Supply Chain, Staff & Compliance, Finance & IT)
- `RU` (orange/caution): Services Hotels IT, Services Restaurants IT, Russian Regulations, Trends, Selection Guides, Operations guides, Sanitation & Licensing, Reference
- ⚠️ Services/Guides/Reference имеют EN контент но `RU` badge — нужно обновить

---

## Последние изменения (сессия 7, 2026-06-08)

- **i18n локали переключены**: EN теперь root locale (без префикса), RU на `/ru/`
- **Удалена папка** `src/content/docs/en/` (старый подход EN в `/en/`)
- **Переведено 34 EN статьи**: PMS (8), POS (5), Services (7), Trends (1), Guides/Operations (5), Sanitation (3), Reference (3), Selection Guides (2)
- **Badges в sidebar**: EN на нетехнических секциях Hotels/Restaurants, RU на Services/IT/Reference
- **Исправлены ссылки**: EN главная (убран `/en/` префикс), RU главная (добавлен `/ru/` префикс)
- **Разрешён git merge conflict** `en-version` → `main`

---

## Открытые задачи

| Задача | Приоритет |
|---|---|
| Закоммитить и запушить | Высокий |
| DNS + custom domain kb-horeca.site | Высокий |
| Обновить badges для Services/Guides/Reference → убрать `RU` | Средний |
| RU версии технических статей (`ru/hotels/pms/`, `ru/restaurants/pos/` и т.д.) | Средний |
| RU контент для кейсов (заглушки → полный текст) | Средний |
| Автопортье, HotelCloud — новые PMS страницы | Средний |
| Регуляции: 54-ФЗ, ЕГАИС, ФМС — заполнить стабы | Низкий |
| Перелинковка кейсов (оставшиеся статьи) | Низкий |

---

## Важные файлы

| Файл | Зачем |
|---|---|
| `astro.config.mjs` | Sidebar, site URL, i18n локали — менять осторожно |
| `.github/workflows/deploy.yml` | GitHub Actions деплой |
| `src/content/docs/index.mdx` | EN главная страница (root locale) |
| `src/content/docs/ru/index.mdx` | RU главная страница |
| `src/content/docs/services/index.md` | Сводные таблицы и матрица |
| `src/content/docs/log.md` | Лог изменений контента |

---

## i18n структура

```
src/content/docs/           ← EN (root locale, без префикса)
└── ru/                     ← RU locale (/ru/ prefix)
    ├── index.mdx
    ├── hotels/
    └── restaurants/
```

EN файл `hotels/revenue/revpar-adr-occupancy.md` → `/hotels/revenue/revpar-adr-occupancy/`
RU файл `ru/hotels/revenue/revpar-adr-occupancy.md` → `/ru/hotels/revenue/revpar-adr-occupancy/`

---

## Риски

| Риск | Вероятность | Митигация |
|---|---|---|
| Данные о ценах устаревают | Высокая | Ставить дату последней проверки |
| Services/IT sidebar badges = `RU` но контент EN | Средняя | Обновить badges |
| GitHub Pages не включён вручную | Высокая | Settings → Pages → активировать |
| DNS для `kb-horeca.site` не настроен | Высокая | CNAME → astra-agency.github.io |
| RU версии технических статей отсутствуют | Средняя | Создать `ru/hotels/pms/`, `ru/restaurants/pos/` и т.д. |
