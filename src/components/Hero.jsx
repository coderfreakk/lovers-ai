import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from '../styles/Hero.module.css'

// Replace this with your actual image import:
import heroBg from '../assets/images/hero.jpg'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax: bg moves up slower than scroll
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  // Scale bg from 1 to 1.1 as you scroll down (subtle zoom out effect)
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12])
  // Fade content out as you scroll away
  const contentY       = useTransform(scrollYProgress, [0, 0.5], ['0%', '-20%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <section ref={ref} className={styles.hero} id="hero">
      {/* Parallax background */}
      <motion.div
        className={styles.bg}
        style={{
          backgroundImage: `url(${heroBg})`,
          y: bgY,
          scale: bgScale,
        }}
      />
      <div className={styles.overlay} />

      {/* Corner decorations */}
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.br}`} />

      {/* Content */}
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p className={styles.tag} variants={fadeUp}>
          A Wedding AI Startup
        </motion.p>
        <motion.h1 className={`${styles.title} font-DreamAvenue`} variants={fadeUp}>
          Making Your Dream<br />Wedding Come True
        </motion.h1>
        <motion.div variants={fadeUp}>
          <a href="#waitlist" className={styles.Btn}></a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className={styles.scrollLine} />
        {/* <span className={styles.scrollLabel}>Scroll</span> */}
      </motion.div>
    </section>
  )
}