'use client'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import { HeroIcon } from '../elements/HeroIcon'
import { Component } from 'react'

export default function Hero() {
  const { t } = useTranslation('common')

  return (
    <section className='md:container xs:px-8 sm:mx-auto xs:py-8 sm:p-8 lg:p-12' id='#aboutme'>
      <div className='lg:flex lg:items-center'>
        <div>
          <div className='mb-4'>
            <h1 className='text-3xl font-bold text-gray-700 dark:text-slate-200'>
              {t('hero.nickname')}, {t('hero.position')}
            </h1>
            <p>{t('hero.highlight')}</p>
          </div>
          <p className='mb-4'>
            <Trans
              i18nKey='common:hero.intro'
              components={{
                component: <Component />,
                anchorOrganizations: (
                  <a
                    href='https://linktr.ee/mistyblunch'
                    target='_blank'
                    className='font-bold'
                  />
                )
              }}
            />
          </p>
          <p className='mb-4'>
            <Trans
              i18nKey='common:hero.currently'
              components={{
                component: <Component />,
                anchorMusic: (
                  <a
                    href='https://bit.ly/mistys2023songs'
                    target='_blank'
                    className='font-bold'
                  />
                )
              }}
            />
          </p>
        </div>
        <div className='m-5'>
          <HeroIcon />
        </div>
      </div>
    </section>
  )
}
