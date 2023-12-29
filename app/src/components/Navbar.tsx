import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { INavbar } from '../interfaces/locales/navbar.interface'
import { LocaleSwitcher } from '../elements/LocaleSwitcher'
import { ThemeSwitcher } from '../elements/ThemeSwitcher'

import { RenderIcon } from '../elements/RenderIcon'
import { HamburgerMenu } from '../elements/HamburgerMenu'
import { Logo } from '../elements/icons/Logo'

export default function Navbar() {
  const { t } = useTranslation('navbar')

  const navigation = t(
    'navbar:navigation',
    {},
    { returnObjects: true }
  ) as INavbar[]

  return (
    <>
      <nav className='sticky bottom-0 top-0 flex items-center justify-between border-b bg-light px-2 dark:bg-dark xs:py-2 sm:w-full sm:py-0 lg:h-screen lg:w-28 lg:flex-col lg:justify-between lg:border-r lg:border-b-transparent lg:py-8'>
        <div className='flex items-center justify-center lg:mb-4'>
          <Link href='/' className='navbar-link'>
            <Logo size={45} />
          </Link>
          <HamburgerMenu />
        </div>
        <div className='hidden sm:flex lg:block'>
          {navigation.map(item => (
            <Link key={item.name} href={item.href} className='navbar-link'>
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
