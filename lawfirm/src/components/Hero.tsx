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
        <div className="hero__rating">
          <span className="hero__rating-score">4.8</span>
          <span className="hero__stars" aria-hidden>
            ★★★★★
          </span>
          <span className="hero__rating-sub">Google Reviews / Satisfied Clients</span>
          <span className="hero__underline" />
        </div>

        <h1 className="hero__title">
          STRAIGHTFORWARD LEGAL EXPERTISE
          <br />
          FOR BUSINESS AND LIFE
        </h1>

        <p className="hero__subtitle">
          Practical advice, fast turnaround, and lawyers who speak your language. From immigration and property to
          commercial, disputes and family – we make complex simple.
        </p>

        <div className="hero__cta">
          <button className="hero__select">
            Explore Our Services
            <span className="hero__caret">▾</span>
          </button>
          <div className="hero__cta-row">
            <a href="#consult" className="btn-primary">Book Consultation</a>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
        <svg className="hero__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path fill="#ffffff" d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,53.3C672,32,768,32,864,53.3C960,75,1056,117,1152,117.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
    </section>
  )
}

export default Hero


