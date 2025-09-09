import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ServiceDetailPage.css'
import KeyContactsSection from './KeyContactsSection'
import AboutFooter from './AboutFooter'

const serviceData = {
  'banking-and-finance': {
    title: 'Banking and Finance',
    content: [
      {
        heading: 'Corporate Banking Services',
        text: 'If you are hoping to start working in the UK, or employ a team of workers from overseas, do not wait, contact our firm. Our industry-leading expertise in UK Business Banking Services makes us one of the top firms in London. With a team of experts who speak several languages we can help with different types of banking services including loans and credit facilities.'
      },
      {
        heading: 'Multi-Lingual Banking Solicitors',
        text: 'We believe in speaking your language which is why our professional banking solicitors are multi-lingual. Being able to discuss your case in the language of your choice makes it easier for you to explain all the details, and for us to gain a deeper understanding of what you need.'
      },
      {
        heading: 'UK Business Banking Services',
        text: 'Whether you are a high net worth individual hoping to come to the UK for business, or whether you are a company looking to establish operations, our comprehensive banking services can help you navigate the complex financial landscape.'
      }
    ]
  },
  'family-law': {
    title: 'Family Law',
    content: [
      {
        heading: 'Family Legal Services',
        text: 'If you are facing family legal challenges, do not wait, contact our firm. Our industry-leading expertise in Family Law Services makes us one of the top firms in London. With a team of experts who understand the complexities of family matters, we can help with different types of family services including divorce and custody arrangements.'
      },
      {
        heading: 'Multi-Lingual Family Solicitors',
        text: 'We believe in speaking your language which is why our professional family solicitors are multi-lingual. Being able to discuss your case in the language of your choice makes it easier for you to explain all the details, and for us to gain a deeper understanding of what you need.'
      },
      {
        heading: 'UK Family Legal Services',
        text: 'Whether you are dealing with divorce proceedings, child custody matters, or estate planning, our comprehensive family law services can help you navigate these sensitive legal challenges with care and expertise.'
      }
    ]
  },
  'business-law': {
    title: 'Business Law',
    content: [
      {
        heading: 'Corporate Legal Services',
        text: 'If you are starting a business or need legal guidance for your company, do not wait, contact our firm. Our industry-leading expertise in Business Law Services makes us one of the top firms in London. With a team of experts who understand commercial law, we can help with different types of business services including contracts and compliance.'
      },
      {
        heading: 'Multi-Lingual Business Solicitors',
        text: 'We believe in speaking your language which is why our professional business solicitors are multi-lingual. Being able to discuss your case in the language of your choice makes it easier for you to explain all the details, and for us to gain a deeper understanding of what you need.'
      },
      {
        heading: 'UK Business Legal Services',
        text: 'Whether you are forming a new company, dealing with commercial disputes, or need ongoing legal support for your business operations, our comprehensive business law services can help you succeed.'
      }
    ]
  },
  'real-estate': {
    title: 'Real Estate',
    content: [
      {
        heading: 'Property Legal Services',
        text: 'If you are buying, selling, or dealing with property matters, do not wait, contact our firm. Our industry-leading expertise in Real Estate Services makes us one of the top firms in London. With a team of experts who understand property law, we can help with different types of real estate services including conveyancing and property disputes.'
      },
      {
        heading: 'Multi-Lingual Property Solicitors',
        text: 'We believe in speaking your language which is why our professional property solicitors are multi-lingual. Being able to discuss your case in the language of your choice makes it easier for you to explain all the details, and for us to gain a deeper understanding of what you need.'
      },
      {
        heading: 'UK Property Legal Services',
        text: 'Whether you are purchasing your first home, investing in commercial property, or dealing with landlord-tenant disputes, our comprehensive real estate services can help you navigate the property market with confidence.'
      }
    ]
  },
  'civil-law': {
    title: 'Civil Law',
    content: [
      {
        heading: 'Civil Legal Services',
        text: 'If you are facing civil legal challenges, do not wait, contact our firm. Our industry-leading expertise in Civil Law Services makes us one of the top firms in London. With a team of experts who understand civil disputes, we can help with different types of civil services including personal injury and contract disputes.'
      },
      {
        heading: 'Multi-Lingual Civil Solicitors',
        text: 'We believe in speaking your language which is why our professional civil solicitors are multi-lingual. Being able to discuss your case in the language of your choice makes it easier for you to explain all the details, and for us to gain a deeper understanding of what you need.'
      },
      {
        heading: 'UK Civil Legal Services',
        text: 'Whether you are dealing with personal injury claims, contract disputes, or other civil matters, our comprehensive civil law services can help you achieve the best possible outcome for your case.'
      }
    ]
  },
  'corporate-law': {
    title: 'Corporate Law',
    content: [
      {
        heading: 'Corporate Legal Services',
        text: 'If you are dealing with corporate legal matters, do not wait, contact our firm. Our industry-leading expertise in Corporate Law Services makes us one of the top firms in London. With a team of experts who understand corporate governance, we can help with different types of corporate services including mergers and acquisitions.'
      },
      {
        heading: 'Multi-Lingual Corporate Solicitors',
        text: 'We believe in speaking your language which is why our professional corporate solicitors are multi-lingual. Being able to discuss your case in the language of your choice makes it easier for you to explain all the details, and for us to gain a deeper understanding of what you need.'
      },
      {
        heading: 'UK Corporate Legal Services',
        text: 'Whether you are planning a merger, dealing with corporate compliance, or need ongoing legal support for your corporation, our comprehensive corporate law services can help you navigate complex business structures.'
      }
    ]
  }
}

const moreServices = [
  'Business Visit',
  'Permitted Paid Engagement Visa',
  'Sports Visa',
  'Start-Up Visa',
  'Innovator Visa',
  'Global Talent',
  'Sponsor Licence',
  'Temporary Workers'
]

function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    enquiry: '',
    gdpr: false
  })

  const service = serviceData[serviceId as keyof typeof serviceData]

  if (!service) {
    return <div>Service not found</div>
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="service-detail">
      <div className="service-detail__container">
        <div className="service-detail__main">
          <div className="service-detail__content">
            {service.content.map((section, index) => (
              <div key={index} className="service-detail__section">
                <h2 className="service-detail__heading">{section.heading}</h2>
                <p className="service-detail__text">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="service-detail__sidebar">
          <div className="service-detail__callback-form">
            <h3 className="service-detail__form-title">REQUEST A FREE CALLBACK</h3>
            <p className="service-detail__form-subtitle">
              Submit Your Details, And We'll Arrange A Free, No-Obligation Callback At A Time To Suit You.
            </p>
            
            <form onSubmit={handleSubmit} className="service-detail__form">
              <div className="service-detail__form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="service-detail__input"
                  required
                />
              </div>
              
              <div className="service-detail__form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="service-detail__input"
                  required
                />
              </div>
              
              <div className="service-detail__form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="service-detail__input"
                  required
                />
              </div>
              
              <div className="service-detail__form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="service-detail__input"
                  required
                />
              </div>
              
              <div className="service-detail__form-group">
                <textarea
                  name="enquiry"
                  placeholder="Enquiry Details"
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  className="service-detail__textarea"
                  rows={4}
                  required
                />
              </div>
              
              <div className="service-detail__form-group">
                <label className="service-detail__checkbox-label">
                  <input
                    type="checkbox"
                    name="gdpr"
                    checked={formData.gdpr}
                    onChange={handleInputChange}
                    className="service-detail__checkbox"
                    required
                  />
                  I agree to the GDPR Policy
                </label>
              </div>
              
              <button type="submit" className="service-detail__submit-btn">
                REQUEST CALLBACK
              </button>
            </form>
          </div>
          
          <div className="service-detail__search">
            <div className="service-detail__search-container">
              <input
                type="text"
                placeholder="Search..."
                className="service-detail__search-input"
              />
              <span className="service-detail__search-icon">🔍</span>
            </div>
          </div>
          
          <div className="service-detail__more-services">
            <h4 className="service-detail__more-title">More Services</h4>
            <ul className="service-detail__services-list">
              {moreServices.map((service, index) => (
                <li key={index} className="service-detail__service-item">
                  <Link to={`/service/${service.toLowerCase().replace(/\s+/g, '-')}`} className="service-detail__service-link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="service-detail__review-tab">
        <div className="service-detail__review-content">
          <span className="service-detail__review-text">review solicitors</span>
          <div className="service-detail__stars">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>
      
      <KeyContactsSection />
      <AboutFooter />
    </div>
  )
}

export default ServiceDetailPage
