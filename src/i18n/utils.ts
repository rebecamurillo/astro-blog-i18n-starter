import { ui, defaultLang } from "./ui";

export type UiType = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang?: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    ...args: any[]
  ) {
    let translation = ui[lang ?? "en"][key] || ui[defaultLang][key];
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        translation = translation.replace(`{${i}}`, args[i]);
      }
    }
    return translation;
  };
}

function pathNameStartsWithLanguage(pathname: string) {
  return (
    pathname.startsWith("/en/") ||
    pathname.startsWith("/fr/") ||
    pathname.startsWith("/es/")
  );
}

export function getLocalizedPathname(pathname: string, lang: keyof typeof ui) {
  if (pathNameStartsWithLanguage(pathname)) {
    return pathname.replace(/^\/(en|fr|es)/, `/${lang}`);
  }
  return `/${lang}${pathname}`;
}
