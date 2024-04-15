import Link from 'next/link';
import Image from 'next/image';
import { IEvent, isPastEvent } from '@/model/event';
import React, { useCallback, useMemo } from 'react';
import EventActions from './EventActions';
import EventDescription from './EventDescription';
import EventTags from './EventTags';
import { useRouter } from 'next/router';

const thumbHeight = 400;
type Props = {
  event: IEvent;
};

const EventWidget: React.FC<Props> = ({ event }: Props) => {
  const router = useRouter();

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

  const isPast = useMemo(() => isPastEvent(event), [event]);
  const getEventWidgetClasses = useCallback(() => {
    const baseClasses =
      'flex group flex-col overflow-hidden rounded-xl bg-slate-300 shadow-lg dark:bg-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600';
    if (isPast) {
      return `${baseClasses} opacity-70 grayScale`;
    } else {
      return baseClasses;
    }
  }, [isPast]);

  return (
    <Link href={`${router.query.lang}/events/${event.slug}`} legacyBehavior>
      <div className={getEventWidgetClasses()}>
        {renderEventImage()}
        <div className='flex flex-1 flex-col gap-2 p-4'>
          <EventActions event={event} />
          <EventTags event={event} />
          <div className='text-xl p-2 font-bold text-gray-900 dark:text-slate-200 sm:text-2xl'>
            <p>{event.title}</p>
          </div>
          <EventDescription event={event} />
        </div>
      </div>
    </Link>
  );
};

export default EventWidget;
