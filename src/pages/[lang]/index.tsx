'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { IEvent } from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps } from 'next';
import React from 'react';
import { Sponsors } from '@/components/Sponsors';
import EventsSection from '@/components/event/EventsSection';
import { Newsletter } from '@/components/Newsletter';
import Community from '@/pages/[lang]/community';
import { getAllCommunityMembers } from '@/utils/community';
import { getAllLocales, setLocaleAttribute } from '@/utils/locale';
import { Locale } from 'i18n.config';
import { Dictionary, getDictionary } from '@/utils/dictionary';
import Head from '@/components/HeadComponent';
import { CommunityMemberOrError } from '@/model/communityMember';

const INITIAL_EVENTS_COUNT = 6;

type StaticProps = {
  events: IEvent[];
  communityMembers: Array<CommunityMemberOrError>;
  translations: Dictionary;
  lang: Locale;
};
export const getStaticProps: GetStaticProps = (async context => {
  const lang = context.params?.lang as Locale;
  const dictionary = await getDictionary(lang);
  const events = getAllEvents();
  const communityMembers = getAllCommunityMembers();
  return {
    props: { events, communityMembers, translations: dictionary, lang }
  };
}) satisfies GetStaticProps<StaticProps>;

const Home: React.FC<StaticProps> = ({
  events,
  communityMembers,
  translations,
  lang
}) => {
  React.useEffect(() => {
    setLocaleAttribute(lang);
  }, [lang]);

  const metadata = {
    title: 'LiT - Latina In Tech',
    description: translations.home.communityDescription,
    keywords: [
      'Latina',
      'User Group',
      'Lazio',
      'Roma',
      'Sviluppatori Latina',
      'Latina In Tech',
      'LiT'
    ]
  };

  return (
    <>
      <Head metadata={metadata}>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header lang={lang} />
      <main className='flex flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-8'>
        <Hero translations={translations} />
        <EventsSection
          events={events}
          lang={lang}
          translations={translations.home.events}
          initialCount={INITIAL_EVENTS_COUNT}
          expandable
        />
        <Sponsors />
        <Newsletter translations={translations} />
        <Community members={communityMembers} translations={translations} />
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const locales = getAllLocales();

  return {
    paths: locales.map(locale => {
      return {
        params: {
          lang: locale
        }
      };
    }),
    fallback: false
  };
};

export default Home;
