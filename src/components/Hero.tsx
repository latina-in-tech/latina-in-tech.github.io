import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/android-chrome-512x512.png';
import navigationLinks from '@/model/navigation';
import { TelegramGroupInfo } from '@/utils/telegram';
import React from 'react';
import { Dictionary } from '@/utils/dictionary';

const telegramNav = navigationLinks.find(item => item.name === 'Telegram');

type HeroProps = {
  translations: Dictionary;
  eventsCount: number;
  telegramGroupInfo?: TelegramGroupInfo;
};

const Hero: React.FC<HeroProps> = ({
  translations,
  eventsCount,
  telegramGroupInfo
}: HeroProps) => {
  const tagline = translations.hero.tagline.replace(
    '{count}',
    String(eventsCount)
  );
  return (
    <section className='relative isolate overflow-hidden'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-0 -z-10 h-2/3 bg-gradient-to-b from-primary/5 to-transparent'
      />
      <div className='mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center sm:py-16'>
        <Image
          priority
          src={logo}
          alt='Latina In Tech'
          className='h-28 w-28 sm:h-32 sm:w-32'
        />
        <h1 className='mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
          <span className='block text-gray-900 dark:text-slate-100'>
            {translations.hero.communityOf}
          </span>
          <span className='block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent dark:from-primary-light dark:to-primary-lighter'>
            {translations.hero.pontiniDev}
          </span>
        </h1>
        <p className='mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400'>
          {tagline}
        </p>
        {telegramNav && (
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <Link
              href={telegramNav.href}
              target='_blank'
              className='inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
            >
              {translations.hero.joinUsOnTelegram}
              {telegramNav.icon && <telegramNav.icon></telegramNav.icon>}
            </Link>
            {telegramGroupInfo && (
              <p className='inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700'>
                <span className='h-2 w-2 rounded-full bg-green-500' />
                <span>
                  {telegramGroupInfo.members} {translations.hero.members}
                  {telegramGroupInfo.online !== undefined && (
                    <span className='font-normal text-slate-500 dark:text-slate-400'>
                      {' '}
                      &middot; {telegramGroupInfo.online}{' '}
                      {translations.hero.online}
                    </span>
                  )}
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
