import Image, { StaticImageData } from 'next/image';
import theSpaceLogo from '../../public/assets/sponsors/thespace_logo.png';
import gruspLogo from '../../public/assets/sponsors/grusp.png';
import italiaOpenSourceLogo from '../../public/assets/sponsors/italia_opensource.png';
import rnhLogo from '../../public/assets/sponsors/rnh.png';
import codemotionLightLogo from '../../public/assets/sponsors/codemotion/light.png';
import codemotionDarkLogo from '../../public/assets/sponsors/codemotion/dark.svg';
import weAreDevelopersLightLogo from '../../public/assets/sponsors/wearedevelopers/light.png';
import weAreDevelopersDarkLogo from '../../public/assets/sponsors/wearedevelopers/dark.png';
import viridexLogo from '../../public/assets/sponsors/viridex.png';
import exoLogo from '../../public/assets/sponsors/exo.png';
import klarnaLogo from '../../public/assets/sponsors/klarna.png';
import jetbrainsLogo from '../../public/assets/sponsors/jetbrains.png';
import schrodingerLogo from '../../public/assets/sponsors/schrodinger.png';
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
  },
  {
    name: 'Jetbrains',
    logo: {
      light: jetbrainsLogo,
      dark: jetbrainsLogo
    },
    url: 'https://www.jetbrains.com/'
  },
  {
    name: 'Italia Open-Source',
    logo: {
      light: italiaOpenSourceLogo,
      dark: italiaOpenSourceLogo
    },
    url: 'https://italiaopensource.com/'
  },
  {
    name: 'Schrodinger Hat',
    logo: {
      light: schrodingerLogo,
      dark: schrodingerLogo
    },
    url: 'https://www.schrodinger-hat.it/'
  }
];

export const Sponsors = () => {
  return (
    <div className='text-center'>
      <h2 className='text-xl font-bold text-gray-900 dark:text-slate-200 uppercase'>
        Community Partners
      </h2>
      <div className={'mx-auto mt-4 md:mt-6 flex justify-center'}>
        <div className='grid md:grid-cols-5 grid-cols-2 gap-3 place-items-center px-6'>
          {sponsors.map(s => (
            <Link key={s.name} href={s.url} target='_blank'>
              <Image
                src={s.logo.light}
                alt={s.name}
                style={{
                  height: '4rem',
                  aspectRatio: '3/2',
                  objectFit: 'contain'
                }}
                className={
                  'rounded-md opacity-40 hover:opacity-100 w-[180px] dark:hidden'
                }
              />
              <Image
                src={s.logo.dark}
                alt={s.name}
                style={{
                  height: '4rem',
                  aspectRatio: '3/2',
                  objectFit: 'contain'
                }}
                className={
                  'rounded-md opacity-40 hover:opacity-100 w-[180px] dark:block hidden'
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
