import React from 'react';

type Props = {
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

/**
 * shared shell for the home page blocks: every section is a card exposing
 * its own title, so the page reads as a list of contexts.
 */
const Section: React.FC<Props> = ({ title, subtitle, children, footer }) => (
  <section className='mx-auto w-full max-w-7xl rounded-2xl bg-slate-100 p-6 ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800 sm:p-8'>
    <header>
      {/* whitespace-pre-line: a \n in the dictionaries becomes a line break */}
      <h2 className='whitespace-pre-line text-2xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100 sm:text-3xl'>
        {title}
      </h2>
      {subtitle && (
        <p className='mt-2 whitespace-pre-line text-base text-slate-600 dark:text-slate-400'>
          {subtitle}
        </p>
      )}
    </header>
    <div className='mt-8'>{children}</div>
    {footer && <div className='mt-8'>{footer}</div>}
  </section>
);

export default Section;
