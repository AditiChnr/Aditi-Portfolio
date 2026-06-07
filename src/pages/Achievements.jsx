import { useReveal } from '../components/useReveal'
import ElectricBorder from '../components/ElectricBorder'
import styles from './Achievements.module.css'

const CARDS = [
  { n:'01', tag:'1st Year Engineering', title:'1st Place — RPAthon', desc:'Won first place in a Robotic Process Automation challenge in the first year of engineering. Topped the leaderboard straight out of the gate.', size:'big' },
  { n:'02', tag:'Tech Fest — AVALANCHE', title:'2nd Place — Paper Presentation', desc:"Secured 2nd at Gogte's tech fest in the Chem Cycle. A strong debut in competitive engineering.", size:'half' },
  { n:'03', tag:'IEEE WiE Chapter', title:'Event Lead', desc:"Organising events at one of the world's largest technical organisations — Women in Engineering.", size:'half' },
  { n:'04', tag:'ISTE Chapter', title:'Graphic Designer', desc:'Bringing her visual sensibility to tech. Responsible for the creative identity of the ISTE chapter.', size:'third' },
  { n:'05', tag:'Literary Club', title:'Club Member', desc:'Part of the college literary club — where poetry and writing find their home.', size:'third' },
  { n:'06', tag:'Leaders Private School, Sharjah', title:'School Prefect — Twice', desc:'Elected to student council as Prefect not once but twice. Leadership always been part of the story.', size:'third' },
  { n:'07', tag:'Academic', title:'100% in General Knowledge', desc:'Perfect score. A natural result of being curious about literally everything, always.', size:'half' },
  { n:'08', tag:'School Years', title:'Multiple Competition Wins', desc:'Consistent performer across arts, academics, and extracurriculars throughout the school years.', size:'half' },
]

function AchCard({ n, tag, title, desc, size }) {
  const ref = useReveal()
  const isBig = size === 'big'
  return (
    <div ref={ref} className={`reveal ${styles.cardWrap} ${styles[size]}`}>
      <ElectricBorder
        color={isBig ? '#c0392b' : 'rgba(139,0,0,0.5)'}
        glowColor={isBig ? 'rgba(192,57,43,0.5)' : 'rgba(139,0,0,0.2)'}
        className={`${styles.card} ${isBig ? styles.cardBig : ''}`}
      >
        <div className={styles.num}>{n}</div>
        <div className={styles.tag}>{tag}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
      </ElectricBorder>
    </div>
  )
}

export default function Achievements() {
  return (
    <main className={styles.main}>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--black) 60%, rgba(139,0,0,0.15))' }}>
        <div className="page-kicker">Receipts</div>
        <h1 className="page-title">WHAT I'VE <span style={{ color: '#c0392b' }}>WON</span></h1>
      </div>
      <div className={styles.grid}>
        {CARDS.map(c => <AchCard key={c.n} {...c} />)}
      </div>
    </main>
  )
}
