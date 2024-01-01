import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useCallback } from 'react';

import { getEvent, getAllEvents } from '@/utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';
import { IEvent, ISpeaker } from '@/model/event';
import { BsLinkedin } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Header from '@/components/Header';
import EventActions from '@/components/event/EventActions';
import EventDescription from '@/components/event/EventDescription';
import { Helmet } from 'react-helmet';
import EventTags from '@/components/event/EventTags';

type Props = {
  source: string;
  frontMatter: IEvent;
};

const thumbHeight = 250;

const EventPage: React.FC<Props> = ({ source, frontMatter: event }: Props) => {
  const speakersObjects = event.speakers?.map<ISpeaker>(rk => JSON.parse(rk));

  const renderEventImage = useCallback(() => {
    if (event.thumbnail) {
      return (
        <div className='flex-shrink-0'>
          <Image
            height={thumbHeight}
            width={thumbHeight * 1.77}
            src={event.thumbnail}
            className='object-cover group-hover:brightness-110'
            alt={`Event cover image ${event.title}`}
          />
        </div>
      );
    }
  }, [event.thumbnail, event.title]);

  return (
    <>
      {/* If you use nextjs's Head component here, you will get a warning in the console:
    'Warning: a title element received an array with more than 1 child.'
    I think that's because of how nextjs renders the page, but I'm not sure. 
    Using react-helmet instead of nextjs's Head component fixes the problem.
    */}
      <Helmet>
        <title>LiT - {event.title}</title>
      </Helmet>
      <Header />
      <article className='flex flex-col gap-4 px-4 pb-8 justify-center items-center'>
        <h2 className='text-3xl font-extrabold text-center text-gray-900 dark:text-slate-200 sm:text-4xl'>
          {event.title}
        </h2>
        <div className='md:px-20 w-full md:max-w-[60%]'>
          <EventTags event={event} />
        </div>

        <div className='flex flex-col items-center justify-center px-16 gap-8 md:flex-row'>
          <EventActions event={event} />
          {speakersObjects && (
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {speakersObjects.map(speaker => {
                return (
                  <div key={speaker.name} className='flex gap-4 items-center'>
                    <img
                      className='object-cover w-20 h-20 rounded-full shadow-md'
                      src={speaker.thumbnail}
                      alt='avatar'
                    />
                    <div className='flex flex-col gap-2'>
                      <p className='font-bold'>{speaker.name}</p>
                      <p className='text-sm'>
                        {speaker.role}{' '}
                        {speaker.company && (
                          <span className='font-semibold'>
                            @ {speaker.company}
                          </span>
                        )}
                      </p>
                      <a
                        href={speaker.linkedinUrl}
                        className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <span className='sr-only'>LinkedIn</span>
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className='p-4 md:px-16 md:py-8 flex flex-col gap-8 items-center justify-center md:flex-row'>
          {renderEventImage()}
          <EventDescription event={event} />
        </div>

        <div className='max-w-6xl'>
          <ReactMarkdown
            components={{
              a: ({ ...props }) => (
                <a
                  {...props}
                  target='_blank'
                  className='underline hover:bg-primary-lighter hover:rounded-xl hover:p-2 dark:hover:bg-primary-dark'
                  onClick={event => event.stopPropagation()}
                />
              ),
              h1: ({ ...props }) => (
                <h1
                  {...props}
                  className='text-primary dark:text-primary-lighter text-3xl font-bold'
                />
              ),
              h2: ({ ...props }) => (
                <h2
                  {...props}
                  className='text-primary-dark dark:text-primary-light text-xl font-bold'
                />
              )
            }}
            rehypePlugins={[rehypeRaw]}
            allowedElements={[
              'p',
              'b',
              'i',
              'em',
              'strong',
              'a',
              'li',
              'ul',
              'ol',
              'br',
              'h1',
              'h2'
            ]}
          >
            {source}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
};

export default EventPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as Iparams;
  const { content, data } = getEvent(slug);
  return {
    props: {
      source: content,
      frontMatter: data
    }
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const events = getAllEvents(['slug']);

  const paths = events.map(event => ({
    params: {
      slug: event.slug
    }
  }));

  return {
    paths,
    fallback: false
  };
};
