import { useReveal } from '../components/useReveal'
import styles from './Education.module.css'

const ITEMS = [
  { year: '2025 — Present', school: 'Gogte Institute of Technology', detail: 'B.E. Computer Science & Engineering — Belagavi, Karnataka. 2nd year — already won competitions and leading two clubs.', now: true },
  { year: '2024 — 2025', school: 'Allen Institute, Bangalore', detail: 'Gap year preparing for NEET. Decided engineering was the right path — and it turned out to be exactly that.' },
  { year: '2022 — 2024', school: 'RLS PU College of Science', detail: '11th & 12th standard, Science stream. Back in India after years in the UAE — adapting fast, performing well.' },
  { year: 'KG — 10th', school: 'Leaders Private School, Sharjah', detail: 'Entire schooling in the UAE. An international environment that shaped her worldview, adaptability, and way of seeing people.' },
  { year: 'The beginning', school: 'Born in Belagavi, Karnataka', detail: 'Roots here. Moved to UAE at six months old. The adventure started before she could walk.' },
]

function EduItem({ year, school, detail, now }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${styles.item}`}>
      <div className={styles.year}>{year}</div>
      <div>
        <div className={styles.school}>{school}</div>
        <div className={styles.detail}>{detail}</div>
        {now && <span className={styles.nowBadge}>Currently here</span>}
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <main className={styles.main}>
      <div style={{ background: 'var(--black)', padding: '8rem 2.5rem 3rem', borderBottom: '1px solid rgba(248,245,239,0.07)' }}>
        <div className="page-kicker">The journey</div>
        <h1 className="page-title">EDUCA<span style={{ color: 'var(--pink)' }}>TION</span></h1>
      </div>
      <div className={styles.list}>
        {ITEMS.map(i => <EduItem key={i.year} {...i} />)}
      </div>
    </main>
  )
}
