import Image, { StaticImageData } from 'next/image';
import theSpaceLogo from '../../public/assets/sponsors/thespace_logo.png';
import gruspLogo from '../../public/assets/sponsors/grusp.png';
import rnhLogo from '../../public/assets/sponsors/rnh.png';
import React from 'react';
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
  },
  {
    name: 'React Native Heroes',
    logo: rnhLogo,
    url: 'https://reactnativeheroes.com/'
  }
];

export const Sponsors = () => {
  return (
    <div>
      <span className='block sm:text-white xs:text-black font-normal text-center text-2xl mt-6'>
        Community sponsor
      </span>
      <div className={'mx-auto mt-4 flex justify-center'}>
        <div
          className={`grid md:grid-cols-2 sm:grid-cols-1 gap-3 place-items-center px-6`}
        >
          {sponsors.map(s => (
            <Link key={s.name} href={s.url} target='_blank'>
              <Image
                src={s.logo}
                alt={s.name}
                style={{ height: 'auto' }}
                className={'rounded-md w-[180px]'}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
