import './globals.css'
import 'tw-elements/dist/css/tw-elements.min.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from './src/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MistyBlunch's Briefcase"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
