import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  filterComingEvents,
  filterPastEvents,
  IEvent,
  isComingEvent,
  sortEvents
} from '@/model/event';
import Section from '@/components/Section';
import EventCard from './EventCard';
import FeaturedEventCard from './FeaturedEventCard';
import { EventsTranslations } from './types';

const DEFAULT_INITIAL_COUNT = 6;
const STEP = 6;

type Props = {
  events: IEvent[];
  lang: string;
  translations: EventsTranslations;
  heading?: string;
  caption?: string;
  initialCount?: number;
  expandable?: boolean;
};

/**
 * single events list: upcoming events first (closest one first), then the
 * archive (most recent first). the next upcoming event, if any, is featured.
 */
const EventsSection: React.FC<Props> = ({
  events,
  lang,
  translations,
  heading,
  caption,
  initialCount = DEFAULT_INITIAL_COUNT,
  expandable = false
}: Props) => {
  const orderedEvents = useMemo(
    () => [
      ...sortEvents(filterComingEvents(events), 'asc'),
      ...sortEvents(filterPastEvents(events), 'desc')
    ],
    [events]
  );

  const [featuredEvent, listedEvents] = useMemo(() => {
    const [first, ...rest] = orderedEvents;
    return first && isComingEvent(first)
      ? ([first, rest] as const)
      : ([undefined, orderedEvents] as const);
  }, [orderedEvents]);

  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleEvents = expandable
    ? listedEvents.slice(0, visibleCount)
    : listedEvents;
  const hasMore = expandable && visibleCount < listedEvents.length;

  if (orderedEvents.length === 0) {
    return null;
  }

  return (
    <Section
      title={heading ?? translations.title}
      subtitle={caption ?? translations.subtitle}
      footer={
        expandable && (
          <div className='flex flex-col items-center gap-3'>
            {hasMore && (
              <button
                type='button'
                onClick={() => setVisibleCount(count => count + STEP)}
                className='rounded-xl bg-white px-6 py-3 text-base font-semibold text-primary ring-1 ring-slate-200 transition-colors hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-slate-800 dark:text-primary-lighter dark:ring-slate-700 dark:hover:bg-primary-lighter/10'
              >
                {translations.showMore}
              </button>
            )}
            <Link
              href={{ pathname: '/[lang]/events', query: { lang } }}
              className='text-sm font-semibold text-primary transition-colors hover:text-primary-dark dark:text-primary-lighter dark:hover:text-primary-light'
            >
              {translations.seeAll}
            </Link>
          </div>
        )
      }
    >
      {featuredEvent && (
        <div className='mb-6'>
          <FeaturedEventCard
            event={featuredEvent}
            lang={lang}
            translations={translations}
          />
        </div>
      )}

      {visibleEvents.length > 0 && (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {visibleEvents.map(event => (
            <EventCard
              key={event.slug}
              event={event}
              lang={lang}
              translations={translations}
            />
          ))}
        </div>
      )}
    </Section>
  );
};

export default EventsSection;
