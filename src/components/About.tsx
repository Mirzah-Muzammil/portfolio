'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gsap-parallax" data-speed="0.2">Profile</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.imageContainer}>
            <div className={styles.glow}></div>
            <div className={styles.imageWrapper}>
              <img src="/mirzah-no-bg.png" alt="Mirzah Muzammil" className={styles.image} />
            </div>
          </div>

          <div className={styles.textCard}>
            <p className={styles.text}>
              Full Stack Developer specializing in React.js, Next.js, Flutter, React Native, and Node.js backend development,
              with strong expertise in building high-performance, SEO-optimized, and scalable web applications.
            </p>
            <p className={styles.text}>
              Proficient in designing RESTful and GraphQL APIs, microservice architectures, and database modeling
              with MongoDB and SQL. Experienced with Redis caching, Zod schema validation, JWT-based authentication,
              and Python-based AI microservices using DeepFace.
            </p>
            
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
