import React from 'react';

export type TextAreaProps = {
  content: string;
  onChange: (newContent: string) => void;
  placeholder: string;
};

export const TextArea = ({ content, onChange, placeholder }: TextAreaProps) => {
  return (
    <textarea
      rows={2}
      className='block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-primary focus:border-primary dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'
      placeholder={placeholder}
      value={content}
      onChange={e => onChange(e.target.value)}
    ></textarea>
  );
};
