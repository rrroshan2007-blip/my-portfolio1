const currentYear = new Date().getFullYear()

const handleScroll = (e, href) => {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const footerLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'WibzZite', href: '#wibzzite' },
  { label: 'Contact', href: '#contact' },
]

export function PrimaryFooter() {
  return (
    <footer className="w-full bg-surface-container border-t border-primary-container/10 py-space-2xl px-margin md:px-margin-tablet lg:px-margin-desktop">
      <div className="max-w-[1600px] mx-auto space-y-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-lg border-b border-primary-container/10">
          {/* Identity */}
          <div className="space-y-space-xs">
            <span className="font-headline-lg text-headline-md text-primary-container tracking-tight font-medium uppercase block">
              Roshan
            </span>
            <p className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">
              Engineering Student · Creative Technology
            </p>
          </div>
          {/* Navigation Links */}
          <nav className="flex items-center gap-space-xl">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary-container transition-colors"
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md font-metadata text-metadata text-on-surface-variant">
          <p className="italic font-editorial-serif text-[15px] text-secondary">
            "Designed with curiosity. Built with creativity."
          </p>
          <p className="tracking-wide">
            © {currentYear} Roshan. All rights reserved. Built for WibzZite.
          </p>
        </div>
      </div>
    </footer>
  )
}

export function SecondaryFooter() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-primary-container/10 mt-space-3xl">
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl flex flex-col md:flex-row items-baseline justify-between gap-space-xl">
        <div className="space-y-space-xs">
          <div className="font-editorial-serif text-editorial-serif text-primary-container italic">
            Roshan
          </div>
          <p className="font-metadata text-metadata text-secondary tracking-wide uppercase">
            Creative Technologist &amp; System Architect
          </p>
        </div>
        <div className="flex flex-col md:items-end space-y-space-xs">
          <p className="font-metadata text-metadata text-on-surface-variant">
            © {currentYear} Roshan. All rights reserved.
          </p>
          <p className="font-metadata text-metadata text-outline">
            Crafted with editorial discipline &amp; high precision.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  return (
    <>
      <PrimaryFooter />
      <SecondaryFooter />
    </>
  )
}
