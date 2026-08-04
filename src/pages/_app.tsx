import 'tailwindcss/tailwind.css';
import '@/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import { Plus_Jakarta_Sans } from 'next/font/google';

// self hosted at build time: no request to google fonts at runtime
const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={`${sans.variable} font-sans`}>
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
      <Component key={router.asPath} {...pageProps} />
    </div>
  );
}
