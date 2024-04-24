import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '@/next-i18next.config'

import { AboutMe } from '../app/components/AboutMe'
import { Navbar } from '../app/components/Navbar'
import { Experience } from '../app/components/Experience'
import { Projects } from '../app/components/Projects'
import { References } from '../app/components/References'
import { SocialMedia } from '../app/elements/SocialMedia'

export default function Home() {
  return (
    <div className='lg:flex'>
      <Navbar />
      <div className='container'>
        <AboutMe />
        <Experience />
        <Projects />
        <References />
        <SocialMedia />
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
      'references',
      'socialmedia'
    ]))
  }
})
