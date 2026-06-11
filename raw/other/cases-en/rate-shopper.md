---
title: "Case Study: Competitor Rate Monitoring (Rate Shopper)"
description: "How automated competitor price tracking gives revenue managers real-time market intelligence and reduces hours of manual OTA browsing to zero"
---

# Case Study: Competitor Rate Monitoring (Rate Shopper)

## Context

Competitive rate analysis at most independent hotels looks like this: a manager opens Booking.com or Expedia every few days and manually checks what the nearest comparable hotels are charging. This is time-consuming, delivers an incomplete snapshot, and makes real-time market reaction impossible. In peak season, the rate landscape shifts daily.

## Objective

Automate competitor rate collection: the system regularly scrapes pricing from multiple online platforms across a defined competitive set and delivers a structured report so the revenue manager can make informed pricing decisions.

## What Was Done

### 1. Competitive Set Configuration

For each target property (compset), the system is configured with:
- the date range to monitor (typically rolling 90–180 days),
- room category equivalents to compare (standard vs standard, not standard vs suite),
- meal plan type (room only, B&B, half board),
- occupancy configuration (e.g. 2 adults, no children).

### 2. Rate Data Collection

The system automatically retrieves rates from the relevant OTA and metasearch platforms for the configured compset properties. Data is collected on a defined schedule (daily or multiple times per day during peak periods).

### 3. Reporting Interface

The revenue manager views a consolidated grid:

| Date | Own Rate | Comp A | Comp B | Comp C | Comp D |
|---|---|---|---|---|---|
| 15 Aug | — | $189 | $174 | $210 | $195 |
| 16 Aug | — | $189 | $174 | $210 | $195 |
| ... | | | | | |

Positioning relative to the compset is immediately visible. Rate gaps and displacement opportunities are flagged automatically.

### 4. Historical Trend Analysis

All collected data is retained, enabling the revenue manager to:
- see how competitor rates moved in the same period last year,
- identify patterns in how far in advance competitors adjust for holidays and events,
- understand which properties in the compset use dynamic pricing vs fixed rates.

### 5. Integration with the RMS

Rate shopper data can feed into the RMS as a secondary pricing signal: when the compset raises rates, the system treats this as a demand indicator and considers a corresponding adjustment.

## Results

- Revenue managers make rate decisions backed by market data rather than intuition or manual searches.
- 1–2 hours of daily manual competitor monitoring time is eliminated.
- Seasonal and event rate patterns become predictable: the compset typically adjusts 10–14 days before major events — the property can respond earlier.
- Displacement opportunities are identified: if the compset is sold out for a date, the property can push rates more aggressively.

## Key Considerations

- **Scraping is technically complex.** OTAs actively defend against automated access. A rate shopper requires ongoing maintenance as platforms update their defences. This is why most properties use a specialist vendor rather than building in-house.
- **Context matters.** A competitor dropping rates may mean they have unsold inventory — not that demand is soft. Interpret data within the broader picture.
- **Rate shoppers provide inputs for decisions, not decisions themselves.** The revenue manager retains full authority over rate strategy.
- **Rate parity monitoring** is a related function: some rate shopper tools also monitor whether your own property's rates are consistent across OTAs and the direct channel (important for OTA contract compliance).

## Common Rate Shopper Platforms

| Platform | Notes |
|---|---|
| **Lighthouse (formerly OTA Insight)** | Market leader; strong visualisation and API |
| **Duetto ScoreBoard** | Integrated with Duetto RMS |
| **RateGain** | Global coverage; mid-market focus |
| **Smartpricing** | Combined rate shopper + dynamic pricing; popular with independents |
| **Transparent** | Short-term rental and hotel hybrid; strong for resort markets |

## Related Articles

- [Case Study: RMS — Dynamic Pricing](/hotels/cases/rms-dynamic-pricing/)
- [Rate Strategy](/hotels/revenue/rate-strategy/)
- [RevPAR, ADR, Occupancy](/hotels/revenue/revpar-adr-occupancy/)
