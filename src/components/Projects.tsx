'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Noor",
    link: "https://noor-website-teal.vercel.app/",
    description: "Developed a highly interactive, SEO-friendly multi-language website (English & French) using Next.js. Integrated GSAP for advanced scroll and page animations to deliver a premium user experience.",
    stack: ["Next.js", "React.js", "GSAP", "Tailwind CSS", "i18n"]
  },
  {
    title: "E-Commerce Mobile App",
    link: null,
    description: "Built a cross-platform e-commerce application using React Native and TypeScript, adhering to scalable folder structures and industry best practices. Integrated Firebase for secure backend services, user authentication, and real-time data management.",
    stack: ["React Native", "TypeScript", "Firebase"]
  },
  {
    title: "Smart Attendance Tracker",
    link: null,
    description: "Engineered a full-stack attendance management system with a cross-platform Flutter frontend, a Node.js/Express.js backend and a Python microservice powered by DeepFace for real-time face recognition. Supports JWT auth, Redis caching, MongoDB, and Zod.",
    stack: ["Flutter", "Node.js", "Python", "DeepFace", "MongoDB", "Redis", "Zod"]
  },
  {
    title: "Monkey Adventure",
    link: "https://www.monkeyadventures.co.in/",
    description: "Revamped an existing website using Next.js with SSR and SEO optimization, achieving a top 5 Google search ranking. Integrated React animation libraries, Payload CMS for content management, and deployed on Vercel.",
    stack: ["Next.js", "Payload CMS", "Tailwind CSS", "Vercel"]
  },
  {
    title: "Learnspire LMS",
    link: "https://learnspirepro.in",
    description: "Developed a full-featured LMS using Next.js with an SEO-optimized landing page, role-based admin dashboard, and a student portal with video streaming powered by Mux for a scalable e-learning experience.",
    stack: ["Next.js", "Node.js", "MongoDB", "Mux", "REST API"]
  }
];

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gsap-parallax" data-speed="0.2">Featured Projects</h2>
        
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className={`glass-panel ${styles.card}`}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.header}>
                <h3 className={styles.title}>
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`View ${project.title}`}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.stack}>
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
