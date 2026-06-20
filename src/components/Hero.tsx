'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const [time, setTime] = useState('');
  const [uptime, setUptime] = useState(0);
  const [activeTab, setActiveTab] = useState('diagnostics');
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  useEffect(() => {
    if (!showResumeOptions) return;
    const handleOutsideClick = () => {
      setShowResumeOptions(false);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showResumeOptions]);

  const [matrix, setMatrix] = useState<boolean[]>(() => {
    const init = Array(64).fill(false);
    // Draw an abstract developer pattern (e.g. glider or visual tech outline)
    const activeIndices = [
      2, 5, 10, 13, 18, 21, 26, 29, 34, 37, 42, 45, 51, 52, 58, 61
    ];
    activeIndices.forEach(idx => {
      if (idx < 64) init[idx] = true;
    });
    return init;
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace('T', ' ').substring(0, 19));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev + 0.1);
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const toggleCell = (index: number) => {
    setMatrix(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div 
          className={styles.wireframeBox}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Corner plus decorations */}
          <div className="corner-decor corner-decor-tl"></div>
          <div className="corner-decor corner-decor-tr"></div>
          <div className="corner-decor corner-decor-bl"></div>
          <div className="corner-decor corner-decor-br"></div>
          
          {/* Box Header Label */}
          <div className={styles.boxLabel}>[SYSTEM_INIT: HERO_SECTION]</div>

          <div className={styles.mainGrid}>
            {/* Left Column */}
            <div className={styles.leftCol}>
              <div className={styles.topRow}>
                <div className={styles.avatarWrapper} data-aos="zoom-in" data-aos-delay="200">
                  <img
                    src="/mirzah.jpg"
                    alt="Mirzah Muzammil"
                    className={styles.avatar}
                  />
                </div>

                <div className={styles.status} data-aos="fade-left" data-aos-delay="300">
                  <span className={styles.dot}></span>
                  ACTIVE // AVAILABLE FOR WORK
                </div>
              </div>

              <h1 className={styles.name} data-aos="fade-right" data-aos-delay="200">
                <span>MIRZAH</span>
                <span className={styles.lastName}>MUZAMMIL</span>
              </h1>

              <p className={styles.description} data-aos="fade-up" data-aos-delay="400">
                Full-stack developer focused on building fast, scalable and
                user-friendly web applications with React, Next.js, Node.js and
                modern web technologies.
              </p>

              <div className={styles.chips} data-aos="fade-up" data-aos-delay="500">
                <span>📍 KANNUR, KERALA</span>
                <span>⚡ 2.5+ YEARS EXP</span>
                <span>🌍 OPEN TO REMOTE</span>
              </div>

              <div className={styles.actions} data-aos="fade-up" data-aos-delay="600">
                <a href="#projects" className="btn-boxy-primary">
                  View Projects
                  <ArrowRight size={18} />
                </a>

                <div className={styles.resumeWrapper}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowResumeOptions(!showResumeOptions);
                    }}
                    className="btn-boxy-secondary"
                  >
                    <Download size={18} />
                    Resume
                  </button>
                  {showResumeOptions && (
                    <div className={styles.resumeDropdown}>
                      <div className="corner-decor corner-decor-tl"></div>
                      <div className="corner-decor corner-decor-tr"></div>
                      <div className="corner-decor corner-decor-bl"></div>
                      <div className="corner-decor corner-decor-br"></div>
                      <a
                        href="/Mirzah-Muzammil-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dropdownItem}
                        onClick={() => setShowResumeOptions(false)}
                      >
                        👁 View CV
                      </a>
                      <a
                        href="/Mirzah-Muzammil-CV.pdf"
                        download="Mirzah-Muzammil-CV.pdf"
                        className={styles.dropdownItem}
                        onClick={() => setShowResumeOptions(false)}
                      >
                        ⬇ Download PDF
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.stats} data-aos="fade-up" data-aos-delay="700">
                <div className={styles.statBox}>
                  <h3>2.5+</h3>
                  <p>Years Experience</p>
                </div>

                <div className={styles.statBox}>
                  <h3>20+</h3>
                  <p>Projects Built</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Developer HUD */}
            <div className={styles.rightCol} data-aos="fade-left" data-aos-delay="400">
              <div className={styles.terminalWindow}>
                {/* Terminal Header */}
                <div className={styles.terminalHeader}>
                  <span className={styles.terminalTitle}>[CONSOLE // MIRZAH_SYS_v1.0]</span>
                  <div className={styles.terminalButtons}>
                    <span>_</span>
                    <span>▢</span>
                    <span>X</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className={styles.terminalTabs}>
                  <button 
                    className={`${styles.tabBtn} ${activeTab === 'diagnostics' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('diagnostics')}
                  >
                    DIAGNOSTICS
                  </button>
                  <button 
                    className={`${styles.tabBtn} ${activeTab === 'matrix' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('matrix')}
                  >
                    MATRIX_INPUT
                  </button>
                </div>

                {/* Terminal Body */}
                <div className={styles.terminalBody}>
                  {activeTab === 'diagnostics' ? (
                    <div className={styles.diagnosticsTab}>
                      <div className={styles.systemInfo}>
                        <div className={styles.infoLine}>
                          <span className={styles.infoLabel}>SYSTEM_TIME:</span>
                          <span className={styles.infoValue}>{time || 'LOADING...'}</span>
                        </div>
                        <div className={styles.infoLine}>
                          <span className={styles.infoLabel}>SYS_UPTIME:</span>
                          <span className={styles.infoValue}>{uptime.toFixed(1)}s</span>
                        </div>
                        <div className={styles.infoLine}>
                          <span className={styles.infoLabel}>HOST_ENV:</span>
                          <span className={styles.infoValue}>NEXTJS_SSR_PROD</span>
                        </div>
                        <div className={styles.infoLine}>
                          <span className={styles.infoLabel}>STATUS:</span>
                          <span className={`${styles.infoValue} ${styles.greenText}`}>[ONLINE]</span>
                        </div>
                      </div>

                      <div className={styles.sysLog}>
                        <div className={styles.logLabel}>SYSTEM_LOGS:</div>
                        <div className={styles.logLines}>
                          <div className={styles.logLine}>[OK] Initializing React core framework.</div>
                          <div className={styles.logLine}>[OK] Loaded 20+ modules successfully.</div>
                          <div className={styles.logLine}>[OK] Rendered wireframe blueprints.</div>
                          <div className={styles.logLine}>[OK] Smooth scroll active (Lenis Eng).</div>
                          <div className={styles.logLine}>[OK] AOS hooks loaded. Ready.</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.matrixTab}>
                      <p className={styles.matrixDesc}>
                        // CLICK OR HOVER SQUARES TO INTERACT WITH MATRIX BLUEPRINTS:
                      </p>
                      <div className={styles.matrixGrid}>
                        {matrix.map((cell, idx) => (
                          <div 
                            key={idx}
                            className={`${styles.matrixCell} ${cell ? styles.matrixCellActive : ''}`}
                            onClick={() => toggleCell(idx)}
                            onMouseEnter={(e) => {
                              if (e.buttons === 1) { // support drag-to-draw
                                toggleCell(idx);
                              }
                            }}
                          />
                        ))}
                      </div>
                      <button 
                        className={styles.clearBtn}
                        onClick={() => setMatrix(Array(64).fill(false))}
                      >
                        CLEAR_MATRIX
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer bar */}
                <div className={styles.terminalFooter}>
                  <span>MIRZAH@PORTFOLIO:~$</span>
                  <span className={styles.blinkingCursor}>█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}