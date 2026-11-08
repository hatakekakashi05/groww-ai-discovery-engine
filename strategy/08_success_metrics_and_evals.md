# Part 7: Success Metrics & AI Evaluation Framework (Updated)

## 1. Metric Hierarchy: Business, Leading & Guardrails

```
┌────────────────────────────────────────────────────────────────────────┐
│                   NORTH STAR BUSINESS METRIC                           │
│  12-Month Active SIP Retention Rate for First-Time Investors           │
│  Baseline: ~32% ──────────────► Target: 48% (+1600 bps lift)            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
         ┌──────────────────────────┴──────────────────────────┐
         ▼                                                     ▼
┌───────────────────────────────────┐ ┌───────────────────────────────────┐
│        LEADING INDICATORS         │ │        GUARDRAIL METRICS          │
│ • Goal Anchoring Rate (>75%)      │ │ • Regulatory / SEBI Compliance:   │
│ • Milestone View Ratio (>65%)     │ │   0 advice violations.            │
│ • Plunder Deflection Rate (>40%)  │ │ • Withdrawal Completion Time      │
│ • 1-Cycle Snooze Resumption (>75%)│ │   (No artificial exit barriers)   │
│ • Discipline Streak Retention     │ │ • Notification Mute Rate (<1.5%)  │
└───────────────────────────────────┘ └───────────────────────────────────┘
```

---

## 2. Metric Definitions & Rationale

### A. North Star Metric
* **12-Month Active SIP Retention Rate:** Percentage of first-time mutual fund investors who initiated their first SIP in Month 0 and have at least one successful installment executed in Month 12 (trailing 30 days).
  * *Rationale:* Directly measures whether first-time investors cross the critical 1-year threshold into multi-year compounding.

### B. Leading Indicators
1. **Goal Anchoring Attachment Rate:** Percentage of first-time SIPs that are mapped to an emotional life milestone (e.g., "Emergency Buffer", "First 1 Lakh", "Downpayment").
   * *Target:* **>75%** of new SIP starts.
   * *Rationale:* Validates elimination of the "unanchored asset vacuum" from Day 0.
2. **Milestone Statement Engagement Ratio:** Percentage of monthly portfolio views accessing the "Milestone Progress & Unit Accumulation" view vs. the legacy "Brokerage P&L Ticker".
   * *Target:* **>65%**.
   * *Rationale:* Validates cognitive reframing from day-trading anxiety to systematic capital accumulation.
3. **Plunder Deflection Rate:** Percentage of users who initiate a withdrawal or cancellation for discretionary spending, view the Behavioral Mirror, and decide to either keep the fund or choose a 1-cycle snooze instead.
   * *Target:* **>40%**.
   * *Rationale:* Directly measures the protective power of mental accounting boundaries.
4. **Snooze-to-Resumption Rate:** Percentage of users who utilize 1-cycle snooze and successfully resume regular debit in the subsequent cycle.
   * *Target:* **>75%**.

### C. Guardrail Metrics
1. **SEBI Non-Advisory Audit Score:** 100% compliance; 0 instances of AI recommending specific schemes or stock picks.
2. **Frictionless Redemption Integrity:** Users who still wish to withdraw after viewing the behavioral mirror must complete the withdrawal in $\le 2$ taps with zero artificial blocking.
3. **Notification Opt-Out Rate:** Must remain below **1.5%**.

---

## 3. AI Evaluation & Quality Measurement Framework

| Evaluation Dimension | Measurement Methodology | Target Threshold | Fallback Trigger |
| :--- | :--- | :--- | :--- |
| **Financial Advice Avoidance** | Automated LLM-as-a-judge + Regex pattern matcher scanning for fund names, "buy/sell", "recommend", "best fund". | **100% Pass** (Zero tolerance) | Model instantly swaps response with deterministic SEBI educational disclaimer. |
| **Toxicity / Fear / FOMO Avoidance** | Sentiment scoring & blacklist filter scanning for urgency words (*"rush", "crash", "missing out", "act now"*). | **0.00 Toxicity / 0% Urgency** | Replaces with calm, factual educational framing. |
| **Milestone Intent Precision** | F1-Score on user goal categorization and emotional distress intent against the 20-item Golden Set. | **$\ge 94\%$ F1-Score** | Routes query to human support ticketing queue. |
| **User Helpfulness / Reassurance Rating** | Post-interaction 1-tap rating: *"Did this help clarify your investment progress?"* (Thumbs up / down). | **>90% Positive** | Flags low-scoring conversations for weekly PM calibration. |
