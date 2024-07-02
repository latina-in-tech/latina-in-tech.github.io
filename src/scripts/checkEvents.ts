import * as process from 'node:process';
import { eventSchema } from '../model/event';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const EVENTS_PATH = join(process.cwd(), '_events');
const EVENTS_PICTURES_PATH = join(process.cwd(), 'public');

const eventSchemaRefined = eventSchema
  .refine(
    data => {
      const thumbPath = join(EVENTS_PICTURES_PATH, data.thumbnail);
      return fs.existsSync(thumbPath);
    },
    data => ({
      message: `Event picture [${join(EVENTS_PICTURES_PATH, data.thumbnail)}] does not exist`,
      path: ['thumbnail']
    })
  )
  .refine(
    data => {
      for (const speaker of data.speakers ?? []) {
        const thumbPath = join(EVENTS_PICTURES_PATH, speaker.thumbnail);
        if (!fs.existsSync(thumbPath)) {
          return false;
        }
      }
      return true;
    },
    () => ({
      message: `One or more speaker pictures don't exist`,
      path: ['speakers', 'thumbnail']
    })
  );

const checkEvents = () => {
  const eventsFiles = fs
    .readdirSync(EVENTS_PATH)
    .filter(path => /\.mdx?$/.test(path));
  eventsFiles.forEach(eFile => {
    const fullPath = join(EVENTS_PATH, eFile);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(fileContents);
    const parseResult = eventSchemaRefined.safeParse({ ...data, slug: eFile });
    if (!parseResult.success) {
      console.error(
        `Error while parsing event ${eFile}\n${parseResult.error.errors.map(e => `${e.path} - ${e.message}`).join(', ')}`
      );
      process.exit(1);
    }
  });
};
checkEvents();
process.exit(0);
