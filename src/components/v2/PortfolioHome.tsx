"use client";

/* eslint-disable @next/next/no-img-element -- Local reference assets use fixed image crops for visual matching. */

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import Lenis from "lenis";
import {
  motion,
  useReducedMotion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import s from "./PortfolioHome.module.css";

const email = "mailto:mirzaahmuzammil@gmail.com";
const projects = [
  {
    name: "noor",
    category: "NEXT.JS, WEB DEVELOPMENT",
    image: "noor-website.jpg",
    thumbnail: "website",
    tone: "#d8e4dc",
    url: "https://noor-website-teal.vercel.app/",
    description:
      "An interactive, multilingual website with advanced scroll animations, built with Next.js and GSAP.",
  },
  {
    name: "e-commerce app",
    category: "REACT NATIVE, MOBILE",
    image: null,
    thumbnail: "app",
    tone: "#e7e6df",
    url: null,
    description:
      "A cross-platform shopping app built with React Native, TypeScript and Firebase.",
  },
  {
    name: "attendance tracker",
    category: "FLUTTER, FULL STACK",
    image: "566e3193ac5952ce.webp",
    thumbnail: "artwork",
    tone: "#f1f1f1",
    url: null,
    description:
      "A Flutter attendance app with Node.js, MongoDB and Python face recognition.",
  },
  {
    name: "monkey adventure",
    category: "NEXT.JS, PAYLOAD CMS",
    image: "monkey-adventure-website.jpg",
    thumbnail: "website",
    tone: "#dce5e8",
    url: "https://www.monkeyadventures.co.in/",
    description:
      "A travel website rebuilt with Next.js, search optimisation and Payload CMS.",
  },
  {
    name: "learnspire lms",
    category: "NEXT.JS, E-LEARNING",
    image: "learnspire-website.jpg",
    thumbnail: "website",
    tone: "#dfdff0",
    url: "https://learnspirepro.in",
    description:
      "A learning platform with an admin dashboard, student portal and Mux video streaming.",
  },
];
const services = [
  {
    name: "web development",
    details: [
      "react & next.js applications",
      "seo & performance",
      "scroll & hover animations",
    ],
  },
  {
    name: "mobile apps",
    details: [
      "flutter applications",
      "react native applications",
      "ios & android",
      "firebase integration",
    ],
  },
  {
    name: "backend & apis",
    details: [
      "node.js & express",
      "rest & graphql apis",
      "mongodb & sql",
      "authentication & validation",
    ],
  },
  {
    name: "cms integration",
    details: [
      "payload cms",
      "content management",
      "custom admin dashboards",
      "multilingual websites",
    ],
  },
  {
    name: "web design",
    details: [
      "responsive layouts",
      "thoughtful user experiences",
      "accessible interfaces",
      "interactive prototypes",
      "interaction & motion design",
    ],
  },
  {
    name: "deployment",
    details: [
      "vercel deployment",
      "custom domains",
      "environment configuration",
      "responsive delivery",
      "performance optimisation",
    ],
  },
];
const steps = [
  {
    title: "direction",
    text: "every project starts with understanding the people using it. i turn your goals into a clear plan before deciding how it should look and work.",
    image: "7084b6286a7f6175.png",
  },
  {
    title: "craft",
    text: "then the making. layout, code, and motion. every small decision earning its place and holding up when you look closely.",
    image: "87e8725fc7182c19.png",
  },
  {
    title: "ship",
    text: "the work goes live, built to last and easy for your team to keep alive and updated long after launch day.",
    image: "d2ab5d3d3d4b012b.png",
  },
];
const orbitImages = [
  "32b39a15667038e8.png",
  "423de3da12691559.png",
  "4ed8c8f61c964d10.png",
  "a88ceaa8f4811e65.png",
  "75536ea4c1ff6637.png",
  "22d0aea47bcac4f3.png",
  "3c15f639ed145ac4.png",
  "8c73dad8a6bd98c2.png",
];
const trust = [
  "FAST, THOUGHTFUL WEBSITES",
  "EARN TRUST",
  "BUILT TO SCALE",
  "LOOK THE PART",
  "MOVE WITH CLARITY",
  "STAND OUT",
  "WEB & MOBILE",
];

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <rect width="18" height="18" rx="2" fill="currentColor" />
      <path
        d="M4 14 14 4M4 4h10v10"
        stroke="var(--arrow-stroke, #111)"
        strokeWidth="1.4"
      />
    </svg>
  );
}
function Action({ children }: { children: ReactNode }) {
  return (
    <span className={s.action}>
      {children}
      <Arrow />
    </span>
  );
}
function Heading({
  children,
  hero = false,
  className = "",
}: {
  children: string;
  hero?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const Tag = hero ? motion.h1 : motion.h2;
  return (
    <Tag
      className={`${hero ? s.heroHeading : s.heading} ${className}`}
      aria-label={children}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: reduced ? 0 : 0.018 }}
    >
      {children.split(" ").map((word, wordIndex, words) => (
        <Fragment key={wordIndex}>
          <span className={s.word}>
            {Array.from(word).map((char, i) => (
              <motion.span
                aria-hidden="true"
                key={i}
                className={s.letter}
                variants={{
                  hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wordIndex < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
function Reveal({
  children,
  className,
  delay = 0,
  kind = "card",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  kind?: "card" | "step" | "row";
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.15 });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={
          reduced
            ? false
            : {
                opacity: 0,
                y: kind === "row" ? 0 : 150,
                x: kind === "row" ? 150 : 0,
                scale: kind === "card" ? 0.9 : kind === "step" ? 0.98 : 1,
                rotate: kind === "step" ? 3 : 0,
              }
        }
        animate={
          visible ? { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 } : undefined
        }
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: reduced ? 0 : delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function PortfolioHome() {
  const reduced = useReducedMotion();
  const [navVisible, setNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);
  const [dialog, setDialog] = useState<
    "projects" | "about" | "explorations" | null
  >(null);
  const [time, setTime] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: exploreRef,
    offset: ["start end", "center center"],
  });
  const orbitSize = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: true,
    });
    return () => lenis.destroy();
  }, [reduced]);
  useEffect(() => {
    let previous = window.scrollY;
    const frame = window.requestAnimationFrame(() =>
      setNavVisible(window.scrollY < 50),
    );
    const onScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - previous) > 4) {
        setNavVisible(current < 50 || current < previous);
        previous = current;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" }),
      );
    update();
    const timer = window.setInterval(update, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
      window.clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (dialog) {
      el.showModal();
      el.scrollTop = 0;
      document.body.style.overflow = "hidden";
    } else {
      el.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [dialog]);

  return (
    <main className={s.page}>
      <header
        className={`${s.nav} ${navVisible || menuOpen ? "" : s.navHidden} ${menuOpen ? s.menuOpen : ""}`}
      >
        <a href="#first-fold" className={s.navName}>
          MIRZAH MUZAMMIL
        </a>
        <nav className={s.navLinks} aria-label="Main navigation">
          <a href="#projects">PROJECTS</a>
          <a href="#services">SERVICES</a>
          <a href="#explorations">EXPLORATIONS</a>
          <button onClick={() => setDialog("about")}>ABOUT</button>
          <a href={email}>
            <Action>START A PROJECT</Action>
          </a>
        </nav>
        <button
          className={s.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className={s.mobileNavigation}
            aria-label="Mobile navigation"
            onClick={() => setMenuOpen(false)}
          >
            <a href="#projects">projects</a>
            <a href="#services">services</a>
            <a href="#explorations">explorations</a>
            <button onClick={() => setDialog("about")}>about</button>
            <div className={s.mobileSocials}>
              <a href="https://www.linkedin.com/in/mirzah-muzammil">
                linkedin ↗
              </a>
              <a href="https://github.com/Mirzah-Muzammil">github ↗</a>
              <a href="/Mirzah-Muzammil-CV.pdf">résumé ↗</a>
              <a href="tel:+918075982323">phone ↗</a>
            </div>
            <a href={email}>
              <Action>START A PROJECT</Action>
            </a>
          </nav>
        )}
      </header>

      <section id="first-fold" className={s.hero} aria-label="Introduction">
        <div className={s.heroBackground} />
        <div className={s.dots} aria-hidden="true">
          {[
            "#4b9ed8",
            "#ee94c3",
            "#fff7b6",
            "#97c3ce",
            "#d18147",
            "#b989d8",
            "#a9d64f",
            "#bf5c65",
          ].map((color, i) => (
            <i
              key={color}
              style={{ "--dot": color, "--i": i } as CSSProperties}
            />
          ))}
        </div>
        <div className={s.heroTitles}>
          <Heading hero>mirzah muzammil</Heading>
          <div className={s.roleRow}>
            <Heading hero>web developer</Heading>
            <div className={s.tags}>
              <span>REACT.JS</span>
              <span>NEXT.JS</span>
              <span>WEBSITES</span>
              <span>FLUTTER</span>
              <span>FULL STACK</span>
            </div>
          </div>
        </div>
        <div className={s.heroBottom}>
          <motion.p
            className={s.heroDescription}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            building digital experiences for brands and teams who care about
            thoughtful websites and mobile apps.
          </motion.p>
          <a href={email} className={s.booking}>
            <span className={s.mono}>AVAILABLE FOR NEW PROJECTS</span>
            <div className={s.portrait}>
              <img
                src="/mirzah.jpg"
                alt="Mirzah Muzammil"
                width="296"
                height="192"
              />
            </div>
            <Action>LET’S TALK WITH MIRZAH</Action>
          </a>
        </div>
      </section>

      <section id="projects" className={s.work} aria-label="Selected work">
        <div className={s.sectionTitle}>
          <Heading>selected work</Heading>
          <button className={s.serifPill} onClick={() => setDialog("projects")}>
            see all work (5)
          </button>
        </div>
        <div className={s.projectGrid}>
          {projects.slice(0, 4).map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.1}>
              <a
                href={project.url || "#projects"}
                className={s.project}
                onMouseMove={(e) => {
                  if (cursorRef.current) {
                    cursorRef.current.style.opacity = "1";
                    cursorRef.current.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
                  }
                }}
                onMouseLeave={() => {
                  if (cursorRef.current) cursorRef.current.style.opacity = "0";
                }}
                onClick={
                  project.url
                    ? undefined
                    : (e) => {
                        e.preventDefault();
                        setDialog("projects");
                      }
                }
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
              >
                <div
                  className={`${s.projectImage} ${project.thumbnail === "website" ? s.websiteThumbnail : ""}`}
                  style={{ backgroundColor: project.tone }}
                >
                  {project.image ? (
                    <img
                      src={`/v2/${project.image}`}
                      alt={
                        project.thumbnail === "website"
                          ? `${project.name} website homepage`
                          : `Artwork for ${project.name}`
                      }
                      width="1226"
                      height="699"
                      loading="lazy"
                    />
                  ) : (
                    <div className={s.appThumbnail}>
                      <span className={s.mono}>REACT NATIVE · FIREBASE</span>
                      <span>
                        mobile
                        <br />
                        commerce
                      </span>
                      <span className={s.mono}>
                        A CROSS-PLATFORM SHOPPING APP
                      </span>
                    </div>
                  )}
                  <span className={s.caseStudy}>VIEW PROJECT ↗</span>
                </div>
                <div className={s.caption}>
                  <h3>{project.name}</h3>
                  <span className={s.mono}>{project.category}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className={s.services} aria-label="Services">
        <div className={s.servicesMain}>
          <div className={s.servicesIntro}>
            <Heading>services</Heading>
            <p>
              i build websites and the apps that go with them. with experience
              across react, next.js, flutter and node.js, i work with teams who
              care about the details as much as i do.
            </p>
            <a href={email}>
              <Action>START A PROJECT</Action>
            </a>
          </div>
          <div
            className={s.serviceList}
            onMouseLeave={() => setOpenService(null)}
          >
            {services.map((service, i) => (
              <Reveal key={service.name} kind="row" delay={i * 0.05}>
                <div
                  className={`${s.service} ${openService === i ? s.serviceOpen : ""}`}
                  onMouseEnter={() => {
                    if (
                      window.matchMedia("(min-width: 810px) and (hover: hover)")
                        .matches
                    )
                      setOpenService(i);
                  }}
                >
                  <button
                    aria-expanded={openService === i}
                    aria-controls={`service-${i}`}
                    onClick={() =>
                      setOpenService(
                        window.matchMedia(
                          "(min-width: 810px) and (hover: hover)",
                        ).matches
                          ? i
                          : openService === i
                            ? null
                            : i,
                      )
                    }
                  >
                    <span className={s.serviceNumber}>{i + 1}</span>
                    <span>{service.name}</span>
                  </button>
                  <motion.div
                    id={`service-${i}`}
                    aria-hidden={openService !== i}
                    className={s.serviceDetails}
                    initial={false}
                    animate={{
                      height: openService === i ? "auto" : 0,
                      opacity: openService === i ? 1 : 0,
                    }}
                    transition={{
                      duration: reduced ? 0 : 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <ul>
                      {service.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className={s.trustStrip} aria-label="Project benefits">
          <div className={s.trustTrack}>
            {[0, 1].map((copy) => (
              <div className={s.trustGroup} key={copy} aria-hidden={copy === 1}>
                {trust.map((item) => (
                  <span key={item}>
                    <b aria-hidden="true">✰</b>
                    <em>{item}</em>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className={s.approach}
        aria-label="Project approach"
      >
        <Heading>project approach</Heading>
        <div className={s.steps}>
          {steps.map((step, i) => (
            <Reveal key={step.title} kind="step" delay={i * 0.15}>
              <article className={s.step}>
                <span className={s.mono}>STEP 0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <img
                  src={`/v2/${step.image}`}
                  alt={`Temporary ${step.title} moodboard`}
                  width="400"
                  height="260"
                  loading="lazy"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="explorations"
        ref={exploreRef}
        className={s.explorations}
        aria-label="Creative explorations"
      >
        <motion.div
          className={s.orbitScale}
          style={{ scale: reduced ? 1 : orbitSize }}
        >
          <div className={s.orbit}>
            {orbitImages.map((image, i) => (
              <div
                key={image}
                className={s.orbitPosition}
                style={{ "--angle": `${i * 45}deg` } as CSSProperties}
              >
                <img
                  src={`/v2/${image}`}
                  alt="Temporary creative exploration artwork"
                  width="200"
                  height="267"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
        <button
          className={s.exploreLink}
          aria-label="creative explorations"
          onClick={() => setDialog("explorations")}
        >
          <span aria-hidden="true">
            {Array.from("creative").map((char, i) => (
              <span className={s.letter} key={i}>
                {char}
              </span>
            ))}
            <span className={s.exploreArrow} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="64" height="80" fill="none">
                <path
                  d="M4 12h16M13 4.34l6.57 6.57a1.54 1.54 0 0 1 0 2.18L13 19.66"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
          <span aria-hidden="true">
            {Array.from("explorations").map((char, i) => (
              <span className={s.letter} key={i}>
                {char}
              </span>
            ))}
          </span>
        </button>
      </section>

      <footer id="contact" className={s.footer}>
        <div className={s.contact}>
          <Heading>let’s work together</Heading>
          <div className={s.contactLinks}>
            <Reveal kind="row">
              <div className={s.bigLinks}>
                <a href={email}>start a project</a>
                <a href={email}>email</a>
              </div>
            </Reveal>
            <Reveal kind="row" delay={0.1}>
              <div className={s.socials}>
                <a
                  href="https://www.linkedin.com/in/mirzah-muzammil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin ↗
                </a>
                <a
                  href="https://github.com/Mirzah-Muzammil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github ↗
                </a>
                <a
                  href="/Mirzah-Muzammil-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  résumé ↗
                </a>
                <a href="tel:+918075982323">phone ↗</a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className={s.footerBottom}>
          <div className={s.footerMeta}>
            <div>
              <a href="#first-fold">BACK TO TOP ↑</a>
              <div className={s.location}>
                <span>KANNUR</span>
                <time>{time}</time>
                <span>[GMT +5:30]</span>
              </div>
            </div>
            <div>
              <span>WORKING WITH CLIENTS WORLDWIDE ♥︎</span>
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>
            <span className={s.copyright}>2026. MIRZAH MUZAMMIL</span>
          </div>
          <div className={s.credits}>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ BUILT WITH NEXT.JS
            </a>
            <a
              href="https://ninapark.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DESIGN BY AKRITI
            </a>
            <span />
          </div>
        </div>
      </footer>
      <div ref={cursorRef} className={s.cursor} aria-hidden="true">
        VIEW PROJECT ↗
      </div>
      <div className={s.grain} aria-hidden="true" />
      <dialog
        ref={dialogRef}
        data-lenis-prevent
        aria-label={
          dialog === "about"
            ? "About Mirzah"
            : dialog === "projects"
              ? "All projects"
              : "Creative explorations"
        }
        className={`${s.dialog} ${dialog === "projects" ? s.projectDialog : ""}`}
        onCancel={() => setDialog(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setDialog(null);
        }}
      >
        <div className={s.dialogContent}>
          {dialog !== "projects" && (
            <button
              className={s.close}
              onClick={() => setDialog(null)}
              aria-label="Close dialog"
            >
              CLOSE ×
            </button>
          )}
          {dialog === "about" ? (
            <>
              <h2>about mirzah</h2>
              <p>
                full stack and mobile developer based in kannur, kerala. 2.5+
                years of experience building fast, scalable and user-friendly
                applications.
              </p>
              <p>
                front end developer at iotics middle east, october 2023 to march
                2026. working with react, next.js, flutter, react native,
                node.js, mongodb and sql.
              </p>
              <a
                className={s.serifPill}
                href="/Mirzah-Muzammil-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                view résumé ↗
              </a>
            </>
          ) : dialog === "projects" ? (
            <>
              <header className={s.workDialogHeader}>
                <div>
                  <span className={s.mono}>
                    PROJECT COLLECTION · {projects.length} PROJECTS
                  </span>
                  <h2>all work</h2>
                </div>
                <button
                  className={s.close}
                  onClick={() => setDialog(null)}
                  aria-label="Close dialog"
                >
                  CLOSE ×
                </button>
              </header>
              <div className={s.workDialogGrid}>
                {projects.map((project, i) => (
                  <article className={s.dialogProject} key={project.name}>
                    <div
                      className={`${s.dialogThumbnail} ${project.thumbnail === "website" ? s.websiteThumbnail : ""}`}
                      style={{ backgroundColor: project.tone }}
                    >
                      {project.image ? (
                        <img
                          src={`/v2/${project.image}`}
                          alt={
                            project.thumbnail === "website"
                              ? `${project.name} website homepage`
                              : `Artwork for ${project.name}`
                          }
                          width="1226"
                          height="699"
                          loading="lazy"
                        />
                      ) : (
                        <div className={s.appThumbnail}>
                          <span className={s.mono}>
                            REACT NATIVE · FIREBASE
                          </span>
                          <span>
                            mobile
                            <br />
                            commerce
                          </span>
                          <span className={s.mono}>
                            A CROSS-PLATFORM SHOPPING APP
                          </span>
                        </div>
                      )}
                    </div>
                    <div className={s.dialogProjectBody}>
                      <span className={s.mono}>
                        0{i + 1} / {project.category}
                      </span>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <a
                        className={s.projectVisit}
                        href={project.url || email}
                        target={project.url ? "_blank" : undefined}
                        rel={project.url ? "noopener noreferrer" : undefined}
                      >
                        {project.url
                          ? "visit website"
                          : "ask about this project"}{" "}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2>creative explorations</h2>
              <p>
                temporary reference artwork, ready to be replaced with my own
                experiments.
              </p>
              <div className={s.gallery}>
                {orbitImages.map((image) => (
                  <img
                    key={image}
                    src={`/v2/${image}`}
                    alt="Temporary exploration artwork"
                    width="200"
                    height="267"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </dialog>
    </main>
  );
}
