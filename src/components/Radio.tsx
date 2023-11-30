import React from 'react';

export type RadioProps = {
  options: string[];
  selected: string;
  onSelected: (newValue: string) => void;
};

export const Radio = ({ options, selected, onSelected }: RadioProps) => {
  return (
    <div className='grid grid-cols-4 gap-2 rounded-xl bg-slate-700 px-2 sm:py-2 items-center'>
      {options.map((option, index) => {
        return (
          <div key={index}>
            <input
              type='radio'
              name='option'
              id={index + ''}
              value={index + ''}
              className='peer hidden'
              checked={option === selected}
              onChange={() => onSelected(option)}
            />
            <label
              htmlFor={index + ''}
              className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary-light peer-checked:text-white'
            >
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};
