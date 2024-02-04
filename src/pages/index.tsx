import Header from '@/components/Header';
import Hero from '@/components/Hero';
import {
  filterComingEvents,
  filterPastEvents,
  IEvent,
  sortEvents
} from '@/model/event';
import { getAllCommunityMembers, getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo } from 'react';
import { Sponsors } from '@/components/Sponsors';
import { LeaveFeedback } from '@/components/LeaveFeedback';
import EventsList from '@/components/event/EventsList';
import { Newsletter } from '@/components/Newsletter';
import Community from '@/pages/community';

const MAX_PAST_EVENTS = 3;

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  events,
  communityMembers
}) => {
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
        {pastEventsPreview.length > 0 && (
          <EventsList
            heading='Eventi Passati'
            caption='Peccato, questi eventi si sono già svolti! Segui la pagina per rimanere aggiornato sui prossimi appuntamenti.'
            events={pastEventsPreview}
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
        <div className='mb-2' />
        <Sponsors />
        <Community members={communityMembers} />
        <Newsletter />
        <LeaveFeedback />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const events = getAllEvents();
  const communityMembers = getAllCommunityMembers();
  return { props: { events, communityMembers } };
};
