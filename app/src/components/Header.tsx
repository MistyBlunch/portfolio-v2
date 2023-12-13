import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { IHeader } from '../interfaces/locales/header.interface'
import { LocaleSwitcher } from '../elements/LocaleSwitcher'
import { ThemeSwitcher } from '../elements/ThemeSwitcher'

import { Logo } from '../elements/icons/Logo'
import {
  BeakerIcon,
  UserCircleIcon,
  BoltIcon,
  PhoneIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'

export default function Header() {
  const { t } = useTranslation('header')

  const navigation = t(
    'header:navigation',
    {},
    { returnObjects: true }
  ) as IHeader[]

  const renderIcon = (icon: string) => {
    if (icon === 'aboutme') return <UserCircleIcon className='w-8' />
    if (icon === 'experience') return <BeakerIcon className='w-8' />
    if (icon === 'project') return <BoltIcon className='w-8' />
    if (icon === 'contact') return <PhoneIcon className='w-8' />
  }

  return (
    <>
      <nav className='sticky flex items-center justify-between border-b border-black px-4 dark:border-white sm:w-full lg:top-0 lg:w-28 lg:flex-col lg:justify-between lg:border-r lg:py-10'>
        <div className='flex justify-center lg:mb-4'>
          <Logo />
          <Bars3Icon className='ml-3 flex w-8 sm:hidden' />
        </div>
        <div className='hidden sm:flex lg:block'>
          {navigation.map(item => (
            <Link key={item.name} href={item.href}>
              <div className='mx-4 flex flex-col items-center py-2 lg:mx-0 lg:py-4'>
                {renderIcon(item.icon)}
                <h5 className='text-center text-sm'>{item.name}</h5>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex lg:block'>
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  )
}
