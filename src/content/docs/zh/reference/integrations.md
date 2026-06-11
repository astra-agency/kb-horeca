---
title: 系统集成地图
description: HoReCa IT系统之间的兼容性对照参考表
---

## 餐厅：POS ↔ 其他系统

> **注意：** 以下为俄罗斯市场集成参考。中国市场集成方案见底部。

### iiko 集成

| 系统 | 集成类型 | 功能 |
|---|---|---|
| Yandex Food | 直接（API） | 聚合平台订单自动进入POS |
| Delivery Club / SberFood | 直接（API） | 同上 |
| Plazius | 双向 | 宾客同步、积分、订单历史 |
| Mindbox | 双向 | CRM数据、客群细分、自动化营销 |
| TravelLine | 双向 | 酒店餐厅：挂房账、统一账单 |
| Logus HMS | 双向 | 同上 |
| 1C 会计 | 导出 | 财务数据、库存 |
| Bitrix24 / amoCRM | API | 宾客、营销 |
| Atol、Evotor、SHTRIKH-M | 直接 | 税控（在线收银） |
| EGAIS（诚信标识） | 直接 | 酒类追溯 |

### r_keeper 集成

| 系统 | 集成类型 | 功能 |
|---|---|---|
| Yandex Food | r_keeper Delivery | 订单聚合 |
| Delivery Club | r_keeper Delivery | 订单聚合 |
| StoreHouse | 原生 | 库存管理 |
| 1C | 导出 | 会计 |
| TravelLine | 双向 | 酒店餐厅 |
| EGAIS | 直接 | 酒类追溯 |
| 税控设备 | 直接 | 在线收银 |

### Poster 集成

| 系统 | 集成类型 | 功能 |
|---|---|---|
| Yandex Food | 应用市场 | 订单至POS |
| Delivery Club | 应用市场 | 订单至POS |
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
