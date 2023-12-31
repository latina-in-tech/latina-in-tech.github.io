import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { IEvent, isPastEvent } from '@/model/event';
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
            className='object-cover group-hover:brightness-110'
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
      'flex group flex-col overflow-hidden rounded-xl bg-slate-300 shadow-lg dark:bg-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600';
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

  const EventAction = ({
    Icon,
    label,
    href
  }: {
    Icon: typeof CalendarIcon | typeof SlSocialYoutube;
    label: string;
    href?: string;
  }) => {
    return href ? (
      <Link href={href} target={'_blank'}>
        <div
          className='flex gap-2 hover:bg-primary-lighter rounded-xl p-2 dark:hover:bg-primary-dark'
          onClick={event => event.stopPropagation()}
        >
          <Icon className='block h-6 w-6' aria-hidden='true' />
          <p>{label}</p>
        </div>
      </Link>
    ) : (
      <div className='flex gap-2 rounded-xl p-2'>
        <Icon className='block h-6 w-6' aria-hidden='true' />
        <p>{label}</p>
      </div>
    );
  };

  const EventActions = () => {
    return (
      <>
        {isPast ? (
          <EventAction Icon={CalendarIcon} label={formattedDate} />
        ) : (
          <div onClick={event => event.stopPropagation()}>
            <AddToCalendar
              eventDuration={event.duration || defaultEventDuration}
              description={event.description}
              eventDateTime={eventDate}
              place={event.maps}
              name={event.title}
            />
          </div>
        )}

        <EventAction Icon={MapPinIcon} label={event.place} href={event.maps} />
        {event.youtubeUrl && (
          <EventAction
            Icon={SlSocialYoutube}
            label={'Guarda su YouTube'}
            href={event.youtubeUrl}
          />
        )}
      </>
    );
  };

  return (
    <Link href={`/events/${event.slug}`} legacyBehavior>
      <div className={getEventWidgetClasses()}>
        {renderEventImage()}
        <div className='flex flex-1 flex-col gap-2 p-4'>
          <EventActions />
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
    </Link>
  );
};

export default EventWidget;
