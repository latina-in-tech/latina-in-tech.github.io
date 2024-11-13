'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import {
  filterComingEvents,
  filterPastEvents,
  IEvent,
  sortEvents
} from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps } from 'next';
import React, { useMemo } from 'react';
import { Sponsors } from '@/components/Sponsors';
import { LeaveFeedback } from '@/components/LeaveFeedback';
import EventsList from '@/components/event/EventsList';
import { Newsletter } from '@/components/Newsletter';
import Community from '@/pages/[lang]/community';
import { getAllCommunityMembers } from '@/utils/community';
import { getAllLocales, setLocaleAttribute } from '@/utils/locale';
import { useRouter } from 'next/router';
import { Locale, i18n } from 'i18n.config';
import { Dictionary, getDictionary } from '@/utils/dictionary';
import Head from '@/components/HeadComponent';
import { CommunityMemberOrError } from '@/model/communityMember';

const MAX_PAST_EVENTS = 3;

type StaticProps = {
  events: IEvent[];
  communityMembers: Array<CommunityMemberOrError>;
  translations: Dictionary;
};
export const getStaticProps: GetStaticProps = (async context => {
  const lang = context.params?.lang as string;
  const dictionary = await getDictionary(lang as Locale);
  const events = getAllEvents();
  const communityMembers = getAllCommunityMembers();
  return { props: { events, communityMembers, translations: dictionary } };
}) satisfies GetStaticProps<StaticProps>;

const Home: React.FC<StaticProps> = ({
  events,
  communityMembers,
  translations
}) => {
  const router = useRouter();
  const locale = i18n.locales.filter(
    locale => router?.query.lang === locale
  )[0];

  React.useEffect(() => {
    const locale = router.query.lang as Locale;
    setLocaleAttribute(locale);
  });

  const allPastEvents = useMemo(
    () => sortEvents(filterPastEvents(events)),
    [events]
  );

  // we want to preview only the first MAX_PAST_EVENTS past events
  const pastEventsPreview = allPastEvents.slice(0, MAX_PAST_EVENTS);
  const nextEvents = useMemo(
    () => sortEvents(filterComingEvents(events)),
    [events]
  );

  const hasMorePastEvents = allPastEvents.length > pastEventsPreview.length;

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
      <Header lang={locale} />
      <main className='flex flex-col gap-6 px-4 pb-8'>
        <Hero translations={translations} />

        <div className='mb-4 hidden md:block' />

        {nextEvents.length > 0 && (
          <EventsList
            heading={translations.home.nextEventsTitle}
            caption={translations.home.nextEventsSubtitle}
            events={nextEvents}
          />
        )}
        {pastEventsPreview.length > 0 && (
          <EventsList
            heading={translations.home.previousEventsTitle}
            caption={translations.home.previousEventsSubtitle}
            events={pastEventsPreview}
          />
        )}
        {hasMorePastEvents && (
          <div className='flex justify-center'>
            <a
              href={`/${router.query.lang}/events`}
              className='text-primary hover:text-primary-dark dark:text-primary-lighter dark:hover:text-primary-light mt-2 text-lg'
            >
              {translations.home.andManyOthers}
            </a>
          </div>
        )}
        <div className='mb-2' />
        <Sponsors />
        <Newsletter translations={translations} />
        <Community members={communityMembers} translations={translations} />
        <LeaveFeedback translations={translations} />
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
