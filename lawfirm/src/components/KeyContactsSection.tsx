import './KeyContactsSection.css'

const contacts = [
  {
    name: 'ADEEB CHOWDHRY',
    title: 'Director And Head Of Business Immigration',
    image: '/welcome.jpg', // Using existing image for now
    linkedin: '#',
    email: '#',
    phone: '#'
  },
  {
    name: 'FEHMINA FARANI',
    title: 'Director',
    image: '/welcome.jpg', // Using existing image for now
    linkedin: '#',
    email: '#',
    phone: '#'
  },
  {
    name: 'FARHAN FARANI',
    title: 'Managing Director',
    image: '/welcome.jpg', // Using existing image for now
    linkedin: '#',
    email: '#',
    phone: '#'
  }
]

function KeyContactsSection() {
  return (
    <section className="key-contacts">
      <div className="key-contacts__container">
        <div className="key-contacts__header">
          <h2 className="key-contacts__title">Key Contacts</h2>
          <p className="key-contacts__description">
            If you are looking for help and guidance or have a question relating to Corporate Immigration, please contact us today on <span className="key-contacts__phone">+44 (0)20 7242 1666</span>.
          </p>
          <button className="key-contacts__cta">Let's talk</button>
        </div>
        
        <div className="key-contacts__grid">
          {contacts.map((contact, index) => (
            <div key={index} className="key-contacts__card">
              <div className="key-contacts__card-header">
                <div className="key-contacts__image-container">
                  <img 
                    src={contact.image} 
                    alt={contact.name}
                    className="key-contacts__image"
                  />
                </div>
                <div className="key-contacts__social">
                  <a href={contact.linkedin} className="key-contacts__social-link" aria-label="LinkedIn">
                    <span className="key-contacts__social-icon">in</span>
                  </a>
                  <a href={contact.email} className="key-contacts__social-link" aria-label="Email">
                    <span className="key-contacts__social-icon">✉</span>
                  </a>
                  <a href={contact.phone} className="key-contacts__social-link" aria-label="Phone">
                    <span className="key-contacts__social-icon">📞</span>
                  </a>
                </div>
              </div>
              
              <div className="key-contacts__card-content">
                <h3 className="key-contacts__name">{contact.name}</h3>
                <p className="key-contacts__position">{contact.title}</p>
                <button className="key-contacts__profile-btn">
                  VIEW PROFILE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyContactsSection
