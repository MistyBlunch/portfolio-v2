import 'tw-elements/dist/css/tw-elements.min.css'

import '../../public/styles/globals.css'
import '../../public/styles/about-me-image-wrapper.css'
import '../../public/styles/experience.css'
import '../../public/styles/projects.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { appWithTranslation } from 'next-i18next'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from '../providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}


export default appWithTranslation(MyApp)
