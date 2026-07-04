# LOG

from latest to earliest.

## 2026-07-04

- ingest | Hotel platforms & messenger-CRM services (TeamJet, GoodStay, GuestPulse, HotBot.ai, Wazzup24)
  - `raw/2026/0704/` — moved 9 inbox files (TeamJet, GoodStay, GuestPulse, HotBot, Wazzup24 research + landing pages)
  - `src/content/docs/ru/services/teamjet.md` — created: TeamJet operations platform overview
  - `src/content/docs/ru/services/goodstay.md` — created: GoodStay QR-showcase & loyalty overview
  - `src/content/docs/ru/services/guestpulse.md` — created: GuestPulse AI reputation management overview
  - `src/content/docs/ru/services/hotbot.md` — created: HotBot.ai AI chatbot & services showcase overview
  - `src/content/docs/ru/services/wazzup24.md` — created: Wazzup24 WhatsApp Business API for HoReCa overview
  - `src/content/docs/ru/services/index.md` — added new service tables (platforms, reputation, messenger-CRM) and category links
  - `src/content/docs/ru/hotels/reputation.md` — added GuestPulse section + comparison table
  - `src/content/docs/ru/hotels/crm.md` — added Wazzup24 cross-link
  - `src/content/docs/ru/index.mdx` — added "Платформы и сервисы" section with new service cards
- refactor | Renamed `cases/` → `use-cases/` across all 3 locales (root/EN, ru, zh)
  - `src/content/docs/cases/` → `src/content/docs/use-cases/`
  - `src/content/docs/ru/cases/` → `src/content/docs/ru/use-cases/`
  - `src/content/docs/zh/cases/` → `src/content/docs/zh/use-cases/`
  - `astro.config.mjs` — sidebar: "Cases" → "Use Cases", all `cases/` slugs → `use-cases/`, added "Hotel Platforms" sidebar group
  - All `.md`/`.mdx` files — bulk-replaced `/cases/` → `/use-cases/` link references (65 files)
- docs | Added LOG.md rules to `AGENTS.md` Logger section (was "TBD")
  - `AGENTS.md` — defined language (English), append-only, entry format, when-to-log, exclusions
- update | Moved `## Commands` section from `AGENTS.md` to `README.md`
  - `AGENTS.md` — removed Commands section (build commands belong in developer-facing README)
  - `README.md` — added Commands section before "What is HoReCa KB?"
- update | Moved DECISIONS.md to `.agents/` and translated to English
  - Created `.agents/DECISIONS.md` (English translation of all 16 ADRs)
  - Deleted `docs/DECISIONS.md`
  - Updated references in `AGENTS.md`, `README.md`, `.agents/memory/project-state.md`
- update | LOG.md language switched to English; wiki-* skills now require English LOG entries
  - `wiki-ingest`, `wiki-init`, `wiki-lint`, `wiki-query`, `wiki-update`, `llm-wiki` — added "in English" note for LOG.md appends
  - Translated existing Russian LOG entries to English
- update | Removed WordPress-specific references from wiki-* skills
  - `.agents/skills/wiki-ingest/SKILL.md` — dropped "WordPress.com → Open-Source Adaptation" section; frontmatter and process rewritten for HoReCa
  - `.agents/skills/wiki-init/SKILL.md` — description changed from "WP Knowledge" to "HoReCa knowledge base"
  - `.agents/skills/llm-wiki/SKILL.md` — description and shared invariants rewritten for HoReCa
  - `.agents/skills/summarize/SKILL.md` — example URL swapped from wordpress.org to kb-horeca.site
  - `ROADMAP.md` — items marked complete

## 2026-06-11

Digital ID in MAKs — hotel check-in

Created:
- `ru/regulations/digital-id-max.md` — guest check-in via digital ID in MAKs messenger (VK): regulatory basis, timeline, mechanics for hotel and guest, pilot geography

Updated:
- `ru/regulations/fms-hotels.md` — added cross-reference to digital ID in MAKs
- `ru/trends/market-2026.md` — added digital ID mention in contactless tech and regulatory context sections

Sources: 10 news publications (November 2025 – June 2026), including Interfax, Ferra, NTV, AiF, RUBEZH.
Key statement: Rustam Khaibullov (VK), "Travel!" forum, June 2026 — "half of accommodation facilities in Russia already have the ability to check in via digital ID".


## 2026-06-04

- init | HoReCa knowledge base structure initialized

### phase-1 | "Hotels" section

Created:
- `hotels/index.md` — automation blocks overview, typical stack
- `hotels/website-booking.md` — platforms, booking modules, Blocksy Travel template
- `hotels/channel-manager.md` — how it works, comparison of TravelLine/Bnovo/Broniruy.Online
- `hotels/reputation.md` — TravelLine Reputation (27 platforms, AI), TrustYou
- `hotels/crm.md` — Bitrix24, AmoCRM, TravelLine CRM
- `hotels/pms/index.md` — comparison table of all PMS, selection by hotel size
- `hotels/pms/travelline.md` — all modules, LITE/STANDARD/PREMIUM/CM/Reputation tariffs, 6,200+ properties
- `hotels/pms/bnovo.md` — PMS + CM 40+ channels, Bnovo Pay, 16,000+ properties
- `hotels/pms/kontur-hotel.md` — 35+ OTAs, hourly booking, Kontur ecosystem
- `hotels/pms/saby-hotel.md` — full Saby stack, SabyGPT, Presto (restaurant), from 10,000 RUB/month
- `hotels/pms/logus-hms.md` — on-premise, offline operation, corporate dashboards
- `hotels/pms/maxibooking.md` — no room limit, 15 days free

### phase-2 | "Restaurants and cafes" section

Created:
- `restaurants/index.md` — automation blocks, typical stack, POS selection, Blocksy templates
- `restaurants/pos/index.md` — comparison of iiko/r_keeper/Poster across 14 parameters
- `restaurants/pos/iiko.md` — iikoRMS, iikoChain, iikoDelivery, iikoKitchen, iiko Card
- `restaurants/pos/rkeeper.md` — Cloud from 4,085 RUB/month, LifeTime 107,000 RUB, 70,000+ venues
- `restaurants/pos/poster.md` — Postie AI, Poster Boss, Kitchen Kit, 15 days free
- `restaurants/delivery.md` — Yandex.Eda/Delivery Club vs own delivery
- `restaurants/loyalty.md` — program types, iiko Card, Plazius, Mindbox, Passteam
- `restaurants/reservation.md` — Restoplace (3,000 venues) vs ToMesto (12,000+)

### phase-3 | "Services" section + enrichment

Updated:
- `services/index.md` — full comparison tables for PMS, CM, reputation, POS, delivery, reservation; summary matrix "what fits whom" (7 scenarios)
- `hotels/pms/kontur-hotel.md` — enriched: hourly booking, 2025 biometrics, property matrix
- `hotels/pms/saby-hotel.md` — enriched: SabyGPT, Presto, staff management, pricing
- `hotels/pms/logus-hms.md` — enriched: client-server architecture, corporate dashboards, iiko/r_keeper integrations
- `hotels/website-booking.md` — added Blocksy Travel template, MotoPress Hotel Booking, step-by-step process
- `restaurants/index.md` — added Blocksy Restaurant + Catering templates with plugins

### fix-links | Fixed internal links (404)

Fixed in 5 files: replaced all `.md` extensions with absolute paths `/<slug>/`.
- `index.mdx` — 3 links
- `hotels/index.md` — 5 links
- `restaurants/index.md` — 4 links
- `hotels/pms/index.md` — 6 links
- `restaurants/pos/index.md` — 3 links

Added documentation: `docs/` folder (project-overview, DECISIONS, PROJECT_STATE, CONTEXT, NEXT_TASK, CLAUDE.md).
Added rule ADR-008 in DECISIONS.md: never use `.md` in links.

