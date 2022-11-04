import DocumentIcon from '@/assets/icons/navigation/document.svg';
import UsersIcon from '@/assets/icons/navigation/users.svg';
import FlagIcon from '@/assets/icons/navigation/flag.svg';
import PhoneIcon from '@/assets/icons/navigation/phone.svg';

export const NAVIGATION = [
  {
    id: 0,
    title: 'Опросы',
    to: '/surveys',
    icon: DocumentIcon,
  },
  {
    id: 1,
    title: 'Пользователи',
    to: '/users',
    icon: UsersIcon,
  },
  {
    id: 3,
    title: 'Черные списки',
    to: '/blacklists',
    icon: FlagIcon,
  },
  {
    id: 4,
    title: 'Колл-центр',
    to: '/call-centers',
    icon: PhoneIcon,
  },
]
