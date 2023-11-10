import { ui } from "./ui";

export const LANGUAGES = {
  en: "English",
  fr: "Français",
  es: "Español",
};

export const DEFAULT_LANG = "en";

export type UiType = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as UiType;
  return DEFAULT_LANG;
}

export function useTranslations(lang?: UiType) {
  return function t(
    key: keyof (typeof ui)[typeof DEFAULT_LANG],
    ...args: any[]
  ) {
    let translation = ui[lang ?? DEFAULT_LANG][key] || ui[DEFAULT_LANG][key];
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        translation = translation.replace(`{${i}}`, args[i]);
      }
    }
    return translation;
  };
}

export function pathNameIsInLanguage(pathname: string, lang: UiType) {
  return pathname.startsWith(`/${lang}`) || (lang === DEFAULT_LANG && !pathNameStartsWithLanguage(pathname));
}

function pathNameStartsWithLanguage(pathname: string) {
  let startsWithLanguage = false;
  const languages = Object.keys(LANGUAGES);

  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    if (pathname.startsWith(`/${lang}`)) {
      startsWithLanguage = true;
      break;
    }
  }

  return startsWithLanguage;
}

export function getLocalizedPathname(pathname: string, lang: UiType) {
  if (pathNameStartsWithLanguage(pathname)) {
    const availableLanguages = Object.keys(LANGUAGES).join('|');
    const regex = new RegExp(`^\/(${availableLanguages})`);
    return pathname.replace(regex, `/${lang}`);
  }
  return `/${lang}${pathname}`;
}
