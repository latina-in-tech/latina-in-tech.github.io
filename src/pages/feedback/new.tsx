import Header from '@/components/Header';
import { IEvent } from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

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

const Home: NextPage<Props> = ({ events: events }: Props) => {
  const pastEvents = useMemo(() => filterPastEvents(events), [events]);

  return (
    <>
      <Head>
        <title>LiT - Feedback</title>
        <meta
          name='description'
          content='Lascia un feedback sulla tua esperienza con Latina In Tech!'
        />
        <meta
          name='keywords'
          content='Latina, User Group, Lazio, Roma, Sviluppatori Latina, Latina In Tech, LiT'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='flex flex-col gap-6 px-4 pb-4 mt-8'>
        <div className='flex flex-col '>
          <div className='flex flex-row p-10 px-32 w-full items-center'>
            <Link href='/' className='w-fit'>
              <ArrowLeftIcon className='h-6 w-6' />
            </Link>
            <div className='flex-[3_0_0%] items-start'>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-slate-200 sm:text-4xl'>
                Feedback
              </h2>
            </div>
          </div>

          <div className={'mx-auto mt-6 flex justify-center'}>
            <div
              className={`grid md:grid-cols-3 sm:grid-cols-1 gap-3 place-items-center px-6`}
            ></div>
          </div>
        </div>
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

  events.sort((a, b) => (a.date < b.date ? 1 : b.date < a.date ? -1 : 0));
  return { props: { events: events } };
};
