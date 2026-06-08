# Следующие задачи

## Сейчас

Ветка `en-version` готова. Нужно запушить и смержить в `main`.

### Деплой EN версии

```bash
git add .
git commit -m "feat: add EN locale with 27 hospitality articles and 7 cases"
git push origin en-version
git checkout main
git merge en-version
git push origin main
git checkout en-version
```

---

## Backlog (приоритет по убыванию)

### Высокий

- [ ] **DNS + Pages custom domain** — kb-horeca.site
- [ ] **EN как дефолтная локаль** — поменять `defaultLocale` в `astro.config.mjs`:
  - Сейчас: `defaultLocale: 'root'` (RU без префикса, EN на `/en/`)
  - Цель: EN на корне `/`, RU на `/ru/`
  - Потребует: переместить все RU файлы из `src/content/docs/` в `src/content/docs/ru/`, обновить все внутренние ссылки, обновить sidebar slugs
  - ⚠️ Большой рефакторинг — делать отдельной веткой
- [ ] **Badges в sidebar** — пометить EN-only группы кейсов и новый контент:
  ```js
  { label: 'Operations & Supply Chain', badge: { text: 'EN', variant: 'tip' }, ... }
  { label: 'Staff & Compliance', badge: { text: 'EN', variant: 'tip' }, ... }
  { label: 'Finance & IT', badge: { text: 'EN', variant: 'tip' }, ... }
  ```

### Средний

- [ ] **Перевод RU статей на EN** — оставшийся контент без EN-версии:
  - `src/content/docs/services/` — IT сервисы (PMS, POS, Channel Manager, CRM и др.)
  - `src/content/docs/hotels/pms/` — 7 PMS систем + сравнение
  - `src/content/docs/restaurants/pos/` — iiko, r_keeper, Poster + сравнение
  - `src/content/docs/hotels/` — website-booking, channel-manager, reputation, crm
  - `src/content/docs/restaurants/` — delivery, loyalty, reservation
  - `src/content/docs/regulations/` — 54-ФЗ, ЕГАИС, ФМС (адаптировать для EN аудитории или пропустить)
  - Итого: ~30+ страниц
  1. GitHub → репо `kb-horeca` → **Settings → Pages → Source → GitHub Actions**
  2. Custom domain → `kb-horeca.site` → Save
  3. DNS: CNAME `kb-horeca.site` → `astra-agency.github.io`

### Средний

- [ ] **Автопортье** — `hotels/pms/avtoportye.md` + sidebar
- [ ] **HotelCloud** — `hotels/pms/hotelcloud.md` + sidebar
- [ ] **Обновить PMS comparison** в `hotels/pms/index.md`
- [ ] **Перелинковка кейсов**: «Кейсы по теме» в оставшихся статьях
- [ ] **RU контент для EN-only кейсов** — заменить заглушки полноценным RU текстом

### Низкий

- [ ] **EN-заглушки** — заполнить или убрать из sidebar:
  `guides/quick-start`, `guides/front-of-house`, `guides/back-of-house`,
  `guides/inventory`, `guides/staff`, `guides/food-safety`,
  `guides/health-hygiene`, `guides/licensing`, `reference/glossary`, `reference/checklists`
- [ ] **Даты проверки** на страницах с ценами
- [ ] **Glossary (RU)** — термины HoReCa: PMS, CM, OTA, POS, KDS, RevPAR, ADR

---

## Идеи для v2

- Кейсы с реальными клиентами
- Калькулятор ROI автоматизации
- Сравнение зарубежных систем (Oracle OPERA, Mews, Lightspeed)
- Чеклист внедрения PMS
