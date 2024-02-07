import { join } from 'path';
import {
  CommunityMemberOrError,
  CommunityMemberSchema
} from '@/model/communityMember';
import fs from 'fs';
import matter from 'gray-matter';
import sizeOf from 'image-size';

const COMMUNITY_MEMBER_PICTURES_PATH = join(
  process.cwd(),
  'public',
  'assets',
  'community'
);
const COMMUNITY_MEMBERS_PATH = join(process.cwd(), '_community', 'members');
/**
 * A validation schema for community members
 * we refine the schema to check if the picture exists and is square
 */
const validationSchema = CommunityMemberSchema.refine(
  data => {
    const picturePath = join(COMMUNITY_MEMBER_PICTURES_PATH, data.picture);
    const fileExists = fs.existsSync(picturePath);
    if (!fileExists) {
      return false;
    }
    const size = sizeOf(picturePath);
    return size.height === size.width;
  },
  data => ({
    message: `Picture [${join(COMMUNITY_MEMBER_PICTURES_PATH, data.picture)}] does not exist or is not square.`,
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
    .map(filePath => ({
      fileContent: fs.readFileSync(
        join(COMMUNITY_MEMBERS_PATH, filePath),
        'utf-8'
      ),
      filePath
    }))
    .map(({ fileContent, filePath }) => {
      const { data } = matter(fileContent);
      // validate against a schema the read data
      const member = validationSchema.safeParse(data);
      if (member.success) {
        return { kind: 'right', data: member.data };
      }
      return { kind: 'left', error: `[${filePath}]: ${member.error.message}` };
    });
