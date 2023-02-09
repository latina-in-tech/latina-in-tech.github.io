import Link from 'next/link';
import logoExtended from '../../public/assets/lit_extended.png';
import Logo from '../assets/logo';
import Image from 'next/image';

// add the React Header Element
const Header: React.FC = () => {
  return (
    <div className='h-[10%] w-full flex bg-primary-lighter items-center justify-between px-2 py-10 shadow-lg shadow-primary-dark border-b-8 border-primary-dark sticky top-0 left-0'>
      <Link href='/' className='select-none hidden md:block'>
        <Image src={logoExtended} alt='Logo LiT' height={75} />
      </Link>

      <Logo className='cursor-pointer md:hidden' width={70} />

      <nav className='hidden md:block'>
        <ul>
          <li>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/events'>Eventi</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
