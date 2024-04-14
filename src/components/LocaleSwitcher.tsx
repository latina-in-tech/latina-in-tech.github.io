'use client';
import 'flag-icons';
import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { Locale, i18n } from 'i18n.config';
import { usePathname } from 'next/navigation';

export default function LocaleSwitcher(props: { lang: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const defaultLocale = i18n.defaultLocale;
  const [animation, setAnimation] = useState('');
  const [locale, setLocale] = useState(props.lang);

  const toggle = (e: MouseEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const changeLocale = i18n.locales.filter(
      locale => locale !== props.lang
    )[0];

    setLocale(changeLocale);
    setAnimation(props.lang === defaultLocale ? 'slide-out' : 'slide-in');

    container.onanimationend = e => {
      const regex = /it|en/;

      if (regex.test(pathname)) {
        // not works: onclick runs twice ######
        // console.log("old path: " + pathname)
        // console.log("new path: " + pathname.replace(regex, changeLocale))
        router.push(pathname.replace(regex, changeLocale));
      } else {
        router.push(`/${changeLocale}${pathname}`);
      }
    };
  };

  return (
    <div className='flex flex-row p-4 gap-x-1 items-center'>
      <span
        className='fi fi-it'
        style={{ display: 'block', width: '32px', height: '16px' }}
      ></span>
      <div
        className='cursor-pointer w-8 h-4 rounded'
        style={{ backgroundColor: 'rgb(71 85 105 / 1)' }}
        onClick={e => toggle(e)}
      >
        <div
          className={`bg-white w-1/2 h-full rounded-full ${locale} ${animation}`}
        />
      </div>
      <span
        className='fi fi-gb'
        style={{ display: 'block', width: '32px', height: '16px' }}
      ></span>
    </div>
  );
}
