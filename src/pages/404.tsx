'use client';
import React, { useEffect } from 'react';
import { i18n, Locale } from '../../i18n.config';
import Link from 'next/link';
import { getDefaultLocale } from '@/utils/locale';
import { getDictionary } from '@/utils/dictionary';

type LocalizedCopy = {
  paragraph1: string;
  paragraph2: string;
  link: string;
};

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

const getNavigatorLanguage = (): Locale =>
  i18n.locales.find(l => l === navigator.language.split('-')[0]) ??
  getDefaultLocale();

const useBackRouteCompatibility = () => {
  React.useEffect(() => {
    const locale = getNavigatorLanguage();
    const { pathname } = window.location;
    if (oldPaths.some(p => p.test(pathname)) && pathname !== '/') {
      window.location.replace(`/${locale}${pathname}`);
    } else if (pathname === '/') {
      window.location.replace(`/${locale}`);
    }
  }, []);
};

export default function Custom404() {
  const [isNeedToRedirect, setIsNeedToRedirect] = React.useState(false);
  const [locale, setLocale] = React.useState<Locale | undefined>();
  const [localizedCopy, setLocalizedCopy] = React.useState<
    LocalizedCopy | undefined
  >(undefined);
  useBackRouteCompatibility();
  useEffect(() => setLocale(getNavigatorLanguage()), []);
  useEffect(() => {
    if (locale && !localizedCopy) {
      getDictionary(locale).then(dict => setLocalizedCopy(dict.notFound));
    }
  }, [locale, localizedCopy]);

  React.useEffect(() => {
    setIsNeedToRedirect(oldPaths.some(p => p.test(window.location.pathname)));
  }, []);

  if (isNeedToRedirect || !localizedCopy) {
    return <div id='loader'></div>;
  } else {
    return (
      <div className='container'>
        <div className='content'>
          <h1>Oops!</h1>
          <p>{localizedCopy.paragraph1}</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='200'
            height='200'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='12' y1='8' x2='12' y2='16'></line>
            <line x1='12' y1='8' x2='12' y2='12'></line>
            <line x1='12' y1='16' x2='12' y2='16'></line>
          </svg>
          <p>{localizedCopy.paragraph2}</p>
          <Link href={`/${locale}`}>{localizedCopy.link}</Link>
        </div>
        <style>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .content {
            text-align: center;
          }
          .icon {
            width: 100px;
            height: 100px;
            margin: 20px auto;
            display: block;
          }
          h1 {
            font-size: 2em;
            margin-bottom: 0.5em;
          }
          p {
            font-size: 1.2em;
            margin-bottom: 1em;
          }
          a {
            color: #0070f3;
            text-decoration: none;
            font-weight: bold;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }
}
