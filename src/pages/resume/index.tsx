'use client'

import { useRouter } from 'next/router'

const Resume = () => {
  const route = useRouter()
  const locale = route.locale
  const pdfName = 'grace-alvarado_resume'
  const pdfPath = `/pdfs/${pdfName}_${locale}.pdf`
  
  return (
    <div className='w-full h-screen'>
      <embed src={pdfPath} type='application/pdf' className='w-full h-full' />
    </div>
  )
}

export default Resume
