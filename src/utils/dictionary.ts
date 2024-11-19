// We enumerate all dictionaries here for better linting and typescript support

import { Locale } from 'i18n.config';

// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('../../dictionaries/en.json').then(module => module.default),
  it: () => import('../../dictionaries/it.json').then(module => module.default)
};

export type Dictionary = (typeof dictionaries)['en'] extends () => Promise<
  infer T
>
  ? T
  : never;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]?.() ?? dictionaries.it();
