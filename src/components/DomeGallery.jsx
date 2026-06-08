import { useRef, useEffect, useState } from 'react'
import styles from './DomeGallery.module.css'

export default function DomeGallery({ items }) {
  const containerRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = e => {
      const rect = el.getBoundingClientRect()
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  const rowDefs = [1, 3, 4, 2]
  let idx = 0
  const grid = rowDefs.map(count => {
    const row = items.slice(idx, idx + count)
    idx += count
    return row
  }).filter(r => r.length > 0)

  const cx = mouse.x - 0.5, cy = mouse.y - 0.5

  return (
    <div ref={containerRef} className={styles.dome}>
      {grid.map((row, ri) => (
        <div key={ri} className={styles.row}>
          {row.map((item, ci) => {
            const totalInRow = row.length
            const normX = totalInRow > 1 ? ci / (totalInRow - 1) - 0.5 : 0
            const normY = grid.length > 1 ? ri / (grid.length - 1) - 0.5 : 0
            const dist = Math.sqrt(normX * normX + normY * normY)
            const domeScale = 1 - dist * 0.15
            const parallaxX = cx * normX * 28
            const parallaxY = cy * normY * 18
            return (
              <div
                key={ci}
                className={styles.cell}
                style={{
                  transform: `translate(${parallaxX}px, ${parallaxY}px) scale(${domeScale})`,
                  zIndex: Math.round((1 - dist) * 10),
                }}
              >
                <div className={styles.cellInner}>
                  <span className={styles.cellFlag}>{item.flag}</span>
                  <span className={styles.cellName}>{item.name}</span>
                  {item.home && <span className={styles.homeTag}>Home</span>}
                  {item.secondHome && <span className={styles.homeTag} style={{ background: '#0d1b4b', border: '1px solid #c0392b' }}>Second Home</span>}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
