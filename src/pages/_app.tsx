import '../../public/styles/globals.css'
import '../../public/styles/experience.css'
import '../../public/styles/projects.css'
import '../../public/styles/social-media.css'
import '../../public/styles/about-me-image-wrapper.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '../app/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
      <Head>
        <title>Misty Blunch</title>
        <meta
          name='description'
          content='Software Engineer with 5 years of experience building scalable web applications and AI-powered products across Fintech, EdTech, and e-commerce.'
          key='desc'
        />
        <meta property='og:title' content="Grace Alvarado | Software Engineer"></meta>
        <meta
          property='og:description'
          content='Software Engineer with 5 years of experience building scalable web applications and AI-powered products across Fintech, EdTech, and e-commerce.'
        />
        <meta property='og:image' content='https://i.ibb.co/sH7DKqt/me.jpg' />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
