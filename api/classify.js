const DEFAULT_API_KEY = process.env.GEMINI_API_KEY || '';

async function callGeminiClassifier(apiKey, text) {
  const models = ['gemini-3.5-flash', 'gemini-3.1-flash-lite'];
  const systemInstruction = `You are the Groww Voice-of-Customer NLP Churn Classifier for Indian retail SIP investors.
Analyze the user utterance and output a raw JSON object with this exact schema:
{
  "category": "EFFORT_REWARD_DISILLUSIONMENT" | "UNANCHORED_CAPITAL_PLUNDER" | "CASH_FLOW_FRICTION" | "ADMIN_COGNITIVE_OVERLOAD",
  "summary": "Brief 3-6 word summary",
  "frustration_score": number between 1 and 10,
  "psychological_mechanism": "Detailed explanation of underlying human behavior (e.g. loss aversion, lack of mental accounting boundary, bank penalty indignation)",
  "recommended_intervention": "Product feature action on Groww (e.g. Cognitive Milestone Statement, Day-0 Goal Anchor, Behavioral Mirror, 1-Month Snooze, Elastic Flex)"
}
Do NOT include markdown backticks or explanation outside the JSON.`;

  for (const model of models) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `${systemInstruction}\n\nUSER UTTERANCE: "${text}"` }]
          }]
        }),
        signal: AbortSignal.timeout(12000)
      });

      if (!response.ok) continue;

      const resJson = await response.json();
      const rawText = resJson.candidates?.[0]?.content?.parts?.[0]?.text || '';
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return { mode: `live_gemini (${model})`, ...parsed };
      }
    } catch (e) {
      // try next model
    }
  }
  return null;
}

function generateOfflineClassification(text) {
  const lower = (text || '').toLowerCase();

  if (lower.includes('wedding') || lower.includes('trip') || lower.includes('diwali') || lower.includes('laptop') || lower.includes('goa') || lower.includes('udaipur') || lower.includes('ipad') || lower.includes('gadget') || lower.includes('bike')) {
    return {
      category: "UNANCHORED_CAPITAL_PLUNDER",
      summary: "Mental Accounting Void & Discretionary Capital Raiding",
      frustration_score: 6,
      psychological_mechanism: "The fund has no designated emotional boundary or life job. When a lifestyle shock or discretionary expenditure occurs, the mutual fund is perceived as surplus liquid cash rather than long-term equity.",
      recommended_intervention: "Activate Day-0 Emotional Goal Anchoring ('First Home Downpayment', 'Emergency Shield') and the Empathetic Behavioral Mirror at withdrawal."
    };
  } else if (lower.includes('ecs') || lower.includes('bounce') || lower.includes('penalty') || lower.includes('salary') || lower.includes('bank') || lower.includes('mandate') || lower.includes('500') || lower.includes('tight')) {
    return {
      category: "CASH_FLOW_FRICTION",
      summary: "Cash Flow Timing Lag & Mandate Penalization",
      frustration_score: 9,
      psychological_mechanism: "The user suffered cash-flow timing friction or bank ECS return charges (₹295–₹590). The resulting sense of unfair punishment destroys platform trust.",
      recommended_intervention: "Surface 1-Month Zero-Penalty Snooze and Elastic Flex (dial down to ₹500 without cancelling) to protect mandate health."
    };
  } else if (lower.includes('manager') || lower.includes('tracking error') || lower.includes('reddit') || lower.includes('confus') || lower.includes('jargon')) {
    return {
      category: "ADMIN_COGNITIVE_OVERLOAD",
      summary: "Jargon Complexity & External Decision Paralysis",
      frustration_score: 7,
      psychological_mechanism: "Regulatory institutional notices and outside internet advice polarize user conviction, inducing cognitive fatigue.",
      recommended_intervention: "Trigger plain-language de-jargonizer and milestone copilot to explain technical changes in 1 sentence."
    };
  }
  return {
    category: "EFFORT_REWARD_DISILLUSIONMENT",
    summary: "Loss Aversion & Compounding Mirage in Early Tenure",
    frustration_score: 8,
    psychological_mechanism: "The user made real monthly sacrifices, but standard statements show raw NAV with flat or slightly negative returns. Compounding is mathematically invisible in Year 1.",
    recommended_intervention: "Surface the Cognitive Milestone Statement focusing on Discipline Streaks, Progress % to Goal, and Unit Accumulation."
  };
}

async function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch(e) { return {}; }
  }
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', chunk => raw += chunk);
    req.on('end', () => {
      try { resolve(JSON.parse(raw || '{}')); }
      catch(e) { resolve({}); }
    });
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  try {
    const data = await parseBody(req);
    const apiKey = data.apiKey || req.headers['x-api-key'] || DEFAULT_API_KEY;
    const text = data.text || '';

    if (!apiKey) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        mode: 'offline',
        ...generateOfflineClassification(text)
      }));
    }

    const liveResult = await callGeminiClassifier(apiKey, text);
    if (liveResult) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(liveResult));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      mode: 'offline_fallback',
      ...generateOfflineClassification(text)
    }));

  } catch(e) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      mode: 'offline_fallback',
      ...generateOfflineClassification('')
    }));
  }
};
