'use client';

import { motion } from 'framer-motion';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className="section container" id="education">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        
        <div className={`glass-panel ${styles.eduCard}`}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.degree}>Bachelor of Computer Science</h3>
              <div className={styles.university}>Kannur University</div>
            </div>
            <div className={styles.date}>2020 – 2023</div>
          </div>
        </div>
      </motion.div>

      <motion.footer 
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Mirzah Muzammil. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/Mirzah-Muzammil" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mirzah-muzammil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:mirzaahmuzammil@gmail.com">Email</a>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
