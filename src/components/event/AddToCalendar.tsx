import React, { useMemo } from 'react';
import { Minute } from '@/model/event';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { toCalendarSlot } from '@/utils/date';

export type AddToCalendarProps = {
  /** ISO date of the event, as stored in the front matter */
  eventDate: string;
  eventDuration: Minute;
  place: string;
  name: string;
  description: string;
};

export const defaultEventDuration: Minute = 120;

export const AddToCalendar: React.FC<AddToCalendarProps> = ({
  eventDate,
  eventDuration,
  place,
  name,
  description
}) => {
  const { date, startTime, endTime } = useMemo(
    () => toCalendarSlot(eventDate, eventDuration),
    [eventDate, eventDuration]
  );

  return (
    <AddToCalendarButton
      name={name}
      description={description}
      startDate={date}
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
