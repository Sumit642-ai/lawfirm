import { } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WelcomeSection from './components/WelcomeSection'
import ExpertiseSection from './components/ExpertiseSection'
import CommitmentSection from './components/CommitmentSection'
import StatsStrip from './components/StatsStrip'
import TestimonialsSection from './components/TestimonialsSection'
import AboutFooter from './components/AboutFooter'
import ClientSaysSection from './components/ClientSaysSection'
import ServicesGridSection from './components/ServicesGridSection'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <WelcomeSection />
   
      <CommitmentSection />
      <ServicesGridSection />
      <StatsStrip />
      
      <TestimonialsSection />
      <ClientSaysSection />
      <AboutFooter />
    </>
  )
}

export default App
