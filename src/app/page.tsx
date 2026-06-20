'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AOS from 'aos';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Preloader from '@/components/Preloader';
import { useLenis } from 'lenis/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef<HTMLElement>(null);
  const lenis = useLenis();

  // Scroll Progress Setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    
    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
      // Initialize AOS when loading finishes and Lenis starts
      AOS.init({
        duration: 800,
        easing: 'ease-out-back',
        once: false,
        mirror: true,
      });
      // Refresh AOS on scroll/layout changes
      AOS.refresh();
    }
  }, [lenis, isLoading]);

  useGSAP(() => {
    if (isLoading) return;

    // Parallel/Parallax scroll animations for elements with .gsap-parallax
    const parallaxElements = gsap.utils.toArray('.gsap-parallax');
    
    parallaxElements.forEach((el: any) => {
      const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 0.5;
      
      gsap.to(el, {
        y: () => -100 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        }
      });
    });
  }, { scope: container, dependencies: [isLoading] });

  return (
    <>
      <Preloader isLoading={isLoading} />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="blueprint-grid" />
      <main ref={container}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
    </>
  );
}
