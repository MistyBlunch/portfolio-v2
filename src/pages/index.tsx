import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '@/next-i18next.config'

import { AboutMe } from '../components/AboutMe'
import { Navbar } from '../components/Navbar'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'

export default function Home() {
  return (
    <div className='lg:flex'>
      <Navbar />
      <div className='mx-auto'>
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

const locales = nextI18nextConfig.i18n.locales
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? locales[0], [
      'common',
      'navbar',
      'about-me',
      'experience',
      'projects',
    ]))
  }
})
