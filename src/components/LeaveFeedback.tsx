import Link from 'next/link';
import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { Dictionary } from '@/utils/dictionary';

type LeaveFeedbackProps = {
  translations: Dictionary;
};

export const LeaveFeedback = ({ translations }: LeaveFeedbackProps) => {
  const router = useRouter();

  return (
    <div className='text-center'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-slate-200 sm:text-4xl'>
        {translations.feedback.feedback}
      </h2>
      <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-400 sm:mt-4'>
        {translations.feedback.leaveFeedback}
      </p>
      <div className={'mx-auto mt-6 flex justify-center'}>
        <Link
          href={`${router.query.lang}/feedback/new`}
          className='flex items-center justify-between gap-2 rounded-md border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-dark sm:px-8'
        >
          {translations.feedback.submitFeedback}{' '}
          <ChatBubbleLeftRightIcon className='h-6 w-6' />
        </Link>
      </div>
    </div>
  );
};
