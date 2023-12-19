import { GetStaticProps, NextPage } from 'next';
import { useSearchParams  } from "next/navigation";
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import EventCard from '@/components/EventCard'

import { getAllEvents } from '@/utils/mdxUtils';
import { IEvent } from '@/model/event';

/* Default param in url for search */
const defaultIDParam = 'search';

type Props = {
  events: [IEvent];
};

const EventPage: NextPage<Props> = ({ events: events }: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams.get(defaultIDParam);
  const eventToShow = events.filter (rk => rk.slug == search);

  return (
    <>
      <Head>
        {eventToShow.length == 1 ? 
          <><title>LiT - Evento: {eventToShow[0].title}</title></>
          : 
          <><title>LiT - Evento non trovato</title></>
        }        
        
        <link rel='icon' href='/favicon.ico' />
      </Head>  
      <Header />
      {eventToShow.length == 1 ? 
        <><EventCard event={eventToShow[0]}/></>
        : 
        <p>Non trovato evento: {search}</p>
      }
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
    'maps'
  ]);
  return { props: { events } };
};
