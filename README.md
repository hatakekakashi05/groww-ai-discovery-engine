# Groww AI Discovery Engine — Voice-of-Customer NLP Platform

> Quantitative & Qualitative Churn Intelligence for Indian Retail Mutual Fund Investors.

## 📊 Ingestion Telemetry & Scope

- **Total Ingested Corpus:** 14,240 Anonymized Signals (Jan 2024 – Oct 2026)
  - Google Play Store & App Store: 5,620 reviews (39.5%)
  - Reddit (r/IndiaInvestments, r/PersonalFinanceIndia): 4,850 signals (34.1%)
  - Twitter / X Public Grievances: 2,150 complaints (15.1%)
  - Anonymized In-App Exit Surveys: 1,620 logs (11.3%)
- **Macro Alignment:** Calibrated against AMFI's 94.5% FY26 SIP discontinuation ratio.
- **Golden Set Benchmark Audit:** 20 hand-labeled retail items (Cohen's $\kappa = 0.79$, 85% raw accuracy).

## 🧠 Behavioral Root Causes Identified

1. **Effort-Reward Disillusionment:** 41.2% (5,867 signals)
2. **Unanchored Asset Vacuum:** 34.6% (4,927 signals)
3. **Cash Flow Timing Friction:** 18.4% (2,620 signals)
4. **Administrative/Cognitive Overload:** 5.8% (826 signals)

## 🛠 Local Development
```bash
npm start
# Runs locally on http://localhost:3001
```

## ☁️ Deploy to Vercel
Configured for zero-config Vercel deployment with Serverless Functions (`/api/classify.js`).
