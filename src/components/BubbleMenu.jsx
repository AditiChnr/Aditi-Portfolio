import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './BubbleMenu.module.css'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/achievements', label: 'Wins' },
  { to: '/music', label: 'Music' },
  { to: '/hobbies', label: 'Hobbies' },
  { to: '/travels', label: 'Travels' },
  { to: '/traits', label: 'Traits' },
]

export default function BubbleMenu() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className={`${styles.wrap} ${open ? styles.open : ''}`}>
      <button className={styles.trigger} onClick={() => setOpen(o => !o)} aria-label="Navigation">
        <span className={styles.triggerLine} />
        <span className={styles.triggerLine} />
        <span className={styles.triggerLine} />
      </button>
      <div className={styles.bubbles}>
        {NAV.map((item, i) => {
          const active = pathname === item.to || (item.to !== '/' && pathname.startsWith(item.to))
          return (
            <button
              key={item.to}
              className={`${styles.bubble} ${active ? styles.bubbleActive : ''}`}
              style={{ '--i': i, transitionDelay: open ? `${i * 0.04}s` : `${(NAV.length - i) * 0.02}s` }}
              onClick={() => { navigate(item.to); setOpen(false) }}
            >
              <span className={styles.bubbleLabel}>{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
