import { useEffect, useRef, useState } from 'react'
import './StatsStrip.css'

type Stat = {
  label: string
  value: number
  suffix?: string
}

const STATS: Stat[] = [
  { label: 'HAPPY CLIENTS', value: 40000, suffix: 'K' },
  { label: 'GOOGLE REVIEWS', value: 4.9 },
  { label: 'BRANCHES', value: 3 },
  { label: 'TRUST PILOT', value: 4.8 }
]

function useCountUp(target: number, durationMs: number, shouldStart: boolean) {
  const [count, setCount] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    // Reset count and startRef when shouldStart changes
    if (!shouldStart) {
      setCount(0)
      startRef.current = null
      return
    }

    let rafId: number
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(1, elapsed / durationMs)
      
      // Easing function for smoother animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(target * easeOut)
      
      if (progress < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [target, durationMs, shouldStart])

  return count
}

function StatItem({ label, value, suffix }: Stat) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Only trigger animation when section is properly visible
          setVisible(true)
          io.disconnect() // Stop observing once animation starts
        }
      },
      { 
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Trigger when element is 100px from bottom of viewport
      }
    )
    
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const count = useCountUp(value, 3000, visible)
  const isDecimal = value % 1 !== 0
  const display = isDecimal ? count.toFixed(1) : Math.round(count).toString()

  const formatted = suffix === 'K' ? `${Math.round(count / 1000)}K` : display

  return (
    <div className={`stats__item ${visible ? 'animate' : ''}`} ref={ref}>
      <div className="stats__value">+{formatted}</div>
      <div className="stats__label">{label}</div>
    </div>
  )
}

function StatsStrip() {
  return (
    <section className="stats">
      <div className="stats__container">
        <h3 className="stats__heading">OUR TRACK RECORD STANDS US APART</h3>
        <div className="stats__grid">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsStrip


