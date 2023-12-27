import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { IHeader } from '../interfaces/locales/header.interface'
import { LocaleSwitcher } from '../elements/LocaleSwitcher'
import { ThemeSwitcher } from '../elements/ThemeSwitcher'

import { RenderIcon } from '../elements/RenderIcon'
import { HamburgerMenu } from '../elements/HamburgerMenu'
import { Logo } from '../elements/icons/Logo'

export default function Header() {
  const { t } = useTranslation('header')

  const navigation = t(
    'header:navigation',
    {},
    { returnObjects: true }
  ) as IHeader[]

  return (
    <>
      <nav className='sticky flex items-center justify-between border-b px-2 xs:py-2 sm:w-full sm:py-0 lg:h-screen lg:w-28 lg:flex-col lg:justify-between lg:border-r lg:border-b-transparent lg:py-8'>
        <div className='flex items-center justify-center lg:mb-4'>
          <Logo size={45} />
          <HamburgerMenu />
        </div>
        <div className='hidden sm:flex lg:block'>
          {navigation.map(item => (
            <Link key={item.name} href={item.href}>
              <div className='mx-3 flex flex-col items-center py-2 lg:mx-0 lg:py-4'>
                <RenderIcon icon={item.icon} />
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
