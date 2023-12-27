import useTranslation from 'next-translate/useTranslation'

export default function Hero() {
  const { t } = useTranslation('common')

  return (
    <section>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{t('hero.greeting')}</h1>
        <p>{t('hero.nickname')}</p>
      </div>
    </section>
  )
}
