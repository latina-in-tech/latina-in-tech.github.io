import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { IEvent } from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Sponsor } from '@/components/Sponsor';

type Props = {
  events: [IEvent];
};

const Home: NextPage<Props> = ({ events: events }: Props) => {
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
        <Sponsor />
        {/* <div>
          <h1 className='text-4xl font-bold mb-4'>Technical articles</h1>

          <div className='space-y-12'>
            {events.map((event) => (
              <div key={event.slug}>
                <div className='mb-4'>
                  <Thumbnail
                    slug={event.slug}
                    title={event.title}
                    src={event.thumbnail}
                  />
                </div>

                <h2 className='text-2xl font-bold mb-4'>
                  <Link href={`/events/${event.slug}`}>{event.title}</Link>
                </h2>

                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div> */}
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
    'thumbnail'
  ]);

  return { props: { events: events } };
};
