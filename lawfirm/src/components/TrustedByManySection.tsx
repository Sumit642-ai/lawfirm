import './TrustedByManySection.css'

function TrustedByManySection() {
  return (
    <section className="trusted-section">
      <div className="trusted-section__background"></div>
      <div className="trusted-section__container">
        <div className="trusted-section__card">
          <div className="trusted-section__content">
            <div className="trusted-section__text">
              <h2 className="trusted-section__title">Trusted By Many</h2>
              <p className="trusted-section__description">
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.
              </p>
              <div className="trusted-section__signature">
                <span className="trusted-section__signature-text">J. Jefferson</span>
              </div>
            </div>
            <div className="trusted-section__image">
              <div className="trusted-section__image-card">
                <img 
                  src="/welcome.jpg" 
                  alt="Professional woman" 
                  className="trusted-section__image-content"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedByManySection
