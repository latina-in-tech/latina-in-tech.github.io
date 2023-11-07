import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { IEvent, Minute } from '@/model/event';
import { DateTime } from 'luxon';
import React, { useCallback, useMemo } from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type AddToCalendarProps = {
  eventDateTime: DateTime;
  eventDuration: Minute;
  place: string;
  name: string;
  description: string;
};
const defaultEventDuration: Minute = 120;
const AddToCalendar: React.FC<AddToCalendarProps> = ({
  eventDateTime,
  eventDuration,
  place,
  name,
  description
}) => {
  console.log('eventDuration', eventDuration);
  const startDate = useMemo(
    () =>
      `${eventDateTime.year}-${eventDateTime.month
        .toString()
        .padStart(2, '0')}-${eventDateTime.day.toString().padStart(2, '0')}`,
    [eventDateTime.day, eventDateTime.month, eventDateTime.year]
  );
  const startTime = useMemo(
    () =>
      `${eventDateTime.hour.toString().padStart(2, '0')}:${eventDateTime.minute
        .toString()
        .padStart(2, '0')}`,
    [eventDateTime.hour, eventDateTime.minute]
  );
  const endTime = useMemo(() => {
    const end = eventDateTime.plus({ minutes: eventDuration });
    return `${end.hour.toString().padStart(2, '0')}:${end.minute
      .toString()
      .padStart(2, '0')}`;
  }, [eventDateTime, eventDuration]);

  return (
    <AddToCalendarButton
      name={name}
      description={description}
      startDate={startDate}
      startTime={startTime}
      endTime={endTime}
      timeZone='Europe/Rome'
      location={place}
      buttonStyle='date'
      buttonsList
      hideBackground
      size='3'
      label='aggiungi al calendario'
      options={[
        'Google',
        'Apple',
        'Yahoo',
        'Outlook.com',
        'Microsoft365',
        'iCal'
      ]}
    />
  );
};

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
  const isPastEvent = DateTime.now() > eventDate;
  const getEventWidgetClasses = useCallback(() => {
    const isPastEvent = DateTime.now() > eventDate;
    const baseClasses =
      'flex flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800';
    if (isPastEvent) {
      return `${baseClasses} opacity-70 grayScale`;
    } else {
      return baseClasses;
    }
  }, [eventDate]);
  const formattedDate = eventDate.toLocaleString(
    DateTime.DATETIME_MED_WITH_WEEKDAY
  );

  return (
    <div className={getEventWidgetClasses()}>
      {renderEventImage()}
      <div className='flex flex-1 flex-col gap-2 p-4'>
        <div className='flex gap-2'>
          {isPastEvent ? (
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
