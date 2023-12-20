import React from 'react';
import { IEvent, isPastEvent, ISpeaker } from '@/model/event';
import { DateTime } from 'luxon';
import { HomeIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { AddToCalendar, defaultEventDuration } from '@/components/AddToCalendar'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';

type Props = {
    event: IEvent;
};

const thumbHeight = 400;

const EventCard : React.FC<Props> = ({ event } : Props) => {
    const speakersObjects = event.speakers?.map<ISpeaker>((rk => JSON.parse(rk)));
    const isPast = isPastEvent(event);
    const eventDate = DateTime.fromISO(event.date);
    const formattedDate = eventDate.toLocaleString(
        DateTime.DATETIME_MED_WITH_WEEKDAY,
        { locale: 'it' }
      );


    const getShortName = ((name: string)  => {
        const split : Array<string> = name.split(' ');
        const retValue = split.map<string>((rk,index) => {
            return rk.trim();
        }).map((rk,index) => {
            return (rk.length>0) ? rk.charAt(0) : "";
        }).reduce((prev,curr,index,arr) => {return prev + curr;});
        return retValue;
    });
    
    const getSpeakersContent = (rks: ISpeaker[]) => {
        const gridRows_o : ISpeaker[] = [];
        const gridRows_e : ISpeaker[] = [];
        for (let i = 0; i < rks.length; i++) {
            if (i%2 == 0 )gridRows_e.push(rks[i]);
            else gridRows_o.push(rks[i]);
        }

        return gridRows_e.map ((el : ISpeaker, index) => {
            return (
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center pt-3">
                        {
                            gridRows_e[index].thumbnail == "" ? 
                            <>
                            <div className="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">{getShortName(gridRows_e[index].name)}</div>
                            </>
                            :
                            <>
                            <img
                                    className='object-cover w-32 h-32 mb-4 rounded-full shadow-md'
                                    src={gridRows_e[index].thumbnail}
                                    alt='avatar'
                                />
                            </>
                        }
                        <div className="ml-4">
                            <p className="font-bold">{gridRows_e[index].name}</p>
                            <p className="text-sm text-gray-700 mt-1">{gridRows_e[index].role} @ {gridRows_e[index].company}</p>
                        </div>
                    </div>

                    {
                        (index < gridRows_o.length) ?
                        <>
                            <div className="flex items-center pt-3">
                                {
                                    gridRows_o[index].thumbnail == "" ? 
                                    <>
                                    <div className="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">{getShortName(gridRows_o[index].name)}</div>
                                    </>
                                    :
                                    <>
                                    <img
                                            className='object-cover w-32 h-32 mb-4 rounded-full shadow-md'
                                            src={gridRows_o[index].thumbnail}
                                            alt='avatar'
                                        />
                                    </>
                                }
                                <div className="ml-4">
                                    <p className="font-bold">{gridRows_o[index].name}</p>
                                    <p className="text-sm text-gray-700 mt-1">{gridRows_o[index].role} @ {gridRows_o[index].company}</p>
                                </div>
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            );
        });
    };

    return (
        <section className='sm:my-10'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='relative -mx-4 overflow-hidden bg-slate-300 py-16 px-4 dark:bg-slate-800 sm:px-6 md:mx-0 md:rounded-3xl md:px-16 xl:px-24'>
                    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex justify-between bg-gray-200 text-gray-700 text-lg px-6 py-4">
                            <span>
                                <button className="border-gray-400 rounded-full px-6 py-1 border" onClick={() => (window.location.href = './../')}><HomeIcon className='block h-6 w-6' aria-hidden='true' /></button>
                            </span>
                            <span>{event.title}</span>
                        </div>

                        <div className="flex justify-between items-center px-6 py-4">
                            <div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Under Review</div>
                            <div className="text-sm">
                            {isPast ? (
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
                        </div>

                        <div className="px-6 py-4 border-t border-gray-200">
                            <div className="border rounded-lg p-4 bg-gray-200">
                                <div className="w-1/3">
                                    <div className='flex-shrink-0'>
                                        <Image
                                            height={thumbHeight}
                                            width={thumbHeight * 1.77}
                                            src={event.thumbnail}
                                            className='object-cover'
                                            alt={`Event cover image ${event.title}`}
                                        />
                                    </div>                                    
                                </div>
                                <div className="w-2/3">
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

                        {speakersObjects?.length != 0 && (
                            <div className="bg-gray-200 px-6 py-4">
                                <div className="uppercase text-xs text-gray-600 font-bold">Speakers</div>
                                {speakersObjects && getSpeakersContent(speakersObjects)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventCard;