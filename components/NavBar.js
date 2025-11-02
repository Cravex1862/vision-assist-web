"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function NavBar(){
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Vision Assist — Home">
          <img className="logo logo-dark" alt="Vision Assist" src="/imgs/logo-dark.png" />
          <img className="logo logo-light" alt="Vision Assist" src="/imgs/logo-light.png" />
          <img className="logo logo-contrast" alt="Vision Assist" src="/imgs/logo-contrast.png" />
          <span className="sr-only">Vision Assist</span>
        </Link>

        <button aria-label="Open menu" aria-controls="mobile-drawer" aria-expanded={open} className="hamburger" onClick={()=>setOpen(true)}>
          <span />
          <span />
          <span />
        </button>

        <div className="menu desktop">
          <Link href="/">The App</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <a className="btn btn-primary" href="#download">Download App</a>
          <ThemeSwitcher />
        </div>
      </div>

      {open && (
        <div className="overlay open" onClick={()=>setOpen(false)}>
          <aside id="mobile-drawer" className="drawer" role="dialog" aria-modal="true" onClick={(e)=>e.stopPropagation()}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Link href="/" className="brand" aria-label="Vision Assist — Home" onClick={()=>setOpen(false)}>
                <img className="logo logo-dark" alt="Vision Assist" src="/imgs/logo-dark.png" />
                <img className="logo logo-light" alt="Vision Assist" src="/imgs/logo-light.png" />
                <img className="logo logo-contrast" alt="Vision Assist" src="/imgs/logo-contrast.png" />
              </Link>
              <button aria-label="Close menu" className="close" onClick={()=>setOpen(false)}>×</button>
            </div>
            <nav className="drawer-nav">
              <Link href="/" onClick={()=>setOpen(false)}>The App</Link>
              <Link href="/about" onClick={()=>setOpen(false)}>About Us</Link>
              <Link href="/contact" onClick={()=>setOpen(false)}>Contact Us</Link>
              <a className="btn btn-primary" href="#download" onClick={()=>setOpen(false)}>Download App</a>
              <div style={{marginTop:10}}>
                <ThemeSwitcher />
              </div>
            </nav>
          </aside>
        </div>
      )}
    </nav>
  )
}
