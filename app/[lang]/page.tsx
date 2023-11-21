import { Locale } from '@/i18n.config'

import Header from './components/Header'
import { ThemeSwitcher } from './elements/ThemeSwitcher'
import Hero from './components/Hero'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <>
      <Header lang={lang} />
      <Hero lang={lang} />
      <ThemeSwitcher />
    </>
  )
}
