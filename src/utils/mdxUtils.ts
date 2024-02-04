import matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';
import { EVENT_FIELDS } from '@/model/event';
import {
  CommunityMember,
  CommunityMemberOrError,
  CommunityMemberSchema
} from '@/model/communityMember';

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

export function getEventItems(filePath: string, fields: string[] = []): Items {
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
  return items;
}

export function getAllEvents(fields: string[] = EVENT_FIELDS): Items[] {
  const filePaths = getEventsFilePaths();
  return filePaths
    .map(filePath => getEventItems(filePath, fields))
    .sort((event1, event2) => (event1.date > event2.date ? 1 : -1));
}

const COMMUNITY_MEMBERS_PATH = join(process.cwd(), '_community', 'members');
const validationSchema = CommunityMemberSchema.refine(
  data =>
    !data.picture
      ? true
      : data.picture &&
        fs.existsSync(join(COMMUNITY_MEMBERS_PATH, 'pictures', data.picture)),
  data => ({
    message: `Picture [${data.picture}] does not exist`,
    path: ['picture']
  })
);
/**
 * parse all community members from the file system
 * @returns an array of community members or errors
 */
export const getAllCommunityMembers = (): Array<CommunityMemberOrError> =>
  fs
    .readdirSync(COMMUNITY_MEMBERS_PATH)
    .filter(path => /\.mdx?$/.test(path))
    .map(filePath => {
      const fileContents = fs.readFileSync(
        join(COMMUNITY_MEMBERS_PATH, filePath),
        'utf-8'
      );
      const { data } = matter(fileContents);
      // validate parsed data
      const member = validationSchema.safeParse(data);
      if (member.success) {
        return { kind: 'right', data: member.data };
      }
      return { kind: 'left', error: `[${filePath}]: ${member.error.message}` };
    });
