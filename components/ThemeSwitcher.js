"use client"

import { useEffect, useState } from 'react'

export default function ThemeSwitcher(){
  const getInitial = () => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('va-theme') || 'dark'
  }
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
      if (typeof window !== 'undefined') localStorage.setItem('va-theme', theme)
    }
  }, [theme])

  return (
    <div className="theme-switch">
      <label htmlFor="theme" className="sr-only">Theme</label>
      <select id="theme" className="select" value={theme} onChange={(e)=>setTheme(e.target.value)} aria-label="Color mode">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="contrast">High Contrast</option>
      </select>
    </div>
  )
}
