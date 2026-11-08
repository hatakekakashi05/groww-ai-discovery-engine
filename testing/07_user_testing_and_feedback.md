# Part 6: MVP User Testing & Behavioral Feedback

## 1. Testing Methodology & Cohort
* **Participants:** Re-engaged 3 representative participants from our primary research cohort:
  1. **Sneha M. (23, Bangalore)** – Paused SIP at Month 5 due to flat returns and cold statements.
  2. **Aarav K. (26, Jaipur)** – Churned at Month 8 after raiding an unanchored mutual fund for a wedding.
  3. **Rohan S. (24, Pune)** – Churned at Month 6 because the monthly deduction felt like an unrewarding expense.
* **Format:** Moderated usability walkthrough using realistic financial scenarios on the interactive MVP prototype.
* **Primary Objective:** Test whether **Cognitive Milestone Statements** and **Emotional Goal Anchoring** reverse the urge to pause or raid funds.

---

## 2. Real-Task Execution & User Feedback

### Task 1: Cognitive Milestone Statement vs. Cold Accounting (Sneha M.)
* **Scenario:** Sneha has contributed ₹7,500 over 5 months. Portfolio value is ₹7,485 (-₹15).
* **MVP Action:** Sneha viewed the **Milestone Statement** instead of the standard brokerage screen.
  * Instead of red "-0.2%", the interface displayed:
    * *"Goal: Emergency Safety Cushion (₹7,500 / ₹25,000 | 30% Complete)"*
    * *"Consistency Streak: 5 Months Unbroken (Top 15% disciplined savers)"*
    * *"Compounding Context: In Year 1, 98% of progress is your discipline. Your ₹1,500 acquired 6.2 extra units at lower NAV."*
* **Outcome:** Sneha engaged with the educational copilot asking: *"Why has it not grown?"* The copilot clearly explained how units accumulate before compounding takes off.
* **Sneha's Reaction:** *"When I saw that I had built 30% of my safety net, I felt proud instead of foolish. Looking at units made me realize I hadn't wasted my money. This completely changes how I feel about that ₹1,500 deduction."*

### Task 2: Protecting Unanchored Capital from Discretionary Raiding (Aarav K.)
* **Scenario:** Aarav has accumulated ₹8,000. He gets invited to a destination wedding and considers liquidating the fund.
* **MVP Action:** The fund is anchored to **"First Home Downpayment"**. When Aarav clicked "Withdraw / Stop SIP", the MVP did not show a cold legal confirmation. Instead, it surfaced the **Empathetic Behavioral Mirror**:
  * *"You're 8 months into your First Home Downpayment journey. Withdrawing ₹8,000 will reset your 8-month discipline streak and delay your home goal by 14 months."*
  * Offered non-destructive alternatives: *"Need cash this month? Snooze for 1 cycle with zero penalties and auto-resume next month."*
* **Outcome:** Aarav cancelled the redemption and opted to snooze for 1 month instead of destroying the investment.
* **Aarav's Reaction:** *"When it was just called 'Nifty 50', it felt like play money. Seeing 'First Home Downpayment' and the 14-month delay made me pause. I would have cut down my hotel budget for the wedding rather than kill this goal."*

### Task 3: Defusing the "Silent Expense" Feeling (Rohan S.)
* **Scenario:** Rohan feels monthly deduction fatigue in Month 6 after investing ₹12,000 with flat gains (₹12,060).
* **MVP Action:** Rohan interacted with the Milestone Copilot asking: *"Is this worth it? My money feels stuck."*
* **Outcome:** The copilot showed a personalized compounding trajectory comparing consistency vs. stopping, highlighting that Year-1 is the "foundation stage" of building unit volume.
* **Rohan's Reaction:** *"Every month I just got an SMS taking money away. Having an app that actually explains what this sacrifice is building makes it feel like an investment, not a tax."*

---

## 3. Key Learnings & Iteration Backlog for V2

| What Worked Exceptionally Well | What Caused Friction / Hesitation | Planned Changes for Next Iteration (V2) |
| :--- | :--- | :--- |
| **Progress Towards Goal (%) over % Return:** Completely neutralized the disillusionment of flat Year-1 returns. | Users worried if tagging a goal legally locked their funds or restricted withdrawal. | **Add Immediate Liquidity Reassurance:** Display a visible badge: *"100% Liquid • No Lock-in • You are always in control."* |
| **The Behavioral Mirror at Withdrawal:** Induced immediate second-thought without frustrating the user. | Users wanted to adjust the target date or amount if their career accelerated. | **Dynamic Milestone Pacing:** Enable users to easily adjust their goal target or monthly contribution. |
| **Conversational De-Jargonization:** Replaced panic with calm financial literacy. | Users occasionally tested if the bot could give stock tips. | **Refined SEBI Guardrail Refusal:** Ensure smooth, friendly refusal with 1-tap redirection to goal pacing. |
