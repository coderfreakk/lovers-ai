import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', v => setScrolled(v > 60))
  }, [scrollY])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className={`${styles.logo} font-dream`}>Lover's AI</span>
      <ul className={styles.links}>
        {['About', 'Presence'].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
      {/* <a href="#waitlist" className={styles.cta}>Join Waitlist</a> */}
    </motion.nav>
  )
}