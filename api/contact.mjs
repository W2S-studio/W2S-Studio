const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://w2s-studio.ca';
const MAILGUN_KEY = process.env.MAILGUN_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const CONTACT_TO = process.env.CONTACT_TO || 'contact@w2s-studio.ca';
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET;
const MAILGUN_REGION = process.env.MAILGUN_REGION || 'US';

export default async function handler(req, res) {
    const origin = req.headers.origin || '';
    if (origin === ALLOWED_ORIGIN) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Vary', 'Origin');
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    try {
        const { name = '', email = '', subject = 'New message', message = '', token } = req.body || {};
        if (!email || !message || String(message).length > 5000) {
            return res.status(400).json({ error: 'Bad Request' });
        }

        if (!TURNSTILE_SECRET) return res.status(500).json({ error: 'TURNSTILE_SECRET not set' });
        if (!token) return res.status(400).json({ error: 'Missing captcha token' });

        const ok = await verifyTurnstile(token, TURNSTILE_SECRET, req.headers['x-forwarded-for']);
        if (!ok) return res.status(400).json({ error: 'Captcha failed' });

        const mgBase =
            MAILGUN_REGION === 'EU'
                ? `https://api.eu.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`
                : `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

        const body = new URLSearchParams();
        body.set('from', `W2S Studio <noreply@${MAILGUN_DOMAIN}>`);
        body.set('to', CONTACT_TO);
        body.set('subject', subject || `New message from ${name || 'Visitor'}`);
        body.set('text', `${message}\n\nFrom: ${name || ''} <${email}>`);

        const mgResp = await fetch(mgBase, {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + Buffer.from(`api:${MAILGUN_KEY}`).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body
        });

        if (!mgResp.ok) {
            const t = await mgResp.text().catch(() => '');
            return res.status(502).json({ error: 'Mailgun error', details: t });
        }

        return res.json({ ok: true });
    } catch (e) {
        return res.status(500).json({ error: 'Server error', details: e?.message || String(e) });
    }
}

async function verifyTurnstile(token, secret, ip) {
    if (!token) return false;
    const form = new URLSearchParams();
    form.set('secret', secret);
    form.set('response', token);
    if (ip) form.set('remoteip', String(ip));

    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: form
    });
    const data = await r.json().catch(() => ({}));
    return !!data.success;
}
