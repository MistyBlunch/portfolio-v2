import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const TextColorChangeDark = (props: { text: string }) => {
  const darkTextVariants = {
    rest: { color: '#e2e8f0' },
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
            variants={darkTextVariants}
            className='whitespace-pre text-md'
          >
            {char}
          </motion.h5>
        ))}
        <ArrowRightIcon className='ml-2 w-5' />
      </div>
    </motion.div>
  )
}
