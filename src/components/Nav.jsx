import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/achievements', label: 'Wins' },
  { to: '/music', label: 'Music' },
  { to: '/hobbies', label: 'Hobbies' },
  { to: '/travels', label: 'Travels' },
  { to: '/traits', label: 'Traits' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo}>AC</NavLink>
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to} end={l.to === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >{l.label}</NavLink>
          </li>
        ))}
      </ul>
      <button className={styles.stickerBtn}
        onClick={() => document.dispatchEvent(new CustomEvent('toggle-stickers'))}>
        Stickers
      </button>
      <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
