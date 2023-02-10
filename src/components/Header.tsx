import Link from 'next/link';
import logoExtended from '../../public/assets/lit_extended.png';
import Logo from '../assets/logo';
import Image from 'next/image';
import {
  FaTelegram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const navigationLinks = [
  {
    name: 'Telegram',
    href: 'https://t.me/+QazM4E1vaUM3NDQ0',
    icon: FaTelegram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/theLITCommunity',
    icon: FaTwitter,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/latina-in-tech',
    icon: FaLinkedin,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/LatinaInTech/',
    icon: FaFacebook,
  },
  {
    name: 'Github',
    href: 'https://github.com/latina-in-tech',
    icon: FaGithub,
  },
];

const Header: React.FC = () => {
  return (
    <Disclosure as='nav'>
      {({ open: isOpen }) => (
        <>
          <div className=''>
            <div>
              <div>
                <Disclosure.Button>
                  <span>Apri menu</span>
                  {isOpen ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
                </Disclosure.Button>
              </div>

              <div>
                <div>
                  <Link href='/'>
                    <Image
                      src={logoExtended}
                      alt='Logo LiT'
                      height={65}
                      width={300}
                    />
                  </Link>
                </div>
                <div>
                  <div>
                    {navigationLinks.map((item) => (
                      <Link key={item.name} href={item.href} target='_blank'>
                        {item.icon && <item.icon></item.icon>}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel>
            <div>
              {navigationLinks.map((item) => (
                <Disclosure.Button>
                  <span>
                    {item.icon && <item.icon></item.icon>}
                    {item.name}
                  </span>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
