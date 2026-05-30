import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const heroTextRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroText = heroTextRef.current
      if (!heroText) return

      const scrolled = window.scrollY
      if (scrolled < 800) {
        const scale = 1 + scrolled * 0.0005
        const opacity = 1 - scrolled * 0.0015
        const translateY = scrolled * 0.2
        heroText.style.transform = `scale(${scale}) translateY(${translateY}px)`
        heroText.style.opacity = opacity
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleButtonClick = (target) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-start px-gutter pt-32 pb-stack-lg overflow-hidden relative"
      id="home"
    >
      <h1
        ref={heroTextRef}
        className="font-display-xl text-display-xl uppercase leading-tight tracking-tighter z-10"
        id="hero-text"
      >
        AI PRODUCT
        <br />
        MANAGER
      </h1>
      <div className="mt-stack-lg grid grid-cols-12 w-full z-10">
        <p className="col-span-12 md:col-start-6 md:col-span-7 font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          BUILDING AI PRODUCTS THAT CONNECT TECHNOLOGY AND USERS. TRANSFORMING
          COMPLEX NEURAL ARCHITECTURES INTO INTUITIVE HUMAN EXPERIENCES.
        </p>
      </div>
      <div className="mt-stack-lg flex flex-wrap gap-stack-md z-10">
        <button
          onClick={() => handleButtonClick('#works')}
          className="bg-on-surface text-surface px-10 py-5 font-label-mono text-label-mono uppercase sharp-border hover:bg-tertiary hover:text-surface transition-all duration-300 active:scale-95"
        >
          VIEW WORKS
        </button>
        <button
          onClick={() => handleButtonClick('#contact')}
          className="bg-surface text-on-surface px-10 py-5 font-label-mono text-label-mono uppercase sharp-border hover:bg-tertiary hover:text-surface transition-all duration-300 active:scale-95"
        >
          CONTACT ME
        </button>
        <button
          onClick={() => handleButtonClick('#about')}
          className="bg-surface text-on-surface px-10 py-5 font-label-mono text-label-mono uppercase sharp-border hover:bg-tertiary hover:text-surface transition-all duration-300 active:scale-95"
        >
          LEARN MORE
        </button>
      </div>
    </section>
  )
}
