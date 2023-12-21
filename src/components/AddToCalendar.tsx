import React, { useCallback, useMemo } from 'react';
import { DateTime } from 'luxon';
import { Minute } from '@/model/event';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export type AddToCalendarProps = {
  eventDateTime: DateTime;
  eventDuration: Minute;
  place: string;
  name: string;
  description: string;
};

export const defaultEventDuration: Minute = 120;

export const AddToCalendar: React.FC<AddToCalendarProps> = ({
  eventDateTime,
  eventDuration,
  place,
  name,
  description
}) => {
  const startDate = useMemo(
    () =>
      `${eventDateTime.year}-${eventDateTime.month
        .toString()
        .padStart(2, '0')}-${eventDateTime.day.toString().padStart(2, '0')}`,
    [eventDateTime.day, eventDateTime.month, eventDateTime.year]
  );
  const formatTime = useCallback(
    (date: DateTime) =>
      `${date.hour.toString().padStart(2, '0')}:${date.minute
        .toString()
        .padStart(2, '0')}`,
    []
  );
  const eventEndDateTime = useMemo(
    () => eventDateTime.plus({ minutes: eventDuration }),
    [eventDateTime, eventDuration]
  );

  return (
    <AddToCalendarButton
      name={name}
      description={description}
      startDate={startDate}
      startTime={formatTime(eventDateTime)}
      endTime={formatTime(eventEndDateTime)}
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
