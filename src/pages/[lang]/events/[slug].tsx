import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useCallback, useMemo } from 'react';

import { getEvent, getAllEvents } from '@/utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';
import { IEvent, slidesSchema, speakerSchema } from '@/model/event';
import { BsLinkedin } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Header from '@/components/Header';
import EventActions from '@/components/event/EventActions';
import EventDescription from '@/components/event/EventDescription';
import { Helmet } from 'react-helmet';
import EventTags from '@/components/event/EventTags';
import EventsSlides from '@/components/event/EventSlides';
import { ZodSchema } from 'zod';
import { isDevEnv } from '@/utils/dev';
import { i18n } from 'i18n.config';
import { useRouter } from 'next/router';
import { getAllLocales } from '@/utils/locale';

type Props = {
  source: string;
  frontMatter: IEvent;
};

type ParseItemsReturn<T> = {
  items: T[];
  errors: string[];
};

/**
 * given a list of string representing a T object, it tries
 * to parse each string into a T object using the provided schema
 * if the parsing fails, it returns the errors
 */
const parseItems = <T,>(
  items: string[],
  schema: ZodSchema<T>
): ParseItemsReturn<T> => {
  const parsed = items.map(item => schema.safeParse(JSON.parse(item)));
  return parsed.reduce(
    (acc, curr) => {
      if (curr.success) {
        return { ...acc, items: [...acc.items, curr.data] };
      }
      return {
        ...acc,
        errors: [...acc.errors, ...curr.error.errors.map(e => e.message)]
      };
    },
    { items: [], errors: [] } as ParseItemsReturn<T>
  );
};

const thumbHeight = 250;

const EventPage: React.FC<Props> = ({ source, frontMatter: event }: Props) => {
  const router = useRouter();
  const locale = i18n.locales.filter(
    locale => router?.query.lang === locale
  )[0];

  const speakersObjects = useMemo(
    () => parseItems(event.speakers ?? [], speakerSchema),
    [event.speakers]
  );
  const slidesObjects = useMemo(
    () => parseItems(event.slides ?? [], slidesSchema),
    [event.slides]
  );

  const speakers = speakersObjects.items;
  const slides = slidesObjects.items;
  const errors = [...speakersObjects.errors, ...slidesObjects.errors];

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

  if (errors.length > 0 && isDevEnv) {
    return (
      <div className='text-center'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-slate-200'>
          Oops! Something went wrong while parsing speakers/slides
        </h2>
        <div className={'text-lg text-red-500'}>
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>
    );
  }

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
      <Header lang={locale} />
      <article className='flex flex-col gap-4 px-4 pb-8 justify-center items-center'>
        <h2 className='text-3xl font-extrabold text-center text-gray-900 dark:text-slate-200 sm:text-4xl'>
          {event.title}
        </h2>
        <div className='md:px-20 w-full md:max-w-[60%]'>
          <EventTags event={event} />
        </div>

        <div className='flex flex-col items-center justify-center px-16 gap-8 md:flex-row'>
          <EventActions event={event} />
          {speakers.length > 0 && (
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {speakers.map(speaker => {
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

          <div className='flex flex-col gap-4'>
            <EventDescription event={event} />
            {slides.length > 0 && <EventsSlides slides={slides} />}
          </div>
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
  const locales = getAllLocales();

  const paths = locales.flatMap(locale =>
    events.map(event => ({
      params: {
        slug: event.slug,
        lang: locale
      }
    }))
  );

  return {
    paths,
    fallback: false
  };
};
