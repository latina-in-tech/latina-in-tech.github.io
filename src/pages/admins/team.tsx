import React from 'react';
import Header from '@/components/Header';

type Admin = {
  name: string;
  image: string;
  linkedIn: string;
};

const admins: ReadonlyArray<Admin> = [
  {
    name: 'Alessandro Boschi',
    image: '/assets/admin/team/m-boschi.png',
    linkedIn: 'https://www.linkedin.com/in/alessandro-rossi-1b1b1b1b1/'
  },
  {
    name: 'Alessandro Boschi',
    image: '/assets/admin/team/m-boschi.png',
    linkedIn: 'https://www.linkedin.com/in/alessandro-rossi-1b1b1b1b1/'
  },
  {
    name: 'Alessandro Boschi',
    image: '/assets/admin/team/m-boschi.png',
    linkedIn: 'https://www.linkedin.com/in/alessandro-rossi-1b1b1b1b1/'
  },
  {
    name: 'Alessandro Boschi',
    image: '/assets/admin/team/m-boschi.png',
    linkedIn: 'https://www.linkedin.com/in/alessandro-rossi-1b1b1b1b1/'
  },
  {
    name: 'Alessandro Boschi',
    image: '/assets/admin/team/m-boschi.png',
    linkedIn: 'https://www.linkedin.com/in/alessandro-rossi-1b1b1b1b1/'
  },
  {
    name: 'Alessandro Boschi',
    image: '/assets/admin/team/m-boschi.png',
    linkedIn: 'https://www.linkedin.com/in/alessandro-rossi-1b1b1b1b1/'
  },
  {
    name: 'Alessandro Boschi',
    image: '/assets/admin/team/m-boschi.png',
    linkedIn: 'https://www.linkedin.com/in/alessandro-rossi-1b1b1b1b1/'
  }
];

const AdminCard: React.FC<Admin> = ({ name, linkedIn, image }) => {
  return (
    <div
      className={`max-w-[260px] flex flex-col items-center p-4 bg-primary-lighter rounded-md shadow-md`}
    >
      <img
        className='object-cover w-32 h-32 mb-4 rounded-full'
        src={image}
        alt='avatar'
      />
      <div className='text-center'>
        <p className='text-lg font-semibold text-gray-800 dark:text-white'>
          {name}
        </p>
        <a
          href={linkedIn}
          target='_blank'
          rel='noreferrer'
          className='text-lg font-semibold text-primary-dark'
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

const AdminTeam = () => {
  return (
    <div>
      <Header />
      <div className='flex p-4 items-center justify-center'>
        <div className='grid grid-cols-4 gap-4 w-8/12  flex-col p-4 justify-center rounded-md shadow-md bg-slate-800'>
          {admins.map(admin => (
            <AdminCard key={admin.name} {...admin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTeam;
