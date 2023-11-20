import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

import Header from './components/Header'
import { ThemeSwitcher } from './elements/ThemeSwitcher'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <>
      <Header lang={lang} />
      <section className='py-24'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>{page.home.title}</h1>
          <p className='text-gray-500'>{page.home.description}</p>
        </div>
      </section>
      <ThemeSwitcher />
    </>
  )
}
