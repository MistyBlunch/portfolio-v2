import Image from 'next/image'

export const AboutMeImageWrapper = () => {
  return (
    <div className='container flex justify-center'>
      <div className='box aspect-square max-sm:h-[200px] max-sm:w-[200px] sm:h-[300px] sm:w-[300px]'>
        <div className='spin-container'>
          <div className='shape'>
            <div className='bd'>
              <Image
                src='/images/about-me/caricature.webp'
                alt='Caricature Image'
                sizes='100%'
                fill
                priority
                fetchPriority='high'
                className='aspect-square'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
