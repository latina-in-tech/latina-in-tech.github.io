import React, { useMemo } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  CommunityMemberError,
  CommunityMemberValid,
  isCommunityError,
  isCommunityMember
} from '@/model/communityMember';
import { getAllCommunityMembers } from '@/utils/community';
import { isDevEnv } from '@/utils/dev';
import CommunityMember from '@/components/CommunityMember';

/**
 * display the list of community members
 * 4 members per row on large screens
 * 3 members per row on medium screens
 * 2 members per row on small screens
 * @param members
 * @constructor
 */
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
        LiT Community Members
      </h2>
      <p className='text-lg text-gray-700 dark:text-slate-200 text-center max-w-screen-md my-2'>
        partecipi alle iniziative della community o ci segui online? in ogni
        caso sei uno di noi!
        <br />
        se vuoi comparire in questo elenco, niente di più semplice,{' '}
        <a
          href={
            'https://github.com/latina-in-tech/latina-in-tech.github.io/blob/main/docs/community/README.md'
          }
          className={'text-blue-500 dark:text-blue-400'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          leggi qui!
        </a>
      </p>
      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-4 max-w-screen-md gap-x-4 gap-y-6'>
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
