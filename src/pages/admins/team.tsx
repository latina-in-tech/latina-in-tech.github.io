import React from 'react';
import Header from '@/components/Header';

type Admin = {
  name: string;
  image: string;
  linkedIn: string;
};

const admins: ReadonlyArray<Admin> = [
  {
    name: 'Andrea Coluzzi',
    image: '/assets/admin/team/a-coluzzi.png',
    linkedIn: 'https://www.linkedin.com/in/andrea-coluzzi/'
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
    linkedIn: 'https://www.linkedin.com/in/matteo-boschi/'
  }
];

const AdminCard: React.FC<Admin> = ({ name, linkedIn, image }) => {
  return (
    <div
      className={`w-[220px] flex flex-col items-center p-4 bg-gradient-to-b from-blue-600 to-blue-200 hover:from-pink-500 hover:to-yellow-500 rounded-md shadow-md`}
    >
      <img
        className='object-cover w-32 h-32 mb-4 rounded-full'
        src={image}
        alt='avatar'
      />
      <div className='text-center mt-2'>
        <p className='text-md font-semibold text-gray-700'>
          {name.toUpperCase()}
        </p>
        <a
          href={linkedIn}
          target='_blank'
          rel='noreferrer'
          className='text-md font-semibold text-blue-500'
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
      <div className='flex justify-center items-center'>
        <div className='w-[100%] md:w-fit p-4 m-4 justify-center rounded-md shadow-md bg-slate-800'>
          <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {admins.map(admin => (
              <AdminCard key={admin.name} {...admin} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTeam;
