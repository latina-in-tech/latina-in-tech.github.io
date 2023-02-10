import Image from 'next/image';
import latina from '../../public/assets/latina.png';

export default function Hero() {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/2 dark:bg-black dark:bg-opacity-10' />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
          <div className='absolute inset-0'>
            <Image
              priority
              fill
              src={latina}
              alt='Piazza del Popolo'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-primary-lighter to-primary-dark mix-blend-multiply' />
          </div>
        </div>
      </div>
    </div>
  );
}
