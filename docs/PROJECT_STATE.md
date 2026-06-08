# Текущее состояние проекта

**Версия:** 1.2
**Дата обновления:** 2026-06-08 (сессия 7)
**Ветка:** `en-version` (не закоммичено, ожидает пуша)

---

## Работает

| Что | Статус |
|---|---|
| Локальная разработка (`npm run dev`) | ✅ `http://localhost:4321/` |
| Сборка (`npm run build`) | ✅ |
| GitHub Actions workflow (`deploy.yml`) | ✅ |
| **Домен kb-horeca.site** | ⏳ DNS/Pages custom domain не настроен |
| **Яндекс Метрика (109685688)** | ✅ |
| **i18n: EN (root) + RU (/ru/)** | ✅ EN без префикса, RU на `/ru/` |
| **EN главная (`/`)** | ✅ CardGrid с разделами |
| **RU главная (`/ru/`)** | ✅ ссылки исправлены (`/ru/` prefix) |
| **EN нетехнический контент (27 статей)** | ✅ |
| — EN Hotels Revenue (5 статей) | ✅ |
| — EN Hotels Staff (3 статьи) | ✅ |
| — EN Hotels Guest Experience (4 статьи) | ✅ |
| — EN Hotels Operations (3 статьи) | ✅ |
| — EN Restaurants Menu (4 статьи) | ✅ |
| — EN Restaurants Staff (2 статьи) | ✅ |
| — EN Restaurants Operations (3 статьи) | ✅ |
| — EN Restaurants Guest Experience (3 статьи) | ✅ |
| **EN технический контент (34 статьи, переведены)** | ✅ |
| — Selection Guides (2: POS, PMS) | ✅ |
| — PMS (8: overview + 7 систем) | ✅ |
| — POS (5: overview + iiko, r_keeper, Poster, comparison) | ✅ |
| — Hotel services (4: channel-manager, reputation, crm, website-booking) | ✅ |
| — Restaurant services (3: delivery, loyalty, reservation) | ✅ |
| — Trends (1: market-2026) | ✅ |
| — Guides/Operations (5) | ✅ |
| — Sanitation & Licensing (3) | ✅ |
| — Reference (3: integrations, glossary, checklists) | ✅ |
| **EN кейсы (16)** | ✅ |
| **Sidebar: translations + EN/RU badges** | ✅ |

---

## В разработке / требует улучшения

| Что | Приоритет | Примечание |
|---|---|---|
| Закоммитить и запушить | Высокий | Много незакоммиченных изменений |
| DNS + custom domain kb-horeca.site | Высокий | CNAME + Pages settings |
| Sidebar badges Services/IT → убрать `RU` | Средний | Контент EN, badge говорит RU |
| RU версии технических статей | Средний | `ru/hotels/pms/`, `ru/restaurants/pos/`, etc. |
| RU кейсы — заменить стабы полным текстом | Средний | Сейчас заглушки |
| Автопортье | Средний | Страница не создана |
| HotelCloud | Средний | Страница не создана |
| Перелинковка кейсов (оставшиеся статьи) | Низкий | ~15+ статей без «Кейсы по теме» |

---

## Не начинали

| Что | Примечание |
|---|---|
| Регуляции: 54-ФЗ, ЕГАИС, ФМС — заполнить стабы | Низкий приоритет |
| Сравнение зарубежных vs российских систем | Не запланирован |
| Видео-контент / скриншоты | Не запланирован |
| Аналитика (Umami, GA) | Не запланирован |
| Форма обратной связи | Не запланирован |

---

## Технический долг

| Проблема | Решение |
|---|---|
| Services/IT sidebar badges = `RU` но контент теперь EN | Обновить badges на `EN` или убрать |
| RU версии технических статей отсутствуют | Создать `ru/hotels/pms/`, `ru/restaurants/pos/` и т.д. |
| 16 RU кейсов — стабы | Написать полноценный RU-контент |
| Регуляции 54-ФЗ / ЕГАИС / ФМС — стабы на EN | Заполнить или убрать из sidebar |

---

## Как подключить кастомный домен

1. GitHub → репо → **Settings → Pages → Source → GitHub Actions → Save**
2. Custom domain → `kb-horeca.site` → Save
3. DNS у регистратора: CNAME `kb-horeca.site` → `astra-agency.github.io`
4. Дождаться DNS propagation → открыть `https://kb-horeca.site/`
