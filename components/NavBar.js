import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function NavBar(){
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Vision Assist — Home">
          <img className="logo logo-dark" alt="Vision Assist" src="/imgs/logo-dark.png" />
          <img className="logo logo-light" alt="Vision Assist" src="/imgs/logo-light.png" />
          <img className="logo logo-contrast" alt="Vision Assist" src="/imgs/logo-contrast.png" />
          <span className="sr-only">Vision Assist</span>
        </Link>
        <div className="menu">
          <Link href="/">The App</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <a className="btn btn-primary" href="#download">Download App</a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
