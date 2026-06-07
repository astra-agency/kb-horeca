# Следующие задачи

## Сейчас

`main` запушен. Сайт задеплоен на GitHub Pages. Осталось активировать кастомный домен.

### Включить кастомный домен kb-horeca.site

1. GitHub → репо `kb-horeca` → **Settings → Pages**
2. Source → **GitHub Actions**
3. Custom domain → `kb-horeca.site` → Save
4. DNS у регистратора: CNAME `kb-horeca.site` → `astra-agency.github.io`
5. Дождаться DNS propagation (~10–60 мин) → открыть `https://kb-horeca.site/`

---

## Backlog (приоритет по убыванию)

### Высокий

- [ ] **DNS + Pages custom domain** — см. шаги выше

### Средний

- [ ] **Автопортье** — PMS для малых отелей, создать `hotels/pms/avtoportye.md` + добавить в sidebar
- [ ] **HotelCloud** — облачная PMS, создать `hotels/pms/hotelcloud.md` + добавить в sidebar
- [ ] **Обновить PMS comparison table** в `hotels/pms/index.md` — добавить Автопортье и HotelCloud
- [ ] **Перелинковка кейсов**: добавить «Кейсы по теме» в оставшиеся статьи (revenue/revpar, menu/food-cost, staff/service-standards и др.)

### Низкий

- [ ] **EN-заглушки** — заполнить или убрать из sidebar: `guides/quick-start`, `guides/front-of-house`, `guides/back-of-house`, `guides/inventory`, `guides/staff`, `guides/food-safety`, `guides/health-hygiene`, `guides/licensing`, `reference/glossary`, `reference/checklists`
- [ ] **Даты последней проверки** на страницах с ценами
- [ ] **Glossary (ru)** — термины HoReCa: PMS, CM, OTA, POS, KDS, RevPAR, ADR и т.д.

---

## Идеи для v2

- Кейсы с реальными клиентами — расширить текущие шаблонные кейсы
- Калькулятор ROI автоматизации
- Сравнение зарубежных систем (Oracle OPERA, Mews, Lightspeed)
- Чеклист внедрения PMS
