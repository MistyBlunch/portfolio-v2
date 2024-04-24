import { motion } from 'framer-motion'
import { ArrowRight } from 'iconoir-react'
import colors from 'tailwindcss/colors'

export const TextColorChangeDark = (props: { text: string }) => {
  const darkTextVariants = {
    rest: { color: colors.slate[200] },
    hover: { color: '#c454ae' }
  }

  const containerVariants = {
    hover: { transition: { staggerChildren: 0.02 } }
  }

  return (
    <motion.div
      className='pink-wrapper-hover'
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
            className='text-md whitespace-pre'
          >
            {char}
          </motion.h5>
        ))}
        <ArrowRight className='ml-2 w-5' />
      </div>
    </motion.div>
  )
}
