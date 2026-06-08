import { useReveal } from '../components/useReveal'
import DomeGallery from '../components/DomeGallery'
import styles from './Travels.module.css'

const PLACES = [
  { flag:'🇮🇳', name:'India', detail:'Where it all started — and where it came back to. Born in Belagavi, Karnataka. Home.', home: true },
  { flag:'🇦🇪', name:'UAE', detail:'Grew up here for sixteen years. Expo 2020. The city that shaped everything.', secondHome: true },
  { flag:'🇧🇭', name:'Bahrain', detail:'The island kingdom of the Gulf. A short crossing that opens to a different pace entirely.' },
  { flag:'🇴🇲', name:'Oman', detail:"Dramatic landscapes and a warmth that's hard to describe until you've been there." },
  { flag:'🇶🇦', name:'Qatar', detail:'Modern, ambitious, always building toward something. The pearl of the Gulf.' },
  { flag:'🇪🇬', name:'Egypt', detail:'Pyramids, the Nile, thousands of years of history layered over each other. Unforgettable.' },
  { flag:'🇬🇧', name:'UK', detail:'Rainy skies, centuries of architecture, and a culture that makes grey feel charming.' },
  { flag:'🇫🇷', name:'France', detail:'Art, food, language, and a way of taking life seriously that shows in everything.' },
  { flag:'🇭🇰', name:'Hong Kong', detail:'East meets West at full speed. A skyline that earns every photograph of it.' },
  { flag:'🇸🇬', name:'Singapore', detail:'The city that does everything right. Immaculate, diverse, endlessly interesting.' },
]

function PlaceRow({ p, index }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${styles.listRow}`}>
      <span className={styles.listNum}>{String(index + 1).padStart(2,'0')}</span>
      <span className={styles.listFlag}>{p.flag}</span>
      <div>
        <div className={styles.listName}>
          {p.name}
          {p.home && <span className={styles.homeTag}>Home</span>}
          {p.secondHome && <span className={styles.secondHomeTag}>Second Home</span>}
        </div>
        <div className={styles.listDetail}>{p.detail}</div>
      </div>
    </div>
  )
}

export default function Travels() {
  return (
    <main className={styles.main}>
      <div className="page-hero">
        <div className="page-kicker">Passport full</div>
        <h1 className="page-title">10 COUNTRIES<br /><span style={{ color: '#c0392b' }}>&amp; COUNTING</span></h1>
        <p className="page-sub">Born in India. Grew up in the UAE. The world has always been the classroom.</p>
      </div>

      <div className={styles.domeSection}>
        <p className={styles.domeHint}>Move your mouse over the dome</p>
        <DomeGallery items={PLACES} />
      </div>

      <div className={styles.listSection}>
        {PLACES.map((p, i) => <PlaceRow key={p.name} p={p} index={i} />)}
      </div>
    </main>
  )
}
