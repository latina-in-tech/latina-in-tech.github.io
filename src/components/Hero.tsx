import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/android-chrome-512x512.png';
import navigationLinks from '@/model/navigation';
import { useTelegramGroupInfo } from '@/utils/telegram';
import React from 'react';
import { Dictionary } from '@/utils/dictionary';

const telegramNav = navigationLinks.find(item => item.name === 'Telegram');

type HeroProps = {
  translations: Dictionary;
};

const Hero: React.FC<HeroProps> = ({ translations }: HeroProps) => {
  const [maybeGroupInfo] = useTelegramGroupInfo(telegramNav?.href ?? '');
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
          {translations.hero.freeEventsForProfessionalGrowth}
        </p>
        {telegramNav && (
          <Link
            href={telegramNav.href}
            target='_blank'
            className='mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
          >
            {translations.hero.joinUsOnTelegram}
            {telegramNav.icon && <telegramNav.icon></telegramNav.icon>}
          </Link>
        )}
        {/* the counter is fetched client side: the row keeps its height to avoid a layout shift */}
        <p className='mt-3 flex h-5 items-center gap-2 text-sm text-slate-500 dark:text-slate-400'>
          {telegramNav && maybeGroupInfo && (
            <>
              <span className='h-2 w-2 rounded-full bg-green-500' />
              <span>
                {maybeGroupInfo.members} {translations.hero.members} &middot;{' '}
                {maybeGroupInfo.online} {translations.hero.online}
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default Hero;
