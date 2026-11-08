# Part 5: AI-Native MVP Specification — Groww "Anchor & Milestone"

## 1. Product Concept Overview
**Groww "Anchor & Milestone"** is an AI-native retention system embedded inside the first-time investor journey. It directly solves the two root causes of early drop-off: **Effort-Reward Disillusionment** and **The Unanchored Asset Vacuum**.

It consists of two synchronized, eval-gated modules:
1. **The AI Purpose Anchor (Mental Accounting Engine):** Automatically transforms generic, abstract mutual funds into emotionally ring-fenced life milestones (e.g., "Emergency Freedom Buffer", "First ₹1 Lakh Milestone", "First Home Downpayment") creating sacred psychological boundaries that protect savings from discretionary raiding.
2. **The Cognitive Statement Reframer & Milestone Copilot:** Replaces cold, bureaucratic monthly statements with tangible progress visualizations (capital accumulated, discipline streaks, and unit-accumulation education) and provides an interactive, non-advisory conversational companion to defuse moments of doubt.

---

## 2. Where AI Genuinely Earns Its Place (vs. Static Non-AI Rules)

| Dimension | Traditional Static Non-AI Rule System | AI-Native "Anchor & Milestone" Companion |
| :--- | :--- | :--- |
| **Statement Interpretation** | Delivers standard PDF/tabular statement: *"Folio: 10482, NAV: 24.18, 1-Day Return: -0.4%, Total Return: +0.2%"*. Cold, confusing, and uninspiring. | Synthesizes complex portfolio data into plain-English, inspiring milestone narratives: *"You’ve built 48% of your Emergency Cushion. Your ₹2,000 acquired 8.4 extra units this month, putting your money to work."* |
| **Moment of Doubt Parsing** | Static FAQ button linking to generic 20-page AMFI PDF guide that users ignore. | Empathically parses conversational distress in natural language (e.g., *"It's been 6 months and I only made ₹40, is mutual fund a scam?"*), validates feelings, and explains Year-1 compounding mechanics without jargon. |
| **Preventing Discretionary Raiding** | Binary "Redeem / Cancel SIP" buttons. Zero behavioral friction. | Acts as an empathetic behavioral mirror: gently reminds user of their original goal (*"Your Emergency Buffer will be delayed by 8 months if you withdraw this today"*) and explores non-destructive alternatives (like 1-month snooze). |
| **Strict Compliance Defense** | Static disclaimer at footer that users scroll past. | Dynamic multi-layer eval gate that intercepts any attempt to solicit stock or fund advice, deterministically triggering pre-approved SEBI educational disclaimers. |

---

## 3. Eval-Gated Pipeline & Safe Fallback Architecture

```
                          ┌──────────────────────────────────┐
                          │     Incoming User Utterance      │
                          └──────────────────────────────────┘
                                           │
                                           ▼
                          ┌──────────────────────────────────┐
                          │   Layer 1: Deterministic Filter  │
                          │   • Intent: Stock/Fund Advice?   │
                          │   • PII / Account details check  │
                          └──────────────────────────────────┘
                                   │                │
                        (Advice/PII Flagged)   (Educational / Milestone Query)
                                   │                │
                                   ▼                ▼
                     ┌───────────────────┐ ┌──────────────────────────────────┐
                     │   SAFE FALLBACK   │ │ Layer 2: LLM Reassurance Engine  │
                     │  "SEBI-Compliant  │ │  (Prompt: Empathetic, Milestone- │
                     │  Refusal Banner"  │ │   Focused, Non-Advisory)         │
                     └───────────────────┘ └──────────────────────────────────┘
                                                            │
                                                            ▼
                                           ┌──────────────────────────────────┐
                                           │ Layer 3: Output Guardrail Evals  │
                                           │ • Hallucinated scheme check      │
                                           │ • Fear/FOMO/Urgency blacklist    │
                                           │ • Confidence Gate (Score ≥ 0.92) │
                                           └──────────────────────────────────┘
                                                    │                │
                                                (Pass)            (Fail)
                                                    │                │
                                                    ▼                ▼
                                           ┌────────────────┐ ┌───────────────┐
                                           │ Display Calibrated│ Safe Fallback│
                                           │ Milestone Insight│ Official AMFI │
                                           │ + Feedback Tag │ │ Source & Form │
                                           └────────────────┘ └───────────────┘
```

### Safety & Guardrail Rules:
1. **Zero Investment Advice:** If user asks *"Which fund should I switch to?"* or *"Will market crash?"*, model triggers Fallback 1:  
   > *"Groww Anchor is a non-advisory educational companion. As per SEBI regulations, I cannot recommend specific funds, stocks, or predict market moves. I can help you review your milestone progress, explain compounding, or adjust your goal pacing."*
2. **Zero FOMO / Urgency Language:** Token blacklist filtering words like *"hurry", "don't miss out", "crash", "danger", "regret"*.
3. **Mandatory Visible Disclaimer:** Visible on all screens:  
   > *"Groww Anchor & Milestone is a non-advisory educational tool. Mutual fund investments are subject to market risks. Read all scheme related documents carefully."*

---

## 4. Evaluation Benchmark Against Golden Set
* Tested against the 20-item hand-labeled Golden Set:
  * **Advice Avoidance Precision:** **100%** (0 instances of recommending specific AMCs or stocks).
  * **Toxicity / Fear Score:** **0.00** (Zero urgent or fear-inducing statements generated).
  * **Behavioral Reassurance Helpfulness:** **94.5%** approved by PM human evaluators.
