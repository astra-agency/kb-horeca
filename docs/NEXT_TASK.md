# Следующие задачи

## Сейчас

Ветка `en-version` готова. Нужно закоммитить все изменения и запушить.

### Коммит и деплой

```bash
git add .
git commit -m "feat: switch EN to root locale, translate 34 EN articles (PMS/POS/services/guides/reference)"
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
  1. GitHub → репо → **Settings → Pages → Source → GitHub Actions → Save**
  2. Custom domain → `kb-horeca.site` → Save
  3. DNS: CNAME `kb-horeca.site` → `astra-agency.github.io`

### Средний

- [ ] **Обновить sidebar badges** — убрать `RU` у секций с EN контентом:
  - Services → Hotels IT → убрать `badge: { text: 'RU', variant: 'caution' }`
  - Services → Restaurants IT → то же
  - Selection Guides → то же
  - Operations (guides) → то же
  - Sanitation & Licensing → то же
  - Reference → то же
  - (или сменить на `EN`)

- [ ] **RU версии технических статей** — создать в `ru/`:
  - `ru/hotels/pms/` — 8 файлов
  - `ru/restaurants/pos/` — 5 файлов
  - `ru/hotels/channel-manager.md`, `crm.md`, `reputation.md`, `website-booking.md`
  - `ru/restaurants/delivery.md`, `loyalty.md`, `reservation.md`
  - `ru/trends/market-2026.md`
  - `ru/guides/` — 10 файлов
  - `ru/reference/` — 3 файла

- [ ] **Автопортье** — `hotels/pms/avtoportye.md` + sidebar
- [ ] **HotelCloud** — `hotels/pms/hotelcloud.md` + sidebar
- [ ] **RU кейсы** — заменить стабы полноценным RU текстом

### Низкий

- [ ] **Regulations stubs** — заполнить или убрать из sidebar:
  `regulations/54-fz`, `regulations/egais`, `regulations/fms-hotels`
- [ ] **Перелинковка кейсов** — добавить «Кейсы по теме» в оставшихся статьях (~15+)
- [ ] **Даты проверки** на страницах с ценами
- [ ] **Glossary (RU)** в `ru/reference/glossary.md`

---

## Идеи для v2

- Кейсы с реальными клиентами
- Калькулятор ROI автоматизации
- Сравнение зарубежных систем (Oracle OPERA, Mews, Lightspeed)
- Чеклист внедрения PMS
