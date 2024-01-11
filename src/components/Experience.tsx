'use client'

// TODO: Actualizar
import { useTranslation } from 'next-i18next'
import { useTheme } from 'next-themes'

import { motion } from 'framer-motion'

import { IExperience } from '../interfaces/locales/experience.interface'

import { TextColorChangeLight } from '../elements/TextColorChangeLight'
import { TextColorChangeDark } from '../elements/TextColorChangeDark'
import NoSsr from '../elements/NoSsr'

import { processDate } from '../utils/processDate'

export const Experience = () => {
  const { theme } = useTheme()
  const { t } = useTranslation('experience')
  const experience = t('experience', { returnObjects: true }) as IExperience[]

  return (
    <section
      className='md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:p-8 lg:p-12 mt-5'
      id='#experience'
    >
      <h5 className='mb-4 p-4 font-bold uppercase tracking-wide text-gray-700 dark:text-slate-200 lg:hidden'>
        {t('title')}
      </h5>
      <div className='flex flex-col items-center'>
        <ul>
          {experience.map(exp => (
            <li key={exp.name} className='flex justify-center'>
              <div className='relative mb-4 flex p-4 lg:w-4/5'>
                <motion.a
                  className='link-wrapper absolute m-[-14px] h-full w-full rounded-lg max-lg:hidden'
                  whileHover={{
                    transition: { duration: 0.5 },
                    backgroundColor: 'rgba(219, 152, 206, .05)'
                  }}
                  href={exp.url}
                  target='_blank'
                ></motion.a>
                <div className='grid max-md:gap-y-2 md:grid-cols-5 md:gap-x-5'>
                  <div className='text-sm uppercase'>
                    <span>{processDate(exp)}</span>
                  </div>
                  <div className='md:col-span-4'>
                    <div className='mb-2'>
                      <a
                        className='link font-bold text-gray-700 dark:text-slate-200'
                        href={exp.url}
                        target='_blank'
                      >
                        <span>
                          {exp.position} · {exp.name}
                        </span>
                      </a>
                    </div>
                    <p className='mb-2 text-sm'>{exp.summary}</p>
                    <ul className='flex -translate-y-1.5 flex-wrap '>
                      {exp.keywords.map(keyword => (
                        <li key={keyword} className='mr-1.5 mt-1.5'>
                          <div className='rounded-full bg-pink-light/10 px-3 py-1 text-xs font-semibold leading-5 text-pink-dark'>
                            {keyword}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='mr-auto p-4 lg:w-4/5'>
          <motion.a
            href={t('resume-link')}
            className='link flex w-fit font-semibold'
          >
            <NoSsr>
              {theme === 'dark' ? (
                <TextColorChangeDark text={t('cto-text')} />
              ) : (
                <TextColorChangeLight text={t('cto-text')} />
              )}
            </NoSsr>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
