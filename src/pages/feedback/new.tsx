import Header from '@/components/Header';
import { IEvent } from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { Rate } from '@/components/Rate';

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
      <main className='flex flex-col gap-6 px-4 pb-4 sm:mt-8'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-slate-200 sm:text-4xl'>
            Feedback
          </h2>
          <p className='mx-auto mt-2 max-w-2xl text-m text-center text-gray-500 dark:text-slate-400 sm:mt-4'>
            Partecipa attivamente alla vita della community esprimendo la tua
            opinione su quanto portato avanti finora e su come migliorarlo
          </p>

          <div className='flex flex-col items-center gap-4 mt-8'>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className='text-center font-bold'>
                Complessivamente quanto sei soddisfatto della community?
              </p>
              <Rate />
            </div>

            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className='text-center font-bold'>
                Come defiiniresti la tua partecipazione agli eventi della
                community?
              </p>
              <div className='grid grid-cols-4 gap-2 rounded-xl bg-slate-700 p-2'>
                <div>
                  <input
                    type='radio'
                    name='option'
                    id='1'
                    value='1'
                    className='peer hidden'
                    checked
                  />
                  <label
                    htmlFor='1'
                    className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary-light peer-checked:font-bold peer-checked:text-white'
                  >
                    Non vengo mai
                  </label>
                </div>

                <div>
                  <input
                    type='radio'
                    name='option'
                    id='2'
                    value='2'
                    className='peer hidden'
                  />
                  <label
                    htmlFor='2'
                    className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
                  >
                    Vengo una volta ogni tanto
                  </label>
                </div>

                <div>
                  <input
                    type='radio'
                    name='option'
                    id='3'
                    value='3'
                    className='peer hidden'
                  />
                  <label
                    htmlFor='3'
                    className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
                  >
                    Vengo quasi sempre
                  </label>
                </div>

                <div>
                  <input
                    type='radio'
                    name='option'
                    id='4'
                    value='3'
                    className='peer hidden'
                  />
                  <label
                    htmlFor='4'
                    className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
                  >
                    Vengo sempre!
                  </label>
                </div>
              </div>
            </div>
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
