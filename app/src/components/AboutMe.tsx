'use client'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import { AboutMeImageWrapper } from '../elements/AboutMeImageWrapper'
import { Component } from 'react'

export default function AboutMe() {
  const { t } = useTranslation('common')

  return (
    <section className='md:container xs:px-8 sm:mx-auto xs:py-8 sm:p-8 lg:p-12' id='#aboutme'>
      <div className='lg:flex lg:items-center'>
        <div>
          <div className='mb-4'>
            <h1 className='text-3xl font-bold text-gray-700 dark:text-slate-200'>
              {t('about-me.nickname')}, {t('about-me.position')}
            </h1>
            <p>{t('about-me.highlight')}</p>
          </div>
          <p className='mb-4'>
            <Trans
              i18nKey='common:about-me.intro'
              components={{
                component: <Component />,
                anchorOrganizations: (
                  <a
                    href='https://linktr.ee/mistyblunch'
                    target='_blank'
                    className='font-bold content-link'
                  />
                )
              }}
            />
          </p>
          <p className='mb-4'>
            <Trans
              i18nKey='common:about-me.currently'
              components={{
                component: <Component />,
                anchorMusic: (
                  <a
                    href='https://bit.ly/mistys2023songs'
                    target='_blank'
                    className='font-bold content-link'
                  />
                )
              }}
            />
          </p>
        </div>
        <div className='m-5'>
          <AboutMeImageWrapper />
        </div>
      </div>
    </section>
  )
}
