import 'tw-elements/dist/css/tw-elements.min.css'

import '../../public/styles/globals.css'
import '../../public/styles/about-me-image-wrapper.css'
import '../../public/styles/experience.css'
import '../../public/styles/projects.css'
import '../../public/styles/social-media.css'

import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { ThemeProvider } from '../providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
