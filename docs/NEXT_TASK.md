# Следующие задачи

## Сейчас (готово к деплою)

Текущее состояние ветки `feature/restructure-horeca-kb` готово к v1.

### Шаги для выпуска v1

```bash
# 1. Закоммитить всё
git add -A
git commit -m "feat: complete HoReCa KB v1 — hotels, restaurants, services"

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

- [ ] **Автопортье** — PMS для малых отелей, создать `hotels/pms/avtoportye.md`
- [ ] **HotelCloud** — облачная PMS, создать `hotels/pms/hotelcloud.md`
- [ ] **Обновить PMS comparison table** в `hotels/pms/index.md` — добавить Автопортье и HotelCloud

### Низкий

- [ ] **EN-заглушки** — заполнить или убрать из sidebar: `guides/quick-start`, `guides/front-of-house`, `guides/back-of-house`, `guides/inventory`, `guides/staff`, `guides/food-safety`, `guides/health-hygiene`, `guides/licensing`, `reference/glossary`, `reference/checklists`
- [ ] **Даты последней проверки** на страницах с ценами (цены меняются)
- [ ] **Glossary (ru)** — термины HoReCa: PMS, CM, OTA, POS, KDS, RevPAR, ADR и т.д.
- [ ] **Аналитика** — подключить Umami или Plausible

---

## Идеи для v2

- Раздел «Кейсы» — реальные внедрения с результатами
- Калькулятор ROI автоматизации
- Сравнение зарубежных систем (Oracle OPERA, Mews, Lightspeed)
- Чеклист внедрения PMS
