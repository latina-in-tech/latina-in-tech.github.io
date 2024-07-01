import matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';
import { EVENT_FIELDS, eventSchema, IEvent } from '@/model/event';
type Items = {
  [key: string]: string;
};

type Event = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const EVENTS_PATH = join(process.cwd(), '_events');

function getEventsFilePaths(): string[] {
  return fs.readdirSync(EVENTS_PATH).filter(path => /\.mdx?$/.test(path));
}

export function getEvent(slug: string): Event {
  const fullPath = join(EVENTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getEventFromSlug(slug: string): IEvent {
  const { data } = getEvent(slug);
  const maybeEvent = eventSchema.safeParse({ ...data, slug });
  if (!maybeEvent.success) {
    throw new Error(
      `Error parsing ${slug}: ${maybeEvent.error.errors.map(e => `${e.path} - ${e.message}`).join(', ')}`
    );
  }
  return maybeEvent.data;
}

function getEventItems(filePath: string, fields: string[] = []): IEvent {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getEvent(slug);
  const items: Items = {};
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return getEventFromSlug(slug);
}

export function getAllEvents(fields: string[] = EVENT_FIELDS): IEvent[] {
  const filePaths = getEventsFilePaths();
  return filePaths
    .map(filePath => getEventItems(filePath, fields))
    .sort((event1, event2) => (event1.date > event2.date ? 1 : -1));
}
