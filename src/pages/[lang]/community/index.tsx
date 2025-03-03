import React, { useEffect, useMemo } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  CommunityMemberError,
  CommunityMemberOrError,
  CommunityMemberValid,
  isCommunityError,
  isCommunityMember
} from '@/model/communityMember';
import { getAllCommunityMembers } from '@/utils/community';
import { isDevEnv } from '@/utils/dev';
import CommunityMember from '@/components/CommunityMember';
import { getAllLocales } from '@/utils/locale';
import { Dictionary, getDictionary } from '@/utils/dictionary';
import { Locale } from 'i18n.config';

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
> = ({ members, translations }) => {
  const [isClient, setIsClient] = React.useState(false);
  const errors: CommunityMemberError[] = useMemo(
    () => members.filter(isCommunityError),
    [members]
  );
  const validMembers: CommunityMemberValid[] = useMemo(() => {
    const valids = members.filter(isCommunityMember);
    if (isClient) {
      return valids.sort(() => 0.5 - Math.random());
    }
    return valids;
  }, [isClient, members]);
  // set the client flag to true when the component is fully rendered
  // we change the order of the members on the client side
  // this is to avoid HTML mismatch between server and client on first render
  useEffect(() => {
    setIsClient(true);
  }, []);
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
        {translations.communityMembers.communityMembers}
      </h2>
      <p className='text-lg text-gray-700 dark:text-slate-200 text-center max-w-screen-md my-2'>
        {translations.communityMembers.doYouAttendOrFollowUs} &nbsp;
        <a
          href={
            'https://github.com/latina-in-tech/latina-in-tech.github.io/blob/main/docs/community/README.md'
          }
          className={'text-blue-500 dark:text-blue-400'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {translations.communityMembers.readHere}
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

export const getStaticPaths = async () => {
  const locales = getAllLocales();

  return {
    paths: locales.map(locale => {
      return {
        params: {
          lang: locale
        }
      };
    }),
    fallback: false
  };
};

type StaticProps = {
  members: Array<CommunityMemberOrError>;
  translations: Dictionary;
};

export const getStaticProps = (async context => {
  const lang = context.params?.lang as string;
  const translations = await getDictionary(lang as Locale);
  return {
    props: {
      members: getAllCommunityMembers(),
      translations
    }
  };
}) satisfies GetStaticProps<StaticProps>;

export default CommunityMemberList;
