import React from 'react';
import { CommunityMember as CommunityMemberT } from '@/model/communityMember';
import Image from 'next/image';
import {
  CommunityMemberLinks,
  hasAnyLinks
} from '@/pages/community/components/CommunityMemberLinks';

const imageHeight = 48;
/**
 * display a community member
 *  picture | full name
 *          | bio / links
 *  bio is shown as default, links are shown on click
 * @param member
 * @constructor
 */
export const CommunityMember: React.FC<{ member: CommunityMemberT }> = ({
  member
}) => {
  const [showLinks, setShowLinks] = React.useState(false);
  const hasLinks = hasAnyLinks(member);
  return (
    <div
      className={'flex items-start'}
      onClick={() => (hasLinks ? setShowLinks(s => !s) : undefined)}
      style={{ cursor: hasLinks ? 'pointer' : 'default' }}
    >
      <Image
        height={imageHeight}
        width={imageHeight}
        src={`/assets/community/${member.picture}`}
        className={`ring-2 dark:ring-gray-100 ring-gray-500 rounded-full grayscale-[${showLinks ? '0' : '90%'}] hover:grayscale-0 transition-all duration-300`}
        alt={member.fullname}
      />
      <div className={'flex flex-col text-left ml-2 max-w-30'}>
        <p
          className={
            'text-sm leading-5 dark:text-slate-100 text-slate-800 font-normal'
          }
        >
          {member.fullname}
        </p>
        {!showLinks && (
          <p
            className={
              'flex text-sm h-6 dark:text-slate-400 text-slate-600 font-normal'
            }
          >
            {member.bio}
          </p>
        )}
        {hasLinks && showLinks && <CommunityMemberLinks member={member} />}
      </div>
    </div>
  );
};
