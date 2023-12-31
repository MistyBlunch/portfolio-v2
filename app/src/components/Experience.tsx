'use client'

import '../../../public/styles/experience.css'

import useTranslation from 'next-translate/useTranslation'
import { IExperience } from '../interfaces/locales/experience.interface'
import { motion } from 'framer-motion'
import { processDate } from '../utils/processDate'
import { useTheme } from 'next-themes'
import { TextColorChangeLight } from '../elements/TextColorChangeLight'
import { TextColorChangeDark } from '../elements/TextColorChangeDark'
import NoSsr from '../elements/NoSsr'

export default function Experience() {
  const { theme } = useTheme()

  const { t } = useTranslation('experience')

  const experience = t(
    'experience',
    {},
    { returnObjects: true }
  ) as IExperience[]

  return (
    <section
      className='md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:p-8 lg:p-12'
      id='#experience'
    >
      <h5 className='mb-4 font-bold text-gray-700 dark:text-slate-200 lg:hidden'>
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
                    <ul className='flex flex-wrap'>
                      {exp.keywords.map(keyword => (
                        <li key={keyword} className='mr-1.5 mt-1.5'>
                          <div className='rounded-full bg-pink-light/10 px-3 py-1 text-xs font-semibold text-pink-dark'>
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
        <div className='p-4 lg:w-4/5'>
          <motion.a href={t('resume-link')} className='link'>
            <div className='flex font-semibold'>
              <NoSsr>
                {theme === 'dark' ? (
                  <TextColorChangeDark text={t('cto-text')} />
                ) : (
                  <TextColorChangeLight text={t('cto-text')} />
                )}
              </NoSsr>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
