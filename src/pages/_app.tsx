import 'tailwindcss/tailwind.css';
import '@/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import { i18n } from 'i18n.config';

const oldPaths = [
  '/',
  '/admins/team',
  '/events/\\d+',
  '/feedback/new',
  '/newsletter',
  '/community'
].map(p => {
  if (p === '/') {
    return new RegExp(`^${p}$`);
  }

  return new RegExp(`^${p}`);
});

const useBackRouteCompatibility = () => {
  const router = useRouter();
  React.useEffect(() => {
    if (oldPaths.some(p => p.test(router.asPath))) {
      void router.replace(
        router.asPath,
        `/${i18n.defaultLocale}${router.asPath}`
      );
    }
  }, [router]);
};

export default function App({ Component, pageProps }: AppProps) {
  useBackRouteCompatibility();
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
