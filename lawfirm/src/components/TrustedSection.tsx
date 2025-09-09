import './TrustedSection.css'

function TrustedSection() {
  return (
    <section className="trusted">
      <div className="trusted__container">
        <div className="trusted__content">
          <div className="trusted__text">
            <h2 className="trusted__title">Trusted By Many</h2>
            <p className="trusted__description">
              Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.
            </p>
            <div className="trusted__signature">
              <span className="trusted__signature-text">J. Jefferson</span>
            </div>
          </div>
          <div className="trusted__image">
            <div className="trusted__image-card">
              <img 
                src="/welcome.jpg" 
                alt="Professional woman" 
                className="trusted__image-content"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedSection
