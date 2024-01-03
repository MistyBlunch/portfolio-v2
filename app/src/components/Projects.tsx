'use client'

import '../../../public/styles/projects.css'

import useTranslation from 'next-translate/useTranslation'
import { IProject } from '../interfaces/locales/project.interface'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { TextColorChangeLight } from '../elements/TextColorChangeLight'
import { TextColorChangeDark } from '../elements/TextColorChangeDark'
import NoSsr from '../elements/NoSsr'
import Image from 'next/image'

export const Projects = () => {
  const { theme } = useTheme()

  const { t } = useTranslation('projects')

  const projects = t('projects', {}, { returnObjects: true }) as IProject[]

  return (
    <section
      className='md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:p-8 lg:p-12'
      id='#projects'
    >
      <h5 className='mb-4 p-4 font-bold uppercase tracking-wide text-gray-700 dark:text-slate-200 lg:hidden'>
        {t('title')}
      </h5>
      <div className='flex flex-col items-center'>
        <ul>
          {projects.map((project, i) => (
            <li key={i} className='flex justify-center'>
              <div className='relative mb-4 flex p-4 lg:w-4/5'>
                <motion.a
                  className='link-wrapper absolute m-[-14px] h-full w-full rounded-lg max-lg:hidden'
                  whileHover={{
                    transition: { duration: 0.5 },
                    backgroundColor: 'rgba(219, 152, 206, .05)'
                  }}
                  href={project.link}
                  target='_blank'
                ></motion.a>
                <div className='grid max-md:gap-y-2 md:grid-cols-8 md:gap-x-5'>
                  <div className='text-sm uppercase max-md:w-3/5 max-sm:w-4/5 sm:col-span-3 md:col-span-2'>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={740}
                      height={150}
                      className='border-gray-500 project-img rounded-sm border-2 dark:border-slate-200'
                    ></Image>
                  </div>
                  <div className='max-md:col-start-1 max-md:row-start-1 sm:col-span-5 md:col-span-6'>
                    <div className='mb-2'>
                      <a
                        className='link font-bold text-gray-700 dark:text-slate-200'
                        href={project.link}
                        target='_blank'
                      >
                        <span>{project.name}</span>
                      </a>
                    </div>
                    <p className='mb-2 text-sm'>{project.description}</p>
                    <ul className='flex -translate-y-1.5 flex-wrap '>
                      {project.tools.map((tool, i) => (
                        <li key={i} className='mr-1.5 mt-1.5'>
                          <div className='rounded-full bg-pink-light/10 px-3 py-1 text-xs font-semibold leading-5 text-pink-dark'>
                            {tool}
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
            href={t('projects-link')}
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
