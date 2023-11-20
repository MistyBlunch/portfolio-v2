'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Sun } from '@/public/icons/sun'
import { Moon } from '@/public/icons/moon'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className={`float-right right-5 sticky w-fit rounded-full border border-black dark:border-white bg-transparent p-1 duration-200 hover:scale-110 active:scale-100`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}
