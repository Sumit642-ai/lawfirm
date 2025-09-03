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

function useCountUp(target: number, durationMs: number) {
  const [count, setCount] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    let rafId: number
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(1, elapsed / durationMs)
      setCount(target * progress)
      if (progress < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [target, durationMs])

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
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const count = useCountUp(visible ? value : 0, 1500)
  const isDecimal = value % 1 !== 0
  const display = isDecimal ? count.toFixed(1) : Math.round(count).toString()

  const formatted = suffix === 'K' ? `${Math.round(count / 1000)}K` : display

  return (
    <div className="stats__item" ref={ref}>
      <div className="stats__value">{formatted}</div>
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


