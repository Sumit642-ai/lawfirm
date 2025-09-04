import './ServicesGridSection.css'
import { useCallback, useEffect, useRef } from 'react'

type Area = { title: string; text: string; icon: JSX.Element }

const IconCourt = (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2 3 7v2h18V7l-9-5Zm-7 9h2v7H5v-7Zm4 0h2v7H9v-7Zm4 0h2v7h-2v-7Zm4 0h2v7h-2v-7ZM3 20h18v2H3v-2Z"/>
  </svg>
)

const IconFamily = (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M16 11a3 3 0 1 0-2.999-3A3 3 0 0 0 16 11ZM8 10a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 2a4 4 0 0 1 4 4v3h-2v-3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3h-2v-3a4 4 0 0 1 4-4ZM8 12a4 4 0 0 1 4 4v3H4v-3a4 4 0 0 1 4-4Z"/>
  </svg>
)

const IconPen = (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="m3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Zm2 1.5h1.94l8.62-8.62-1.94-1.94L5 16.81v1.94ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/>
  </svg>
)

const IconHome = (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3L12 3Z"/>
  </svg>
)

const IconScale = (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2 6 5v2h12V5l-6-3Zm-1 6v9a3 3 0 1 1-2 0V8H5l3 6H6L3 8h8Zm9 0-3 6h2l3-6h-2Zm-7 0h2v9a3 3 0 1 1-2 0V8Z"/>
  </svg>
)

const IconBrief = (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M9 2h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v3H2V8a2 2 0 0 1 2-2h3V4a2 2 0 0 1 2-2Zm0 4h6V4H9v2Zm13 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5h8v1h4v-1h8Z"/>
  </svg>
)

const AREAS: Area[] = [
  { title: 'Banking and Finance', text: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus con..', icon: IconCourt },
  { title: 'Family Law', text: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus con..', icon: IconFamily },
  { title: 'Business Law', text: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus con..', icon: IconPen },
  { title: 'Real Estate', text: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus con..', icon: IconHome },
  { title: 'Civil Law', text: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus con..', icon: IconScale },
  { title: 'Corporate Law', text: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus con..', icon: IconBrief }
]

function ServicesGridSection() {
  const gridRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = gridRef.current
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
  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) * 2 - 1
    const py = (y / rect.height) * 2 - 1
    card.style.setProperty('--rx', String((-py * 6).toFixed(2)))
    card.style.setProperty('--ry', String((px * 10).toFixed(2)))
    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)
  }, [])

  const reset = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.removeProperty('--rx')
    card.style.removeProperty('--ry')
  }, [])

  return (
    <section className="svc">
      <div className="svc__container">
        <div className="svc__grid reveal-stagger" ref={gridRef}>
          {AREAS.map((a, i) => (
            <article className="svc__item" style={{ ['--i' as any]: i }} key={a.title} onMouseMove={handleMove} onMouseLeave={reset}>
              <div className="svc__icon">{a.icon}</div>
              <h3 className="svc__title">{a.title}</h3>
              <p className="svc__text">{a.text}</p>
              <a className="svc__more" href="#services" aria-label={`Learn more about ${a.title}`}>
                Learn more <span className="svc__arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGridSection


