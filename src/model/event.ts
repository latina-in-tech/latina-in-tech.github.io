// relative on purpose: this module is loaded by check:events through ts-node,
// which does not resolve the @/ alias
import { compareDates, isInThePast } from '../utils/date';
import * as z from 'zod';
export type Minute = number;

export const speakerSchema = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string().optional(),
  thumbnail: z.string(),
  linkedinUrl: z.string().url()
});

export const slidesSchema = z.object({
  url: z.string().url(),
  title: z.string(),
  speakerName: z.string()
});

export const eventSchema = z.object({
  slug: z.string(),
  date: z.string(),
  place: z.string(),
  maps: z.string(),
  duration: z.number().optional(),
  youtubeUrl: z.string().optional(),
  thumbnail: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  speakers: z
    .array(z.string())
    .transform(speakersAsString => {
      return speakersAsString.map(speaker => {
        const maybeSpeaker = speakerSchema.safeParse(JSON.parse(speaker));
        if (!maybeSpeaker.success) {
          throw new Error(
            `Error parsing speaker: ${maybeSpeaker.error.errors.map(e => `${e.path} - ${e.message}`).join(', ')}`
          );
        }
        return maybeSpeaker.data;
      });
    })
    .optional(),
  slides: z.array(z.string()).optional(),
  signup: z.string().optional()
});

export type IEvent = z.infer<typeof eventSchema>;
export type ISlides = z.infer<typeof slidesSchema>;

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

export const isPastEvent = (event: IEvent): boolean => isInThePast(event.date);

export const isComingEvent = (event: IEvent): boolean =>
  !isInThePast(event.date);

export const filterPastEvents = (events: IEvent[]) =>
  events.filter(isPastEvent);

export const filterComingEvents = (events: IEvent[]) =>
  events.filter(isComingEvent);

export const sortEvents = (events: IEvent[], order: 'asc' | 'desc' = 'desc') =>
  events.sort((a, b) =>
    order === 'asc'
      ? compareDates(a.date, b.date)
      : compareDates(b.date, a.date)
  );
