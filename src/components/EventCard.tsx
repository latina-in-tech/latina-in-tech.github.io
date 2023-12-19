import React from 'react';
import { IEvent } from '@/model/event';
import { HomeIcon } from '@heroicons/react/24/outline';

type Props = {
    event: IEvent;
};

const EventCard : React.FC<Props> = ({ event } : Props) => {
    return (
      <section className='sm:my-10'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative -mx-4 overflow-hidden bg-slate-300 py-16 px-4 dark:bg-slate-800 sm:px-6 md:mx-0 md:rounded-3xl md:px-16 xl:px-24'>
            <div className='relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 text-gray-900 dark:text-slate-200 xl:max-w-none xl:grid-cols-2'>
              <div>
                  <button
                    onClick={() => (window.location.href = './../')}
                    className='flex items-center justify-between gap-2 rounded-md mt-4 mb-4 border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-light sm:px-8'>
                    <HomeIcon className='h-6 w-6' />
                  </button>
                  <span>
                    {event.title}
                  </span>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default EventCard;