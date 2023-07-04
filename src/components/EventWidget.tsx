import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { IEvent } from '@/model/event';
import { DateTime } from 'luxon';

type Props = {
  event: IEvent;
};

const EventWidget: React.FC<Props> = ({ event }: Props) => {
  const renderEventImage = () => {
    if (event.thumbnail) {
      return (
        <div className='flex-shrink-0'>
          <Image
            height={1000}
            width={500}
            src={event.thumbnail}
            className='object-cover'
            alt={`Event cover image ${event.title}`}
          />
        </div>
      );
    }
  };
  const eventDate = DateTime.fromISO(event.date);


  const getEventWidgetClasses = () => {
    const isPastEvent = DateTime.now() > eventDate;
    const baseClasses =
      'flex flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800';
    if (isPastEvent) {
      return `${baseClasses} opacity-70 grayScale`;
    } else {
      return baseClasses;
    }
  };
  const formattedDate = eventDate. toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
 

  return (
    <div className={getEventWidgetClasses()}>

     {/* <Link href={`/events/${event.slug}`}> */}
     
         {renderEventImage()}

        <div className="flex flex-1 flex-col gap-2 p-4">
             <div className='flex gap-2'>
                <CalendarIcon className='block h-6 w-6' aria-hidden='true' />
                <p>{formattedDate}</p>
            </div>
            <div className='flex gap-2'>
                <MapPinIcon className='block h-6 w-6' aria-hidden='true' />
                <p>{event.place}</p>
            </div>
            <div className='text-xl font-bold text-gray-900 dark:text-slate-200 sm:text-2xl'>
                <p>{event.title}</p>
            </div>

            <div className='italic tracking-wide'>
                <p>{event.description}</p>
            </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default EventWidget;