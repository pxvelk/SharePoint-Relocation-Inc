import { Language, languages } from "@/lib/site-content";

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function toLocalizedPath(lang: Language, path = "") {
  if (!path || path === "/") return `/${lang}`;
  return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
}
