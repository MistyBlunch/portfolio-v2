'use client'

import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { IProject } from '../interfaces/locales/project.interface'

import { TextButtonChangeColorHover } from '../elements/TextButtonChangeColorHover'
import { useEffect, useState } from 'react'

export const Projects = () => {
  const { t } = useTranslation('projects')
  const [projectsData, setProjectsData] = useState<IProject[]>([])

  useEffect(() => {
    setProjectsData(
      t('projects', { returnObjects: true }) as IProject[]
    )
  }, [t])

  return (
    <section
      className='mt-12 md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:p-8 lg:p-12'
      id='#projects'
    >
      <h5 className='font-bold uppercase tracking-wide text-gray-700 dark:text-slate-200 max-lg:p-2 lg:hidden lg:p-4'>
        {t('title')}
      </h5>
      <div className='flex flex-col items-center'>
        <ul>
          {projectsData.map((project, i) => (
            <li key={i} className='flex justify-center'>
              <div className='relative flex max-lg:p-2 lg:w-4/5 lg:p-4'>
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
                      className='border-gray-500 project-img rounded-md border-2 dark:border-slate-200'
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
        <TextButtonChangeColorHover translateDoc='projects' />
      </div>
    </section>
  )
}
