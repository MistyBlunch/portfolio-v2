import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import { INavbar } from '../interfaces/locales/navbar.interface'

import { LocaleSwitcher } from '../elements/LocaleSwitcher'
import { ThemeSwitcher } from '../elements/ThemeSwitcher'

import { RenderNavbarIcon } from '../elements/RenderNavbarIcon'
import { HamburgerMenu } from '../elements/HamburgerMenu'
import { Logo } from '../elements/icons/Logo'

export const Navbar = () => {
  const [navbarData, setNavbarData] = useState<INavbar[]>([])
  const { t } = useTranslation(['navbar', 'common'])

  useEffect(() => {
    setNavbarData(t('navigation', { returnObjects: true }) as INavbar[])
  }, [t])

  return (
    <>
      <nav className='py-1 sticky bottom-0 top-0 z-10 flex items-center justify-between border-b bg-light px-2 dark:bg-dark sm:w-full sm:py-0 lg:h-screen lg:w-28 lg:flex-col lg:justify-between lg:border-r lg:border-b-transparent lg:py-8'>
        <div className='flex items-center justify-center lg:mb-4'>
          <Link
            href={t('common:home-url')}
            aria-label='Home Page'
            className='navbar-link'
          >
            <Logo size={45} />
          </Link>
          <HamburgerMenu />
        </div>
        <div className='hidden sm:flex lg:block'>
          {navbarData.map((item, key) => (
            <Link
              key={key}
              href={item.url}
              scroll={false}
              className='navbar-link'
              aria-label='Navigate to section'
            >
              <div className='mx-3 flex flex-col items-center py-2 lg:mx-0 lg:py-4'>
                <RenderNavbarIcon icon={item.name} />
                <h5 className='text-center text-sm'>{item.title}</h5>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex lg:block'>
          <LocaleSwitcher icon={true} />
          <div className='flex justify-center lg:mb-0 lg:mt-5'>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </>
  )
}
