import './WelcomeSection.css'

function WelcomeSection() {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <div className="welcome__text">
          <p className="welcome__eyebrow">YOUR PARTNER IN EVERY MATTER</p>
          <h2 className="welcome__title">Welcome to Lawfirm</h2>
          <p className="welcome__para">
            Our multi‑disciplinary team brings deep expertise across business and private client work.
            We combine specialist knowledge with responsive service so you get clear answers, quickly.
          </p>
          <p className="welcome__para">
            From the first consultation to resolution, we guide you step by step with practical, outcome‑focused advice.
          </p>
        </div>
        <div className="welcome__media">
          <img src="/welcome.jpg" alt="Team meeting" className="welcome__image" />
          <div className="welcome__card">
            <p className="welcome__card-title">Excellent! <span className="welcome__stars">★★★★★</span></p>
            <p className="welcome__review">
              One of their Lawyers that was helping us, Very competent and an excellent Lawyer, guided us step by step to achieve our
              goal. All I can say is that with them you are secure and in good hands. So I highly recommend Farani Taylor Solicitors
              <span className="welcome__emoji"> 👍</span>
            </p>
            <p className="welcome__author">Richard Dagohoy</p>
            <p className="welcome__meta">Google Reviews – 21st July, 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection


