'use client';

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
      <div
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="section-title">Work Experience</h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div 
                className={styles.content}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {/* Corner plus decorations */}
                <div className="corner-decor corner-decor-tl"></div>
                <div className="corner-decor corner-decor-tr"></div>
                <div className="corner-decor corner-decor-bl"></div>
                <div className="corner-decor corner-decor-br"></div>
                <div className={styles.boxLabel}>[EXP_BLOCK_{idx + 1}]</div>

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
