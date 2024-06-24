'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === 'dark'


  useEffect(() => {
    setMounted(true)
  }, [])

  // When mounted on client, show the button
  if (!mounted) {
    return null // null will not render anything
  }
  return (
    <button
      className="flex px-4 py-2  dark:text-black  dark:bg-white font-semibold rounded-md"
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark')
      }}>
      {isDark && (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
      )}
      {!isDark && (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
    </button>
  )
}
