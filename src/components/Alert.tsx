import React, { useState } from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';

export type AlertProps = {
  title: string;
  content: string;
  type: 'success' | 'error';
  onGoBackToHome?: () => void;
  onDismiss: () => void;
};

export const Alert = ({
  title,
  content,
  type,
  onGoBackToHome,
  onDismiss
}: AlertProps) => {
  const highlightColor = type === 'success' ? 'green' : 'red';
  return (
    <div
      className={`p-4 mb-4 text-${highlightColor}-800 border border-${highlightColor}-300 rounded-lg bg-${highlightColor}-50 dark:bg-gray-800 dark:text-${highlightColor}-400 dark:border-${highlightColor}-800`}
      role='alert'
    >
      <div className='flex items-center'>
        <svg
          className={`flex-shrink-0 w-4 h-4 me-2 fill-${highlightColor}-800`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
        </svg>
        <span className='sr-only'>Info</span>
        <h3 className='text-lg font-bold'>{title}</h3>
      </div>
      <div className='mt-2 mb-4 text-sm font-bold'>{content}</div>
      <div className='flex'>
        {onGoBackToHome && (
          <button
            type='button'
            onClick={onGoBackToHome}
            className={`dark:text-white bg-${highlightColor}-800 hover:bg-${highlightColor}-900 focus:ring-4 focus:outline-none focus:ring-${highlightColor}-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-${highlightColor}-600 dark:hover:bg-${highlightColor}-700 dark:focus:ring-${highlightColor}-800 gap-1`}
          >
            <HomeIcon className='h-6 w-6' />
            Torna nella Home
          </button>
        )}
        <button
          type='button'
          onClick={onDismiss}
          className={`text-${highlightColor}-800 bg-transparent border border-${highlightColor}-800 hover:bg-${highlightColor}-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-${highlightColor}-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-${highlightColor}-600 dark:border-${highlightColor}-600 dark:text-${highlightColor}-400 dark:hover:text-white dark:focus:ring-${highlightColor}-800`}
          aria-label='Close'
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
