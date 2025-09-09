import { } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedByManySection from './components/TrustedByManySection'
import CommitmentSection from './components/CommitmentSection'
import StatsStrip from './components/StatsStrip'
import TestimonialsSection from './components/TestimonialsSection'
import AboutFooter from './components/AboutFooter'
import ClientSaysSection from './components/ClientSaysSection'
import ServicesGridSection from './components/ServicesGridSection'
import ServiceDetailPage from './components/ServiceDetailPage'
import ContactFormPage from './components/ContactFormPage'

function HomePage() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <TrustedByManySection />
      <div id="contact">
        <CommitmentSection />
      </div>
      <div id="services">
        <ServicesGridSection />
      </div>
      <StatsStrip />
      <TestimonialsSection />
      <ClientSaysSection />
      <div id="about">
        <AboutFooter />
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactFormPage />} />
      </Routes>
    </Router>
  )
}

export default App
