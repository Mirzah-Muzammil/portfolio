'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section className="section container" id="about">
      <div 
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="section-title">Profile</h2>
        
        <div className={styles.aboutContent}>
          <div 
            className={styles.imageContainer}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="corner-decor corner-decor-tl"></div>
            <div className="corner-decor corner-decor-tr"></div>
            <div className="corner-decor corner-decor-bl"></div>
            <div className="corner-decor corner-decor-br"></div>
            <div className={styles.imageWrapper}>
              <img src="/mirzah-no-bg.png" alt="Mirzah Muzammil" className={styles.image} />
            </div>
          </div>

          <div 
            className={styles.textCard}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="corner-decor corner-decor-tl"></div>
            <div className="corner-decor corner-decor-tr"></div>
            <div className="corner-decor corner-decor-bl"></div>
            <div className="corner-decor corner-decor-br"></div>
            <div className={styles.boxLabel}>[PROFILE_METADATA]</div>

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
      </div>
    </section>
  );
}
