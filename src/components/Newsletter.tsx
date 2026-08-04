import { Dictionary } from '@/utils/dictionary';
import React from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import Section from '@/components/Section';

type NewsletterProps = {
  translations: Dictionary;
};

export const Newsletter = ({ translations }: NewsletterProps) => {
  return (
    <Section
      title={translations.newsletter.shallWeStayInTouch}
      subtitle={translations.newsletter.joinOurCommunityAndDoNotMissAnyUpdates}
    >
      <form
        action='https://github.us21.list-manage.com/subscribe/post?u=08bff1fa2d8bd95bf693be2ab&amp;id=8489b0a8a1&amp;f_id=00bbf0e6f0'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        target='_self'
        className='max-w-xl'
      >
        <label className='sr-only' htmlFor='mce-EMAIL'>
          {translations.newsletter.signUp}
        </label>
        <span className='hidden'>
          {/* /* real people should not fill this in and expect good things - do
               not remove this or risk form bot signups */}
          <input
            type='text'
            name='b_08bff1fa2d8bd95bf693be2ab_8489b0a8a1'
            tabIndex={-1}
            value=''
            readOnly={true}
          />
        </span>
        <div hidden>
          <input type='hidden' name='tags' value='2971438' />
        </div>
        <div className='flex rounded-xl bg-white p-1 ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-primary dark:bg-slate-800 dark:ring-slate-600'>
          <input
            type='email'
            name='EMAIL'
            id='mce-EMAIL'
            required
            placeholder={translations.newsletter.emailAddress}
            className='w-full flex-auto border-none bg-transparent px-4 text-base text-slate-900 placeholder:text-slate-400 focus:ring-0 dark:text-slate-100'
          />
          <button
            className='inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-6'
            type='submit'
          >
            <span className='sr-only sm:not-sr-only'>
              {translations.newsletter.signupNow}
            </span>
            <span className='sm:hidden'>
              <MdOutlineMarkEmailRead />
            </span>
          </button>
        </div>
        <a
          href='http://eepurl.com/iFNvbw'
          title='Mailchimp: l’email marketing è facile e divertente'
          className='mt-2 block text-center text-xs text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary-lighter'
        >
          Powered by Intuit Mailchimp
        </a>
      </form>
    </Section>
  );
};
