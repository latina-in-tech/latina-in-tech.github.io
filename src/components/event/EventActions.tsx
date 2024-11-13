import { IEvent, isPastEvent } from '@/model/event';
import React, { useMemo } from 'react';
import { AddToCalendar, defaultEventDuration } from './AddToCalendar';
import {
  CalendarIcon,
  MapPinIcon,
  TicketIcon
} from '@heroicons/react/24/outline';
import { DateTime } from 'luxon';
import { SlSocialYoutube } from 'react-icons/sl';
import Link from 'next/link';

type Props = {
  event: IEvent;
};

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
        className='flex gap-2 font-bold hover:bg-primary-lighter rounded-xl p-2 dark:hover:bg-primary-dark'
        onClick={event => event.stopPropagation()}
      >
        <Icon className='block h-6 w-6' aria-hidden='true' />
        <p>{label}</p>
      </div>
    </Link>
  ) : (
    <div className='flex font-bold gap-2 rounded-xl p-2'>
      <Icon className='block h-6 w-6' aria-hidden='true' />
      <p>{label}</p>
    </div>
  );
};

const EventActions: React.FC<Props> = ({ event }: Props) => {
  const eventDate = useMemo(() => DateTime.fromISO(event.date), [event.date]);
  const isPast = useMemo(() => isPastEvent(event), [event]);

  const formattedDate = eventDate.toLocaleString(
    DateTime.DATETIME_MED_WITH_WEEKDAY,
    { locale: 'it' }
  );

  return (
    <div className='flex flex-col gap-2'>
      {isPast ? (
        <EventAction Icon={CalendarIcon} label={formattedDate} />
      ) : (
        <div
          onClick={event => event.stopPropagation()}
          style={{ width: 'fit-content' }}
        >
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

      {!isPast && event.signup && (
        <EventAction
          Icon={TicketIcon}
          label='Ottieni il tuo biglietto gratuito!'
          href={event.signup}
        />
      )}
    </div>
  );
};
export default EventActions;
