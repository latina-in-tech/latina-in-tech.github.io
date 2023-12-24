import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { IEvent, isPastEvent, Minute } from '@/model/event';
import { DateTime } from 'luxon';
import React, { useCallback, useMemo } from 'react';
import {
  AddToCalendar,
  defaultEventDuration
} from '@/components/AddToCalendar';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { SlSocialYoutube } from 'react-icons/sl';

const thumbHeight = 400;
type Props = {
  event: IEvent;
  calendarButton?: boolean;
};

const EventWidget: React.FC<Props> = ({ event }: Props) => {
  const renderEventImage = useCallback(() => {
    if (event.thumbnail) {
      return (
        <div className='flex-shrink-0'>
          <Image
            height={thumbHeight}
            width={thumbHeight * 1.77}
            src={event.thumbnail}
            className='object-cover'
            alt={`Event cover image ${event.title}`}
          />
        </div>
      );
    }
  }, [event.thumbnail, event.title]);
  const eventDate = useMemo(() => DateTime.fromISO(event.date), [event.date]);
  const isPast = useMemo(() => isPastEvent(event), [event]);
  const getEventWidgetClasses = useCallback(() => {
    const baseClasses =
      'flex flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800';
    if (isPast) {
      return `${baseClasses} opacity-70 grayScale`;
    } else {
      return baseClasses;
    }
  }, [isPast]);
  const formattedDate = eventDate.toLocaleString(
    DateTime.DATETIME_MED_WITH_WEEKDAY,
    { locale: 'it' }
  );

  return (
    <div className={getEventWidgetClasses()}>
      {renderEventImage()}
      <div className='flex flex-1 flex-col gap-2 p-4'>
        <div className='flex gap-2'>
          {isPast ? (
            <>
              <CalendarIcon className='block h-6 w-6' aria-hidden='true' />
              <p>{formattedDate}</p>
            </>
          ) : (
            <AddToCalendar
              eventDuration={event.duration || defaultEventDuration}
              description={event.description}
              eventDateTime={eventDate}
              place={event.maps}
              name={event.title}
            />
          )}
        </div>
        <div className='flex'>
          <Link
            href={event.maps}
            target={'_blank'}
            className={'flex gap-2 flex-row'}
          >
            <MapPinIcon className='block h-6 w-6' aria-hidden='true' />
            <p>{event.place}</p>
          </Link>
        </div>
        {event.youtubeUrl && (
          <div className='flex'>
            <Link
              href={event.youtubeUrl}
              target={'_blank'}
              className={'flex gap-2 flex-row'}
            >
              <SlSocialYoutube className='block h-6 w-6' aria-hidden='true' />
              <p>vedi su youtube</p>
            </Link>
          </div>
        )}
        <div className='text-xl font-bold text-gray-900 dark:text-slate-200 sm:text-2xl'>
          <p>{event.title}</p>
        </div>

        <div className='italic tracking-wide'>
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target='_blank'
                  style={{ textDecoration: 'underline' }}
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
        </div>
      </div>
    </div>
  );
};

export default EventWidget;
