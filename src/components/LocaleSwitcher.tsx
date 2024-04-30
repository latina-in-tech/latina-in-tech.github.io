'use client';
import 'flag-icons';
import React from 'react';
import { useRouter } from 'next/router';
import { Locale, i18n } from 'i18n.config';

export default function LocaleSwitcher(props: {
  lang: Locale;
  mobile: boolean;
}) {
  const router = useRouter();
  const pathname = router.pathname;

  const [animation, setAnimation] = React.useState('');
  const [locale, setLocale] = React.useState(props.lang);

  const toggle = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = e.target as HTMLDivElement;
    const changeLocale = i18n.locales.filter(
      locale => locale !== props.lang
    )[0];

    setLocale(changeLocale);
    setAnimation(props.lang === i18n.defaultLocale ? 'slide-out' : 'slide-in');

    container.onanimationend = () => {
      const regex = /\[lang\]/;
      const options = { shallow: true };
      const url = {
        pathname: pathname,
        query: { lang: changeLocale }
      };

      router.replace(url, pathname.replace(regex, changeLocale), options);
    };
  };

  return (
    <div
      className={`${props.mobile ? 'flex flex-row p-2' : 'hidden items-center lg:flex lg:flex-row'} gap-x-1`}
    >
      <span
        className='fi fi-it'
        style={{ display: 'block', width: '32px', height: '16px' }}
      ></span>
      <div
        className='cursor-pointer w-8 h-4 rounded'
        style={{ backgroundColor: 'rgb(71 85 105 / 1)' }}
        onClick={toggle}
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
