import React, { useMemo } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  CommunityMember as CommunityMemberT,
  CommunityMemberError,
  CommunityMemberValid,
  isCommunityError,
  isCommunityMember
} from '@/model/communityMember';
import { getAllCommunityMembers } from '@/utils/community';
import { isDevEnv } from '@/utils/dev';
import Image from 'next/image';

const imageHeight = 48;
const CommunityMember: React.FC<{ member: CommunityMemberT }> = ({
  member
}) => {
  return (
    <div className={'flex items-center'}>
      <Image
        height={imageHeight}
        width={imageHeight}
        src={`/assets/community/${member.picture}`}
        className={`ring-1 ring-gray-400 rounded-full`}
        alt={member.fullname}
      />
      <div className={'flex flex-col text-left ml-2'}>
        <p className={'sans text-sm leading-5 text-slate-100 font-normal'}>
          {member.fullname}
        </p>
        {member.bio && (
          <p
            className={'sans text-sm leading-[1.6] text-slate-400 font-normal'}
          >
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
};

const CommunityMemberList: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ members }) => {
  const errors: CommunityMemberError[] = useMemo(
    () => members.filter(isCommunityError),
    [members]
  );
  const validMembers: CommunityMemberValid[] = useMemo(
    () => members.filter(isCommunityMember),
    [members]
  );
  /**
   * If there are errors, display them
   * This should be a way to detect any error in the data at development time
   */
  if (errors.length > 0 && isDevEnv) {
    return (
      <div className='text-center'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-slate-200'>
          Oops! Something went wrong while fetching the community members
        </h2>
        <div className={'text-lg text-red-500'}>
          {errors.map(({ error }, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-xl font-bold text-gray-900 dark:text-slate-200 uppercase text-center'>
        {members.length} Community Members
      </h2>
      <div className='grid grid-cols-3 mt-2 max-w-screen-md gap-4'>
        {validMembers.map(({ data }, index) => (
          <CommunityMember key={`cm_${index}_${data.fullname}`} member={data} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = (() => ({
  props: { members: getAllCommunityMembers() }
})) satisfies GetStaticProps<{
  members: ReturnType<typeof getAllCommunityMembers>;
}>;

export default CommunityMemberList;
