import { useState } from 'react'
import styles from './Music.module.css'

const LIBRARY = {
  pop: {
    color: '#FF2D7A',
    vibe: "2836 songs and this is where a huge chunk lives. Unapologetically catchy, emotionally charged, lyrically sharp. No shame.",
    stats: "316 tracks · Olivia, Taylor, Rina, Ashnikko",
    tracks: [
      { track: "XS", artist: "Rina Sawayama", album: "SAWAYAMA" },
      { track: "drop dead", artist: "Olivia Rodrigo", album: "you seem pretty sad for a girl so in love" },
      { track: "The Fate of Ophelia", artist: "Taylor Swift", album: "The Life of a Showgirl" },
      { track: "Rainbow Rocket Ride", artist: "SOFIA ISELLA", album: "Rainbow Rocket Ride - Single" },
      { track: "Daisy", artist: "Ashnikko", album: "DEMIDEVIL" },
      { track: "Give Me Time", artist: "Zeina", album: "Give Me Time - Single" },
    ]
  },
  indie: {
    color: '#B8FF00',
    vibe: "The biggest bucket by feel. Billie Eilish alone has 64 songs in here. Raw, atmospheric, emotionally honest music that doesn't try to make you feel better — just understood.",
    stats: "289 tracks · Billie, The Neighbourhood, Joji, The Marías",
    tracks: [
      { track: "LUNCH", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT" },
      { track: "Void", artist: "The Neighbourhood", album: "Hard To Imagine The Neighbourhood Ever Changing" },
      { track: "Sanctuary", artist: "Joji", album: "Nectar" },
      { track: "Hush", artist: "The Marías", album: "CINEMA" },
      { track: "I know it won't work", artist: "Gracie Abrams", album: "Good Riddance (Deluxe)" },
      { track: "The Search", artist: "NF", album: "The Search" },
    ]
  },
  hiphop: {
    color: '#FFE034',
    vibe: "Everything from Kendrick's storytelling to Eminem's bars to Tyler's art-pop. Hip-hop is poetry with a beat — and she writes poetry, so obviously.",
    stats: "75 tracks · Kendrick, Eminem, Tyler, Drake",
    tracks: [
      { track: "Swimming Pools (Drank)", artist: "Kendrick Lamar", album: "good kid, m.A.A.d city" },
      { track: "'Till I Collapse", artist: "Eminem", album: "The Eminem Show" },
      { track: "See You Again (feat. Kali Uchis)", artist: "Tyler, The Creator", album: "Flower Boy" },
      { track: "luther", artist: "Kendrick Lamar", album: "GNX" },
      { track: "One Dance (feat. Wizkid & Kyla)", artist: "Drake", album: "Views" },
      { track: "Candy Shop", artist: "50 Cent", album: "The Massacre" },
    ]
  },
  rnb: {
    color: '#00E5C8',
    vibe: "Earth, Wind & Fire to SZA to Frank Ocean. R&B in the library spans five decades — soul, neo-soul, contemporary. It all hits at the same frequency.",
    stats: "36 tracks · SZA, Frank Ocean, The Weeknd, Earth Wind & Fire",
    tracks: [
      { track: "September", artist: "Earth, Wind & Fire", album: "September" },
      { track: "Good Days", artist: "SZA", album: "SOS Deluxe: LANA" },
      { track: "Lost", artist: "Frank Ocean", album: "channel ORANGE" },
      { track: "After Hours", artist: "The Weeknd", album: "After Hours" },
      { track: "Gangsta", artist: "Kehlani", album: "Suicide Squad: The Album" },
      { track: "Rock Your Body", artist: "Justin Timberlake", album: "Justified" },
    ]
  },
  rock: {
    color: '#FF2D7A',
    vibe: "The Beatles to Radiohead to Tame Impala to Arctic Monkeys. The range here is decades wide. She knows her classic rock and her psych-rock equally well.",
    stats: "57 tracks · The Beatles, Tame Impala, Radiohead, Arctic Monkeys",
    tracks: [
      { track: "Here Comes the Sun", artist: "The Beatles", album: "Abbey Road" },
      { track: "Do I Wanna Know?", artist: "Arctic Monkeys", album: "AM" },
      { track: "Is It True", artist: "Tame Impala", album: "The Slow Rush" },
      { track: "No Surprises", artist: "Radiohead", album: "OK Computer" },
      { track: "I Want To Break Free", artist: "Queen", album: "The Works" },
      { track: "OHMAMI", artist: "Chase Atlantic", album: "BEAUTY IN DEATH" },
    ]
  },
  edm: {
    color: '#C8B6FF',
    vibe: "Calvin Harris, Kygo, The Chainsmokers, Martin Garrix. EDM is the workout playlist, the drive playlist, the 2am-with-the-windows-down playlist.",
    stats: "71 tracks · Calvin Harris, Kygo, The Chainsmokers, Zedd",
    tracks: [
      { track: "Feels", artist: "Calvin Harris", album: "Funk Wav Bounces Vol. 1" },
      { track: "Stranger Things (feat. OneRepublic)", artist: "Kygo", album: "Kids in Love" },
      { track: "Closer (feat. Halsey)", artist: "The Chainsmokers", album: "Closer" },
      { track: "Pressure (feat. Tove Lo)", artist: "Martin Garrix", album: "Pressure" },
      { track: "Give It to Me", artist: "Timbaland", album: "Shock Value" },
      { track: "Hey Baby", artist: "Pitbull", album: "Planet Pit" },
    ]
  },
  instrumental: {
    color: '#F0EEF8',
    vibe: "Animal Crossing piano covers and video game OSTs. Kenzie Smith Piano doing Mario Galaxy at midnight hits different. This is the late-night studying, 3am thinking playlist.",
    stats: "22 tracks · Kenzie Smith Piano · Animal Crossing & Mario Galaxy",
    tracks: [
      { track: "2:00 AM (From \"Animal Crossing: Wild World\")", artist: "Kenzie Smith Piano", album: "Video Game Music Collection Piano Solo, Vol. 1" },
      { track: "Main Theme (From \"Animal Crossing: New Leaf\")", artist: "Kenzie Smith Piano", album: "Video Game Music Collection Piano Solo, Vol. 1" },
      { track: "Cosmic Cove Galaxy (From \"Super Mario Galaxy 2\")", artist: "Kenzie Smith Piano", album: "Video Game Music Collection Piano Solo, Vol. 1" },
      { track: "11:00 PM (From \"Animal Crossing: New Leaf\")", artist: "Kenzie Smith Piano", album: "Video Game Music Collection Piano Solo, Vol. 1" },
      { track: "World 3 (From \"Super Mario Galaxy 2\")", artist: "Kenzie Smith Piano", album: "Video Game Music Collection Piano Solo, Vol. 1" },
      { track: "8:00 PM (From \"Animal Crossing: New Leaf\")", artist: "Kenzie Smith Piano", album: "Video Game Music Collection Piano Solo, Vol. 1" },
    ]
  },
}

const GENRE_ORDER = ['pop','indie','hiphop','rnb','rock','edm','instrumental']
const GENRE_LABELS = { pop:'Pop', indie:'Indie / Alt', hiphop:'Hip-Hop', rnb:'R&B', rock:'Rock', edm:'EDM', instrumental:'Instrumental' }

function TrackRow({ track, artist, album, index }) {
  return (
    <div className={styles.trackRow}>
      <span className={styles.trackIndex}>{String(index + 1).padStart(2,'0')}</span>
      <div className={styles.trackInfo}>
        <span className={styles.trackName}>{track}</span>
        <span className={styles.trackArtist}>{artist}</span>
      </div>
      <span className={styles.trackAlbum}>{album}</span>
    </div>
  )
}

export default function Music() {
  const [active, setActive] = useState('pop')
  const genre = LIBRARY[active]

  return (
    <main className={styles.main}>
      <div className="page-hero">
        <div className="page-kicker">2,836 songs · all over the place</div>
        <h1 className="page-title">MY MUSIC<br /><span style={{ color: 'var(--cyan)' }}>TASTE</span></h1>
        <p className="page-sub">Real data from her Apple Music library. Every track in here she actually liked.</p>
      </div>

      <div className={styles.genreNav}>
        {GENRE_ORDER.map(id => (
          <button
            key={id}
            className={`${styles.genreBtn} ${active === id ? styles.on : ''}`}
            style={active === id ? { background: LIBRARY[id].color, color: ['#FFE034','#B8FF00','#F0EEF8'].includes(LIBRARY[id].color) ? '#0a0a0a' : '#fff', borderColor: LIBRARY[id].color } : {}}
            onClick={() => setActive(id)}
          >
            {GENRE_LABELS[id]}
          </button>
        ))}
      </div>

      <div className={styles.panel} key={active}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle} style={{ color: genre.color }}>{GENRE_LABELS[active].toUpperCase()}</h2>
          <p className={styles.panelStats}>{genre.stats}</p>
          <p className={styles.panelVibe}>{genre.vibe}</p>
        </div>
        <div className={styles.trackList}>
          {genre.tracks.map((t, i) => <TrackRow key={i} {...t} index={i} />)}
        </div>
        <a href="https://music.apple.com/in/playlist/favorite-songs/pl.u-r0URm3jlGj" target="_blank" rel="noreferrer" className={styles.appleLink}>
          Open full playlist on Apple Music →
        </a>
      </div>
    </main>
  )
}
