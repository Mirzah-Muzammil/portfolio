'use client';

import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gsap-parallax" data-speed="0.2">Technical Skills</h2>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className={`glass-panel ${styles.skillCard}`}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillTags}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
