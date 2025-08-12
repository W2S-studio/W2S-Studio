/* eslint-disable no-console */
import 'dotenv/config';
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { projects } from '../src/data/Project';

// ================= Config =================
const LANGS = ['fr'];                 // add more: ['fr','es','de']
const USE_FREE = true;                // false if using paid endpoint
const DEEPL_API_KEY = process.env.DEEPL_API_KEY || '';

// Absolute dirs (no path surprises)
const OUT_DIR = resolve(process.cwd(), 'src', 'locales');
const CACHE_DIR = resolve(process.cwd(), '.cache');
// ==========================================

type Project = typeof projects[number];

type I18nProjectShape = {
  [k: string]: {
    title: string;
    overlayDescription: string;
    description: string;
    stats: { [i: string]: string };
  };
};
type I18nRoot = { project: I18nProjectShape };

const ensureDir = (filePath: string) => {
  const dir = dirname(filePath);
  mkdirSync(dir, { recursive: true });
};

const projectKey = (p: Project, idx: number) =>
  (p as any).key ? String((p as any).key).replace(/\s+/g, '-').toLowerCase() : `project${idx + 1}`;

const toI18nShape = (list: Project[], t: (s: string) => string): I18nRoot => {
  const obj: I18nProjectShape = {};
  list.forEach((p, idx) => {
    const key = projectKey(p, idx);
    obj[key] = {
      title: t((p as any).title ?? ''),
      overlayDescription: t((p as any).overlayDescription ?? ''),
      description: t((p as any).description ?? ''),
      stats: Object.fromEntries(((p as any).stats ?? []).map((s: any, i: number) => [String(i + 1), t(s?.text ?? '')])),
    };
  });
  return { project: obj };
};

const collectStrings = (list: Project[]): string[] => {
  const set = new Set<string>();
  list.forEach((p) => {
    const t = (p as any).title;
    const od = (p as any).overlayDescription;
    const d = (p as any).description;
    if (t) set.add(t);
    if (od) set.add(od);
    if (d) set.add(d);
    ((p as any).stats ?? []).forEach((s: any) => s?.text && set.add(s.text));
  });
  return Array.from(set);
};

// ----- merge helpers (preserve order) -----
function isObj(v: any): v is Record<string, any> {
  return v && typeof v === 'object' && !Array.isArray(v);
}
function mergePreserveOrder<T extends Record<string, any>>(oldObj: T = {} as T, freshObj: T = {} as T): T {
  const out: Record<string, any> = {};
  for (const k of Object.keys(oldObj)) {
    const ov = oldObj[k];
    const nv = (freshObj as any)[k];
    if (nv === undefined) out[k] = ov;
    else if (isObj(ov) && isObj(nv)) out[k] = mergePreserveOrder(ov, nv);
    else out[k] = nv;
  }
  for (const k of Object.keys(freshObj)) {
    if (!(k in out)) out[k] = (freshObj as any)[k];
  }
  return out as T;
}

// ---------------- DeepL -----------------
async function deeplTranslate(
  texts: string[],
  targetLang: string,
  apiKey: string,
  useFree = true
): Promise<string[]> {
  if (!apiKey) throw new Error('Missing DEEPL_API_KEY');
  if (!texts.length) return [];

  const endpoint = useFree ? 'https://api-free.deepl.com/v2/translate' : 'https://api.deepl.com/v2/translate';

  const form = new URLSearchParams();
  texts.forEach((t) => form.append('text', t));
  form.append('target_lang', targetLang.toUpperCase());

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form.toString(),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`DeepL error ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { translations: { text: string }[] };
  return data.translations.map((t) => t.text);
}

// --------- Cache per-locale ------------
const cachePathFor = (lang: string) => resolve(CACHE_DIR, `i18n-${lang}-cache.json`);
type Cache = Record<string, string>;
const loadCache = (lang: string): Cache =>
  existsSync(cachePathFor(lang)) ? JSON.parse(readFileSync(cachePathFor(lang), 'utf8')) : {};
const saveCache = (lang: string, c: Cache) => {
  ensureDir(cachePathFor(lang));
  writeFileSync(cachePathFor(lang), JSON.stringify(c, null, 2), 'utf8');
};

async function translateAllWithCache(texts: string[], lang: string): Promise<Record<string, string>> {
  const cache = loadCache(lang);
  const missing = texts.filter((t) => !cache[t] && t.trim().length > 0);

  if (missing.length) {
    const translated = await deeplTranslate(missing, lang, DEEPL_API_KEY, USE_FREE);
    missing.forEach((src, i) => (cache[src] = translated[i]));
    saveCache(lang, cache);
  }

  const map: Record<string, string> = {};
  texts.forEach((t) => (map[t] = cache[t] ?? t));
  return map;
}

// --------------- Build ------------------
async function main() {
  console.log('OUT_DIR:', OUT_DIR);
  console.log('CACHE_DIR:', CACHE_DIR);

  // 1) Build partial EN (only project subtree)
  const enPartial = toI18nShape(projects, (s) => s);

  // 2) Merge into existing EN root
  const outEn = resolve(OUT_DIR, 'en.json');
  const enOldRoot = existsSync(outEn) ? JSON.parse(readFileSync(outEn, 'utf8')) : {};
  const enMergedRoot = mergePreserveOrder(enOldRoot, enPartial);
  ensureDir(outEn);
  writeFileSync(outEn, JSON.stringify(enMergedRoot, null, 2) + '\n', 'utf8');
  console.log('✅ Wrote', outEn);

  // 3) Translate unique strings and merge into FR root
  const uniqueStrings = collectStrings(projects);
  for (const lang of LANGS) {
    const map = await translateAllWithCache(uniqueStrings, lang);
    const partial = toI18nShape(projects, (s) => map[s] ?? s);

    const out = resolve(OUT_DIR, `${lang}.json`);
    const oldRoot = existsSync(out) ? JSON.parse(readFileSync(out, 'utf8')) : {};
    const mergedRoot = mergePreserveOrder(oldRoot, partial);

    ensureDir(out);
    writeFileSync(out, JSON.stringify(mergedRoot, null, 2) + '\n', 'utf8');
    console.log(`✅ Wrote ${out}`);
  }
}

main().catch((e) => {
  console.error('❌ build-i18n failed:', e);
  process.exit(1);
});