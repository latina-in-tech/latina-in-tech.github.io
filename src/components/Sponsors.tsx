import Image, { StaticImageData } from 'next/image';
import theSpaceLogo from '../../public/assets/sponsors/thespace_logo.png';
import gruspLogo from '../../public/assets/sponsors/grusp.png';
import React from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

type Sponsor = {
  name: string;
  logo: StaticImageData;
  url: string;
};
const sponsors: ReadonlyArray<Sponsor> = [
  {
    name: 'The Space',
    logo: theSpaceLogo,
    url: 'https://www.thespacecoworking.website/'
  },
  {
    name: 'Grusp',
    logo: gruspLogo,
    url: 'https://www.grusp.org/'
  }
];

export const Sponsors = () => {
  return (
    <div
      className={
        'mx-auto max-w-7xl sm:px-8 md:px-10 lg:px-12 mt-4 flex justify-center'
      }
    >
      <div
        className={
          'grid sm:grid-flow-col grid-flow-row grid-col-4 gap-2 place-items-center'
        }
      >
        {sponsors.map(s => (
          <Link
            key={s.name}
            href={s.url}
            className='some classes'
            target='_blank'
          >
            <Image
              src={s.logo}
              alt={s.name}
              style={{ width: 'auto' }}
              className={
                'rounded-md max-h-[60px] md:max-h-[80px] sm:max-h-[80px] xs:max-h-[80px]'
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
