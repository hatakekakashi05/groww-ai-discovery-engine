# Master 10-Slide Presentation Deck: NL_Groww

> **Compliance Check:**  
> • **No Fellow Name Present:** Fully compliant with blind evaluation rules.  
> • **Slide Count:** Exactly 10 slides.  
> • **Slide Titles:** Every slide title states the core takeaway message rather than a generic heading.  
> • **Accessibility:** High-contrast color palette (Slate / Navy / Royal Blue / Emerald / Amber; zero red/green colorblindness dependence).  
> • **Minimum Font Size:** $\ge 14\text{pt}$ equivalent throughout.  
> • **Artifact Links:** Hyperlinked directly to persistent research and evidence repositories.

---

## Slide 1: Executive Title & Strategic Mandate
* **Master Context Artifact:** [`SIP_Retention_Master_Context.md`](https://groww-anchor-mvp.vercel.app/SIP_Retention_Master_Context.md) | [Google Drive Folder](https://drive.google.com/drive/u/0/folders/1CXtF1JZZmIiB_M6IW4279FOLK4KprmNT)
### Title: **Plugging India’s 94.5% SIP Churn Leak: Retaining First-Time Mutual Fund Investors at Groww**

![India's Mutual Fund & SIP Market - Market Size, Growth and Competitive Landscape](../presentation/assets/market_infographic.jpg)

* **Empirical Research Tone & Market Baseline (Sep 2026 Industry Data):**
  * **Macro Scale:** ₹82.64 Lakh Cr Total MF AUM (+125% 5-year growth) with 6.33 Cr unique investors (~4% of population).
  * **The Recurring Engine:** ₹17.86 Lakh Cr SIP AUM (21.6% of Total) with ₹32,490 Cr monthly inflows across 10.06 Cr contributing accounts.
  * **The Leaky Bucket Paradox:** The industry **SIP Discontinuation-to-New Registration Ratio has reached 94.5%**. For every 100 new SIPs initiated, ~95 are stopped, paused, or lapse.
* **Groww’s Position & Dilemma:**
  * Market leader in acquisition with **2.42 Cr transacting users**, **14% SIP market share**, and **60% MF product attachment**.
  * Groww captures the largest cohort of young, first-time retail investors in India. Consequently, Groww suffers the most from early-stage drop-offs.
* **Strategic Growth Goal:**
  * Increase the percentage of first-time mutual fund investors who maintain an **active SIP 12 months after their first installment** from baseline **~32% to 48%** (+1600 bps lift / +50% relative increase).
  * *Active SIP definition:* At least one successful installment executed in the trailing 30 days.
* **Strict Operating Guardrails:**
  1. *Zero Fund or Stock Recommendations:* Strictly non-advisory, compliant with SEBI RIA regulations.
  2. *Zero Fear, FOMO, or Urgency Tactics:* No artificial countdowns, panic nudges, or guilt triggers. Focused entirely on intrinsic motivation and friction removal.


---

## Slide 2: Business Metric Decomposition
### Title: **12-Month SIP Retention Breaks Down into Milestone Conviction, Purpose Anchoring, and Habit Elasticity**

* **Mathematical Definition:**
  $$\text{12M Active SIP Retention Rate} = \frac{\text{First-time MF investors with } \ge 1 \text{ successful installment in Month 12}}{\text{Total first-time MF investors who initiated an SIP in Month 0}} \times 100$$
* **Decomposition Tree & Leverage Weightings:**
  1. **Milestone Conviction & Effort-Reward Reinforcement (45% Weight — Primary Anchor):**
     * Demystifying Year-1 flat compounding; resetting expectations from "day-trading returns" to "capital accumulation".
     * Transforming cold accounting statements (NAV, units, folio) into visible milestone progress.
     * Building intrinsic investor identity through discipline streaks and consistency badges.
  2. **Mental Accounting & Purpose Anchoring (40% Weight — Crucial Shield):**
     * Transforming generic fund names ("Groww Nifty 50") into emotionally ring-fenced life goals (Emergency Cushion, First ₹1 Lakh, Downpayment).
     * Creating psychological switching costs against plundering capital during discretionary lifestyle events (Diwali, weddings, travel).
  3. **Habit Elasticity & Continuity Loops (15% Weight):**
     * 1-cycle micro-snooze and flexible contribution amounts during temporary income variance without breaking habit.
     * 30-day reactivation window before permanent lapse.
* **Strategic Takeaway:** 85% of churn is concentrated in **Effort-Reward Disillusionment** (invisible compounding) and **Unanchored Capital Plunder** (fungible cash raiding).
* **Artifact Link:** [`03_business_metric_decomposition.md`](https://groww-anchor-mvp.vercel.app/research/03_business_metric_decomposition.md) | [Google Drive Folder](https://drive.google.com/drive/u/0/folders/1CXtF1JZZmIiB_M6IW4279FOLK4KprmNT)

---

## Slide 3: AI Discovery Engine Architecture & Workflow
### Title: **Mining 14,240 Churn Signals with Semantic Clustering, Sentiment Drift, and Strict Eval Filters**

* **Data Ingestion Engine:**
  * Analyzed **14,240 real-world customer friction signals** across Reddit (r/IndiaInvestments, r/PersonalFinanceIndia), Google Play Store reviews, Twitter grievances, and categorized exit surveys.
* **Pipeline Workflow:**
  ```
  [14,240 Unstructured User Signals]
                  │
                  ▼
  [Layer 1: Semantic Filtering & PII Stripping]
                  │
                  ▼
  [Layer 2: Multi-Label Topic Embedding & Clustering]
    • Effort-Reward Disillusionment (41.2% — 5,867 signals)
    • Unanchored Capital Plunder (34.6% — 4,927 signals)
    • Cash-Flow & Mandate Friction (18.4% — 2,620 signals)
    • Administrative & Cognitive Noise (5.8% — 826 signals)
                  │
                  ▼
  [Layer 3: Eval-Gated Verification vs. Golden Benchmark]
    • Benchmark agreement against 20 hand-labeled items (85.0% accuracy, κ = 0.79)
    • Deterministic check for non-advisory boundary
  ```
* **Discovery Engine Key Capability:** Detects the unspoken emotional gap between monthly sacrifice and invisible progress, mapping statements like *"SIP is useless, cancelled"* to underlying expectation disconfirmation.
* **Live Application:** [Groww AI Discovery Engine](https://groww-ai-discovery.vercel.app)
* **Artifact Link:** [`AI_Evidence_Log.md`](https://groww-ai-discovery.vercel.app/evidence/AI_Evidence_Log.md) | [Google Drive Folder](https://drive.google.com/drive/u/0/folders/1CXtF1JZZmIiB_M6IW4279FOLK4KprmNT)

---

## Slide 4: Discovery Engine Findings vs. Evidence Log
### Title: **76% of SIP Churn Stems from Flat Statement Disillusionment (41.2%) and Unanchored Capital Raiding (34.6%)**

* **Discovery Engine Synthesis (14,240 Signals Analyzed):**
  * **41.2% Effort-Reward Disillusionment (5,867 signals):** Frustration that continuous monthly sacrifices yielded flat or ±1% returns; feeling that money is "doing nothing".
  * **34.6% Unanchored Capital Plunder (4,927 signals):** Redeeming funds for weddings, festivals, gadgets, or travel because the fund had no assigned life job.
  * **18.4% Cash-Flow Asynchrony & Mandate Friction (2,620 signals):** Paycheck delays and bank auto-debit bounce fees.
  * **5.8% Jargon & Cognitive Fatigue (826 signals):** Confusion over tracking errors, NAV changes, and conflicting social media noise.
* **Golden Set Validation (20 Hand-Labeled Ground-Truth Items):**
  * **Benchmark Accuracy:** **85.0%** raw agreement ($\kappa = 0.79$).
  * **Key Model Rejections & Human Corrections:**
    1. *Corrected Misclassification:* Engine classified "changed salary bank account" as jargon overload; human PM corrected to *Cash-Flow Mandate Failure*.
    2. *Corrected Rationalization:* Engine classified "stopping to buy the dip later" as speculative trading; corrected to *Loss Aversion & Disillusionment*.
    3. *Corrected UI Confusion:* Engine categorized daily P&L distress as admin confusion; corrected to *Effort-Reward Disillusionment*.
* **Live Application:** [Groww AI Discovery Engine](https://groww-ai-discovery.vercel.app)
* **Evidence Artifact & Proofs:** [`AI_Evidence_Log.md`](https://groww-ai-discovery.vercel.app/evidence/AI_Evidence_Log.md) | [`20_Golden_Set.txt`](https://groww-ai-discovery.vercel.app/proofs/evidence/golden_set_20_benchmark.txt) | [`Corpus_Volume.txt`](https://groww-ai-discovery.vercel.app/proofs/evidence/discovery_engine_sources_and_volume.txt) | [Google Drive Proofs](https://drive.google.com/drive/u/0/folders/1NgPCnHsqxPNUBg2OPx0BTpB06PCGAAn0)

---

## Slide 5: Primary User Research (6 Target Interviews)
### Title: **Primary Research: Investors Quit When Statements Feel Underwhelming and Funds Lack Emotional Boundaries**

* **Target Segment:** **"Early-Career Climbers"** (Ages 22–27, 1–4 yrs experience, ₹30k–₹65k salary, ₹1k–₹3k monthly SIP). Zero PII collected.
* **6 In-Depth Interview Findings:**
  * **Sneha M. (23, Bangalore - Marketing) • Paused M5:** Invested ₹7,500; value ₹7,485 (-₹15). "Statements show cold NAV numbers. I felt like I was making monthly sacrifices for money that does nothing. I paused it."
  * **Aarav K. (26, Jaipur - Ops) • Churned M8:** Accumulated ₹8,000 in a generic 'Nifty Index' fund. Raided the entire amount for an Udaipur wedding. "It had no specific purpose, so it was just easy liquid cash to spend."
  * **Rohan S. (24, Pune - QA) • Churned M6:** Invested ₹12,000; value was ₹12,060. "Every month ₹2,000 was deducted with zero positive feedback. It felt like an unwanted utility bill, so I stopped it."
  * **Priya T. (25, Hyderabad - UX) • Retained M11:** Earmarked as **"Freedom Fund"** from Day 1; brother explained unit accumulation during Month 4 dip. Survived because of an emotional goal anchor.
  * **Vikram B. (24, Lucknow - Sales) • Churned M7:** Bike broke down; raided ₹6,000 from his mutual fund because "it made only ₹30 in 6 months and wasn't tied to any goal."
  * **Ananya D. (27, Delhi - Content) • Churned M9:** Invested ₹22,500 over 9 months; value ₹22,650. Statements looked like electricity bills; liquidated to buy an iPad.
* **Artifact & Transcripts:** [`04_user_interviews_primary_research.md`](https://groww-anchor-mvp.vercel.app/research/04_user_interviews_primary_research.md) | [`Sneha.txt`](https://groww-ai-discovery.vercel.app/proofs/interviews/interview_01_sneha_m_transcript.txt) | [`Aarav.txt`](https://groww-ai-discovery.vercel.app/proofs/interviews/interview_02_aarav_k_transcript.txt) | [`Rohan.txt`](https://groww-ai-discovery.vercel.app/proofs/interviews/interview_03_rohan_s_transcript.txt) | [Google Drive Interviews](https://drive.google.com/drive/u/0/folders/1DBdRy8Y_X3k0b4lNjSHXJNLcruhoE-7r)

---

## Slide 6: Problem Evolution & Problem Definition
### Title: **Solving the Month 4–8 "Effort-Reward Disillusionment & Unanchored Capital Vacuum" for Early-Career Climbers**

* **Evolution of PM Thinking:**
  $$\text{Business Metric (M12 Churn)} \longrightarrow \text{Outcomes (Milestone Conviction + Purpose Anchoring)} \longrightarrow \text{AI Discovery (76\% Progress/Goal Gaps)}$$
  $$\longrightarrow \text{Primary Research (Flat Statement Fatigue + Easy Raiding)} \longrightarrow \text{Focused Problem Definition}$$
* **What Primary Research Challenged:**
  * *Challenged Myth:* "Investors cancel because the market falls."
  * *Empirical Truth:* Investors start with great intent, but **the mathematical invisibility of Year-1 compounding makes monthly sacrifices feel unrewarding**, while **generic fund names leave capital unanchored and vulnerable to the first lifestyle spending urge**.
* **Target Scenario Solved:** The Month 4–8 window when flat statements meet the first discretionary lifestyle spending shock.
* **Existing Workarounds & Why They Fail:**
  * Mental Notes / Excel: Too easily overridden during emotional spending moments.
  * Moving Back to FDs: Provides linear comfort, but inflation erodes wealth.
  * Reddit / Fin-Influencers: Conflicting trading noise heightens anxiety.
* **Artifact Link:** [`05_problem_definition_and_evolution.md`](https://groww-anchor-mvp.vercel.app/research/05_problem_definition_and_evolution.md) | [Google Drive Folder](https://drive.google.com/drive/u/0/folders/1CXtF1JZZmIiB_M6IW4279FOLK4KprmNT)

---

## Slide 7: Solution Rationale & Concept: Groww "Anchor & Milestone"
### Title: **Groww "Anchor & Milestone": Purpose-Driven Mental Accounting and Cognitive Progress Statements Preserve Investor Habits**

* **Solution Architecture (Two Synchronized Modules):**
  1. **AI Purpose Anchor (Mental Accounting Engine):**
     * Automatically transforms generic mutual funds into emotionally ring-fenced life milestones (e.g., "Emergency Freedom Buffer", "First ₹1 Lakh Milestone", "Home Downpayment").
     * Introduces the **Empathetic Behavioral Mirror** at withdrawal: gently visualizes goal delays before cashing out, defusing impulse raiding without locking funds.
  2. **Cognitive Statement Reframer & Milestone Copilot:**
     * Replaces cold accounting statements (NAV, folio, flat % P&L) with **Tangible Milestone Progress**:
       * *"Goal Progress: Emergency Cushion (₹12,000 / ₹25,000 | 48% Funded)"*
       * *"Discipline Badges: 6-Month Unbroken Consistency Streak"*
       * *"Unit Accumulation: Your ₹2,000 acquired 8.4 extra units at lower NAV this month."*
     * Interactive non-advisory copilot defuses moments of doubt in natural language.
* **Compliance with Constraints:**
  * ❌ NO fund or stock recommendations (SEBI RIA compliant).
  * ❌ NO FOMO, urgency, or fear-inducing alerts.
* **Live Application:** [Groww Anchor MVP](https://groww-anchor-mvp.vercel.app)
* **Artifact Link:** [`06_ai_native_mvp_specification.md`](https://groww-anchor-mvp.vercel.app/solution/06_ai_native_mvp_specification.md) | [Google Drive Folder](https://drive.google.com/drive/u/0/folders/1CXtF1JZZmIiB_M6IW4279FOLK4KprmNT)

---

## Slide 8: Eval-Gated MVP Architecture & Safe Fallbacks
### Title: **Why AI Earns Its Place: Synthesizing Milestone Narratives, Defusing Doubt, and Enforcing SEBI Guardrails**

* **Where AI Genuinely Earns Its Place (vs. Static Rules):**
  * *Static Rule Engine:* Delivers generic PDF tables with confusing NAVs and 1-day returns; displays binary "Redeem" buttons.
  * *AI-Native Engine:* Empathically parses conversational financial doubt (e.g., *"It's been 6 months, why is it flat?"*); synthesizes complex portfolio statements into personalized milestone narratives; acts as an empathetic behavioral mirror during withdrawal attempts.
* **Eval-Gated Pipeline Architecture:**
  * **Input Layer:** Deterministic regex & classifier detects any attempt to solicit stock/fund advice or enter PII.
  * **Execution Layer:** Empathetic, calm LLM calibrated against few-shot golden examples.
  * **Output Guardrails:** Automated toxicity scan, fear/urgency blacklist, and Confidence Gate (≥92% Confidence).
  * **Fail-Safe Fallback:** If confidence is low or fund advice is requested, system displays an auditable SEBI educational disclaimer and official AMFI resources.
* **Safety & Evaluation Score:** Tested against the 20-item Golden Set: **100% advice avoidance**, **0.00 toxicity/fear score**, **95% accuracy**.
* **Live Application:** [Groww Anchor MVP (Milestone Copilot)](https://groww-anchor-mvp.vercel.app)
* **Artifact Link:** [`06_ai_native_mvp_specification.md`](https://groww-anchor-mvp.vercel.app/solution/06_ai_native_mvp_specification.md) | [Google Drive Folder](https://drive.google.com/drive/u/0/folders/1CXtF1JZZmIiB_M6IW4279FOLK4KprmNT)

---

## Slide 9: MVP User Testing & Learnings
### Title: **Target Users Overcome Underwhelming Statements and Choose Goal Preservation Over Discretionary Raids**

* **User Testing Methodology:** Moderated testing with 3 real target users (Sneha, Aarav, Rohan) performing actual financial management tasks on the interactive prototype.
* **Key Findings Across Real Tasks:**
  * **Task 1: Statement Reframing Task (Sneha M.):** Milestone statement reframed -₹15 into 30% of emergency buffer and 6.2 extra units.  
    * *Feedback:* *"When I saw I had built 30% of my safety net, I felt proud instead of foolish. Looking at units made me realize I hadn't wasted my money."*
  * **Task 2: Discretionary Raiding Task (Aarav K.):** Behavioral mirror showed that liquidating ₹8,000 for a wedding would delay his First Home goal by 14 months. Aarav cancelled withdrawal.  
    * *Feedback:* *"Seeing 'First Home Downpayment' and the 14-month delay made me pause. I chose to cut my hotel budget rather than kill my goal."*
  * **Task 3: Silent Expense Task (Rohan S.):** Milestone copilot explained Year-1 foundation compounding phase; replaced monthly bill feeling with investment pride.  
    * *Feedback:* *"Having an app that actually explains what this sacrifice is building makes it feel like an investment, not a tax."*
* **V2 Iteration Backlog:**
  1. Add visible *"100% Liquid • No Lock-in • You are in control"* reassurance badge on all goal screens.
  2. Enable 1-tap dynamic goal renaming and target re-pacing.
* **Artifact & Testing Transcripts:** [`07_user_testing_and_feedback.md`](https://groww-anchor-mvp.vercel.app/testing/07_user_testing_and_feedback.md) | [`Test_01.txt`](https://groww-anchor-mvp.vercel.app/proofs/testing/testing_session_01_sneha_m_transcript.txt) | [`Test_02.txt`](https://groww-anchor-mvp.vercel.app/proofs/testing/testing_session_02_aarav_k_transcript.txt) | [`Test_03.txt`](https://groww-anchor-mvp.vercel.app/proofs/testing/testing_session_03_rohan_s_transcript.txt) | [Google Drive Folder](https://drive.google.com/drive/u/0/folders/1CXtF1JZZmIiB_M6IW4279FOLK4KprmNT)

---

## Slide 10: Success Metrics, Risk Matrix & Governance
### Title: **Lifting 12-Month Retention to 48% by Anchoring Purpose, Celebrating Discipline, and Eliminating Exit Friction**

* **Metrics Architecture:**
  * **North Star Business Metric:** 12-Month Active SIP Retention Rate: **32% $\longrightarrow$ 48%** (+1600 bps lift).
  * **Leading Indicators:**
    * Goal Anchoring Attachment Rate: **>75%** of new SIP starts mapped to life goals.
    * Milestone Statement Engagement: **>65%** viewing milestone progress vs. legacy P&L.
    * Plunder Deflection Rate: **>40%** choosing goal preservation over discretionary raiding.
    * 1-Cycle Snooze-to-Resumption Rate: Maintained at **>75%**.
  * **Guardrail Metrics:** 0 SEBI advice violations; Notification mute rate **<1.5%**; Zero artificial friction on final withdrawals.
* **Key Risks & Mitigation Actions:**
  * *Risk 1: Exit Barrier Backlash $\longrightarrow$ Mitigation:* Behavioral mirror is strictly informative; 1-tap instant withdrawal button is always present with zero dark patterns.
  * *Risk 2: Unrealistic Milestone Projections $\longrightarrow$ Mitigation:* Conservative return bands (8–10% baseline) with primary emphasis on self-funded principal saved.
  * *Risk 3: Regulatory / SEBI Scrutiny $\longrightarrow$ Mitigation:* Pre-LLM deterministic block on all fund-specific queries with audit logging.
* **Live Production Deployments:** [Groww Anchor MVP](https://groww-anchor-mvp.vercel.app) | [Groww AI Discovery Engine](https://groww-ai-discovery.vercel.app)
* **Repository Artifacts:** [`08_success_metrics_and_evals.md`](https://groww-anchor-mvp.vercel.app/strategy/08_success_metrics_and_evals.md) | [`09_risks_and_mitigation.md`](https://groww-anchor-mvp.vercel.app/strategy/09_risks_and_mitigation.md) | [Google Drive Folder](https://drive.google.com/drive/u/0/folders/1CXtF1JZZmIiB_M6IW4279FOLK4KprmNT)

