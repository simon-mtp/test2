export default async function handler(req, res) {
  // Allow browser requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { sport } = req.query;
  if (!sport) return res.status(400).json({ error: 'Missing sport param' });

  const API_KEY = process.env.ODDS_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'API key not configured' });

  try {
    const url = `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${API_KEY}&regions=eu&markets=h2h&dateFormat=iso&oddsFormat=decimal`;
    const response = await fetch(url);

    if (response.status === 401) return res.status(401).json({ error: 'Invalid API key' });
    if (response.status === 429) return res.status(429).json({ error: 'Quota exceeded' });
    if (!response.ok) return res.status(response.status).json({ error: 'Odds API error' });

    const data = await response.json();

    // Return quota info in headers
    res.setHeader('X-Requests-Remaining', response.headers.get('x-requests-remaining') || '?');
    res.setHeader('X-Requests-Used', response.headers.get('x-requests-used') || '?');

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Network error', details: err.message });
  }
}
