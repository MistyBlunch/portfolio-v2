import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import { IHeader } from '../interfaces/locales/header.interface'
import { LocaleSwitcher } from '../elements/LocaleSwitcher'

export default function Header() {
  const { t } = useTranslation('header')
  const navigation = t(
    'header:navigation',
    {},
    { returnObjects: true }
  ) as IHeader[]

  return (
    <>
      <nav className='left-0 top-0 w-full bg-transparent'>
        <div className='mx-auto max-w-7xl px-4 py-2 sm:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='justify-space-between flex flex-1 items-center sm:items-stretch sm:justify-start'>
              <Image
                className='mr-1 w-11'
                src='icon.svg'
                alt='Logo'
                width={'20'}
                height={'20'}
              />
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <div className='ml-6 mr-4 hidden sm:block'>
                <div className='flex space-x-4'>
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <LocaleSwitcher />
      </nav>
    </>
  )
}
