import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventsList from '@/components/EventsList';
import { IEvent } from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { DateTime } from 'luxon';

type Props = {
  events: [IEvent];
};

function filterPastEvents(events: IEvent[]) {
  const nowDate = DateTime.now();
  return events.filter((event) => {
    const eventDate = DateTime.fromISO(event['date']);
    return eventDate < nowDate;
  });
}

function filterNextEvents(events: IEvent[]) {
  const nowDate = DateTime.now();
  return events.filter((event) => {
    const eventDate = DateTime.fromISO(event['date']);
    return eventDate >= nowDate;
  });
}

const Home: NextPage<Props> = ({ events: events }: Props) => {
  const pastEvents = filterPastEvents(events);
  const nextEvents = filterNextEvents(events);

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
      <main>
        <Hero />

        <div className='mt-8 mb-8' />

        {nextEvents && (
          <EventsList
            heading='Prossimi Eventi'
            caption='Fissa le date e non prendere impegni per i prossimi eventi della community!'
            events={nextEvents}
          ></EventsList>
        )}

        <div className='mt-8 mb-8' />

        {pastEvents && (
          <EventsList
            heading='Eventi Passati'
            caption='Peccato, questi eventi si sono già svolti! Segui la pagina per rimanere aggiornato sui prossimi appuntamenti.'
            events={pastEvents}
          ></EventsList>
        )}
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
  ]);
  return { props: { events: events } };
};
