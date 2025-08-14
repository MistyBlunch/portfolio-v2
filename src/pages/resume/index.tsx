'use client'

import { useRouter } from 'next/router'
import type { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '@/next-i18next.config'

const Resume = () => {
  const { t } = useTranslation('resume')
  const route = useRouter()
  const locale = route.locale
  const pdfName = 'grace-alvarado_resume'
  const pdfPath = `/pdfs/${pdfName}_${locale}.pdf`
  
  return (
    <div className='w-full h-screen'>
      <embed
        src={pdfPath}
        type='application/pdf'
        title={t('embed.title')}
        aria-label={t('embed.aria')}
        className='w-full h-full'
      />
      <div className='sr-only'>
        {t('fallback.prefix')}
        {' '}
        <a href={pdfPath} target='_blank' rel='noopener noreferrer'>
          {t('fallback.open')}
        </a>
        {' '}
        {t('fallback.or')}
        {' '}
        <a href={pdfPath} download>
          {t('fallback.download')}
        </a>.
      </div>
    </div>
  )
}

export default Resume

const locales = nextI18nextConfig.i18n.locales
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? locales[0], ['common', 'resume']))
  }
})
