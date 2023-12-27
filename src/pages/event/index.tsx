import { GetStaticProps, NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import EventCard from '@/components/EventCard';
import { Alert } from '@/components/Alert';

import { getAllEvents } from '@/utils/mdxUtils';
import { IEvent } from '@/model/event';

/* Default param in url for search */
const defaultIDParam = 'search';

type Props = {
  events: [IEvent];
};

const EventPage: NextPage<Props> = ({ events: events }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get(defaultIDParam);
  const eventToShow = events.filter(rk => rk.slug == search);
  const eventNotFound = eventToShow.length != 1;

  return (
    <>
      <Head>
        {eventNotFound ? (
          <>
            <title>LiT - Evento non trovato</title>
          </>
        ) : (
          <>
            <title>LiT - Evento: {eventToShow[0].title}</title>
          </>
        )}

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {eventNotFound ? (
        <>
          <Alert
            title='Attenzione!'
            content="Errore... l'evento cercato è inesistente"
            type='error'
            onDismiss={() => router.replace('/')}
          />
        </>
      ) : (
        <>
          <EventCard event={eventToShow[0]} />
        </>
      )}
    </>
  );
};

export default EventPage;

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
    'maps',
    'speakers',
    'published'
  ]);
  return { props: { events } };
};
