import Header from '@/components/Header';
import Hero from '@/components/Hero';
import {
  filterComingEvents,
  filterPastEvents,
  IEvent,
  sortEvents
} from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo } from 'react';
import { Sponsors } from '@/components/Sponsors';
import { LeaveFeedback } from '@/components/LeaveFeedback';
import EventsList from '@/components/EventsList';

type Props = {
  events: [IEvent];
};

const Home: NextPage<Props> = ({ events: events }: Props) => {
  const pastEvents = useMemo(
    () => sortEvents(filterPastEvents(events)),
    [events]
  );
  const nextEvents = useMemo(
    () => sortEvents(filterComingEvents(events)),
    [events]
  );

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
      <Header />
      <main className='flex flex-col gap-6 px-4 pb-8'>
        <Hero />

        {nextEvents.length > 0 && (
          <EventsList
            heading='Prossimi Eventi'
            caption='Fissa le date e non prendere impegni per i prossimi eventi della community!'
            events={nextEvents}
          />
        )}
        {pastEvents.length > 0 && (
          <EventsList
            heading='Eventi Passati'
            caption='Peccato, questi eventi si sono già svolti! Segui la pagina per rimanere aggiornato sui prossimi appuntamenti.'
            events={pastEvents}
          />
        )}

        <Sponsors />
        <LeaveFeedback />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const events = getAllEvents([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail',
    'duration',
    'youtubeUrl',
    'place',
    'maps'
  ]);

  return { props: { events } };
};
