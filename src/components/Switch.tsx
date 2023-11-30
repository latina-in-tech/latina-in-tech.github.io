import React from 'react';

export type SwitchProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
};

export const Switch = ({ checked, onChange, label }: SwitchProps) => {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        className='sr-only peer'
        checked={checked}
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-light"></div>
      <span className='ms-3 text-sm font-medium text-slate-900 dark:text-slate-300'>
        {label}
      </span>
    </label>
  );
};
