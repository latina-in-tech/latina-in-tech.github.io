import Image, { StaticImageData } from 'next/image';
import theSpaceLogo from '../../public/assets/sponsors/thespace_logo.png';
import gruspLogo from '../../public/assets/sponsors/grusp.png';
import rnhLogo from '../../public/assets/sponsors/rnh.png';
import codemotionLightLogo from '../../public/assets/sponsors/codemotion/light.png';
import codemotionDarkLogo from '../../public/assets/sponsors/codemotion/dark.svg';
import weAreDevelopersLightLogo from '../../public/assets/sponsors/wearedevelopers/light.png';
import weAreDevelopersDarkLogo from '../../public/assets/sponsors/wearedevelopers/dark.png';
import viridexLogo from '../../public/assets/sponsors/viridex.png';
import exoLogo from '../../public/assets/sponsors/exo.png';
import klarnaLogo from '../../public/assets/sponsors/klarna.png';
import React from 'react';
import Link from 'next/link';

type Sponsor = {
  name: string;
  logo: {
    light: StaticImageData;
    dark: StaticImageData;
  };
  url: string;
};

const sponsors: ReadonlyArray<Sponsor> = [
  {
    name: 'The Space',
    logo: {
      light: theSpaceLogo,
      dark: theSpaceLogo
    },
    url: 'https://www.thespacecoworking.website/'
  },
  {
    name: 'Grusp',
    logo: {
      light: gruspLogo,
      dark: gruspLogo
    },
    url: 'https://www.grusp.org/'
  },
  {
    name: 'Codemotion',
    logo: {
      light: codemotionLightLogo,
      dark: codemotionDarkLogo
    },
    url: 'https://www.codemotion.com/'
  },
  {
    name: 'WeAreDevelopers',
    logo: {
      light: weAreDevelopersLightLogo,
      dark: weAreDevelopersDarkLogo
    },
    url: 'https://www.wearedevelopers.com/'
  },
  {
    name: 'React Native Heroes',
    logo: {
      light: rnhLogo,
      dark: rnhLogo
    },
    url: 'https://reactnativeheroes.com/'
  },
  {
    name: 'Viridex s.r.l.',
    logo: {
      light: viridexLogo,
      dark: viridexLogo
    },
    url: 'https://www.viridex.it/'
  },
  {
    name: 'Exo',
    logo: {
      light: exoLogo,
      dark: exoLogo
    },
    url: 'https://www.exoitalia.it/'
  },
  {
    name: 'Klarna',
    logo: {
      light: klarnaLogo,
      dark: klarnaLogo
    },
    url: 'https://www.klarna.com/'
  }
];

export const Sponsors = () => {
  return (
    <div className='text-center'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-slate-200 sm:text-4xl'>
        Community Partners
      </h2>
      <div className={'mx-auto mt-6 flex justify-center'}>
        <div
          className={`grid md:grid-cols-3 sm:grid-cols-1 gap-3 place-items-center px-6`}
        >
          {sponsors.map(s => (
            <Link key={s.name} href={s.url} target='_blank'>
              <Image
                src={s.logo.light}
                alt={s.name}
                style={{
                  height: 'auto',
                  aspectRatio: '3/2',
                  objectFit: 'contain'
                }}
                className={'rounded-md w-[180px] dark:hidden'}
              />
              <Image
                src={s.logo.dark}
                alt={s.name}
                style={{
                  height: 'auto',
                  aspectRatio: '3/2',
                  objectFit: 'contain'
                }}
                className={'rounded-md w-[180px] dark:block hidden'}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
