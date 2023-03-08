import Link from 'next/link';
import Image from 'next/image';
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
            className='w-full object-cover'
            alt={`Event cover image ${event.title}`}
          />
        </div>
      );
    }
  };

  const getEventWidgetClasses = () => {
    const eventDate = DateTime.fromISO(event.date);
    const isPastEvent = DateTime.now() > eventDate;
    const baseClasses =
      'flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-slate-800';
    if (isPastEvent) {
      return `${baseClasses} opacity-80 grayScale`;
    } else {
      return baseClasses;
    }
  };

  return (
    <div className={getEventWidgetClasses()}>
      {/* {event.slug ? <Link href={`/events/${event.slug}`}>{image}</Link> : image} */}

      {renderEventImage()}

      <div>
        <div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventWidget;
