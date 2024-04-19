import { DateTime } from 'luxon';
import * as z from 'zod';
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
  tags: string[];
  speakers?: string[];
  slides?: string[];
  signup: string;
}

export const slidesSchema = z.object({
  url: z.string().url(),
  title: z.string(),
  speakerName: z.string()
});

export type ISlides = z.infer<typeof slidesSchema>;

export const speakerSchema = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string().optional(),
  thumbnail: z.string(),
  linkedinUrl: z.string().url()
});

export type ISpeaker = z.infer<typeof speakerSchema>;

export const EVENT_FIELDS = [
  'title',
  'slug',
  'date',
  'description',
  'thumbnail',
  'duration',
  'youtubeUrl',
  'place',
  'maps',
  'signup',
  'tags',
  'slides'
];

export const isPastEvent = (event: IEvent): boolean =>
  DateTime.fromISO(event.date) < DateTime.now();

export const isComingEvent = (event: IEvent): boolean =>
  DateTime.fromISO(event.date) >= DateTime.now();

export const filterPastEvents = (events: IEvent[]) =>
  events.filter(isPastEvent);

export const filterComingEvents = (events: IEvent[]) =>
  events.filter(isComingEvent);

export const sortEvents = (events: IEvent[], order: 'asc' | 'desc' = 'desc') =>
  events.sort(
    (a, b) =>
      DateTime.fromISO((order === 'asc' ? a : b).date).toMillis() -
      DateTime.fromISO((order === 'asc' ? b : a).date).toMillis()
  );
