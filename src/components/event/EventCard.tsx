import Link from 'next/link';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import {
  MapPinIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import { SlSocialYoutube } from 'react-icons/sl';
import { IEvent, isPastEvent } from '@/model/event';
import EventStatusRibbon from './EventStatusRibbon';
import { EventsTranslations } from './types';

const MAX_VISIBLE_TAGS = 3;

type Props = {
  event: IEvent;
  lang: string;
  translations: EventsTranslations;
};

/**
 * compact event card: cover, status, date, title, place and tags.
 * the description lives on the event detail page, that's what the click is for.
 */
const EventCard: React.FC<Props> = ({ event, lang, translations }: Props) => {
  const isPast = useMemo(() => isPastEvent(event), [event]);
  const eventDate = useMemo(
    () => DateTime.fromISO(event.date).setLocale(lang),
    [event.date, lang]
  );

  const dateLabel = eventDate.toLocaleString({
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const timeLabel = eventDate.toLocaleString(DateTime.TIME_SIMPLE);

  const visibleTags = event.tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagsCount = event.tags.length - visibleTags.length;
  const hasSlides = (event.slides ?? []).length > 0;
  const hasArchiveLinks = isPast && (hasSlides || !!event.youtubeUrl);

  return (
    <Link
      href={{
        pathname: '/[lang]/events/[slug]',
        query: { lang, slug: event.slug }
      }}
      className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-slate-800 ${
        isPast
          ? 'ring-slate-200 dark:ring-slate-700'
          : 'ring-primary/40 dark:ring-primary-lighter/40'
      }`}
    >
      <div className='relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900'>
        <Image
          fill
          sizes='(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw'
          src={event.thumbnail}
          alt={`Event cover image ${event.title}`}
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <EventStatusRibbon
          isPast={isPast}
          label={isPast ? translations.pastBadge : translations.upcomingBadge}
        />
      </div>

      <div className='flex flex-1 flex-col gap-3 p-4'>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
            {dateLabel} &middot; {timeLabel}
          </span>
        </div>

        <h3 className='line-clamp-2 text-lg font-bold leading-6 text-gray-900 dark:text-slate-100'>
          {event.title}
        </h3>

        <p className='flex min-w-0 items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400'>
          <MapPinIcon className='h-4 w-4 flex-shrink-0' aria-hidden='true' />
          <span className='truncate'>{event.place}</span>
        </p>

        {visibleTags.length > 0 && (
          <ul className='flex flex-wrap gap-2' aria-label='Event topics'>
            {visibleTags.map(tag => (
              <li
                key={tag}
                className='rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-primary dark:bg-primary-lighter/10 dark:text-primary-lighter'
              >
                {tag}
              </li>
            ))}
            {hiddenTagsCount > 0 && (
              <li className='px-1 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400'>
                +{hiddenTagsCount}
              </li>
            )}
          </ul>
        )}

        {hasArchiveLinks && (
          <div className='mt-auto flex flex-wrap gap-4 border-t border-slate-200 pt-3 text-xs font-semibold text-primary dark:border-slate-700 dark:text-primary-lighter'>
            {hasSlides && (
              <span className='inline-flex items-center gap-1.5'>
                <PresentationChartLineIcon
                  className='h-4 w-4'
                  aria-hidden='true'
                />
                {translations.slides}
              </span>
            )}
            {event.youtubeUrl && (
              <span className='inline-flex items-center gap-1.5'>
                <SlSocialYoutube className='h-4 w-4' aria-hidden='true' />
                {translations.video}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default EventCard;
