import { IEvent } from '@/model/event';
import React from 'react';

type Props = {
  event: IEvent;
};

export default function EventTags({ event }: Props) {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 w-full md:items-left gap-2 '>
      {event.tags.map(tag => (
        <span
          key={tag}
          className='inline-flex items-center justify-center text-center px-2 py-1 rounded-full text-xs italic font-thin bg-slate-400 text-slate-900 dark:bg-slate-700 dark:text-slate-100'
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
