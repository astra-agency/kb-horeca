# Текущее состояние проекта

**Версия:** 1.1
**Дата обновления:** 2026-06-07 (сессия 6)
**Ветка:** `en-version` (ожидает мержа в `main`)

---

## Работает

| Что | Статус |
|---|---|
| Локальная разработка (`npm run dev`) | ✅ `http://localhost:4321/` |
| Сборка (`npm run build`) | ✅ |
| GitHub Actions workflow (`deploy.yml`) | ✅ |
| **Домен kb-horeca.site** | ⏳ DNS/Pages custom domain не настроен |
| **Яндекс Метрика (109685688)** | ✅ |
| **i18n: RU (root) + EN (/en/)** | ✅ Starlight root locale |
| **EN главная (`/en/`)** | ✅ CardGrid с разделами |
| **EN кейсы (`/en/cases/`)** | ✅ 7 статей + индекс |
| **EN нетехнический контент** | ✅ 27 статей |
| — EN Hotels Revenue (5 статей) | ✅ |
| — EN Hotels Staff (3 статьи) | ✅ |
| — EN Hotels Guest Experience (4 статьи) | ✅ |
| — EN Hotels Operations (3 статьи) | ✅ |
| — EN Restaurants Menu (4 статьи) | ✅ |
| — EN Restaurants Staff (2 статьи) | ✅ |
| — EN Restaurants Operations (3 статьи) | ✅ |
| — EN Restaurants Guest Experience (3 статьи) | ✅ |
| **RU стабы для EN-only кейсов** | ✅ 7 файлов в `cases/` |
| **Sidebar: translations для EN** | ✅ все секции Hotels/Restaurants |
| RU контент (все разделы) | ✅ без изменений |

---

## В разработке / требует улучшения

| Что | Приоритет | Примечание |
|---|---|---|
| DNS + custom domain kb-horeca.site | Высокий | CNAME + Pages settings |
| Мерж `en-version` → `main` | Высокий | Готов к мержу |
| RU переводы EN-only кейсов | Средний | Сейчас заглушки с редиректом на EN |
| Автопортье | Средний | Страница не создана |
| HotelCloud | Средний | Страница не создана |
| Перелинковка кейсов (оставшиеся статьи) | Средний | ~15+ статей без «Кейсы по теме» |

---

## Не начинали

| Что | Примечание |
|---|---|
| Сравнение зарубежных vs российских систем | Не запланирован |
| Видео-контент / скриншоты | Не запланирован |
| Аналитика (Umami, GA) | Не запланирован |
| Форма обратной связи | Не запланирован |

---

## Технический долг

| Проблема | Решение |
|---|---|
| `guides/*` — оригинальный EN контент (заглушки) | Заполнить или убрать из sidebar |
| `reference/glossary`, `reference/checklists` — заглушки | То же |
| 7 RU стабов для EN-only кейсов | Написать полноценный RU-контент или убрать из sidebar RU |

---

## Как подключить кастомный домен

1. GitHub → репо → **Settings → Pages → Source → GitHub Actions → Save**
2. Custom domain → `kb-horeca.site` → Save
3. DNS у регистратора: CNAME `kb-horeca.site` → `astra-agency.github.io`
4. Дождаться DNS propagation → открыть `https://kb-horeca.site/`
