import { createContext, useContext } from 'react';
import data from './data/public.json';

export { data };
export const Language = createContext('zh');
export const asset = (file) => import.meta.env.BASE_URL + file;
export const url = (file) => file.startsWith('assets/') ? asset(file) : file;
export function translate(value, lang) {
  if (typeof value === 'string') return value;
  return Array.isArray(value) ? value[lang === 'en' ? 1 : 0] : value?.[lang] ?? '';
}
export function useLanguage() {
  const lang = useContext(Language);
  return { lang, t: (value, english) => translate(english === undefined ? value : [value, english], lang) };
}
export const sortedProjects = [...data.projects].sort((a,b) => b.period[1].localeCompare(a.period[1]) || b.period[0].localeCompare(a.period[0]));
export const evidenceById = new Map(data.evidence.map(item => [item.id,item]));
export const initialResume = 'software-development';
export const apiBase = (import.meta.env.VITE_AI_API_URL ?? '').replace(/\/$/, '');
export async function api(path, body) {
  if (!apiBase) throw new Error('unconfigured');
  const response = await fetch(apiBase + '/api/' + path, {
    method: body ? 'POST' : 'GET',
    ...(body && { headers: { 'Content-Type':'application/json' }, body: JSON.stringify(body) }),
    signal: AbortSignal.timeout(62000),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result) throw new Error(result?.error || 'unavailable');
  return result;
}
