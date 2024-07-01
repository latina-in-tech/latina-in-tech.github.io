import * as process from 'node:process';
import { eventSchema } from '../model/event';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const EVENTS_PATH = join(process.cwd(), '_events');

const checkEvents = () => {
  const eventsFiles = fs
    .readdirSync(EVENTS_PATH)
    .filter(path => /\.mdx?$/.test(path));
  eventsFiles.forEach(eFile => {
    const fullPath = join(EVENTS_PATH, eFile);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(fileContents);
    const parseResult = eventSchema.safeParse({ ...data, slug: eFile });
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
