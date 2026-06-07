import { useState, useEffect, useRef } from 'react'
import styles from './StickerLayer.module.css'

const SYMBOLS = ['★','✦','◆','●','▲','✿','❋','✺','⬡','⬢','✻','✼','⊕','⊗','✙','◉','❖','☆','◇','▽','○','△','♦','✧','✩','✪','✫','✬']
const COLORS = ['#FFE034','#FF2D7A','#00E5C8','#FF5C1A','#B8FF00','#ffffff','#C8B6FF','#FFB3C6']

function Sticker({ sym, x, y, size, color, rotation }) {
  const ref = useRef(null)
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })
  const [pos, setPos] = useState({ x, y })

  useEffect(() => {
    const el = ref.current
    const onMouseDown = e => {
      dragging.current = true
      offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
      e.preventDefault()
    }
    const onMouseMove = e => {
      if (!dragging.current) return
      setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y + window.scrollY })
    }
    const onMouseUp = () => { dragging.current = false }
    el.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [pos])

  return (
    <div
      ref={ref}
      className={styles.sticker}
      style={{ left: pos.x, top: pos.y, fontSize: size, color, transform: `rotate(${rotation}deg)` }}
    >{sym}</div>
  )
}

export default function StickerLayer() {
  const [open, setOpen] = useState(false)
  const [stickers, setStickers] = useState([])

  useEffect(() => {
    const handler = () => setOpen(o => !o)
    document.addEventListener('toggle-stickers', handler)
    return () => document.removeEventListener('toggle-stickers', handler)
  }, [])

  const spawn = (sym) => {
    setStickers(prev => [...prev, {
      id: Date.now() + Math.random(),
      sym,
      x: Math.random() * (window.innerWidth - 80) + 20,
      y: Math.random() * (window.innerHeight - 80) + window.scrollY + 20,
      size: Math.random() * 28 + 22,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: (Math.random() - 0.5) * 40,
    }])
  }

  return (
    <>
      <div className={styles.layer}>
        {stickers.map(s => <Sticker key={s.id} {...s} />)}
      </div>
      <div className={`${styles.tray} ${open ? styles.open : ''}`}>
        <div className={styles.trayLabel}>Drop a sticker</div>
        <div className={styles.trayGrid}>
          {SYMBOLS.map(s => (
            <button key={s} className={styles.trayItem} onClick={() => spawn(s)}>{s}</button>
          ))}
        </div>
      </div>
    </>
  )
}
