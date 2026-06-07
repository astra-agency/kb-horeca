---
title: "Case Study: Dynamic Pricing & Revenue Management System (RMS)"
description: "How an automated RMS adjusts room rates in real time based on occupancy — without revenue manager intervention — and what to watch for when building one"
---

# Case Study: Dynamic Pricing & Revenue Management System (RMS)

## Context

Rate management in most independent hotels is a manual process: the revenue manager updates prices in the PMS once a day based on gut feel and last year's numbers. Rates change slowly. In the time it takes to react, the last available standard rooms sell out at yesterday's price, and the opportunity to capture peak demand revenue is lost.

## Objective

Build a custom RMS that monitors occupancy in real time and automatically adjusts rates in the PMS — no staff involvement required in routine price changes.

## What Was Done

### 1. Occupancy-Based Pricing Matrix

The system applies a multi-level pricing matrix. For each room category, rate plan, and date range, a pricing table is defined:

| Rooms Occupied | Price Adjustment |
|---|---|
| 0–10% | Base rate |
| 11–30% | +5% |
| 31–50% | +10% |
| 51–70% | +15% |
| 71–85% | +22% |
| 86–95% | +30% |
| 96–100% | +40% |

The exact percentages are calibrated per property based on historical demand patterns and competitive positioning.

### 2. Real-Time Rate Updates

The system queries occupancy data from the PMS at defined intervals. When a threshold is crossed, it automatically updates the rate in the PMS — which immediately propagates to the booking engine and channel manager.

The full cycle runs without any human intervention.

### 3. Room Category Price Hierarchy

The system enforces pricing relationships between room categories: if demand and rates for standard rooms increase, rates for superior and deluxe categories rise proportionally.

This prevents the situation where standard rooms are nearly sold out while suites remain available at the base rate — an irrational pricing state that revenue managers often miss during busy periods.

### 4. Rules, Floors, and Ceilings

The revenue manager defines:
- **Minimum rate** (the floor the system will never breach — protects brand positioning),
- **Maximum rate** (the ceiling — important for reputation management, especially in leisure markets),
- **Override periods** (events, public holidays, group blocks managed with manual rates).

### 5. Reporting

The system generates:
- rate change history by room category,
- occupancy trend by date,
- year-over-year and pick-up comparisons,
- (roadmap) full PMS data pull for advanced demand forecasting.

## Results

- RevPAR increases: prices rise at the moment of demand, not the following morning.
- The revenue manager is freed from daily manual rate-setting and can focus on strategy.
- Last-minute "discount panic" is eliminated: the system holds rates firm as occupancy builds.

## Build vs Buy: Key Comparison

| Factor | Third-Party RMS | Custom-Built RMS |
|---|---|---|
| Configuration flexibility | Limited to vendor's model | Fully tailored to the property |
| Cost model | Monthly subscription ($300–$1,500+/mo) | One-time development investment |
| PMS integration | Standard connectors | Direct, bespoke integration |
| Maintenance | Vendor-managed | Internal or agency responsibility |
| Data ownership | Vendor holds your data | Property retains full data ownership |

## What to Consider

- **An RMS is a tool, not a strategy.** Decisions about market positioning, group rates, contract accounts, and special event pricing still require human judgement.
- **Data quality is everything.** If your PMS occupancy data is inaccurate (e.g. rooms blocked incorrectly), the RMS will make wrong pricing decisions.
- **Calibration takes time.** The pricing matrix needs tuning over 4–8 weeks of live operation before it reliably reflects actual demand patterns.
- **Competitor signals matter.** Pairing the RMS with rate shopper data (competitor pricing) produces significantly better outcomes than occupancy-only logic.

## Common Third-Party RMS Platforms

| Platform | Notes |
|---|---|
| **IDeaS (SAS)** | Industry leader; enterprise and mid-scale |
| **Duetto** | Cloud-native; strong in upscale/luxury |
| **Atomize** | Automated, AI-driven; popular with independents |
| **RoomPriceGenie** | Boutique and independent hotels; accessible pricing |
| **Lighthouse (formerly OTA Insight)** | Rate intelligence + RMS combined |

## Related Articles

- [Case Study: Rate Shopper / Competitor Pricing](/hotels/cases/rate-shopper/)
- [Rate Strategy](/hotels/revenue/rate-strategy/)
- [RevPAR, ADR, Occupancy](/hotels/revenue/revpar-adr-occupancy/)
