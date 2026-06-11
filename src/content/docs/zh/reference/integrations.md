---
title: Integration Map
description: Which HoReCa IT systems are compatible with each other — integration reference table
---

## Restaurants: POS ↔ other systems

### iiko integrations

| System | Integration type | What it provides |
|---|---|---|
| Yandex Food | Direct (API) | Aggregator orders appear automatically in the POS |
| Delivery Club / SberFood | Direct (API) | Same |
| Plazius | Bidirectional | Guest sync, bonuses, order history |
| Mindbox | Bidirectional | CRM data, segmentation, automated campaigns |
| TravelLine | Bidirectional | Hotel restaurant: room charges, unified bill |
| Logus HMS | Bidirectional | Same |
| 1C Accounting | Export | Financial data, inventory |
| Bitrix24 / amoCRM | API | Guests, marketing |
| Atol, Evotor, SHTRIKH-M | Direct | Fiscal register (online cash) |
| EGAIS (Honest Mark) | Direct | Alcohol tracking |

### r_keeper integrations

| System | Integration type | What it provides |
|---|---|---|
| Yandex Food | r_keeper Delivery | Order aggregation |
| Delivery Club | r_keeper Delivery | Order aggregation |
| StoreHouse | Native | Inventory management |
| 1C | Export | Accounting |
| TravelLine | Bidirectional | Hotel restaurant |
| EGAIS | Direct | Alcohol tracking |
| Fiscal registers | Direct | Online cash |

### Poster integrations

| System | Integration type | What it provides |
|---|---|---|
| Yandex Food | App marketplace | Orders to POS |
| Delivery Club | App marketplace | Orders to POS |
| 1C | Export | Accounting |
| Fiscal registers | Direct | Online cash |

---

## Hotels: PMS ↔ other systems

### TravelLine integrations

| System | Type | What it provides |
|---|---|---|
| Ostrovok | Channel Manager | Room/rate synchronization |
| Yandex Travel | Channel Manager | Same |
| Booking.com | Channel Manager | Same |
| Bronevik, Sutochno.ru | Channel Manager | Same |
| iiko, r_keeper | Bidirectional | Restaurant + hotel on one bill |
| Bitrix24, amoCRM | API | Guest CRM |
| Scala-Hotel | Built-in | Police/FMS registration |
| 1C | Export | Accounting |
| Electronic locks (Assa Abloy, Salto) | API | Keyless access |

### Bnovo integrations

| System | Type | What it provides |
|---|---|---|
| Ostrovok | Channel Manager | Sync |
| Yandex Travel | Channel Manager | Sync |
| Avito (rentals) | Channel Manager | Short-term rental |
| Bitrix24, amoCRM | API | CRM |
| Scala-Hotel | Built-in | Police/FMS registration |
| Bnovo Pay | Built-in | Payment processing |
| Electronic locks | API | Keyless access |

---

## System combinations

### Restaurant with loyalty program
```
iiko → iikoCard5 (basic loyalty)
iiko → Plazius (mobile loyalty + SberFood)
iiko → Mindbox (enterprise CRM + omnichannel)
```

### Restaurant + delivery
```
iiko → Yandex Food (direct) + Delivery Club (direct)
r_keeper → r_keeper Delivery → aggregators
Poster → app marketplace → aggregators
```

### Hotel with restaurant
```
TravelLine PMS → iiko (room charges)
TravelLine PMS → r_keeper (room charges)
```

### Hotel + OTA
```
TravelLine PMS → TravelLine Channel Manager → 130+ OTAs
Bnovo PMS → Bnovo Channel Manager → main OTAs
MaxiBooking PMS → built-in CM → OTAs
```
