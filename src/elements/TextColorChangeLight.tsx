import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const TextColorChangeLight = (props: { text: string }) => {
  const lightTextVariants = {
    rest: { color: '#374151' },
    hover: { color: '#c454ae' }
  }

  const containerVariants = {
    hover: { transition: { staggerChildren: 0.02 } }
  }

  return (
    <motion.div
      className='text-link-wrapper'
      initial='rest'
      whileHover='hover'
      variants={containerVariants}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      <div className='flex font-semibold'>
        {props.text.split('').map((char, index) => (
          <motion.h5
            key={index}
            variants={lightTextVariants}
            className='whitespace-pre text-lg'
          >
            {char}
          </motion.h5>
        ))}
        <ArrowRightIcon className='ml-2 w-5' />
      </div>
    </motion.div>
  )
}
