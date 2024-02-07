import * as z from 'zod';
export const CommunityMemberSchema = z.object({
  fullname: z.string().min(3, { message: 'Full name is required' }),
  bio: z.string().min(5).max(30),
  picture: z.string(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  github: z.string().optional(),
  website: z.string().optional()
});

export type CommunityMember = z.infer<typeof CommunityMemberSchema>;

export type CommunityMemberValid = {
  kind: 'right';
  data: CommunityMember;
};
export type CommunityMemberError = {
  kind: 'left';
  error: string;
};
export type CommunityMemberOrError =
  | CommunityMemberValid
  | CommunityMemberError;
export const isCommunityError = (
  member: CommunityMemberOrError
): member is CommunityMemberError => member.kind === 'left';
export const isCommunityMember = (
  member: CommunityMemberOrError
): member is CommunityMemberValid => member.kind === 'right';
