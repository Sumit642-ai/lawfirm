import './TestimonialsSection.css'
import { useEffect, useRef } from 'react'

type Attorney = { name: string; role: string }

const TEAM: Attorney[] = [
  { name: 'Jackson Bauer', role: 'Finance Lawyer' },
  { name: 'Stephanie Reilly', role: 'Criminal Defence Lawyer' },
  { name: 'Matthew Webb', role: 'Tax Lawyer' }
]

function TestimonialsSection() {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        el.classList.add('is-visible')
        io.disconnect()
      }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section className="t reveal" ref={ref}>
      <div className="t__container">
        <h2 className="team__heading">Our Attorneys</h2>
        <p className="team__sub">Varius quisque odio mauris lectus consequat sedretitum purus feugiat volutpat pell</p>
        <div className="team__grid">
          {TEAM.map((m) => (
            <article className="team__card" key={m.name}>
              <div className="team__photo" aria-hidden />
              <h3 className="team__name">{m.name}</h3>
              <p className="team__role">{m.role}</p>
              <div className="team__social">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="X">x</a>
                <a href="#" aria-label="Instagram">◎</a>
                <a href="#" aria-label="Send">➤</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection


