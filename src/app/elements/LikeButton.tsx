import { ThumbsUp } from 'iconoir-react'

export const LikeButton = () => {
  return (
    <div className='fixed right-0 top-0 mr-4 mt-4 cursor-pointer rounded-full border px-[.8rem] py-[.3rem]'>
      <ThumbsUp className='h-6 w-6' />
      <p className='text-xs text-center'>1</p>
    </div>
  )
}
