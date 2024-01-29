'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex justify-center'>
      <button
        className='mx-2 w-fit bg-transparent lg:mx-0'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? (
          <MoonIcon className='navbar-link max-lg:w-6 lg:w-8' />
        ) : (
          <SunIcon className='navbar-link max-lg:w-6 lg:w-8' />
        )}
      </button>
    </div>
  )
}
