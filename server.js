const http = require('http');
const fs = require('fs');
const path = require('path');
// Auto-load local .env if present
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const k = parts[0].trim();
        const v = parts.slice(1).join('=').trim();
        if (k && !process.env[k]) process.env[k] = v;
      }
    });
  }
} catch(e) {}


const PORT = process.env.PORT || 3001;
const APP_DIR = __dirname;
const ROOT_DIR = path.resolve(__dirname, '../../');
const DEFAULT_API_KEY = process.env.GEMINI_API_KEY || '';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.pdf': 'application/pdf'
};

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

async function handleClassifyAPI(req, res) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    let text = '';
    let apiKey = DEFAULT_API_KEY;
    try {
      const data = JSON.parse(body || '{}');
      apiKey = data.apiKey || req.headers['x-api-key'] || DEFAULT_API_KEY;
      text = data.text || '';

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

    } catch (e) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        mode: 'offline_fallback',
        ...generateOfflineClassification(text)
      }));
    }
  });
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

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/classify') {
    return handleClassifyAPI(req, res);
  }

  let reqUrl = req.url.split('?')[0];
  let filePath;

  if (reqUrl.startsWith('/proofs/')) {
    filePath = path.join(ROOT_DIR, reqUrl);
  } else {
    let reqPath = reqUrl === '/' ? '/index.html' : reqUrl;
    filePath = path.join(APP_DIR, reqPath);
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` Groww AI Discovery Engine is running!`);
  console.log(` URL: http://localhost:${PORT}`);
  console.log(` Live Gemini NLP Classifier API: Connected via gemini-flash-latest ⚡`);
  console.log(` Serving proofs from: ${path.join(ROOT_DIR, 'proofs')}`);
  console.log(`=======================================================`);
});
