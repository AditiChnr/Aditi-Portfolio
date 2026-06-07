import { useEffect, useRef } from 'react'
import styles from './CircularGallery.module.css'

export default function CircularGallery({ items, bend = 3, textColor = '#fff', borderRadius = 0.05 }) {
  const trackRef = useRef(null)
  const animRef = useRef(null)
  const stateRef = useRef({ x: 0, vel: 0, dragging: false, startX: 0, lastX: 0 })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const items = track.querySelectorAll('[data-item]')
    const total = items.length
    if (!total) return

    const state = stateRef.current

    const render = () => {
      state.vel *= 0.92
      state.x += state.vel
      items.forEach((el, i) => {
        const angle = ((i / total) * Math.PI * 2) + (state.x * 0.01)
        const x = Math.sin(angle) * 42
        const z = Math.cos(angle) * 42
        const scale = 0.55 + (z + 42) / 84 * 0.45
        const opacity = 0.35 + (z + 42) / 84 * 0.65
        const zIndex = Math.round((z + 42) * 10)
        el.style.transform = `translateX(${x}%) scale(${scale})`
        el.style.opacity = opacity
        el.style.zIndex = zIndex
        el.style.filter = z < 0 ? `blur(${Math.abs(z) * 0.04}px)` : 'none'
      })
      animRef.current = requestAnimationFrame(render)
    }

    const onDown = e => {
      state.dragging = true
      state.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0
      state.lastX = state.startX
      state.vel = 0
      track.style.cursor = 'grabbing'
    }
    const onMove = e => {
      if (!state.dragging) return
      const cx = e.clientX ?? e.touches?.[0]?.clientX ?? 0
      state.vel = (cx - state.lastX) * 0.7
      state.x += state.vel
      state.lastX = cx
    }
    const onUp = () => { state.dragging = false; track.style.cursor = 'grab' }

    track.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    track.addEventListener('touchstart', onDown, { passive: true })
    track.addEventListener('touchmove', onMove, { passive: true })
    track.addEventListener('touchend', onUp)

    animRef.current = requestAnimationFrame(render)
    return () => {
      cancelAnimationFrame(animRef.current)
      track.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div ref={trackRef} className={styles.track} style={{ cursor: 'grab' }}>
        {items.map((item, i) => (
          <div key={i} data-item className={styles.item}>
            <div className={styles.itemInner} style={{ borderRadius: `${borderRadius * 100}%` }}>
              <div className={styles.itemBg} style={{ background: item.bg }} />
              <div className={styles.itemContent}>
                <span className={styles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.itemLabel} style={{ color: textColor }}>{item.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.hint}>Drag to spin</p>
    </div>
  )
}
