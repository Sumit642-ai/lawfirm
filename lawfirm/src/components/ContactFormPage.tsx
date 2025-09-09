import { useState } from 'react'
import './ContactFormPage.css'

function ContactFormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    department: '',
    message: '',
    isUrgent: false,
    agreeToPolicy: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
  }

  return (
    <div className="contact-form-page">
      <div className="contact-form-page__container">
        <div className="contact-form-page__content">
          <div className="contact-form-page__form-section">
            <h1 className="contact-form-page__title">LOOKING FOR PROFESSIONAL ADVICE?</h1>
            <p className="contact-form-page__description">
              We're committed to connecting with you promptly. Expect to hear from us at the earliest convenience. 
              Your questions and feedback matter, and we look forward to assisting you soon.
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form-page__form">
              <div className="contact-form-page__row">
                <div className="contact-form-page__field">
                  <label htmlFor="firstName" className="contact-form-page__label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="contact-form-page__input"
                    required
                  />
                </div>
                <div className="contact-form-page__field">
                  <label htmlFor="lastName" className="contact-form-page__label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="contact-form-page__input"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-page__row">
                <div className="contact-form-page__field">
                  <label htmlFor="phone" className="contact-form-page__label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="contact-form-page__input"
                    required
                  />
                </div>
                <div className="contact-form-page__field">
                  <label htmlFor="email" className="contact-form-page__label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact-form-page__input"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-page__field">
                <label htmlFor="department" className="contact-form-page__label">Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="contact-form-page__select"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="immigration">Immigration</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="family">Family Law</option>
                  <option value="criminal">Criminal Law</option>
                  <option value="property">Property Law</option>
                  <option value="employment">Employment Law</option>
                </select>
              </div>

              <div className="contact-form-page__field">
                <label htmlFor="message" className="contact-form-page__label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact-form-page__textarea"
                  rows={6}
                  placeholder="Please describe your legal matter or question..."
                  required
                />
              </div>

              <div className="contact-form-page__checkbox-group">
                <label className="contact-form-page__checkbox-label">
                  <input
                    type="checkbox"
                    name="isUrgent"
                    checked={formData.isUrgent}
                    onChange={handleInputChange}
                    className="contact-form-page__checkbox"
                  />
                  <span className="contact-form-page__checkbox-text">Mark as Urgent</span>
                </label>
              </div>

              <div className="contact-form-page__checkbox-group">
                <label className="contact-form-page__checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleInputChange}
                    className="contact-form-page__checkbox"
                    required
                  />
                  <span className="contact-form-page__checkbox-text">
                    I agree to the GDPR and Privacy Policy for{' '}
                    <a href="#" className="contact-form-page__link">Farani Taylor Solicitors</a>
                  </span>
                </label>
              </div>

              <div className="contact-form-page__recaptcha">
                <div className="contact-form-page__recaptcha-box">
                  <input type="checkbox" id="recaptcha" className="contact-form-page__recaptcha-checkbox" />
                  <label htmlFor="recaptcha" className="contact-form-page__recaptcha-label">
                    I'm not a robot
                  </label>
                </div>
                <div className="contact-form-page__recaptcha-links">
                  <a href="#" className="contact-form-page__recaptcha-link">Privacy</a>
                  <span> - </span>
                  <a href="#" className="contact-form-page__recaptcha-link">Terms</a>
                </div>
              </div>

              <button type="submit" className="contact-form-page__submit-btn">
                SUBMIT NOW
              </button>
            </form>
          </div>

          <div className="contact-form-page__image-section">
            <div className="contact-form-page__image-container">
              <img 
                src="/welcome.jpg" 
                alt="Professional support representative"
                className="contact-form-page__image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFormPage
