import React, { useMemo } from 'react';
import Header from '@/components/Header';
import EventsList from '@/components/event/EventsList';
import { GetStaticProps, NextPage } from 'next';
import { getAllEvents } from '@/utils/mdxUtils';
import { IEvent, sortEvents } from '@/model/event';
import Head from 'next/head';
import { i18n } from 'i18n.config';
import { useRouter } from 'next/router';
import { getAllLocales } from '@/utils/locale';

const EventsPage: NextPage<{ events: [IEvent] }> = ({
  events
}: {
  events: [IEvent];
}) => {
  const router = useRouter()
  const locale = i18n.locales.filter(locale => router?.query.lang === locale)[0]
  
  const sortedEvents = useMemo(() => sortEvents(events), [events]);
  return (
    <>
      <Head>
        <title>LiT - Eventi</title>
      </Head>
      <Header lang={locale} />
      <div className='p-4'>
        <EventsList
          heading='Eventi'
          caption='Qui puoi vedere tutti gli eventi della community Latina In Tech!'
          events={sortedEvents}
        />
      </div>
    </>
  );
};

export default EventsPage;

export const getStaticPaths = async () => {
  const locales = getAllLocales()

  return {
    paths: locales.map(locale => {
      return {
        params: {
          lang: locale
        }
      }
    }),
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const events = getAllEvents();
  return { props: { events } };
};
