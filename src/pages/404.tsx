'use client';
import React from 'react';
import { Locale, i18n } from '../../i18n.config';
import Link from 'next/link';
import { getDictionary } from '@/utils/dictionary';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

type dictionary = {
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

const useBackRouteCompatibility = () => {
  React.useEffect(() => {
    const locale = navigator.language.split('-')[0];
    const { pathname } = window.location;
    if (oldPaths.some(p => p.test(pathname)) && pathname !== '/') {
      window.location.replace(`/${locale}${pathname}`);
    } else if (pathname === '/') {
      window.location.replace(`/${locale}`);
    }
  }, []);
};

export default function Custom404({
  translations
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [locale, setLocale] = React.useState(i18n.defaultLocale as string);
  const [dict, setDict] = React.useState<dictionary>();
  const [isNeedToRedirect, setIsNeedToRedirect] = React.useState(false);
  useBackRouteCompatibility();

  React.useEffect(() => {
    setLocale(navigator.language.split('-')[0]);
    setIsNeedToRedirect(oldPaths.some(p => p.test(window.location.pathname)));
  }, []);

  React.useEffect(() => {
    setDict({
      paragraph1:
        locale === 'it'
          ? translations.paragraph1
          : "Looks like you've stumbled into the void.",
      paragraph2:
        locale === 'it'
          ? translations.paragraph2
          : "But don't panic, just click below to get back on track!",
      link: locale === 'it' ? translations.link : 'Go Home'
    });
  }, [locale]);

  if (isNeedToRedirect) {
    return <div id='loader'></div>;
  } else {
    return (
      <div className='container'>
        <div className='content'>
          <h1>Oops!</h1>
          <p>{dict?.paragraph1 ?? translations.paragraph1}</p>
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
          <p>{dict?.paragraph2 ?? translations.paragraph2}</p>
          <Link href={`/${locale}`}>{dict?.link ?? translations.link}</Link>
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

export const getStaticProps: GetStaticProps = async context => {
  const lang = context.params?.lang as string;
  const dictionary = await getDictionary(lang as Locale);
  return { props: { translations: dictionary['404'] } };
};
