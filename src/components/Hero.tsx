'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`${styles.hero} section container`}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          className={styles.greeting}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          className={styles.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Mirzah <span className="text-gradient">Muzammil</span>
        </motion.h1>
        
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a href="tel:+918075982323" className={styles.contactLink}><Phone size={16} /> +91 8075982323</a>
          <a href="mailto:mirzaahmuzammil@gmail.com" className={styles.contactLink}><Mail size={16} /> mirzaahmuzammil@gmail.com</a>
          <span className={styles.contactLink}><MapPin size={16} /> Kannur, Kerala 670009</span>
        </motion.div>

        <motion.div 
          className={styles.socials}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <a href="https://github.com/Mirzah-Muzammil" target="_blank" rel="noopener noreferrer" className="glass-panel" style={{
            fontSize:"12px"
          }} aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/mirzah-muzammil" target="_blank" rel="noopener noreferrer" className="glass-panel"style={{
            fontSize:"12px"
          }}aria-label="LinkedIn">LinkedIn</a>
        </motion.div>
      </motion.div>

      {/* Decorative background elements */}
      <div className={`${styles.blob1} gsap-parallax`} data-speed="1.5"></div>
      <div className={`${styles.blob2} gsap-parallax`} data-speed="0.8"></div>
    </section>
  );
}
