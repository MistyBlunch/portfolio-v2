import Image from 'next/image'

export const AboutMeImageWrapper = () => {
  return (
    <div className='container flex justify-center'>
      <div className='box max-sm:h-[250px] max-sm:w-[250px] sm:h-[320px] sm:w-[320px]'>
        <div className='spin-container'>
          <div className='shape'>
            <div className='bd'>
              <Image
                src='/images/about-me/caricature.webp'
                alt='Caricature Image'
                fill
                priority
                fetchPriority='high'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
