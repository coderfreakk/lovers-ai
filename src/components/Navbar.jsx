import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    // This matches the point where the Hero logo disappears
    return scrollY.on('change', v => setScrolled(v > 60))
  }, [scrollY])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* The text visibility is now controlled by the 'scrolled' state.
        It will be invisible (opacity 0) when at the top,
        and fade in (opacity 1) only when the navbar becomes solid.
      */}
      <motion.span 
        className={`${styles.logo} font-dream`}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        Lovers AI
      </motion.span>

      <ul className={styles.links}>
        {['About', 'Presence'].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}