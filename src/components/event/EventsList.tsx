import { IEvent } from '@/model/event';
import EventWidget from './EventWidget';
import React from 'react';

type Props = {
  heading: string;
  caption: string;
  events: IEvent[];
};

export default function EventsList({ heading, caption, events }: Props) {
  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl'>
            {heading}
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-400 sm:mt-4'>
            {caption}
          </p>
        </div>
        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
          {events.map(event => (
            <EventWidget key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
