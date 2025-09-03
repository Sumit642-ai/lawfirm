import './Hero.css'

function Hero() {
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
        </div>
      </div>
    </section>
  )
}

export default Hero


