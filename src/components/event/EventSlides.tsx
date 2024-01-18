import { ISlides } from '@/model/event';
import Link from 'next/link';
import React from 'react';
import { PresentationChartLineIcon } from '@heroicons/react/24/outline';

type Props = {
  slides: ISlides[];
};

export default function EventsSlides({ slides }: Props) {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Slides</h2>
      <div className='mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
        {slides.map(slide => (
          <a target='_blank' rel='noreferrer' href={slide.url} key={slide.url}>
            <div className='flex cursor-pointer items-center justify-center align-baseline gap-2 bg-slate-300 rounded-full py-2 px-4 font-semibold hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:600 dark:hover:text-slate-600'>
              <div className='flex items-center'>
                <PresentationChartLineIcon className='block h-6 w-6' />
              </div>

              <p className='text-center'>
                {slide.speakerName} - {slide.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
