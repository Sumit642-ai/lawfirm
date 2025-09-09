import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu
    setIsOpen(false)
    
    // If we're on a service detail page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
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
        <button 
          onClick={() => scrollToSection('home')} 
          className="navbar__brand"
        >
          Law Firm
        </button>

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
          <button onClick={() => scrollToSection('home')} className="navbar__link">Home</button>
          <button onClick={() => scrollToSection('services')} className="navbar__link">Services</button>
          <button onClick={() => scrollToSection('about')} className="navbar__link">About us</button>
          <button onClick={() => scrollToSection('contact')} className="navbar__link">Contact us</button>
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


