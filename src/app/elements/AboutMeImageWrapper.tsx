import Image from 'next/image'
import { memo } from 'react'

export const AboutMeImageWrapper = memo(() => {
  return (
    <div className='container flex justify-center'>
      <div className='box aspect-square max-sm:h-[200px] max-sm:w-[200px] sm:h-[300px] sm:w-[300px]'>
        <div className='spin-container'>
          <div className='shape'>
            <div className='bd'>
              <Image
                src='/images/about-me/me.webp'
                alt='Misty Blunch Image'
                fill
                priority
                className='aspect-square'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

AboutMeImageWrapper.displayName = 'AboutMeImageWrapper'
