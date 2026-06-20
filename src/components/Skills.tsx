'use client';

import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material-UI", "Redux", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "iOS", "Android"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API", "GraphQL", "JWT Auth", "Microservices"]
  },
  {
    title: "Database & Validation",
    skills: ["MongoDB", "Mongoose", "SQL", "PostgreSQL", "MySQL", "Zod", "Redis"]
  },
  {
    title: "AI / Python",
    skills: ["Python", "DeepFace", "FastAPI", "Flask"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Vercel", "SEO"]
  }
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div 
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="section-title">Technical Skills</h2>
        
        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={styles.skillCard}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Corner plus decorations */}
              <div className="corner-decor corner-decor-tl"></div>
              <div className="corner-decor corner-decor-tr"></div>
              <div className="corner-decor corner-decor-bl"></div>
              <div className="corner-decor corner-decor-br"></div>
              
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillTags}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
