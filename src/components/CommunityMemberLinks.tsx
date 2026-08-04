import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsFillHouseDoorFill
} from 'react-icons/bs';
import React from 'react';
import { CommunityMember } from '@/model/communityMember';

// return true if the member has at least one no empty link
export const hasAnyLinks = (member: CommunityMember): boolean =>
  [member.github, member.linkedin, member.twitter, member.website].some(
    link => !!link
  );

type Props = {
  member: CommunityMember;
};
/**
 * display the links of a community member, always visible
 * it's responsibility of the parent to show the links only if the member has any
 * github | linkedin | twitter | website
 * @param member
 * @constructor
 */
const CommunityMemberLinks: React.FC<Props> = ({ member }) => {
  return (
    <div className='flex gap-3 pt-1.5 text-base'>
      {member.github && (
        <a
          href={member.github}
          className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
          target='_blank'
          rel='noreferrer'
        >
          <span className='sr-only'>GitHub</span>
          <BsGithub />
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
          target='_blank'
          rel='noreferrer'
        >
          <span className='sr-only'>Linkedin</span>
          <BsLinkedin />
        </a>
      )}
      {member.twitter && (
        <a
          href={member.twitter}
          className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
          target='_blank'
          rel='noreferrer'
        >
          <span className='sr-only'>X</span>
          <BsTwitter />
        </a>
      )}
      {member.website && (
        <a
          href={member.website}
          className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
          target='_blank'
          rel='noreferrer'
        >
          <span className='sr-only'>Website</span>
          <BsFillHouseDoorFill />
        </a>
      )}
    </div>
  );
};

export default CommunityMemberLinks;
