import { Locale, i18n } from 'i18n.config';
import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Document() {
  const [locale, setLocale] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    const router = useRouter();
    if (router.query.lang === 'en') {
      setLocale('en');
    }
  }, []);

  return (
    <Html lang={locale}>
      <Head />
      <body className='dark:bg-slate-900 dark:text-slate-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
