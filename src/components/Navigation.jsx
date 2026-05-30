import { useEffect, useState } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'works', 'gallery', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#works', label: 'WORKS' },
    { href: '#gallery', label: 'GALLERY' },
    { href: '#contact', label: 'CONTACT' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b-2 border-surface-container-highest flex justify-between items-center px-gutter py-stack-sm max-w-[100vw] left-0 right-0">
      <div className="font-display-lg text-body-lg font-bold text-on-surface">
        APM_PORTFOLIO
      </div>
      <div className="flex gap-stack-lg">
        {navItems.map((item) => (
          <a
            key={item.href}
            className={`font-label-mono text-label-mono uppercase font-bold transition-colors duration-200 ${
              activeSection === item.href.substring(1)
                ? 'text-tertiary border-b-2 border-tertiary pb-1'
                : 'text-on-surface hover:text-tertiary'
            }`}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
