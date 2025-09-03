import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__brand">lawfirm</a>

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
          <a href="#about" className="navbar__link">About Us</a>
          <a href="#services" className="navbar__link has-caret">Services</a>
          <a href="#people" className="navbar__link">Our People</a>
          <a href="#careers" className="navbar__link">Careers</a>
          <a href="#insights" className="navbar__link">Insights</a>
          <a href="#contact" className="navbar__link">Contact Us</a>
          <button className="navbar__search" aria-label="Search">🔍</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


