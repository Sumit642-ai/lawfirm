import './Hero.css'
import { useEffect } from 'react'

function Hero() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const el = document.querySelector('.hero__overlay') as HTMLElement | null
      if (el) el.style.opacity = String(Math.min(1, 0.55 + y / 1000))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">
          LEGAL SOLUTIONS FOR BUSINESS AND
          <br />
          INDIVIDUAL NEEDS
        </h1>

        <p className="hero__subtitle">
          Pretium purus feugiat volutpat pellenetoenti porta mauris nec volutpat.
        </p>

        <div className="hero__cta">
          <a href="#contact" className="btn-primary hero__enquiry">Make enquiry</a>
        </div>
      </div>
    </section>
  )
}

export default Hero


