import React from 'react';
import Header from '@/components/Header';
import EventsSection from '@/components/event/EventsSection';
import { GetStaticProps, NextPage } from 'next';
import { getAllEvents } from '@/utils/mdxUtils';
import { IEvent } from '@/model/event';
import Head from 'next/head';
import { Locale } from 'i18n.config';
import { getAllLocales } from '@/utils/locale';
import { Dictionary, getDictionary } from '@/utils/dictionary';

type EventsPageProps = {
  events: IEvent[];
  translations: Dictionary;
  lang: Locale;
};

const EventsPage: NextPage<EventsPageProps> = ({
  events,
  translations,
  lang
}: EventsPageProps) => {
  return (
    <>
      <Head>
        <title>{translations.events.title}</title>
      </Head>
      <Header lang={lang} />
      <main className='px-4 pb-16 pt-4 sm:px-6 lg:px-8'>
        <EventsSection
          events={events}
          lang={lang}
          translations={translations.home.events}
          heading={translations.events.events}
          caption={translations.events.hereYouCanSee}
        />
      </main>
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
  const lang = context.params?.lang as Locale;
  const translations = await getDictionary(lang);
  return { props: { events, translations, lang } };
};
