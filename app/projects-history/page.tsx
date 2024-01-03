'use client'

import useTranslation from 'next-translate/useTranslation'
import { IProjectHistory } from '../src/interfaces/locales/project.history.interface'
import { IProjectHistoryNavigation } from '../src/interfaces/locales/project.history.navigation.interface'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ThemeSwitcher } from '../src/elements/ThemeSwitcher'
import { LocaleSwitcher } from '../src/elements/LocaleSwitcher'

const ProjectHistory = () => {
  const { t } = useTranslation('projects-history')

  const navigation = t(
    'navigation',
    {},
    { returnObjects: true }
  ) as IProjectHistoryNavigation[]

  const projects = t(
    'projects',
    {},
    { returnObjects: true }
  ) as IProjectHistory[]

  return (
    <section className='relative md:container max-sm:mx-4 max-sm:my-8 sm:m-8 sm:mx-auto lg:m-12'>
      <div className='absolute right-0 top-0 flex md:pr-8 max-sm:-translate-y-4'>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
      <Link href='/' className='inline-flex text-sm font-medium text-pink-dark'>
        <ArrowLeftIcon className='mr-1 w-4' />
        {t('subtitle')}
      </Link>
      <h3 className='mb-4 text-3xl font-bold text-gray-700 dark:text-slate-200'>
        {t('title')}
      </h3>
      <table
        id='content'
        className='mt-6 w-full border-collapse text-left md:mt-12'
      >
        <thead className='bg-slate-900/75 sticky top-0 z-10 px-6 py-5 backdrop-blur'>
          <tr>
            {navigation.map((nav, i) => (
              <th key={i} className={nav.class}>
                {nav.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => (
            <tr
              key={i}
              className='border-b border-slate-300/10 last:border-none'
            >
              <td className='py-4 pr-4 align-top text-sm'>{project.year}</td>

              <td className='flex py-4 pr-4 text-sm sm:hidden'>
                {project.source !== '' ? (
                  <a
                    className='inline-flex items-center text-sm font-medium leading-tight text-gray-700 hover:text-gray-800 dark:text-slate-200'
                    href={project.link}
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label={project.link}
                  >
                    <span className='inline-block'>{project.name}</span>
                    <ArrowRightIcon className='ml-1 w-4 sm:hidden' />
                  </a>
                ) : (
                  <span className='text-sm font-medium leading-tight text-gray-700 dark:text-slate-200'>
                    {project.name}
                  </span>
                )}
              </td>
              <td className='py-4 pr-4 align-top text-sm font-medium leading-tight text-gray-700 dark:text-slate-200 max-sm:hidden'>
                {project.name}
              </td>
              <td className='py-4 pr-4 align-top max-md:hidden lg:table-cell'>
                <ul className='flex -translate-y-1.5 flex-wrap'>
                  {project.tools.map((tool, i) => (
                    <li className='my-1 mr-1.5' key={i}>
                      <div className='flex items-center rounded-full bg-pink-light/10 px-3 py-1 text-xs font-bold leading-5 text-pink-dark '>
                        {tool}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              <td className='py-4 pr-4 align-top max-sm:hidden lg:table-cell'>
                <ul>
                  <li className='mb-1 flex items-center'>
                    <a
                      className='inline-flex items-baseline text-sm font-medium leading-tight text-gray-700 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200'
                      href={project.link}
                      target='_blank'
                      rel='noreferrer noopener'
                      aria-label={project.link}
                    >
                      <span className='inline-block'>{project.source}</span>
                    </a>
                  </li>
                </ul>
              </td>
              <td className='py-4 pr-4 align-top text-sm text-gray-700 dark:text-slate-200 max-lg:hidden'>
                {project.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ProjectHistory
