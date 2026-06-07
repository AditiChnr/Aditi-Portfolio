import styles from './Footer.module.css'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditi-channavar-49073738b/' },
  { label: 'GitHub', href: 'https://github.com/AditiChnr' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/AditiChnr/' },
  { label: 'Email', href: 'mailto:cantstopaditi@gmail.com' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>ADITI<br />CHANNAVAR</div>
      <div className={styles.bottom}>
        <span className={styles.tag}>cantstopaditi</span>
        <div className={styles.socials}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.social}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
