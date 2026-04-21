'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
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
  }, { scope: container });

  return (
    <main ref={container}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
}
