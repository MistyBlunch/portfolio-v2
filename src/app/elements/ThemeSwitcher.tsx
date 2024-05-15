'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { HalfMoon, SunLight } from 'iconoir-react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    if (theme === 'system') {
      setTheme('dark')
    }
  }, [setTheme, theme])

  if (!mounted) return null

  return (
    <div className='flex justify-center'>
      <button
        id='theme-switcher-button'
        aria-label='Switch theme button'
        className='mx-2 w-fit bg-transparent lg:mx-0'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? (
          <HalfMoon className='navbar-link max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
        ) : (
          <SunLight className='navbar-link max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
        )}
      </button>
    </div>
  )
}
