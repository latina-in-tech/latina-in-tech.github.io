import {
  FaTelegram as TelegramIcon,
  FaTwitter as TwitterIcon,
  FaFacebook as FacebookIcon,
  FaLinkedin as LinkedinIcon,
  FaGithub as GithubIcon,
  FaYoutube as YoutubeIcon,
  FaInstagram as InstagramIcon
} from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

const navigationLinks = [
  {
    name: 'Admin team',
    href: '/admins/team',
    local: true,
    icon: RiTeamFill,
    current: true
  },
  {
    name: 'Telegram',
    href: 'https://t.me/+QazM4E1vaUM3NDQ0',
    icon: TelegramIcon,
    current: false
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/theLITCommunity',
    icon: TwitterIcon,
    current: false
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/latina-in-tech',
    icon: LinkedinIcon,
    current: false
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/latinaintech_/',
    icon: InstagramIcon,
    current: false
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/LatinaInTech/',
    icon: FacebookIcon,
    current: false
  },
  {
    name: 'Github',
    href: 'https://github.com/latina-in-tech',
    icon: GithubIcon,
    current: false
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UCSlDl55sw6QbFCDtlWn8Jig',
    icon: YoutubeIcon,
    current: false
  }
];

export default navigationLinks;
