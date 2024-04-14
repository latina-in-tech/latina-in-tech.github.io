import React, { useEffect } from 'react';
import Header from '@/components/Header';
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsFillHouseDoorFill
} from 'react-icons/bs';
import { i18n } from 'i18n.config';

type Admin = {
  name: string;
  image: string;
  linkedIn: string;
  github?: string;
  twitter?: string;
  website?: string;
};

const admins: ReadonlyArray<Admin> = [
  {
    name: 'Andrea Coluzzi',
    image: '/assets/admin/team/a-coluzzi.png',
    linkedIn: 'https://www.linkedin.com/in/andrea-coluzzi/',
    github: 'https://github.com/coluzziandrea',
    twitter: 'https://twitter.com/andreacoluzzi94',
    website: 'https://www.coluzziandrea.com/'
  },
  {
    name: 'Antonio Ionta',
    image: '/assets/admin/team/a-ionta.png',
    linkedIn: 'https://www.linkedin.com/in/antonio-ionta/'
  },
  {
    name: 'Fabizio Cafolla',
    image: '/assets/admin/team/f-cafolla.png',
    linkedIn: 'https://www.linkedin.com/in/fabrizio-cafolla/'
  },
  {
    name: 'Fabrizio Dalla Bona',
    image: '/assets/admin/team/f-dalla-bona.png',
    linkedIn: 'https://www.linkedin.com/in/fabriziodallabona/'
  },
  {
    name: 'Francesco Di Muro',
    image: '/assets/admin/team/f-di-muro.png',
    linkedIn: 'https://www.linkedin.com/in/francesco-di-muro/'
  },
  {
    name: 'Fabio Adipietro',
    image: '/assets/admin/team/f-adipietro.png',
    linkedIn: 'https://www.linkedin.com/in/fabio-adipietro/'
  },
  {
    name: 'Matteo Boschi',
    image: '/assets/admin/team/m-boschi.png',
    linkedIn: 'https://www.linkedin.com/in/matteo-boschi/',
    github: 'https://github.com/Undermaken',
    website: 'http://matteoboschi.com/'
  }
];

const AdminCard: React.FC<Admin> = ({
  name,
  linkedIn,
  image,
  github,
  twitter,
  website
}) => {
  return (
    <div
      className={`w-[220px] flex flex-col items-center p-4 bg-gradient-to-b from-primary-dark to-primary-light dark:from-primary-light dark:to-primary-dark hover:from-pink-500 hover:to-yellow-500 rounded-md shadow-md`}
    >
      <img
        className='object-cover w-32 h-32 mb-4 rounded-full shadow-md'
        src={image}
        alt='avatar'
      />
      <div className='text-center mt-2'>
        <p className='text-md font-semibold text-slate-800 dark:text-slate-100'>
          {name.toUpperCase()}
        </p>
        <ul className='flex mt-2 justify-center gap-6 sm:gap-3'>
          {website && (
            <li>
              <a
                href={website}
                className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
                target='_blank'
                rel='noreferrer'
              >
                <span className='sr-only'>Website</span>
                <BsFillHouseDoorFill />
              </a>
            </li>
          )}
          {github && (
            <li>
              <a
                href={github}
                className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
                target='_blank'
                rel='noreferrer'
              >
                <span className='sr-only'>GitHub</span>
                <BsGithub />
              </a>
            </li>
          )}
          {twitter && (
            <li>
              <a
                href={twitter}
                className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
                target='_blank'
                rel='noreferrer'
              >
                <span className='sr-only'>Twitter</span>
                <BsTwitter />
              </a>
            </li>
          )}
          <li>
            <a
              href={linkedIn}
              className='text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white'
              target='_blank'
              rel='noreferrer'
            >
              <span className='sr-only'>LinkedIn</span>
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const AdminTeam = () => {
  useEffect(() => {
    window.location.href = `/${i18n.defaultLocale}`;
  }, []);

  return;
};

export default AdminTeam;
