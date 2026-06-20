'use client';

import styles from './Education.module.css';

export default function Education() {
  return (
    <section className="section container" id="education" style={{marginBottom: "-4rem"}}>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="section-title">Education</h2>
        
        <div 
          className={styles.eduCard}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Corner plus decorations */}
          <div className="corner-decor corner-decor-tl"></div>
          <div className="corner-decor corner-decor-tr"></div>
          <div className="corner-decor corner-decor-bl"></div>
          <div className="corner-decor corner-decor-br"></div>
          <div className={styles.boxLabel}>[EDU_BLOCK_1]</div>

          <div className={styles.header}>
            <div>
              <h3 className={styles.degree}>Bachelor of Computer Science</h3>
              <div className={styles.university}>Kannur University</div>
            </div>
            <div className={styles.date}>2020 – 2023</div>
          </div>
        </div>
      </div>

      <footer 
        className={styles.footer}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Mirzah Muzammil. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/Mirzah-Muzammil" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mirzah-muzammil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:mirzaahmuzammil@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
