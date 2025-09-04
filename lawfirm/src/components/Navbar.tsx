import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-solid' : 'is-transparent'}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__brand">Law Firm</a>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${isOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <a href="#home" className="navbar__link">Home</a>
          <a href="#services" className="navbar__link">Services</a>
          <a href="#about" className="navbar__link">About us</a>
          <a href="#contact" className="navbar__link">Contact us</a>
        </nav>

        <div className="navbar__phone">
          <span className="navbar__phone-icon" aria-hidden>☎</span>
          <span className="navbar__phone-text">(257) 388-6895</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar


