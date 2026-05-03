import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer className={styles.footer} ref={ref}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.contact}>
          <p>RG Trade Tower, NSP, Delhi</p>
          <p>+91 92171 35533 | +91 92663 55235</p>
          <p>theloversai5@gmail.com</p>
        </div>

        <p className={styles.copy}>Lover's AI · All rights reserved © 2026</p>
      </motion.div>
    </footer>
  )
}