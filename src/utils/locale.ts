import { Locale, i18n } from 'i18n.config';

export const getDefaultLocale = () => {
  return i18n.defaultLocale;
};

export const getAllLocales = () => {
  return i18n.locales;
};

export const setLocaleAttribute = (locale: Locale): void => {
  document.documentElement.lang = locale;
}