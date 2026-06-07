# Контекст проекта

## Цель

Создать публичную базу знаний по ИТ-сервисам для HoReCa (отели, рестораны, кафе). Целевая аудитория — владельцы и управляющие HoReCa, включая англоязычных профессионалов (US/EU рынок).

Деплой: GitHub Pages, домен `https://kb-horeca.site/`.

---

## Что сделано

### Инфраструктура
- Astro 6.4.4 + Starlight 0.39.3 — настроен и работает
- `astro.config.mjs` — `site`, root locale (RU) + EN locale, полный sidebar с `translations`
- `.github/workflows/deploy.yml` — GitHub Actions для деплоя в Pages
- **i18n:** `defaultLocale: 'root'` (RU без префикса) + `en` (`/en/` prefix)

### RU контент — раздел «Отели» (~28 страниц)
- Подразделы: Управление доходом, Персонал, Гостевой опыт, Операции

### RU контент — раздел «Рестораны» (~16 страниц)
- Подразделы: Меню и экономика, Персонал, Операции, Гостевой опыт

### Раздел «Кейсы» (16 RU + 7 EN-only + индекс)
- 5 RU групп: CRM и продажи, Лояльность, Бронирование, Автоматизация, Мобильные решения
- 3 EN-only группы: Operations & Supply Chain, Staff & Compliance, Finance & IT
- RU стабы для EN-only кейсов (редирект на `/en/cases/...`)

### Раздел «Сервисы» — IT контент
- Отели IT: PMS (7 систем + сравнение), Channel Manager, бронирование, репутация, CRM
- Рестораны IT: POS (iiko, r_keeper, Poster + сравнение), доставка, лояльность, резервация

### EN локаль — `src/content/docs/en/`
- Главная (`/en/`) — CardGrid с разделами Hotels/Restaurants/Cases
- Кейсы (`/en/cases/`) — 7 статей + индекс (US/EU рынок)
- Нетехнический контент — 27 статей (Hotels 15 + Restaurants 12)
  - Адаптированы для US/EU: USD, IATA, Digital Markets Act, US терминология

### Перелинковка кейсов ↔ KB-статьи
- 11 статей получили секцию «Кейсы по теме»

---

## Последние изменения (2026-06-07, сессия 6)

- **EN локаль**: добавлена поддержка `/en/` через Starlight i18n
- **EN нетехнический контент**: 27 статей из `docs-raw/hospitality-en/` → `src/content/docs/en/`
- **EN кейсы**: 7 статей из `docs-raw/cases-en/` → `src/content/docs/en/cases/`
- **RU стабы**: 7 файлов в `src/content/docs/cases/` для EN-only кейсов (sidebar fix)
- **EN главная**: переработана с таблицы на CardGrid/LinkCard
- **Сборка**: исправлена ошибка `slug does not exist` для EN-only кейсов

---

## Открытые задачи

| Задача | Приоритет |
|---|---|
| Мерж `en-version` → `main`, деплой | Высокий |
| Включить GitHub Pages custom domain `kb-horeca.site` | Высокий |
| Автопортье | Средний |
| HotelCloud | Средний |
| Перелинковка кейсов (оставшиеся ~15 статей) | Средний |
| Заполнить или убрать EN-заглушки (`guides/*`, `reference/*`) | Низкий |

---

## Важные файлы

| Файл | Зачем |
|---|---|
| `astro.config.mjs` | Sidebar, site URL, i18n локали — менять осторожно |
| `.github/workflows/deploy.yml` | GitHub Actions деплой |
| `src/content/docs/index.mdx` | RU главная страница |
| `src/content/docs/en/index.mdx` | EN главная страница |
| `src/content/docs/services/index.md` | Сводные таблицы и матрица |
| `src/content/docs/log.md` | Лог изменений контента |

---

## i18n структура

```
src/content/docs/           ← RU (root locale, без префикса)
└── en/                     ← EN locale (/en/ prefix)
    ├── index.mdx
    ├── cases/
    ├── hotels/
    └── restaurants/
```

RU файл `hotels/revenue/revpar-adr-occupancy.md` → `/hotels/revenue/revpar-adr-occupancy/`
EN файл `en/hotels/revenue/revpar-adr-occupancy.md` → `/en/hotels/revenue/revpar-adr-occupancy/`

---

## Риски

| Риск | Вероятность | Митигация |
|---|---|---|
| Данные о ценах устаревают | Высокая | Ставить дату последней проверки |
| Страницы EN-заглушек (`guides/*`) в sidebar — пустые | Средняя | Заполнить или убрать из sidebar |
| GitHub Pages не включён вручную | Высокая | Settings → Pages → активировать |
| DNS для `kb-horeca.site` не настроен | Высокая | CNAME → astra-agency.github.io |
