import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import styles from './Home.module.css'

export default function Home() {
  const aboutRef = useReveal()
  const infoRef = useReveal()

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>Aditi Channavar — cantstopaditi — Belagavi — 2024</div>
        <div className={styles.heroName}>
          <span className={styles.solid}>ADITI</span>
          <span className={styles.outline}>CHAN<span className={styles.accent}>N</span>AVAR</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.heroBottom}>
          <div className={styles.heroLeft}>
            <p className={styles.heroTag}>
              <strong>cantstopaditi</strong> — CSE student, artist, poet, jack of all trades
            </p>
            <div className={styles.heroLinks}>
              {[
                ['/education','Education'],
                ['/achievements','Wins'],
                ['/music','Music'],
                ['/hobbies','Hobbies'],
                ['/travels','Travels'],
                ['/traits','Traits'],
              ].map(([to, label]) => (
                <Link key={to} to={to} className={styles.heroLink}>{label}</Link>
              ))}
            </div>
          </div>
          <p className={styles.heroRight}>
            First year CSE at Gogte Institute of Technology, Belagavi.<br />
            Grew up in Sharjah, UAE. Nine countries. Five languages. Still going.
          </p>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollBar} />
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div ref={aboutRef} className={`reveal ${styles.aboutLeft}`}>
          <div className={styles.kicker}>Who I am</div>
          <h2 className={styles.aboutH}>A BIT<br />OF <span className={styles.pink}>EVERY</span><br /><span className={styles.pink}>THING</span></h2>
          <div className={styles.aboutBody}>
            <p>Born in Belagavi. Moved to the UAE at six months old and spent sixteen years growing up in Sharjah. Leaders Private School gave me an international lens and a comfort with people from everywhere.</p>
            <p>After 10th standard I came back to India, did science at RLS PU, took a gap year preparing for NEET — then pivoted to engineering. It turned out to be exactly the right call.</p>
            <p>Now I'm in first year CSE at GIT, already <strong>leading two clubs</strong> and winning competitions. The tagline <em>cantstopaditi</em> isn't a personality. It's a track record.</p>
          </div>
        </div>
        <div ref={infoRef} className={`reveal ${styles.infoStack}`}>
          {[
            { k: 'Currently', v: <>1st Year CSE — GIT, Belagavi <span className={styles.nowTag}>Now</span></> },
            { k: 'Grew up in', v: 'Sharjah, UAE — six months to 10th standard' },
            { k: 'Languages', v: 'English, Hindi, Kannada, Arabic (read & write), learning French' },
            { k: 'Countries', v: 'UAE, Bahrain, Oman, Qatar, Egypt, UK, France, Hong Kong, Singapore, India' },
            { k: 'Clubs', v: 'IEEE WiE — Event Lead / ISTE — Graphic Designer / Literary Club' },
          ].map(row => (
            <div key={row.k} className={styles.infoRow}>
              <span className={styles.infoK}>{row.k}</span>
              <span className={styles.infoV}>{row.v}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
