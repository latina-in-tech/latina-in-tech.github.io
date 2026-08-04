import React from 'react';
import { CommunityMember as CommunityMemberT } from '@/model/communityMember';
import Image from 'next/image';
import CommunityMemberLinks, {
  hasAnyLinks
} from '@/components/CommunityMemberLinks';

const imageHeight = 48;
/**
 * display a community member
 *  picture | full name
 *          | bio / links
 *  bio is shown as default, links are shown on click
 * @param member
 * @constructor
 */
const CommunityMember: React.FC<{ member: CommunityMemberT }> = ({
  member
}) => {
  const [showLinks, setShowLinks] = React.useState(false);
  const hasLinks = hasAnyLinks(member);
  return (
    <div
      className='flex items-start gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md dark:bg-slate-800 dark:ring-slate-700'
      onClick={() => (hasLinks ? setShowLinks(s => !s) : undefined)}
      style={{ cursor: hasLinks ? 'pointer' : 'default' }}
    >
      <Image
        height={imageHeight}
        width={imageHeight}
        src={`/assets/community/${member.picture}`}
        className='h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-600'
        alt={member.fullname}
      />
      <div className={'flex min-w-0 flex-col text-left'}>
        <p
          className={
            'text-sm font-semibold leading-5 text-slate-900 dark:text-slate-100'
          }
        >
          {member.fullname}
        </p>
        {!showLinks && (
          <p className='text-sm leading-5 text-slate-600 dark:text-slate-400'>
            {member.bio}
          </p>
        )}
        {hasLinks && showLinks && <CommunityMemberLinks member={member} />}
      </div>
    </div>
  );
};

export default CommunityMember;
