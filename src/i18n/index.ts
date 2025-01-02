import { translations } from './translations';

const validLocales = ['en', 'de'] as const;
const defaultLocale = 'de' as const;

export type Locale = (typeof validLocales)[number];

export const getLangFromLocale = (
  currentLocale: string | undefined,
): Locale => {
  if (!currentLocale || !validLocales.includes(currentLocale as Locale)) {
    return defaultLocale;
  }

  return currentLocale as Locale;
};

export const useTranslations = (lang: Locale) => {
  return function t(key: keyof (typeof translations)[Locale]) {
    return translations[lang][key] || translations[defaultLocale][key];
  };
};
