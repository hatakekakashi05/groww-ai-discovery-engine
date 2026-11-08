# Problem Discovery: Why First-Time Mutual Fund Investors Churn Before Month 12

## 1. Executive Summary: The Core Conflict
First-time mutual fund investors do not stop their SIPs because they suddenly decide long-term investing is bad. They stop because **the product experience between Month 1 and Month 12 actively punishes or disillusions them**, while providing zero psychological or operational reward for staying.

The underlying problem can be synthesized into **Three Fundamental Disconnects**:
1. **The Feedback Disconnect (Invisible Progress):** Compounding is imperceptible in year 1; apps show daily market volatility (red/green ticks) instead of habit and capital milestones.
2. **The Cash-Flow Disconnect (Involuntary & Punitive Friction):** Payday variance and low balance cause mandate bounces, incurring bank penalties that trigger defensive cancellations.
3. **The Psychological Disconnect (Unanchored Money):** Generic mutual fund units lack mental accounting protection; without a dedicated purpose, SIPs are the first expense to be sacrificed during discretionary spending shocks.

---

## 2. The 12-Month First-Time Investor Journey: Drop-Off Anatomy

```
[Month 0: Onboarding]
   │  • High optimism, influenced by fin-influencers or friends
   │  • Sets up ₹500 - ₹2,000 monthly SIP via UPI Autopay
   ▼
[Month 1 - 2: The Baseline Flatline]
   │  • 2 debits complete. Portfolio: Invested ₹2,000 | Current: ₹2,015.
   │  • "Is that it? I made ₹15?"
   ▼
[Month 3 - 5: The "Trough of Disillusionment" & Market Shock]
   │  • Market correction of 3–5%. Portfolio: Invested ₹5,000 | Current: ₹4,850.
   │  • Loss aversion (Kahneman & Tversky): Pain of losing ₹150 is 2.5x the pleasure of gaining ₹150.
   │  • User thinks: "Mutual funds are risky; I am losing money."
   │  • Red daily P&L badges reinforce anxiety.
   ▼
[Month 6 - 8: The Cash Flow Collision / Festival Shock]
   │  • Salary delay, unexpected expense, or festive season (Diwali/Weddings).
   │  • Bank balance falls below SIP amount on debit day.
   │  • Mandate bounces. Bank charges ₹250–₹500 penalty fee.
   │  • User feels burned by their own bank and cancels the Groww autopay mandate.
   ▼
[Month 9 - 11: The SEBI 3-Strike Rule & Cognitive Drift]
   │  • After 3 missed/failed debits, the AMC automatically terminates the SIP.
   │  • User intended to "resume next month" but inertia prevents restarting.
   ▼
[Month 12: Churn Realized]
   • SIP is inactive. User joins the 94.5% industry stoppage statistic.
```

---

## 3. Deep-Dive: Root Cause Hypotheses

### Root Cause 1: The "Stock-Broker Dashboard" Paradox
* **Observation:** Groww started as an investment app, but like all wealth platforms, its default portfolio view mirrors stock trading: Current Value, Total Invested, 1-Day Return, Total Return (% and ₹).
* **Failure Mode for First-Time SIP Users:** In Year 1, over 95% of an investor’s portfolio value is **their own principal**, not market returns. Showing 1-day P&L (-0.4% / -₹25) conditions the new investor to view their SIP as a speculative gamble rather than a systematic savings engine.
* **Underlying Need:** First-time investors need **milestone-based reinforcement** (e.g., "You have built an emergency shield of ₹10,000", "5 consecutive months completed") rather than ticker-tape volatility.

### Root Cause 2: Inflexible Cash-Flow Architecture & Bounced Mandate Trauma
* **Observation:** Up to 35–40% of SIP discontinuations in the retail tier are triggered by bank mandate failures (insufficient funds, delayed salary, or mandate expiry).
* **The Penalty Paradox:** When an auto-debit fails, the investor pays an NACH bounce fee of ₹250–₹500 to their bank. For an investor with a ₹500 or ₹1,000 SIP, this penalty represents 25% to 50% of their monthly investment!
* **User Reaction:** The user views the SIP as a financial liability that risks sudden bank penalties, leading to immediate defensive cancellation.
* **Underlying Need:** Flexible, intelligent payment mechanics (smart debit date auto-adjustment around salary credit, zero-penalty buffer warnings, micro-installment skip without mandate cancellation).

### Root Cause 3: Mental Accounting Vacuum (The "Fungible Cash" Trap)
* **Observation:** Most first-time investors invest in a fund named "XYZ Large Cap Index" or "ABC Flexi Cap Fund". 
* **Behavioral Reality:** To a human being, money in "ABC Flexi Cap" has no emotional boundary. When festival season, travel, or an emergency arises, the user perceives this money as an unassigned liquid pool.
* **Underlying Need:** Goal-anchored mental buckets (e.g., "First International Trip", "Rainy Day Safety Net", "Bike Down-payment") that create behavioral switching costs and emotional commitment without recommending specific funds.

### Root Cause 4: The Binary "On / Off" Cliff
* **Observation:** When an investor faces a cash crunch, the platform presents binary choices: "Pay Now" or "Cancel/Pause SIP".
* **Behavioral Friction:** Pausing often requires specifying a multi-month period or manual re-initiation. Once paused, default inertia sets in, and the user never returns.
* **Underlying Need:** Fluid installment pacing (e.g., "Snooze this month with 1-tap", "Adjust this month to ₹250", automatic resumption next cycle).

---

## 4. User Personas in the Churn Funnel

| Persona | Archetype | Drop-Off Point | Primary Root Cause |
| :--- | :--- | :--- | :--- |
| **"The Hesitant Experimenter"** (Age 22–26, First Job/Tier 2) | Started ₹500 SIP on recommendation. Low financial cushion. | **Months 2–4** | Underwhelming returns; perceives ₹10 market dip as capital erosion; lack of tangible progress. |
| **"The Cash-Flow Juggler"** (Age 24–30, Gig worker / Private sector) | Earns variable income or pays multiple EMIs. | **Months 5–8** | Bank debit bounce $\rightarrow$ bank fee penalty $\rightarrow$ angry mandate cancellation. |
| **"The Purpose-Less Saver"** (Age 25–32, Salaried, moderate savings) | Invested because "everyone was doing it". | **Months 7–10** | Discretionary expense shock (vacation/shopping); stops SIP because fund has no defined life goal. |

---

## 5. Summary of the User Problem Statement
> **Problem Statement:** First-time retail mutual fund investors abandon their SIPs within 12 months because the current platform experience presents rigid auto-debits that trigger bank penalty fees during cash crunches, and mirrors volatile trading dashboards that render year-one compounding invisible, causing disillusionment and premature cancellation.
