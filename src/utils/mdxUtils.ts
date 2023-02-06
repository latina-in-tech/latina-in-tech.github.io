import matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';


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
  return (
    fs
      .readdirSync(EVENTS_PATH)
      .filter((path) => /\.mdx?$/.test(path))
  );
}

export function getEvent(slug: string): Event {
  const fullPath = join(EVENTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getEventItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getEvent(slug);

  const items: Items = {};

  fields.forEach((field) => {
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
  return items;
}

export function getAllEvents(fields: string[]): Items[] {
  const filePaths = getEventsFilePaths();
  const events = filePaths
    .map((filePath) => getEventItems(filePath, fields))
    .sort((event1, event2) => (event1.date > event2.date ? 1 : -1));
  return events;
}
