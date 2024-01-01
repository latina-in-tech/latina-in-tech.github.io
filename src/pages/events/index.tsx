import React, { useMemo } from 'react';
import Header from '@/components/Header';
import EventsList from '@/components/event/EventsList';
import { GetStaticProps, NextPage } from 'next';
import { getAllEvents } from '@/utils/mdxUtils';
import { EVENT_FIELDS, IEvent, sortEvents } from '@/model/event';
import Head from 'next/head';

const EventsPage: NextPage<{ events: [IEvent] }> = ({
  events
}: {
  events: [IEvent];
}) => {
  const sortedEvents = useMemo(() => sortEvents(events), [events]);
  return (
    <>
      <Head>
        <title>LiT - Eventi</title>
      </Head>
      <Header />
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

export const getStaticProps: GetStaticProps = async () => {
  const events = getAllEvents();

  return { props: { events } };
};
