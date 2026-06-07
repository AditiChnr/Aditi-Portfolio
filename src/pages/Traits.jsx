import { useReveal } from '../components/useReveal'
import styles from './Traits.module.css'

const TRAITS = [
  { n:'01', name:'Bold & Extroverted', desc:"Fills a room with energy, not noise. The kind of person others gravitate toward without quite knowing why.", tag:'Personality', tc:'y' },
  { n:'02', name:'Observant First', desc:"Reads the room before engaging. When she does enter a conversation, she's fully present — and it shows.", tag:'Social', tc:'c' },
  { n:'03', name:'The Creative Who Surprises', desc:"Friends don't know what she'll do next. She approaches problems from angles others don't consider.", tag:'Creative', tc:'p' },
  { n:'04', name:'Natural Networker', desc:"Loves connecting people and ideas. For her, networking is genuine curiosity — not small talk.", tag:'Social', tc:'y' },
  { n:'05', name:'Solution-First', desc:"When things go wrong: doesn't panic, doesn't vent. Fixes. Fast.", tag:'Mindset', tc:'c' },
  { n:'06', name:'Radically Honest', desc:"Speaks her mind immediately. No passive aggression — ever. What you see is what you get.", tag:'Personality', tc:'p' },
  { n:'07', name:'Selectively Organised', desc:"Structure appears when passion does. When something excites her, she's meticulous. When it doesn't, she still succeeds.", tag:'Work Style', tc:'y' },
  { n:'08', name:'Shines When It Counts', desc:"Doesn't chase spotlights. But when the moment calls, she steps in fully — and it lands.", tag:'Leadership', tc:'p' },
  { n:'09', name:'Logic Meets Intuition', desc:"Head and gut, both. Thoughtful without being paralysed. Instinctive without being reckless.", tag:'Mindset', tc:'c' },
  { n:'10', name:'Fluid Focus', desc:"Can go deep when needed, shift gears when required. Not scattered — versatile.", tag:'Work Style', tc:'y' },
  { n:'11', name:'Deeply Curious', desc:"Asks questions because she genuinely wants to understand — people, ideas, systems. Always real.", tag:'Core', tc:'p' },
]

function TraitRow({ n, name, desc, tag, tc }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${styles.row}`}>
      <span className={styles.n}>{n}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.desc}>{desc}</span>
      <span className={`${styles.tag} ${styles[`t${tc}`]}`}>{tag}</span>
    </div>
  )
}

export default function Traits() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-kicker">Who I am</div>
        <h1 className="page-title">MY <span style={{ color: 'var(--pink)' }}>TRAITS</span></h1>
        <p className="page-sub">Bold on the outside, thoughtful on the inside. She observes quietly — then enters the conversation and owns it.</p>
      </div>
      <div className={styles.list}>
        {TRAITS.map(t => <TraitRow key={t.n} {...t} />)}
      </div>
    </main>
  )
}
