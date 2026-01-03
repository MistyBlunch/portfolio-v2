'use client'

import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import { IExperience } from '../interfaces/locales/experience.interface'
import { TextButtonChangeColorHover } from '../elements/TextButtonChangeColorHover'

import { useEffect, useState } from 'react'
import { processDate } from '../utils/helpers/processDate'

export const Experience = () => {
  const { t, i18n } = useTranslation('experience')
  const [experienceData, setExperienceData] = useState<IExperience[]>([])

  useEffect(() => {
    setExperienceData(t('experience', { returnObjects: true }) as IExperience[])
  }, [t])

  return (
    <section
      className='mt-5 md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:px-8 sm:pt-16 lg:p-12'
      id='experience'
    >
      <h5 className='font-bold uppercase tracking-wide text-gray-700 dark:text-slate-200 max-lg:p-2 lg:hidden lg:p-4'>
        {t('title')}
      </h5>
      <div className='flex flex-col items-center'>
        <ul>
          {experienceData.map(exp => (
            <li key={exp.name} className='mb-2 flex justify-center'>
              <div className='relative flex max-lg:p-2 lg:w-4/5 lg:p-4'>
                <motion.a
                  aria-label={exp.name}
                  className='link-wrapper absolute m-[-14px] h-full w-full rounded-lg max-lg:hidden'
                  whileHover={{
                    transition: { duration: 0.3 },
                    backgroundColor: 'rgba(219, 152, 206, .05)'
                  }}
                  href={exp.url}
                  target='_blank'
                ></motion.a>
                <div className='grid max-md:gap-y-2 md:grid-cols-5 md:gap-x-5'>
                  <div className='text-sm uppercase'>
                    <span>{processDate(exp, i18n.language)}</span>
                  </div>
                  <div className='md:col-span-4'>
                    <div className='mb-2'>
                      <a
                        className='link font-bold text-gray-700 dark:text-slate-200'
                        href={exp.url}
                        aria-label={exp.name}
                        target='_blank'
                      >
                        <span className='flex items-center'>
                          {exp.position} · {exp.name}
                          {exp.contract === 'freelance' && (
                            <span className='ml-2 rounded-full border border-pink-dark/50 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-pink-dark dark:text-pink-light'>
                              Freelance
                            </span>
                          )}
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
        <TextButtonChangeColorHover translateDoc='experience' />
      </div>
    </section>
  )
}
