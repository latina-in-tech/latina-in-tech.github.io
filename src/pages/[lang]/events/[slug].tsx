import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useMemo } from 'react';

import { getEvent, getAllEvents, getEventFromSlug } from '@/utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';
import { IEvent, slidesSchema } from '@/model/event';
import { BsLinkedin } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Header from '@/components/Header';
import EventActions from '@/components/event/EventActions';
import Head from '@/components/HeadComponent';
import { ZodSchema } from 'zod';
import { Locale } from 'i18n.config';
import { getAllLocales } from '@/utils/locale';
import { Metadata } from '@/model/metadata';
import { buildEventMetadata } from '@/utils/eventMetadata';
import {
  ArrowTopRightOnSquareIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

type Props = {
  source: string;
  frontMatter: IEvent;
  lang: Locale;
  metadata: Metadata;
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

const EventPage: React.FC<Props> = ({
  source,
  frontMatter: event,
  lang,
  metadata
}: Props) => {
  const slidesObjects = useMemo(
    () => parseItems(event.slides ?? [], slidesSchema),
    [event.slides]
  );
  const slides = slidesObjects.items;

  const speakers = useMemo(() => event.speakers ?? [], [event.speakers]);
  return (
    <>
      {/* react-helmet used to live here, but it does not render into the statically
      exported html: crawlers were seeing a page with no title and no metadata at all.
      The title is passed already composed, so it stays a single child and does not
      trigger the 'title element received an array with more than 1 child' warning. */}
      <Head metadata={metadata} />
      <Header lang={lang} />
      <main className='bg-slate-50/70 px-4 pb-16 pt-8 dark:bg-slate-900 sm:px-6 sm:pt-12 lg:px-8'>
        <article className='mx-auto max-w-7xl'>
          <header className='mx-auto mb-10 max-w-4xl text-center sm:mb-14'>
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100 sm:text-5xl'>
              {event.title}
            </h1>
          </header>

          <div className='grid items-start gap-8 lg:grid-cols-[minmax(0,36rem)_20rem] lg:justify-center lg:gap-8 xl:grid-cols-[36rem_22rem] xl:gap-12'>
            <div className='relative aspect-video overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 sm:rounded-3xl lg:col-start-1 lg:w-full'>
              <Image
                fill
                priority
                sizes='(min-width: 1024px) 576px, calc(100vw - 32px)'
                src={event.thumbnail}
                className='object-cover'
                alt={`Event cover image ${event.title}`}
              />
            </div>

            <aside className='rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 sm:p-6 lg:col-start-2 lg:row-start-1 lg:row-span-2'>
              {event.tags.length > 0 && (
                <section className='mb-6 border-b border-slate-200 pb-6 dark:border-slate-700'>
                  <ul
                    className='flex flex-wrap gap-2'
                    aria-label='Event topics'
                  >
                    {event.tags.map(tag => (
                      <li
                        key={tag}
                        className='rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary dark:bg-primary-lighter/10 dark:text-primary-lighter'
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <div className='[&>div>a:nth-child(2)_svg]:h-7 [&>div>a:nth-child(2)_svg]:w-7 [&>div>a:nth-child(2)_svg]:shrink-0'>
                <EventActions event={event} lang={lang} />
              </div>

              {speakers.length > 0 && (
                <section className='mt-6 border-t border-slate-200 pt-6 dark:border-slate-700'>
                  <h2 className='text-lg font-bold text-gray-900 dark:text-slate-100'>
                    Speaker
                  </h2>
                  <div className='mt-4 flex flex-col gap-5'>
                    {speakers.map(speaker => (
                      <article
                        key={speaker.name}
                        className='flex items-start gap-3'
                      >
                        <img
                          className='h-14 w-14 flex-shrink-0 rounded-full object-cover shadow-md'
                          src={speaker.thumbnail}
                          alt={speaker.name}
                        />
                        <div className='min-w-0 flex-1'>
                          <div className='flex items-start justify-between gap-2'>
                            <h3 className='text-sm font-bold leading-5 text-gray-900 dark:text-slate-100'>
                              {speaker.name}
                            </h3>
                            <a
                              href={speaker.linkedinUrl}
                              className='flex-shrink-0 rounded text-slate-600 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:text-slate-300 dark:hover:text-primary-lighter'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <span className='sr-only'>
                                LinkedIn - {speaker.name}
                              </span>
                              <BsLinkedin className='h-4 w-4' />
                            </a>
                          </div>
                          <p className='mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300'>
                            {speaker.role}{' '}
                            {speaker.company && (
                              <span className='font-semibold'>
                                @ {speaker.company}
                              </span>
                            )}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {slides.length > 0 && (
                <section className='mt-6 border-t border-slate-200 pt-6 dark:border-slate-700'>
                  <h2 className='text-lg font-bold text-gray-900 dark:text-slate-100'>
                    Slides
                  </h2>
                  <div className='mt-4 flex flex-col gap-3'>
                    {slides.map(slide => (
                      <a
                        key={slide.url}
                        href={slide.url}
                        target='_blank'
                        rel='noreferrer'
                        className='group flex items-start gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-900 dark:ring-slate-700 dark:hover:bg-slate-700'
                      >
                        <PresentationChartLineIcon className='h-5 w-5 flex-shrink-0 text-primary dark:text-primary-lighter' />
                        <span className='min-w-0 flex-1'>
                          <span className='block text-xs font-medium text-slate-500 dark:text-slate-400'>
                            {slide.speakerName}
                          </span>
                          <span className='mt-1 block text-sm font-semibold leading-5 text-gray-900 dark:text-slate-100'>
                            {slide.title}
                          </span>
                        </span>
                        <ArrowTopRightOnSquareIcon className='h-4 w-4 flex-shrink-0 text-slate-400 transition-colors group-hover:text-primary dark:group-hover:text-primary-lighter' />
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </aside>

            <div className='flex flex-col gap-8 lg:col-start-1'>
              <section className='rounded-2xl border-l-4 border-primary bg-white p-5 text-lg leading-8 text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200 sm:p-7'>
                <ReactMarkdown
                  components={{
                    a: ({ ...props }) => (
                      <a
                        {...props}
                        target='_blank'
                        rel='noreferrer'
                        className='font-semibold text-primary underline decoration-primary-lighter underline-offset-4 transition-colors hover:text-primary-dark dark:text-primary-lighter dark:hover:text-primary-light'
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
                    'br'
                  ]}
                >
                  {event.description}
                </ReactMarkdown>
              </section>

              {source && (
                <section className='prose prose-slate max-w-none rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 prose-img:w-full prose-img:rounded-xl dark:prose-invert dark:bg-slate-800 dark:ring-slate-700 sm:p-8'>
                  <ReactMarkdown
                    components={{
                      a: ({ ...props }) => (
                        <a
                          {...props}
                          target='_blank'
                          rel='noreferrer'
                          className='text-primary underline decoration-primary-lighter underline-offset-4 transition-colors hover:text-primary-dark dark:text-primary-lighter dark:hover:text-primary-light'
                        />
                      ),
                      h1: ({ ...props }) => (
                        <h1
                          {...props}
                          className='text-3xl font-bold text-primary dark:text-primary-lighter'
                        />
                      ),
                      h2: ({ ...props }) => (
                        <h2
                          {...props}
                          className='text-xl font-bold text-primary-dark dark:text-primary-light'
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
                      'h2',
                      'img'
                    ]}
                  >
                    {source}
                  </ReactMarkdown>
                </section>
              )}
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default EventPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
  lang: Locale;
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug, lang } = context.params as Iparams;
  const { content } = getEvent(slug);
  const events = getEventFromSlug(slug);
  return {
    props: {
      source: content,
      frontMatter: events,
      lang,
      metadata: buildEventMetadata(events, lang)
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
