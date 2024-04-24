import '../../public/styles/globals.css'
import '../../public/styles/about-me-image-wrapper.css'
import '../../public/styles/experience.css'
import '../../public/styles/projects.css'
import '../../public/styles/social-media.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { ThemeProvider } from '../app/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <Head>
        <title>Misty Blunch</title>
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
