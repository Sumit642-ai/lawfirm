import './ClientSaysSection.css'

function ClientSaysSection() {
  return (
    <section className="cs">
      <div className="cs__container">
        <h2 className="cs__title">What Our Client Says</h2>
        <p className="cs__subtitle">Our Testimonials</p>

        <div className="cs__grid">
          <div className="cs__left">
            <div className="cs__rule" aria-hidden>
              <span className="cs__quote">“</span>
            </div>
            <div>
              <p className="cs__text">Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.</p>
              <div className="cs__author">
                <div className="cs__name">Kirsten Gutierrez</div>
                <div className="cs__role">Founder K&G Company</div>
              </div>
            </div>
          </div>
          <div className="cs__right">
            <img src="/welcome.jpg" alt="Happy client" className="cs__image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientSaysSection


