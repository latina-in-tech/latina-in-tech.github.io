import Image from 'next/image';
import Link from 'next/link';
import latina from '../../public/assets/latina.png';
import navigationLinks from '@/model/navigation';

const telegramNav = navigationLinks.find((item) => item.name === 'Telegram');

const Hero: React.FC = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/2 dark:bg-black dark:bg-opacity-10'></div>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
          <div className='absolute inset-0'>
            <Image
              priority
              fill
              src={latina}
              alt='Piazza del Popolo'
              className='object-cover'
            ></Image>
            <div className='absolute inset-0 bg-gradient-to-r from-primary-light to-primary-dark mix-blend-multiply'></div>
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
            <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
              <span className='block text-white'>La community degli</span>
              <span className='block bg-primary-lighter bg-clip-text text-transparent'>
                Informatici Pontini
              </span>
            </h1>
            <p className='mx-auto mt-6 max-w-lg text-center text-xl text-slate-100 sm:max-w-3xl'>
              Eventi gratuiti per favorire la condivisione di conoscenze e la
              crescita professionale.
            </p>
            <div className='mx-auto mt-10 flex justify-center'>
              {telegramNav && (
                <Link
                  href={telegramNav.href}
                  target='_blank'
                  className='flex items-center justify-between gap-2 rounded-md border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-dark sm:px-8'
                >
                  Unisciti al Gruppo Telegram!
                  {telegramNav.icon && <telegramNav.icon></telegramNav.icon>}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
