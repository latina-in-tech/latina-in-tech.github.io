import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Section from '@/components/Section';
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsFillHouseDoorFill
} from 'react-icons/bs';
import { Locale } from 'i18n.config';
import { Dictionary, getDictionary } from '@/utils/dictionary';
import { GetStaticProps } from 'next';
import { getAllLocales } from '@/utils/locale';

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
    website: 'https://www.coluzziandrea.com/',
    active: false
  },
  {
    name: 'Antonio Ionta',
    image: '/assets/admin/team/a-ionta.png',
    linkedIn: 'https://www.linkedin.com/in/antonio-ionta/'
  },
  {
    name: 'Fabizio Cafolla',
    image: '/assets/admin/team/f-cafolla.png',
    linkedIn: 'https://www.linkedin.com/in/fabrizio-cafolla/',
    active: false
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
    website: 'https://matteoboschi.com/'
  },
  {
    name: 'Lorenzo Tronchin',
    image: '/assets/admin/team/ltronchin.jpg',
    linkedIn: 'https://www.linkedin.com/in/lorenzotronchin/',
    active: false
  }
];

const isActive = (admin: Admin): boolean => admin.active ?? true;

const AdminLink: React.FC<{
  href: string;
  label: string;
  Icon: typeof BsLinkedin;
}> = ({ href, label, Icon }) => (
  <li>
    <a
      href={href}
      className='block rounded text-slate-500 transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-slate-400 dark:hover:text-primary-lighter'
      target='_blank'
      rel='noreferrer'
    >
      <span className='sr-only'>{label}</span>
      <Icon className='h-5 w-5' />
    </a>
  </li>
);

const AdminCard: React.FC<Admin> = ({
  name,
  linkedIn,
  image,
  github,
  twitter,
  website
}) => {
  return (
    <div className='flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md dark:bg-slate-800 dark:ring-slate-700'>
      <Image
        width={96}
        height={96}
        className='h-24 w-24 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-600'
        src={image}
        alt={name}
      />
      <p className='mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100'>
        {name}
      </p>
      <ul className='mt-3 flex justify-center gap-4'>
        {website && (
          <AdminLink
            href={website}
            label='Website'
            Icon={BsFillHouseDoorFill}
          />
        )}
        {github && <AdminLink href={github} label='GitHub' Icon={BsGithub} />}
        {twitter && <AdminLink href={twitter} label='X' Icon={BsTwitter} />}
        <AdminLink href={linkedIn} label='LinkedIn' Icon={BsLinkedin} />
      </ul>
    </div>
  );
};

const AdminGrid: React.FC<{ members: ReadonlyArray<Admin> }> = ({
  members
}) => (
  <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
    {members.map(admin => (
      <AdminCard key={admin.name} {...admin} />
    ))}
  </div>
);

type AdminTeamProps = {
  translations: Dictionary;
  lang: Locale;
};

export const getStaticProps: GetStaticProps = (async context => {
  const lang = context.params?.lang as Locale;
  const dictionary = await getDictionary(lang);
  return { props: { translations: dictionary, lang } };
}) satisfies GetStaticProps<AdminTeamProps>;

export const getStaticPaths = async () => {
  const locales = getAllLocales();

  return {
    paths: locales.map(locale => {
      return {
        params: {
          lang: locale
        }
      };
    }),
    fallback: false
  };
};

const AdminTeam = ({ translations, lang }: AdminTeamProps) => {
  const activeAdmins = admins.filter(isActive);
  const formerAdmins = admins.filter(admin => !isActive(admin));

  return (
    <>
      <Head>
        <title>LiT - {translations.admin.adminTeam}</title>
      </Head>
      <Header lang={lang} />
      <main className='flex flex-col gap-8 px-4 pb-16 pt-4 sm:px-6 lg:px-8'>
        <header className='mx-auto w-full max-w-7xl'>
          <h1 className='whitespace-pre-line text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl'>
            {translations.admin.adminTeam}
          </h1>
          <p className='mt-2 whitespace-pre-line text-lg text-slate-600 dark:text-slate-400'>
            {translations.admin.groupOfPeople}
          </p>
        </header>

        {activeAdmins.length > 0 && (
          <Section title={translations.admin.areAdmin}>
            <AdminGrid members={activeAdmins} />
          </Section>
        )}

        {formerAdmins.length > 0 && (
          <Section title={translations.admin.wereAdmin}>
            <AdminGrid members={formerAdmins} />
          </Section>
        )}
      </main>
    </>
  );
};

export default AdminTeam;
