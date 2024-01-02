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
import EventsList from '@/components/event/EventsList';
import { Newsletter } from '@/components/Newsletter';

type Props = {
  events: [IEvent];
};

const MAX_PAST_EVENTS = 3;

const Home: NextPage<Props> = ({ events: events }: Props) => {
  const pastEvents = useMemo(
    () => sortEvents(filterPastEvents(events)).slice(0, MAX_PAST_EVENTS),
    [events]
  );
  const nextEvents = useMemo(
    () => sortEvents(filterComingEvents(events)),
    [events]
  );

  const hasMorePastEvents = events.length > MAX_PAST_EVENTS + nextEvents.length;

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

        <div className='mb-4 hidden md:block' />

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
        {hasMorePastEvents && (
          <div className='flex justify-center'>
            <a
              href='/events'
              className='text-primary hover:text-primary-dark dark:text-primary-lighter dark:hover:text-primary-light mt-2 text-lg'
            >
              ...e molti altri!
            </a>
          </div>
        )}
        <Newsletter />
        <LeaveFeedback />

        <div className='mb-4' />
        <Sponsors />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const events = getAllEvents();

  return { props: { events } };
};
