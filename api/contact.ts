// Vercel Serverless Function (Node.js 18+)
import type { VercelRequest, VercelResponse } from '@vercel/node';

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://w2s-studio.ca';
const MAILGUN_KEY = process.env.MAILGUN_KEY!;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET;

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
        const { name = '', email = '', message = '', token } = req.body || {};
        if (!email || !message || String(message).length > 5000) {
            return res.status(400).json({ error: 'Bad Request' });
        }

        if (TURNSTILE_SECRET) {
            const ok = await verifyTurnstile(token, TURNSTILE_SECRET, req.headers['x-forwarded-for'] as string);
            if (!ok) return res.status(400).json({ error: 'Captcha failed' });
        }

        const body = new URLSearchParams();
        body.set('from', `W2S Studio <contact@${MAILGUN_DOMAIN}>`);
        body.set('to', process.env.CONTACT_TO || 'contact@w2s-studio.ca');
        body.set('subject', `New message from ${name || 'Visitor'}`);
        body.set('text', `${message}\n\nFrom: ${name || ''} <${email}>`);

        const mgResp = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
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
    } catch (e: any) {
        return res.status(500).json({ error: 'Server error', details: e?.message });
    }
}

async function verifyTurnstile(token: string, secret: string, ip?: string) {
    if (!token) return false;
    const form = new URLSearchParams();
    form.set('secret', secret);
    form.set('response', token);
    if (ip) form.set('remoteip', ip);

    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: form
    });
    const data = await r.json().catch(() => ({}));
    return !!data.success;
}
