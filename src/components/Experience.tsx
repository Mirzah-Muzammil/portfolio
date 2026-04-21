'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Front End Developer",
    company: "IOTICS Middle East",
    date: "Oct 2023 – Mar 2026",
    achievements: [
      "Developed React.js applications using Redux for state management and RESTful API integration, improving scalability and maintainability.",
      "Created SEO-friendly, high-performance web apps using Next.js with SSR and SSG, boosting organic search visibility.",
      "Built and maintained Node.js/Express.js backend services with RESTful API design, JWT authentication, and MongoDB integration.",
      "Designed and integrated a Smart Attendance Tracker backend: Node.js for core API logic and a Python DeepFace microservice for AI-powered face recognition-based attendance marking.",
      "Implemented Redis caching to optimize API response times and reduce database load across backend services.",
      "Applied Zod for robust schema validation and input sanitization in Node.js APIs, improving data integrity and error handling.",
      "Built and deployed cross-platform mobile applications using Flutter, delivering native-like experiences on iOS and Android.",
      "Deployed and managed applications on Vercel, configuring environments, custom domains, and optimizing build performance."
    ]
  }
];

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gsap-parallax" data-speed="0.2">Work Experience</h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <motion.div 
                className={`glass-panel ${styles.content}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.date}>{exp.date}</div>
                </div>
                
                <ul className={styles.bullets}>
                  {exp.achievements.map((item, bIdx) => (
                    <li key={bIdx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
