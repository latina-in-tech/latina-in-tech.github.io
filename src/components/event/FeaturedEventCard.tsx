import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Locale } from 'i18n.config';
import { formatLongDate, formatTime } from '@/utils/date';
import { IEvent } from '@/model/event';
import EventActions from './EventActions';
import EventStatusRibbon from './EventStatusRibbon';
import { EventsTranslations } from './types';

type Props = {
  event: IEvent;
  lang: Locale;
  translations: EventsTranslations;
};

/**
 * the next upcoming event, rendered full width on top of the events list.
 * it is only rendered when an upcoming event exists.
 */
const FeaturedEventCard: React.FC<Props> = ({
  event,
  lang,
  translations
}: Props) => {
  const dateLabel = formatLongDate(event.date, lang);
  const timeLabel = formatTime(event.date, lang);

  const href = {
    pathname: '/[lang]/events/[slug]',
    query: { lang, slug: event.slug }
  };

  return (
    <article className='mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-primary/40 dark:bg-slate-800 dark:ring-primary-lighter/40'>
      <div className='flex flex-col'>
        {/* the covers are 16:9, so the whole image is visible: no cropping */}
        <Link
          href={href}
          className='group relative block aspect-video overflow-hidden bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-slate-900'
        >
          <Image
            fill
            priority
            sizes='(min-width: 1024px) 56rem, 100vw'
            src={event.thumbnail}
            alt={`Event cover image ${event.title}`}
            className='object-cover transition-transform duration-300 group-hover:scale-105'
          />
          <EventStatusRibbon
            isPast={false}
            label={translations.upcomingBadge}
          />
        </Link>

        <div className='flex flex-col gap-4 p-5 sm:p-7'>
          <div className='flex flex-wrap items-center gap-3'>
            <span className='rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white'>
              {translations.nextEventBadge}
            </span>
            <span className='text-sm font-semibold text-slate-600 first-letter:uppercase dark:text-slate-300'>
              {dateLabel} &middot; {timeLabel}
            </span>
          </div>

          <Link
            href={href}
            className='rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
          >
            <h3 className='text-2xl font-extrabold tracking-tight text-gray-900 transition-colors hover:text-primary dark:text-slate-100 dark:hover:text-primary-lighter sm:text-3xl'>
              {event.title}
            </h3>
          </Link>

          {event.tags.length > 0 && (
            <ul className='flex flex-wrap gap-2' aria-label='Event topics'>
              {event.tags.map(tag => (
                <li
                  key={tag}
                  className='rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary dark:bg-primary-lighter/10 dark:text-primary-lighter'
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className='mt-auto'>
            <EventActions event={event} lang={lang} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedEventCard;
