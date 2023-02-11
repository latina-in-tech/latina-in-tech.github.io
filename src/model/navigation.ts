import {
  FaTelegram as TelegramIcon,
  FaTwitter as TwitterIcon,
  FaFacebook as FacebookIcon,
  FaLinkedin as LinkedinIcon,
  FaGithub as GithubIcon,
} from 'react-icons/fa';

const navigationLinks = [
  {
    name: 'Telegram',
    href: 'https://t.me/+QazM4E1vaUM3NDQ0',
    icon: TelegramIcon,
    current: false,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/theLITCommunity',
    icon: TwitterIcon,
    current: false,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/latina-in-tech',
    icon: LinkedinIcon,
    current: false,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/LatinaInTech/',
    icon: FacebookIcon,
    current: false,
  },
  {
    name: 'Github',
    href: 'https://github.com/latina-in-tech',
    icon: GithubIcon,
    current: false,
  },
];

export default navigationLinks;
