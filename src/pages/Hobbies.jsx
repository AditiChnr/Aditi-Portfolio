import { useRef, useState, useEffect } from 'react'
import { useReveal } from '../components/useReveal'
import CircularGallery from '../components/CircularGallery'
import styles from './Hobbies.module.css'

const HOBBY_ITEMS = [
  { label: 'Sketching\n& Painting', bg: 'linear-gradient(135deg,#1a0a2e,#3d1a6b)' },
  { label: 'Sewing &\nDesign', bg: 'linear-gradient(135deg,#0a1a0a,#1a4a1a)' },
  { label: 'Keyboard', bg: 'linear-gradient(135deg,#1a0a0a,#4a0a0a)' },
  { label: 'Poetry', bg: 'linear-gradient(135deg,#0a0a1a,#1a1a4a)' },
  { label: 'Badminton', bg: 'linear-gradient(135deg,#1a1a0a,#3a3a0a)' },
  { label: 'Chess', bg: 'linear-gradient(135deg,#0f0f0f,#2a2a2a)' },
  { label: 'Reading', bg: 'linear-gradient(135deg,#0a1a2a,#0a2a4a)' },
  { label: 'Baking', bg: 'linear-gradient(135deg,#2a0a0a,#5a1a0a)' },
  { label: 'Travelling', bg: 'linear-gradient(135deg,#0a1a1a,#0a3a3a)' },
  { label: 'Pin\nCollecting', bg: 'linear-gradient(135deg,#1a0a1a,#3a0a3a)' },
]

const HOBBY_DETAILS = [
  { num:'01', name:'Sketching & Painting', blurb:'Pencil to canvas. Art is how she makes sense of the world.', slides:3 },
  { num:'02', name:'Sewing & Pattern Design', blurb:'Self-taught. Made a full dress for her dog from scratch.', slides:3 },
  { num:'03', name:'Keyboard', blurb:'Taught herself the basics. Another skill added to the list.', slides:2 },
  { num:'04', name:'Poetry', blurb:'Where thoughts become something worth keeping.', slides:2 },
  { num:'05', name:'Badminton', blurb:'Fast, sharp, competitive. The court quiets everything else.', slides:2 },
  { num:'06', name:'Chess', blurb:'Patient, strategic. Always three moves ahead.', slides:2 },
  { num:'07', name:'Reading', blurb:'Books as a way of living multiple lives at once.', slides:3 },
  { num:'08', name:'Baking & Cooking', blurb:'Kitchen chemistry. Baking hits different.', slides:3 },
  { num:'09', name:'Travelling', blurb:'Nine countries. Raised between continents. Still going.', slides:4 },
  { num:'10', name:'Pin Collecting', blurb:'Large collection from Expo 2020 Dubai.', slides:2 },
]

function HobbyCell({ num, name, blurb, slides }) {
  const [hovered, setHovered] = useState(false)
  const [cur, setCur] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (hovered) { timerRef.current = setInterval(() => setCur(c => (c + 1) % slides), 1400) }
    else { clearInterval(timerRef.current); setCur(0) }
    return () => clearInterval(timerRef.current)
  }, [hovered, slides])

  return (
    <div className={styles.cell} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className={`${styles.front} ${hovered ? styles.hidden : ''}`}>
        <div className={styles.num}>{num}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.blurb}>{blurb}</div>
      </div>
      <div className={`${styles.imgOverlay} ${hovered ? styles.visible : ''}`}>
        <span className={styles.slideLabel}>{name}</span>
        {Array.from({ length: slides }).map((_, i) => (
          <div key={i} className={`${styles.slide} ${i === cur ? styles.activeSlide : ''}`}>
            <div className={styles.placeholder}>
              <div className={styles.placeholderBox}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="24" height="24" rx="3" stroke="rgba(192,57,43,0.3)" strokeWidth="1.5"/>
                  <path d="M2 20l7-7 5 5 4-4 8 8" stroke="rgba(192,57,43,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="9" cy="9" r="2.5" fill="rgba(192,57,43,0.2)"/>
                </svg>
              </div>
              <span className={styles.placeholderLabel}>Add image {i + 1}</span>
            </div>
          </div>
        ))}
        <div className={styles.dots}>
          {Array.from({ length: slides }).map((_, i) => (
            <div key={i} className={`${styles.dot} ${i === cur ? styles.dotOn : ''}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hobbies() {
  const bannerRef = useReveal(0.2)
  const cardRef = useReveal(0.2)

  return (
    <main className={styles.main}>
      <div className="page-hero">
        <div className="page-kicker">What I do</div>
        <h1 className="page-title">HOBBIES &amp; <span style={{ color: '#c0392b' }}>EVERYTHING</span></h1>
        <p className="page-sub">From sewing a dress for my dog to playing chess at midnight — the range is the point.</p>
      </div>

      {/* Jack quote banner */}
      <div ref={bannerRef} className={`reveal ${styles.jackBanner}`}>
        <blockquote className={styles.jackQ}>
          "A jack of all trades is a master of none, but oftentimes better than a master of one."
        </blockquote>
        <p className={styles.jackAttr}>The quote that lives rent-free — and fits perfectly.</p>
      </div>
      
      {/* Flipping card */}
      <div ref={cardRef} className={`reveal ${styles.cardWrap}`}>
        <div className={styles.cardFlip}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <img src="/stickers/card.png" alt="Jack of all trades" />
            </div>
            <div className={styles.cardBack}>
              <img src="/stickers/card-back.png" alt="Card back" />
            </div>
          </div>
        </div>
      </div>
      {/* Circular Gallery */}
      <div className={styles.gallerySection}>
        <p className={styles.gallerySub}>Drag to explore</p>
        <CircularGallery items={HOBBY_ITEMS} textColor="#F0EEF8" borderRadius={0.08} />
      </div>

      {/* Detail grid */}
      <div className={styles.detailHeader}>
        <h2 className={styles.detailTitle}>The full list</h2>
      </div>
      <div className={styles.grid}>
        {HOBBY_DETAILS.map(h => <HobbyCell key={h.num} {...h} />)}
      </div>
    </main>
  )
}
