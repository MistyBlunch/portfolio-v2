'use client'

import { useEffect, useState } from 'react'

import type { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import nextI18nextConfig from '@/next-i18next.config'

import { IProjectHistory } from '../../app/interfaces/locales/project.history.interface'
import { IProjectHistoryNavigation } from '../../app/interfaces/locales/project.history.navigation.interface'

import { ThemeSwitcher } from '../../app/elements/ThemeSwitcher'
import { LocaleSwitcher } from '../../app/elements/LocaleSwitcher'

import { ArrowLeft, ArrowRight } from 'iconoir-react'

const ProjectHistory = () => {
  const { t } = useTranslation(['projects-history', 'common'])
  const [navigationData, setNavigationData] = useState<
    IProjectHistoryNavigation[]
  >([])
  const [projectsData, setProjectsData] = useState<IProjectHistory[]>([])

  useEffect(() => {
    setNavigationData(
      t('navigation', {
        returnObjects: true
      }) as IProjectHistoryNavigation[]
    )

    setProjectsData(t('projects', { returnObjects: true }) as IProjectHistory[])
  }, [t])

  return (
    <section className='lg:pmd:container max-sm:-12 relative md:container max-sm:px-4 max-sm:py-8 sm:mx-auto sm:p-8'>
      <div className='absolute right-0 top-0 flex pt-8 max-sm:-translate-y-4 max-sm:pr-4 sm:pr-8'>
        <ThemeSwitcher />
        <LocaleSwitcher icon={false} />
      </div>
      <Link
        href={t('common:home-url')}
        className='inline-flex text-sm font-medium text-pink-dark'
      >
        <ArrowLeft className='mr-1 w-4' />
        {t('common:nickname')}
      </Link>
      <h3 className='font-bold text-gray-700 dark:text-slate-200 max-md:mb-2 max-md:text-2xl md:mb-4 md:text-3xl'>
        {t('title')}
      </h3>
      <table
        id='content'
        className='mt-6 w-full border-collapse text-left max-md:mt-5 md:mt-12'
      >
        <thead className=' sticky top-0 z-10 px-6 py-5 backdrop-blur'>
          <tr>
            {navigationData.map((nav, i) => (
              <th key={i} className={nav.class}>
                {nav.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projectsData.map((project, i) => (
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
                    <ArrowRight className='ml-1 w-4 sm:hidden' />
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
                {project.source ? (
                  <a
                    className='inline-flex items-center text-sm font-medium leading-tight text-gray-700 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200'
                    href={project.link}
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label={project.link}
                  >
                    <span className='inline-block'>{project.source}</span>
                    <ArrowRight className='ml-1 w-4 text-gray-700 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200' />
                  </a>
                ) : (
                  ''
                )}
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

const locales = nextI18nextConfig.i18n.locales
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? locales[0], [
      'common',
      'projects-history'
    ]))
  }
})

export default ProjectHistory
