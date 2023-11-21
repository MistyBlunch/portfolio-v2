import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Hero({ lang }: { lang: Locale }) {
  const { sections } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{sections.hero.greeting}</h1>
        <p className='text-gray-500'>{sections.hero.nickname}</p>
      </div>
    </section>
  )
}
