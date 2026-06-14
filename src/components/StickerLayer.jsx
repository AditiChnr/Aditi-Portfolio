import { useState, useEffect, useRef } from 'react'
import styles from './StickerLayer.module.css'

const STICKER_IMAGES = [
  { id: 'giraffe', src: '/stickers/sticker-giraffe.jpeg', label: 'Space Giraffe' },
  { id: 'mcqueen', src: '/stickers/sticker-mcqueen.jpeg', label: 'Ka-chow' },
  { id: 'cat', src: '/stickers/sticker-cat.jpeg', label: 'Fluffy Cat' },
]

const SYMBOLS = ['★','✦','◆','●','▲','✿','❋','✺','⬡','⬢','✻','✼','⊕','⊗','✙','◉','❖','☆','◇','▽','○','△','♦','✧','✩','✪','✫','✬']
const COLORS = ['#FFE034','#FF2D7A','#00E5C8','#FF5C1A','#B8FF00','#ffffff','#C8B6FF','#FFB3C6']

function Sticker({ sym, imgSrc, x, y, size, color, rotation }) {
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
      style={{
        left: pos.x, top: pos.y,
        transform: `rotate(${rotation}deg)`,
        width: imgSrc ? size * 3 : undefined,
        fontSize: imgSrc ? undefined : size,
        color: imgSrc ? undefined : color,
      }}
    >
      {imgSrc
        ? <img src={imgSrc} alt="" style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }} />
        : sym
      }
    </div>
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

  const spawnImage = (src) => {
    setStickers(prev => [...prev, {
      id: Date.now() + Math.random(),
      imgSrc: src,
      sym: null,
      x: Math.random() * (window.innerWidth - 150) + 20,
      y: Math.random() * (window.innerHeight - 150) + window.scrollY + 20,
      size: 40,
      color: null,
      rotation: (Math.random() - 0.5) * 20,
    }])
  }

  const spawnSymbol = (sym) => {
    setStickers(prev => [...prev, {
      id: Date.now() + Math.random(),
      imgSrc: null,
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
        <div className={styles.trayLabel}>Your stickers</div>
        <div className={styles.imageStickers}>
          {STICKER_IMAGES.map(s => (
            <button key={s.id} className={styles.imageBtn} onClick={() => spawnImage(s.src)} title={s.label}>
              <img src={s.src} alt={s.label} />
            </button>
          ))}
        </div>
        <div className={styles.trayDivider}>+ symbols</div>
        <div className={styles.trayGrid}>
          {SYMBOLS.map(s => (
            <button key={s} className={styles.trayItem} onClick={() => spawnSymbol(s)}>{s}</button>
          ))}
        </div>
      </div>
    </>
  )
}
