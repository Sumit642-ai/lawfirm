import './WelcomeSection.css'
import { useEffect, useRef } from 'react'

function WelcomeSection() {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        el.classList.add('is-visible')
        io.disconnect()
      }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section className="welcome reveal" ref={ref}>
      <div className="welcome__panel">
        <div className="welcome__container">
          <div className="welcome__text">
            <h2 className="welcome__title">Trusted By Many</h2>
            <p className="welcome__para">Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.</p>
            <img src="/commit.jpg" alt="signature" style={{ width: 180, marginTop: 24 }} />
          </div>
          <div className="welcome__media">
            <img src="/welcome.jpg" alt="Attorney portrait" className="welcome__image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection


