import React from 'react';
import Header from '@/components/Header';
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsFillHouseDoorFill
} from 'react-icons/bs';
import { i18n } from 'i18n.config';
import { useRouter } from 'next/router';

type Admin = {
  name: string;
  image: string;
  linkedIn: string;
  github?: string;
  twitter?: string;
  website?: string;
  // default is true
  active?: boolean;
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
    linkedIn: 'https://www.linkedin.com/in/fabriziodallabona/',
    active: false
  },
  {
    name: 'Francesco Di Muro',
    image: '/assets/admin/team/f-di-muro.png',
    linkedIn: 'https://www.linkedin.com/in/francesco-di-muro/',
    active: false
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
  },
  {
    name: 'Lorenzo Tronchin',
    image: '/assets/admin/team/ltronchin.jpg',
    linkedIn: 'https://www.linkedin.com/in/lorenzotronchin/'
  }
];

const AdminCard: React.FC<Admin> = ({
  name,
  linkedIn,
  image,
  github,
  twitter,
  website,
  active = true
}) => {
  return (
    <div
      className={`w-[220px] flex flex-col items-center p-4 bg-gradient-to-b from-primary-dark to-primary-light dark:from-primary-light dark:to-primary-dark hover:from-pink-500 hover:to-yellow-500 rounded-md shadow-md`}
    >
      <img
        className={`object-cover w-32 h-32 mb-4 rounded-full shadow-md ${active ? 'grayscale-0' : 'grayscale'}`}
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
  const router = useRouter();
  const locale = i18n.locales.filter(
    locale => router?.query.lang === locale
  )[0];

  return (
    <div>
      <Header lang={locale} />
      <div className='flex justify-center items-center'>
        <div className='w-[100%] md:w-fit p-4 m-4 justify-center rounded-md shadow-md bg-slate-200 dark:bg-slate-800'>
          <div className='flex flex-col items-center justify-center space-y-5 mb-4 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-bold dark:text-slate-200 sm:text-4xl text-center'>
              Il team di Latina In Tech
            </h2>
            <p className='mx-auto max-w-2xl text-m text-center text-gray-500 dark:text-slate-400 sm:mt-2'>
              Un gruppo di persone che condividono la passione per la tecnologia
              e per il proprio territorio.
            </p>
          </div>
          <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {admins
              .filter(a => a.active ?? true)
              .map(admin => (
                <AdminCard key={admin.name} {...admin} />
              ))}
          </div>
          {admins.filter(a => !(a.active ?? true)).length > 0 && (
            <div>
              <h2 className='text-2xl font-bold dark:text-slate-200 sm:text-2xl text-center mt-4 mb-2'>
                Sono stati membri del team di admin
              </h2>
              <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {admins
                  .filter(a => !(a.active ?? true))
                  .map(admin => (
                    <AdminCard key={admin.name} {...admin} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTeam;
