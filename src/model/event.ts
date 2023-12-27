import { DateTime } from 'luxon';

export type Minute = number;
export interface IEvent {
  slug: string;
  date: string;
  place: string;
  maps: string;
  duration?: Minute;
  youtubeUrl?: string;
  thumbnail: string;
  title: string;
  description: string;
  prerequisites: string[];
  stacks: string[];
  speakers?: string[];
  published?: string;
}

export interface ISpeaker {
  name: string;
  role: string;
  company: string;
  thumbnail: string;
  linkedinUrl: string;
}

export const isPastEvent = (event: IEvent): boolean =>
  DateTime.fromISO(event.date) < DateTime.now();

export const isComingEvent = (event: IEvent): boolean =>
  DateTime.fromISO(event.date) >= DateTime.now();

export const isPublished = (event: IEvent): boolean =>
  (event.published ?? 'true') == 'true';

export const filterPastEvents = (
  events: IEvent[],
  eventType: 'published' | 'all' | 'draft' = 'published'
) => {
  const all: IEvent[] = events.filter(isPastEvent);
  switch (eventType) {
    case 'all':
      return all;
    case 'published':
      return all.filter(isPublished);
    case 'draft':
      return all.filter(rk => !isPublished(rk));
    default:
      return [];
  }
};

export const filterComingEvents = (
  events: IEvent[],
  eventType: 'published' | 'all' | 'draft' = 'published'
) => {
  const all: IEvent[] = events.filter(isComingEvent);
  switch (eventType) {
    case 'all':
      return all;
    case 'published':
      return all.filter(isPublished);
    case 'draft':
      return all.filter(rk => !isPublished(rk));
    default:
      return [];
  }
};

export const sortEvents = (events: IEvent[], order: 'asc' | 'desc' = 'desc') =>
  events.sort(
    (a, b) =>
      DateTime.fromISO((order === 'asc' ? a : b).date).toMillis() -
      DateTime.fromISO((order === 'asc' ? b : a).date).toMillis()
  );
