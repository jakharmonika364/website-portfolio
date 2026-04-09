"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { GitHubCalendar } from 'react-github-calendar';
import {
  Code2,
  Globe,
  Database,
  Terminal,
  Layers,
  Layout,
  Server,
  BarChart3,
  Search,
  HardDrive,
  ShieldCheck,
  PieChart,
  LineChart,
  Activity,
  Mail
} from 'lucide-react';

// Project Card Component with Custom Floating Cursor
function ProjectCard({
  img,
  category,
  title,
  company,
  year,
  devices,
  desc,
  part,
  impact,
  shipped = false,
  bgColorClass = "",
  href = ""
}: any) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleClick = () => {
    if (href) window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="project-item-card"
      ref={cardRef}
      onClick={handleClick}
      style={href ? { cursor: 'pointer' } : {}}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className={`item-image-wrapper ${bgColorClass}`}>
        {/* Floating Custom Cursor Pill */}
        <div
          className="view-case-study"
          style={{
            position: 'absolute',
            left: cursorPos.x,
            top: cursorPos.y,
            transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0})`,
            opacity: isHovering ? 1 : 0,
            pointerEvents: 'none',
            zIndex: 100
          }}
        >
          View case study
        </div>

        {shipped && <div className="shipped-badge">Shipped</div>}

        <Image
          src={img}
          alt={title}
          width={700}
          height={400}
          className="item-img"
        />
      </div>

      <div className="item-content">
        <div className="item-meta">
          <span>{company} | {year}</span>
          <span className="device-icons">{devices}</span>
        </div>
        <p className="item-category">{category}</p>
        <h3 className="item-title">{title}</h3>

        <div className="hover-details">
          <p className="hover-desc">{desc}</p>
          <div className="hover-grid">
            <div className="hover-col">
              <h4 className="hover-sub">My part</h4>
              <ul className="hover-list">
                {part.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="hover-col">
              <h4 className="hover-sub">The Impact</h4>
              <p className="hover-impact-text">{impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="bg-glow"></div>

      <header>
        <a href="/" className="logo">MJ</a>
        <nav>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </header>

      <section className="container hero">
        <div className="hero-text hero-text-new">
          <div className="hero-eyebrow">HELLO, I&apos;M</div>

          <h1 className="hero-title">
            <span className="name-first">
              {"MONIKA".split("").map((l, i) => (
                <span key={i} className="letter">{l}</span>
              ))}
            </span>
            {/* <span className="name-last">
              {"JAKHAR".split("").map((l, i) => (
                <span key={i} className="letter">{l}</span>
              ))}
            </span> */}
          </h1>

          <h2 className="hero-subtitle">
            Crafting Design into <span className="highlight-text">Real-World Solutions</span>
          </h2>

          <p className="hero-description">
            Data Analyst & Full Stack Developer | Building meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>

        </div>

        <div className="hero-main-image">
          <Image
            src="/photo1.jpeg"
            alt="Monika Jakhar"
            width={480}
            height={600}
            priority
            className="hero-portrait"
          />
        </div>
      </section>

      <section className="arsenal-section">
        <h2 className="arsenal-title">Tech <span className="serif">Stack</span></h2>

        <div className="arsenal-container">
          {/* Group 1: Frontend Development */}
          <div className="tech-group">
            <h3 className="category-header">
              <span className="header-icon"><Layout size={28} /></span>
              Frontend Development
            </h3>
            <div className="skill-icons-grid centered-grid">
              <div className="skill-card-container">
                <div className="skill-card react"><img src="https://skillicons.dev/icons?i=react" alt="React" width={40} height={40} /></div>
                <span className="skill-name">React</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card next"><img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width={40} height={40} /></div>
                <span className="skill-name">Next.js</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card tw"><img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" width={40} height={40} /></div>
                <span className="skill-name">Tailwind</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card js"><img src="https://skillicons.dev/icons?i=js" alt="JavaScript" width={40} height={40} /></div>
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card ts"><img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" width={40} height={40} /></div>
                <span className="skill-name">TypeScript</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card figma"><img src="https://skillicons.dev/icons?i=figma" alt="Figma" width={40} height={40} /></div>
                <span className="skill-name">Figma</span>
              </div>
            </div>
          </div>

          {/* Group 2: Backend & Cloud */}
          <div className="tech-group">
            <h3 className="category-header">
              <span className="header-icon"><Server size={28} /></span>
              Backend & Cloud
            </h3>
            <div className="skill-icons-grid centered-grid">
              <div className="skill-card-container">
                <div className="skill-card node"><img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" width={40} height={40} /></div>
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card go"><img src="https://skillicons.dev/icons?i=go" alt="Go" width={40} height={40} /></div>
                <span className="skill-name">Go</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card py"><img src="https://skillicons.dev/icons?i=python" alt="Python" width={40} height={40} /></div>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card mysql"><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" width={40} height={40} /></div>
                <span className="skill-name">MySQL</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card docker"><img src="https://skillicons.dev/icons?i=docker" alt="Docker" width={40} height={40} /></div>
                <span className="skill-name">Docker</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card kube"><img src="https://skillicons.dev/icons?i=kubernetes" alt="Kubernetes" width={40} height={40} /></div>
                <span className="skill-name">Kubernetes</span>
              </div>
            </div>
          </div>

          {/* Group 3: Data Science */}
          <div className="tech-group">
            <h3 className="category-header">
              <span className="header-icon"><Activity size={28} /></span>
              Data Science
            </h3>
            <div className="skill-icons-grid centered-grid">
              <div className="skill-card-container">
                <div className="skill-card pandas"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" width={45} height={45} /></div>
                <span className="skill-name">Pandas</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card numpy"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" width={45} height={45} /></div>
                <span className="skill-name">NumPy</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card plot"><img src="https://skillicons.dev/icons?i=matlab" alt="Matplotlib" width={40} height={40} /></div>
                <span className="skill-name">Matplotlib</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card sea"><img src="https://skillicons.dev/icons?i=py" alt="Seaborn" width={40} height={40} /></div>
                <span className="skill-name">Seaborn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-header">
          <h2 className="section-title">
            Projects <span className="star">✦</span>
          </h2>
        </div>

        <div className="projects-grid">
          {/* Web Audio Player */}
          <div className="project-card">
            <div className="project-card-img" style={{ background: 'linear-gradient(135deg, #3b1f6e, #1e3a8a)' }}>
              <span className="project-live-badge">● Live</span>
              <div className="project-img-mockup audio-mockup">
                <div className="mock-bar" style={{ width: '40%', background: 'rgba(167,139,250,0.7)' }}></div>
                <div className="mock-bar" style={{ width: '70%', background: 'rgba(139,92,246,0.5)' }}></div>
                <div className="mock-bar" style={{ width: '55%', background: 'rgba(109,40,217,0.5)' }}></div>
              </div>
            </div>
            <div className="project-card-body">
              <h3 className="project-card-title">
                <span className="project-icon">⌬</span> Web Audio Player
              </h3>
              <p className="project-card-desc">A high-performance web-based audio player with real-time visualizations and advanced control mechanics using the Web Audio API.</p>
              <div className="project-tags">
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">Web Audio API</span>
                <span className="project-tag">Canvas</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jakharmonika364/Web-audio-player" target="_blank" rel="noopener noreferrer" className="project-link">⌥ GitHub</a>
                <a href="https://groove-player.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">↗ Live Demo</a>
              </div>
            </div>
          </div>

          {/* Sustainable Food Tracker */}
          <div className="project-card">
            <div className="project-card-img" style={{ background: 'linear-gradient(135deg, #064e3b, #065f46)' }}>
              <span className="project-live-badge">● Live</span>
              <div className="project-img-mockup chart-mockup">
                <div className="mock-chart-bar" style={{ height: '60%' }}></div>
                <div className="mock-chart-bar" style={{ height: '85%' }}></div>
                <div className="mock-chart-bar" style={{ height: '45%' }}></div>
                <div className="mock-chart-bar" style={{ height: '70%' }}></div>
                <div className="mock-chart-bar" style={{ height: '90%' }}></div>
                <div className="mock-chart-bar" style={{ height: '55%' }}></div>
              </div>
            </div>
            <div className="project-card-body">
              <h3 className="project-card-title">
                <span className="project-icon">⌬</span> Sustainable Food Tracker
              </h3>
              <p className="project-card-desc">Track your food consumption and carbon footprint with smart analytics and sustainability recommendations.</p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jakharmonika364/Sustainable-Food-Tracker" target="_blank" rel="noopener noreferrer" className="project-link">⌥ GitHub</a>
                <a href="https://6917bdee950026f7bc8f2bbc--scintillating-bubblegum-952195.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">↗ Live Demo</a>
              </div>
            </div>
          </div>

          {/* Student Attendance System */}
          <div className="project-card">
            <div className="project-card-img" style={{ background: 'linear-gradient(135deg, #1e3a5f, #1e40af)' }}>
              <span className="project-live-badge">● Live</span>
              <div className="project-img-mockup table-mockup">
                <div className="mock-table-row"><div className="mock-cell wide"></div><div className="mock-cell green"></div></div>
                <div className="mock-table-row"><div className="mock-cell wide"></div><div className="mock-cell green"></div></div>
                <div className="mock-table-row"><div className="mock-cell wide"></div><div className="mock-cell green"></div></div>
              </div>
            </div>
            <div className="project-card-body">
              <h3 className="project-card-title">
                <span className="project-icon">⌬</span> Student Attendance System
              </h3>
              <p className="project-card-desc">Automated attendance tracking system for educational institutions with real-time monitoring and analytics.</p>
              <div className="project-tags">
                <span className="project-tag">Java</span>
                <span className="project-tag">MySQL</span>
                <span className="project-tag">Spring Boot</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jakharmonika364/student-attendance-system" target="_blank" rel="noopener noreferrer" className="project-link">⌥ GitHub</a>
                <a href="https://student-attendance-system-uz1n.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">↗ Live Demo</a>
              </div>
            </div>
          </div>

          {/* Soniq Music Player */}
          <div className="project-card project-card-wide" style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899, #f97316)' }}>
            <div className="project-card-body project-card-body-overlay">
              <div className="music-player-icon">〜</div>
              <h3 className="project-card-title-light">Soniq Music Player</h3>
              <p className="project-card-desc-light">Music Player</p>
              <div className="music-progress-bar"><div className="music-progress-fill"></div></div>
              <div className="project-links" style={{ marginTop: '1.5rem' }}>
                <a href="https://github.com/jakharmonika364/soniq-music-player" target="_blank" rel="noopener noreferrer" className="project-link project-link-light">⌥ GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section container">
        <div className="section-header">
          <h2 className="section-title">
            Open <span className="serif">Source</span> <span className="star">✦</span>
          </h2>
        </div>
        <div className="project-highlight-grid">
          <ProjectCard
            img="/fluid.png"
            company="CNCF / fluid-cloudnative"
            year="2026"
            category="Cloud Native · Go · Kubernetes"
            title="Fluid — Dataset Orchestrator"
            desc="Fluid is a CNCF Incubating project that provides elastic dataset abstraction and acceleration for AI/big-data workloads on Kubernetes. It bridges cloud storage and compute with intelligent data caching and affinity-based scheduling."
            part={["Bug Fixes & Code Review", "Go backend contributions", "Kubernetes CRD improvements"]}
            impact="Contributed to a project with 1.9k+ stars used in production AI and big-data pipelines across cloud-native environments."
            shipped={true}
            bgColorClass="way-bg"
            href="https://github.com/fluid-cloudnative/fluid"
          />
          <ProjectCard
            img="/kyverno.jpeg"
            company="CNCF / kyverno"
            year="2026"
            category="Policy as Code · Go · Kubernetes"
            title="Kyverno — Policy Engine"
            desc="Kyverno is a CNCF Incubating policy engine for Kubernetes that validates, mutates, and generates resources via admission controls. It enforces security standards, supply-chain image verification, and governance — all without writing custom webhooks."
            part={["Policy rule contributions", "Test coverage & CI fixes", "Documentation improvements"]}
            impact="Contributed to a 7.6k+ star project powering security and compliance automation for thousands of Kubernetes clusters worldwide."
            shipped={true}
            bgColorClass="shell-bg"
            href="https://github.com/kyverno/kyverno"
          />
        </div>
      </section>

      <section className="testimonials-section container">
        <h2 className="section-title text-center">
          Coding <span className="serif">profiles</span> <span className="star">✦</span>
        </h2>

        <div className="folders-grid" style={{ justifyContent: 'center', marginTop: '6rem' }}>
          <div className="folder-container" style={{ width: '800px' }}>
            <div className="folder-tab blueish-gradient">CODING PROFILES</div>
            <div className="folder-body" style={{ height: '520px' }}>
              <div className="folder-header">
                {/* <span className="folder-count">4 Profiles FOUND</span> */}
                <span className="folder-years"></span>
              </div>

              <div className="cards-stack">
                {/* Codolio Profile Card */}
                <a href="https://codolio.com/profile/monika5" target="_blank" rel="noopener noreferrer" className="stack-card card-4 indigo-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '2.5rem' }}>
                  <div className="card-label">CODOLIO</div>
                  <div className="profile-content" style={{ gap: '1.5rem', padding: '0', alignItems: 'center' }}>
                    <div className="profile-icon-circle" style={{ width: '100px', height: '100px', background: 'white', overflow: 'hidden', padding: '0', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                      <Image src="/codolio.jpeg" alt="Codolio" width={100} height={100} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div className="profile-link-name" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '900', letterSpacing: '0.05em' }}>Codolio</div>
                  </div>
                </a>

                {/* CodeChef Profile Card */}
                <a href="https://www.codechef.com/users/monikap25" target="_blank" rel="noopener noreferrer" className="stack-card card-3 dark-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '2.5rem' }}>
                  <div className="card-label">CODECHEF</div>
                  <div className="profile-content" style={{ gap: '1.5rem', padding: '0', alignItems: 'center' }}>
                    <div className="profile-icon-circle" style={{ width: '100px', height: '100px', background: 'white', overflow: 'hidden', padding: '0', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                      <Image src="/codechef.jpeg" alt="CodeChef" width={100} height={100} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div className="profile-link-name" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '900', letterSpacing: '0.05em' }}>CodeChef</div>
                  </div>
                </a>

                {/* GFG Profile Card */}
                <a href="https://www.geeksforgeeks.org/profile/jakharmoa9a5" target="_blank" rel="noopener noreferrer" className="stack-card card-2 mint-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '2.5rem' }}>
                  <div className="card-label">GEEKSFORGEEKS</div>
                  <div className="profile-content" style={{ gap: '1.5rem', padding: '0', alignItems: 'center' }}>
                    <div className="profile-icon-circle" style={{ width: '100px', height: '100px', background: 'white', overflow: 'hidden', padding: '0', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                      <Image src="/geeksforgeeks.jpeg" alt="GeeksForGeeks" width={100} height={100} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div className="profile-link-name" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '900', letterSpacing: '0.05em' }}>GeeksForGeeks</div>
                  </div>
                </a>

                {/* LeetCode Profile Card */}
                <a href="https://leetcode.com/u/monika_jakhar04/" target="_blank" rel="noopener noreferrer" className="stack-card card-1 main-orange" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '2.5rem' }}>
                  <div className="card-label">LEETCODE</div>
                  <div className="profile-content" style={{ gap: '1.5rem', padding: '0', alignItems: 'center' }}>
                    <div className="profile-icon-circle" style={{ width: '100px', height: '100px', background: 'white', overflow: 'hidden', padding: '0', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                      <Image src="/leetcode.jpeg" alt="LeetCode" width={100} height={100} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div className="profile-link-name" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '900', letterSpacing: '0.05em' }}>LeetCode</div>
                  </div>
                </a>
              </div>

              <div className="folder-bottom">
                <span className="folder-owner"></span>
                <span className="folder-action">select a card ↑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-header">
          <h2 className="section-title">
            A bit about <span className="serif">Myself</span> <span className="star">✦</span>
          </h2>
          <p className="section-subtitle">the person behind the pixels</p>
        </div>

        <div className="about-grid">
          <div className="notebook-container">
            <div className="tape"></div>
            <div className="notebook-paper">
              <h2 className="notebook-title">Namaste! I&apos;m Monika ✦</h2>
              <div className="notebook-text">
                <p>
                  I&apos;m a <strong>Communication Designer</strong> and User Experience graduate student
                  at <strong>Arizona State University</strong>. I love exploring how design can tell
                  stories, spark emotion, and make everyday moments a little more meaningful.
                </p>
                <p>
                  With a background in visual communication and user experience, I&apos;ve
                  worked on <strong>brand identities, social media campaigns, and digital
                    experiences</strong> for a variety of projects.
                </p>
                <p>
                  My journey started with a love for <strong>painting and sketching</strong>, and that
                  curiosity still drives how I approach design today — with creativity,
                  empathy, and a genuine interest in people and their experiences.
                </p>
                <p>
                  Currently open to <strong>internships & Co-op</strong>. If you&apos;re building something
                  with heart, let&apos;s talk!
                </p>
              </div>
            </div>
          </div>

          <div className="pinned-photo-container">
            <div className="scatter-photo scatter-1">
              <div className="push-pin tiny"></div>
              <div className="polaroid-about">
                <Image src="/sketch1.png" alt="Sketch 1" width={180} height={180} />
              </div>
            </div>
            <div className="scatter-photo scatter-2">
              <div className="push-pin tiny"></div>
              <div className="polaroid-about">
                <Image src="/sketch2.png" alt="Sketch 2" width={180} height={180} />
              </div>
            </div>
            <div className="scatter-photo scatter-3">
              <div className="push-pin tiny"></div>
              <div className="polaroid-about">
                <Image src="/painting1.png" alt="Painting 1" width={180} height={180} />
              </div>
            </div>
            <div className="scatter-photo scatter-4">
              <div className="push-pin tiny"></div>
              <div className="polaroid-about">
                <Image src="/sketch3.png" alt="Sketch 3" width={180} height={180} />
              </div>
            </div>
            <div className="scatter-photo scatter-5">
              <div className="push-pin tiny"></div>
              <div className="polaroid-about">
                <Image src="/sketch4.png" alt="Sketch 4" width={180} height={180} />
              </div>
            </div>
            <div className="scatter-photo scatter-6">
              <div className="push-pin tiny"></div>
              <div className="polaroid-about">
                <Image src="/painting2.png" alt="Painting 2" width={180} height={180} />
              </div>
            </div>

            <div className="pinned-main">
              <div className="push-pin"></div>
              <div className="polaroid-about main-frame">
                <Image
                  src="/workspace.png"
                  alt="Workspace"
                  className="about-img"
                  width={400}
                  height={300}
                />
              </div>
              <p className="handwritten about-caption">just me and colors again 🎨</p>
            </div>
          </div>
        </div>
      </section>

      <section className="github-section container" id="github">
        <div className="section-header github-header">
          <h2 className="github-title">GITHUB</h2>
          <p className="github-subtitle">Consistency is key. My open source contributions and coding streak.</p>
        </div>

        <div className="github-top-grid">
          <div className="github-profile-card">
            <div className="github-avatar-wrapper">
              <Image src="https://github.com/jakharmonika364.png" alt="GitHub Avatar" width={100} height={100} className="github-avatar" />
            </div>
            <h3 className="github-name">Monika Jakhar</h3>
            <p className="github-username">@jakharmonika364</p>
            <a href="https://github.com/jakharmonika364" target="_blank" rel="noopener noreferrer" className="github-btn">
              View Profile
            </a>
          </div>

          <div className="github-card github-heatmap-card">
            <GitHubCalendar 
              username="jakharmonika364" 
              colorScheme="dark" 
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </div>

        <div className="github-card github-activity-card">
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=jakharmonika364&bg_color=0B0B0B&color=06b6d4&line=06b6d4&point=FFFFFF&hide_border=true&title_color=ffffff&axes_color=94a3b8" alt="GitHub Activity Graph" className="github-graph-img" />
        </div>
      </section>

      <section className="contact-section-new container" id="contact">
        <div className="contact-header-new">
          <h2 className="contact-title-new">Get In <span className="highlight-text">Touch</span></h2>
          <p className="contact-subtitle-new">Feel free to reach out for collaborations or just a friendly hello</p>
        </div>

        <div className="contact-grid-new">
          <div className="contact-links-new">
            <a href="mailto:jakharmonika364@gmail.com" className="contact-card-new">
              <div className="contact-icon bg-blue">
                 <Mail size={24} color="#60a5fa" />
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>jakharmonika364@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/jakharmonika364" target="_blank" rel="noreferrer" className="contact-card-new">
              <div className="contact-icon bg-purple">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>
            </a>

            <a href="https://github.com/jakharmonika364" target="_blank" rel="noreferrer" className="contact-card-new">
              <div className="contact-icon bg-dark">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>Explore my code</p>
              </div>
            </a>
          </div>

          <div className="contact-visual-new">
             <div className="glowing-orb-container">
                <div className="glowing-orb">
                   <Code2 size={70} className="glow-icon" color="#38bdf8" />
                </div>
                {/* Orbital dots for detail */}
                <div className="orb-dot orb-dot-1"></div>
                <div className="orb-dot orb-dot-2"></div>
             </div>
             <p className="visual-caption">CRAFTING DIGITAL EXPERIENCES</p>
          </div>
        </div>
      </section>
    </main>
  );
}
