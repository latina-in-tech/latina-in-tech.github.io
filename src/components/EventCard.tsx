import React from 'react';
import { IEvent, isPastEvent, ISpeaker } from '@/model/event';
import { DateTime } from 'luxon';
import {
  HomeIcon,
  MapPinIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { BsLinkedin } from 'react-icons/bs';
import {
  AddToCalendar,
  defaultEventDuration
} from '@/components/AddToCalendar';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  event: IEvent;
};

const thumbHeight = 400;

const EventCard: React.FC<Props> = ({ event }: Props) => {
  const speakersObjects = event.speakers?.map<ISpeaker>(rk => JSON.parse(rk));
  const isPast = isPastEvent(event);
  const eventDate = DateTime.fromISO(event.date);
  const formattedDate = eventDate.toLocaleString(
    DateTime.DATETIME_MED_WITH_WEEKDAY,
    { locale: 'it' }
  );

  const getShortName = (name: string) =>
    name
      .split(' ')
      .map(rk => rk.trim())
      .map(rk => rk[0] ?? '')
      .join('');

  return (
    <section className='sm:my-10'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative -mx-4 overflow-hidden py-16 px-4 bg-slate-300 dark:bg-slate-800 sm:px-6 md:mx-0 md:rounded-3xl md:px-16 xl:px-24'>
          <div className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden'>
            <div className='flex justify-between bg-gray-200 text-gray-700 text-lg px-6 py-4 dark:bg-blue-300 font-bold'>
              <span className='border-gray-400 rounded-full px-6 py-1 border dark:bg-blue-800 bg-slate-100'>
                <Link href='/'>
                  <HomeIcon
                    className='w-[32px] dark:text-slate-200'
                    aria-hidden='true'
                  />
                </Link>
              </span>
              {(event.published ?? 'true') == 'false' ? (
                <>
                  <span>
                    <span className='animate-ping border-gray-400 rounded-full border px-4 py-1 bg-red-600'></span>
                    {event.title}
                    <span className='animate-ping border-gray-400 rounded-full border px-4 py-1 bg-red-600'></span>
                  </span>
                </>
              ) : (
                <span>{event.title}</span>
              )}
            </div>

            <div className='flex justify-between items-center px-6 py-4 dark:bg-blue-950'>
              {event.youtubeUrl ? (
                <>
                  <div className='flex gap-2 flex-row'>
                    <a href={event.youtubeUrl}>
                      <button
                        type='button'
                        data-te-ripple-init
                        data-te-ripple-color='light'
                        className='mb-2 bg-slate-300 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-7 w-7'
                          fill='red'
                          viewBox='0 0 24 24'
                        >
                          <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
                        </svg>
                      </button>
                    </a>
                    <div className='m-auto'>YouTube video disponibile</div>
                  </div>
                </>
              ) : (
                <>
                  <div className='bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-500 font-bold dark:text-slate-400'>
                    Youtube video ancora non disponibile
                  </div>
                </>
              )}

              <div className='text-sm'>
                <Link
                  href={event.maps}
                  target={'_blank'}
                  className={'flex gap-2 flex-row'}
                >
                  <MapPinIcon className='block h-6 w-6' aria-hidden='true' />
                  <p>{event.place}</p>
                </Link>
                <br />
                {isPast ? (
                  <>
                    <div className='flex gap-2 flex-row'>
                      <CalendarIcon
                        className='block h-6 w-6'
                        aria-hidden='true'
                      />
                      <p>{formattedDate}</p>
                    </div>
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
            </div>

            <div className=''>
              <div className='md:flex md:flex-row  bg-gray-100 dark:bg-blue-600'>
                <div className='basis-3/4 p-8'>
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
                <div className='basis-1/4 md:flex-none'>
                  <br />
                  <Image
                    height={thumbHeight}
                    width={thumbHeight * 1.77}
                    src={event.thumbnail}
                    className='w-full h-auto object-cover md:w-full md:h-48 rounded-lg'
                    alt={`Event cover image ${event.title}`}
                  />
                </div>
              </div>
            </div>

            {speakersObjects && (
              <div className='bg-gray-200 px-6 py-4 dark:bg-blue-300'>
                <div className='uppercase text-xs text-gray-600 font-bold'>
                  Speakers
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  {speakersObjects.map(speaker => {
                    return (
                      <div
                        key={speaker.name}
                        className='flex items-center pt-3'
                      >
                        {speaker.thumbnail == '' ? (
                          <>
                            <div className='bg-blue-700 w-32 h-32 flex justify-center items-center rounded-full uppercase font-bold text-white w-32 h-32'>
                              {getShortName(speaker.name)}
                            </div>
                          </>
                        ) : (
                          <>
                            <img
                              className='object-cover w-32 h-32 mb-4 rounded-full shadow-md'
                              src={speaker.thumbnail}
                              alt='avatar'
                            />
                          </>
                        )}
                        <div className='ml-4 text-gray-700'>
                          <p className='font-bold'>{speaker.name}</p>
                          <p className='text-sm mt-1'>
                            {speaker.role} @ {speaker.company}
                            {speaker.linkedinUrl != '' ? (
                              <>
                                <a
                                  href={speaker.linkedinUrl}
                                  className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  <span className='sr-only'>LinkedIn</span>
                                  <BsLinkedin />
                                </a>
                              </>
                            ) : (
                              <></>
                            )}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
