import React from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

export const Newsletter = () => {
  return (
    <section className='sm:my-10'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative -mx-4 overflow-hidden bg-slate-300 py-16 px-4 dark:bg-slate-800 sm:px-6 md:mx-0 md:rounded-3xl md:px-16 xl:px-24'>
          <div className='relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 text-gray-900 dark:text-slate-200 xl:max-w-none xl:grid-cols-2'>
            <div>
              <h2 className='text-4xl font-extrabold tracking-tight  sm:text-4xl'>
                <span>Rimaniamo in contatto?</span>
                <br />
                <span className='bg-gradient-to-br from-primary-dark to-primary-light dark:from-primary dark:to-primary-lighter bg-clip-text text-transparent'>
                  Tieniti sempre aggiornato.
                </span>
              </h2>
              <p className='mt-2 text-lg'>
                Unisciti alla nostra community! Iscriviti per non perderti gli
                eventi e le attività che organizzeremo. Stay connected, stay
                tech-savvy!
              </p>
            </div>
            <form
              action='https://github.us21.list-manage.com/subscribe/post?u=08bff1fa2d8bd95bf693be2ab&amp;id=8489b0a8a1&amp;f_id=00bbf0e6f0'
              method='post'
              id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form'
              target='_self'
            >
              <h3 className='text-lg font-semibold tracking-tight text-primary-dark dark:text-primary-light'>
                Iscriviti alla nostra newsletter
                <span aria-hidden='true'>↓</span>
              </h3>
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
              <div className='mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-800'>
                <input
                  type='email'
                  name='EMAIL'
                  id='mce-EMAIL'
                  required
                  placeholder='Indirizzo email'
                  className='-my-2.5 flex-auto border-none bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:ring-0'
                />
                <button
                  className='inline-flex justify-center rounded-2xl bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-dark sm:px-8'
                  type='submit'
                >
                  <span className='sr-only sm:not-sr-only'>
                    Iscriviti subito
                  </span>
                  <span className='sm:hidden'>
                    <MdOutlineMarkEmailRead />
                  </span>
                </button>
              </div>
            </form>

            <a
              href='http://eepurl.com/iFNvbw'
              title='Mailchimp: l’email marketing è facile e divertente'
            >
              <span className='hidden dark:block'>
                <img
                  className=' refferal_badge'
                  src='https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-light.svg'
                  alt='Intuit Mailchimp'
                  style={{
                    width: '220px',
                    height: '40px',
                    display: 'flex',
                    padding: '2px 0px',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                />
              </span>

              <span className='block dark:hidden'>
                <img
                  className='refferal_badge'
                  src='https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg'
                  alt='Intuit Mailchimp'
                  style={{
                    width: '220px',
                    height: '40px',
                    display: 'flex',
                    padding: '2px 0px',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
