---
title: Лог изменений
description: История изменений базы знаний
---

## [2026-06-04] init | Инициализация структуры базы знаний HoReCa

## [2026-06-04] phase-1 | Раздел «Отели и гостиницы»

Создано:
- `hotels/index.md` — обзор блоков автоматизации, типичный стек
- `hotels/website-booking.md` — платформы, модули бронирования, Blocksy Travel шаблон
- `hotels/channel-manager.md` — как работает, сравнение TravelLine/Bnovo/Бронируй.Онлайн
- `hotels/reputation.md` — TravelLine Reputation (27 площадок, AI), TrustYou
- `hotels/crm.md` — Bitrix24, AmoCRM, TravelLine CRM
- `hotels/pms/index.md` — сравнительная таблица всех PMS, выбор по размеру отеля
- `hotels/pms/travelline.md` — все модули, тарифы LITE/STANDARD/PREMIUM/CM/Reputation, 6 200+ объектов
- `hotels/pms/bnovo.md` — PMS + CM 40+ каналов, Bnovo Pay, 16 000+ объектов
- `hotels/pms/kontur-hotel.md` — 35+ OTA, почасовое бронирование, экосистема Контур
- `hotels/pms/saby-hotel.md` — полный стек Saby, SabyGPT, Presto (ресторан), от 10 000 ₽/мес
- `hotels/pms/logus-hms.md` — on-premise, работа без интернета, корпоративные кабинеты
- `hotels/pms/maxibooking.md` — без лимита номеров, 15 дней бесплатно

## [2026-06-04] phase-2 | Раздел «Рестораны и кафе»

Создано:
- `restaurants/index.md` — блоки автоматизации, типичный стек, выбор POS, Blocksy шаблоны
- `restaurants/pos/index.md` — сравнение iiko/r_keeper/Poster по 14 параметрам
- `restaurants/pos/iiko.md` — iikoRMS, iikoChain, iikoDelivery, iikoKitchen, iiko Card
- `restaurants/pos/rkeeper.md` — Cloud от 4 085 ₽/мес, LifeTime 107 000 ₽, 70 000+ заведений
- `restaurants/pos/poster.md` — Postie AI, Poster Boss, Kitchen Kit, 15 дней бесплатно
- `restaurants/delivery.md` — Яндекс.Еда/Delivery Club vs собственная доставка
- `restaurants/loyalty.md` — типы программ, iiko Card, Plazius, Mindbox, Passteam
- `restaurants/reservation.md` — Restoplace (3 000 заведений) vs ТоМесто (12 000+)

## [2026-06-04] phase-3 | Раздел «Сервисы» + enrichment

Обновлено:
- `services/index.md` — полные сравнительные таблицы PMS, CM, репутации, POS, доставки, резервации; сводная матрица «кому что подходит» (7 сценариев)
- `hotels/pms/kontur-hotel.md` — обогащён: почасовое бронирование, биометрия 2025, матрица объектов
- `hotels/pms/saby-hotel.md` — обогащён: SabyGPT, Presto, управление персоналом, цены
- `hotels/pms/logus-hms.md` — обогащён: клиент-серверная архитектура, корпоративные кабинеты, интеграции iiko/r_keeper
- `hotels/website-booking.md` — добавлен Blocksy Travel шаблон, MotoPress Hotel Booking, пошаговый процесс
- `restaurants/index.md` — добавлены Blocksy Restaurant + Catering шаблоны с плагинами

## [2026-06-04] fix-links | Исправлены внутренние ссылки (404)

Исправлено в 5 файлах: заменены все `.md`-расширения на абсолютные пути `/<slug>/`.
- `index.mdx` — 3 ссылки
- `hotels/index.md` — 5 ссылок
- `restaurants/index.md` — 4 ссылки
- `hotels/pms/index.md` — 6 ссылок
- `restaurants/pos/index.md` — 3 ссылки

Добавлена документация: `docs/` папка (project-overview, DECISIONS, PROJECT_STATE, CONTEXT, NEXT_TASK, CLAUDE.md).
Добавлено правило ADR-008 в DECISIONS.md: никогда не использовать `.md` в ссылках.
