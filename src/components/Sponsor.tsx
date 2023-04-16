import Image from 'next/image';
import theSpaceLogo from '../../public/assets/sponsors/thespace_logo.png';
import React from 'react';
import { Transition } from '@headlessui/react';

export const Sponsor = () => {
  return (
    <div
      className={
        'mx-auto max-w-7xl sm:px-8 md:px-10 lg:px-12 mt-4 flex justify-center'
      }
    >
      <div
        className={
          'grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-2 place-items-center'
        }
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Transition
            key={i}
            show={true}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-0'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-0'
            leaveTo='opacity-0'
          >
            <Image
              src={theSpaceLogo}
              alt='Piazza del Popolo'
              className={'md:max-w-[160px] sm:max-w-[120px] xs:max-w-[120px]'}
            />
          </Transition>
        ))}
      </div>
    </div>
  );
};
