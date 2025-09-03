import './AboutFooter.css'

function AboutFooter() {
  return (
    <footer className="aboutf">
      <div className="aboutf__inner">
        <div className="aboutf__brand">
          <div className="aboutf__logo">FT</div>
          <p className="aboutf__desc">
            A London-based law firm offering a broad range of legal services, including immigration, litigation,
            personal injury, corporate, commercial, and family law.
          </p>
          <ul className="aboutf__contact">
            <li>info@faranitaylor.com</li>
            <li>0207 242 1666</li>
            <li>City Office Mermaid House Puddle Dock, London EC4V 3DB</li>
          </ul>
        </div>

        <div className="aboutf__col">
          <h4>Navigation</h4>
          <ul>
            <li>About Us</li>
            <li>Our People</li>
            <li>Insights</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="aboutf__col">
          <h4>Services</h4>
          <ul>
            <li>Departments</li>
            <li>Business Services</li>
            <li>Services A–Z</li>
          </ul>
        </div>

        <div className="aboutf__subscribe">
          <h4>Subscribe</h4>
          <p>Enter your email to get notified</p>
          <form className="aboutf__form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Full Name" />
            <div className="aboutf__row">
              <input type="email" placeholder="Your e-mail" />
              <button aria-label="Subscribe">→</button>
            </div>
          </form>
          <div className="aboutf__social">
            <span aria-label="facebook">f</span>
            <span aria-label="x">x</span>
            <span aria-label="linkedin">in</span>
            <span aria-label="instagram">◎</span>
          </div>
        </div>
      </div>

      <div className="aboutf__reg">
        <div className="aboutf__sra">SRA Regulated • 3 SEP 2025</div>
      </div>

      <div className="aboutf__legal">
        The firm is authorised and regulated by the Solicitors Regulation Authority. © 2025 City Solicitors T/A
        Farani Taylor Solicitors. Registered in England and Wales.
      </div>
    </footer>
  )
}

export default AboutFooter


