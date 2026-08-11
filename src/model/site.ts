import { Locale, i18n } from 'i18n.config';

/**
 * the site is statically exported, so there is no host available at runtime:
 * absolute urls (required by Open Graph) are built from this constant
 */
export const SITE_URL = 'https://www.latinaintech.org';

export const SITE_NAME = 'Latina In Tech';

export const COMMUNITY_KEYWORDS = [
  'Latina',
  'User Group',
  'Lazio',
  'Roma',
  'Sviluppatori Latina',
  'Latina In Tech',
  'LiT'
];

/** Open Graph wants the language_TERRITORY form, not the bare language code */
const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
  it: 'it_IT',
  en: 'en_US'
};

export const toOpenGraphLocale = (locale: Locale): string =>
  OPEN_GRAPH_LOCALES[locale];

export const getAlternateLocale = (locale: Locale): Locale =>
  i18n.locales.find(candidate => candidate !== locale) ?? i18n.defaultLocale;

export const toAbsoluteUrl = (path: string): string =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
