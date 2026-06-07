import { useRef, useEffect } from 'react'
import styles from './ElectricBorder.module.css'

export default function ElectricBorder({ children, color = '#c0392b', glowColor = 'rgba(192,57,43,0.4)', className = '', style = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame, t = 0

    const draw = () => {
      t += 0.04
      const s = 0.7 + Math.sin(t) * 0.3
      el.style.setProperty('--glow-opacity', s)
      el.style.setProperty('--dash-offset', t * 40)
      frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div ref={ref} className={`${styles.electric} ${className}`}
      style={{ '--border-color': color, '--glow-color': glowColor, ...style }}>
      <svg className={styles.svg} aria-hidden="true">
        <rect className={styles.rect} rx="12" ry="12" />
      </svg>
      {children}
    </div>
  )
}
