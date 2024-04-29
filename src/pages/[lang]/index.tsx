'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import {
  filterComingEvents,
  filterPastEvents,
  sortEvents
} from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
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
import { getDictionary } from '@/utils/dictionary';

const MAX_PAST_EVENTS = 3;

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
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

  return (
    <>
      <Head>
        <title>LiT - Latina In Tech</title>
        <meta
          name='description'
          content='Community che raccoglie gli sviluppatori della provincia di Latina'
        />
        <meta
          name='keywords'
          content='Latina, User Group, Lazio, Roma, Sviluppatori Latina, Latina In Tech, LiT'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header lang={locale} />
      <main className='flex flex-col gap-6 px-4 pb-8'>
        <Hero />

        <div className='mb-4 hidden md:block' />

        {nextEvents.length > 0 && (
          <EventsList
            heading={translations.nextEventsTitle}
            caption={translations.nextEventsSubtitle}
            events={nextEvents}
          />
        )}
        {pastEventsPreview.length > 0 && (
          <EventsList
            heading={translations.previousEventsTitle}
            caption={translations.previousEventsSubtitle}
            events={pastEventsPreview}
          />
        )}
        {hasMorePastEvents && (
          <div className='flex justify-center'>
            <a
              href={`/${router.query.lang}/events`}
              className='text-primary hover:text-primary-dark dark:text-primary-lighter dark:hover:text-primary-light mt-2 text-lg'
            >
              {translations.andManyOthers}
            </a>
          </div>
        )}
        <div className='mb-2' />
        <Sponsors />
        <Newsletter />
        <Community members={communityMembers} />
        <LeaveFeedback />
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

export const getStaticProps: GetStaticProps = async context => {
  const lang = context.params?.lang as string;
  const dictionary = await getDictionary(lang as Locale);
  const events = getAllEvents();
  const communityMembers = getAllCommunityMembers();
  return { props: { events, communityMembers, translations: dictionary.home } };
};

export default Home;
