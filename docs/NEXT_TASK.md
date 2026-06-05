# Следующие задачи

## Сейчас (готово к деплою)

Ветка `feature/restructure-horeca-kb` содержит полную v1 KB с кейсами и перелинковкой.

### Шаги для выпуска v1

```bash
# 1. Закоммитить всё
git add -A
git commit -m "feat: add cases section (16 articles), restructure sidebar, cross-link KB articles"

# 2. Смержить в main
git checkout main
git merge feature/restructure-horeca-kb

# 3. Запушить
git push origin main
```

Затем вручную:
- GitHub → Settings → Pages → Source → **GitHub Actions** → Save
- Подождать ~2 минуты → открыть `https://astra-agency.github.io/kb-horeca/`

---

## Backlog (приоритет по убыванию)

### Высокий

- [ ] **Деплой v1** — merge + push + включить Pages

### Средний

- [ ] **Автопортье** — PMS для малых отелей, создать `hotels/pms/avtoportye.md` + sidebar
- [ ] **HotelCloud** — облачная PMS, создать `hotels/pms/hotelcloud.md` + sidebar
- [ ] **Обновить PMS comparison table** в `hotels/pms/index.md` — добавить Автопортье и HotelCloud
- [ ] **Перелинковка кейсов**: охвачено 11 статей; проверить оставшиеся (revenue/revpar, menu/food-cost, staff/service-standards и т.д.)
- [ ] **Обновить `docs/`** — привести project-overview.md в соответствие с реальной структурой папок

### Низкий

- [ ] **EN-заглушки** — заполнить или убрать из sidebar: `guides/quick-start`, `guides/front-of-house`, `guides/back-of-house`, `guides/inventory`, `guides/staff`, `guides/food-safety`, `guides/health-hygiene`, `guides/licensing`, `reference/glossary`, `reference/checklists`
- [ ] **Даты последней проверки** на страницах с ценами (цены меняются)
- [ ] **Glossary (ru)** — термины HoReCa: PMS, CM, OTA, POS, KDS, RevPAR, ADR и т.д.
- [ ] **Аналитика** — подключить Umami или Plausible

---

## Идеи для v2

- Кейсы с реальными клиентами — расширить текущие шаблонные кейсы
- Калькулятор ROI автоматизации
- Сравнение зарубежных систем (Oracle OPERA, Mews, Lightspeed)
- Чеклист внедрения PMS
