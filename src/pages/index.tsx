import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { IEvent } from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo } from 'react';
import { Sponsors } from '@/components/Sponsors';
import { DateTime } from 'luxon';
import dynamic from 'next/dynamic';

const EventsList = dynamic(() => import('@/components/EventsList'), {
  ssr: false
});

type Props = {
  events: [IEvent];
};

const filterPastEvents = (events: IEvent[]) => {
  const nowDate = DateTime.now();
  return events.filter(event => {
    const eventDate = DateTime.fromISO(event['date']);
    return eventDate < nowDate;
  });
};

const filterNextEvents = (events: IEvent[]) => {
  const nowDate = DateTime.now();
  return events.filter(event => {
    const eventDate = DateTime.fromISO(event['date']);
    return eventDate >= nowDate;
  });
};

const Home: NextPage<Props> = ({ events: events }: Props) => {
  const pastEvents = useMemo(() => filterPastEvents(events), [events]);
  const nextEvents = useMemo(() => filterNextEvents(events), [events]);

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
      <main className='flex flex-col gap-6 px-4 pb-4'>
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
    'place',
    'maps'
  ]);

  events.sort((a, b) => (a.date < b.date ? 1 : b.date < a.date ? -1 : 0));
  return { props: { events: events } };
};
