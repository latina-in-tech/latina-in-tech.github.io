import { Locale, i18n } from 'i18n.config';
import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/compat/router';
import React from 'react';

export default function Document() {
  const router = useRouter();
  const [locale, setLocale] = React.useState<Locale>(i18n.defaultLocale);

  React.useEffect(() => {
    if (router?.query.lang !== i18n.defaultLocale) {
      setLocale('en');
    }
  }, [router]);

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
