'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Create 5 bars for the curtain effect
  const bars = Array(5).fill(0);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className={styles.container}>
          {/* Progress Counter */}
          <motion.div 
            className={styles.counterWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
          >
            <span className={styles.number}>{progress}%</span>
            <div className={styles.progressBarWrapper}>
              <motion.div 
                className={styles.progressBar}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <p className={styles.tagline}>Crafting Digital Excellence</p>
          </motion.div>

          {/* Curtain Bars */}
          <div className={styles.curtain}>
            {bars.map((_, i) => (
              <motion.div
                key={i}
                className={styles.bar}
                initial={{ y: 0 }}
                exit={{ 
                  y: '-100%',
                  transition: { 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1],
                    delay: i * 0.05 
                  }
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
