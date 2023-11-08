import { ui } from "./ui";

export const languages = {
  en: "English",
  fr: "Français",
  es: "Español",
};

export const defaultLang = "en";

export type UiType = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as UiType;
  return defaultLang;
}

export function useTranslations(lang?: UiType) {
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

export function pathNameIsInLanguage(pathname: string, lang: UiType) {
  return pathname.startsWith(`/${lang}/`) || (lang === defaultLang && !pathNameStartsWithLanguage(pathname));
}

function pathNameStartsWithLanguage(pathname: string) {
  return (
    pathname.startsWith("/en") ||
    pathname.startsWith("/fr") ||
    pathname.startsWith("/es")
  );
}

export function getLocalizedPathname(pathname: string, lang: UiType) {
  if (pathNameStartsWithLanguage(pathname)) {
    return pathname.replace(/^\/(en|fr|es)/, `/${lang}`);
  }
  return `/${lang}${pathname}`;
}
