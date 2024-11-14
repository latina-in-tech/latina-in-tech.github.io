import React, { useMemo } from 'react';
import Header from '@/components/Header';
import EventsList from '@/components/event/EventsList';
import { GetStaticProps, NextPage } from 'next';
import { getAllEvents } from '@/utils/mdxUtils';
import { IEvent, sortEvents } from '@/model/event';
import Head from 'next/head';
import { i18n, Locale } from 'i18n.config';
import { useRouter } from 'next/router';
import { getAllLocales } from '@/utils/locale';
import { Dictionary, getDictionary } from '@/utils/dictionary';

type EventsPageProps = {
  events: [IEvent];
  translations: Dictionary;
};

const EventsPage: NextPage<EventsPageProps> = ({
  events,
  translations
}: EventsPageProps) => {
  const router = useRouter();
  const locale = i18n.locales.filter(
    locale => router?.query.lang === locale
  )[0];

  const sortedEvents = useMemo(() => sortEvents(events), [events]);
  return (
    <>
      <Head>
        <title>{translations.events.title}</title>
      </Head>
      <Header lang={locale} />
      <div className='p-4'>
        <EventsList
          heading={translations.events.events}
          caption={translations.events.hereYouCanSee}
          events={sortedEvents}
        />
      </div>
    </>
  );
};

export default EventsPage;

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
  const events = getAllEvents();
  const lang = context.params?.lang as string;
  const translations = await getDictionary(lang as Locale);
  return { props: { events, translations } };
};
