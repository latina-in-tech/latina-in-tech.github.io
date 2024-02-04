import React, { useMemo } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllCommunityMembers } from '@/utils/mdxUtils';
import {
  CommunityMember,
  CommunityMemberError,
  CommunityMemberValid,
  isCommunityError,
  isCommunityMember
} from '@/model/communityMember';

const CommunityMembers: React.FC<
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
  // If there are errors, we display them
  if (errors.length > 0) {
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
    <div className='text-center'>
      <h2 className='text-xl font-bold text-gray-900 dark:text-slate-200 uppercase'>
        {members.length} Community Members
      </h2>
      <div className={'text-lg text-red-500'}>
        {validMembers.map(({ data }, index) => (
          <div key={index}>{data.fullname}</div>
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

export default CommunityMembers;
