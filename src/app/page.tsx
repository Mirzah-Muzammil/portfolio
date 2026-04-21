'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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
