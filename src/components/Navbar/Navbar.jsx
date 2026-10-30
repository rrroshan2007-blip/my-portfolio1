import { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'WibzZite', href: '#wibzzite' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-primary-container/10 transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="h-20 max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
        {/* Logo / Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="group flex flex-col justify-center transition-colors"
        >
          <span className="font-headline-sm text-headline-sm text-primary-container tracking-tight group-hover:text-primary transition-colors">
            ROSHAN
          </span>
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">
            STUDENT &amp; CREATIVE TECHNOLOGIST
          </span>
        </a>

        <div className="flex items-center gap-space-lg">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-space-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-space-md pl-space-md border-l border-primary-container/10">
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
            {/* Mobile Toggle */}
            <button
              aria-label="Toggle Mobile Menu"
              className="md:hidden flex items-center justify-center text-primary-container hover:text-primary transition-colors"
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {mobileOpen && (
        <nav className="md:hidden bg-surface border-t border-primary-container/10 px-margin py-space-lg">
          <div className="flex flex-col gap-space-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary-container transition-colors py-space-sm border-b border-primary-container/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

