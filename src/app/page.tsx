"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  Code2,
  Globe,
  Database,
  Terminal,
  Layers,
  Layout,
  Server,
  ShieldCheck,
  BarChart3,
  Search,
  PieChart,
  HardDrive
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
  bgColorClass = ""
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

  return (
    <div
      className="project-item-card"
      ref={cardRef}
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
        <div className="hero-text">
          <div className="badge">Communication Designer</div>

          <h1 className="hero-title">
            <span className="name-first">
              {"MONIKA".split("").map((l, i) => (
                <span key={i} className="letter">{l}</span>
              ))}
            </span>
            <span className="name-last">
              {"JAKHAR".split("").map((l, i) => (
                <span key={i} className="letter">{l}</span>
              ))}
            </span>
          </h1>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-label">GitHub Contributions</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">4+</span>
              <span className="stat-label">Open Source</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">6+</span>
              <span className="stat-label">Months Experience</span>
            </div>
          </div>

          <p className="location-text">
            Based in the United States
          </p>

          <div className="status-section">
            <div className="status-badge">
              <div className="status-dot-container">
                <span style={{ fontSize: '1.8rem', color: 'white', fontWeight: '300' }}>+</span>
              </div>
              <div className="status-label">
                <span className="label-top">Status</span>
                <span className="label-main">Open to work</span>
              </div>
            </div>
            <p className="status-sub">internships & co-ops</p>
          </div>
        </div>

        <div className="polaroids-container">
          <svg className="curved-arrow" width="100" height="80" viewBox="0 0 100 80" style={{ position: 'absolute', top: '10px', left: '160px', zIndex: 15 }}>
            <path d="M10,10 Q50,10 80,60" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 3" />
            <path d="M72,55 L80,60 L85,50" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
          </svg>

          <div className="handwritten note-top" style={{ top: '-20px', left: '20px', width: '220px' }}>
            colors were my very first love —<br /> long before I had a name for it 🎨
          </div>

          <div className="polaroid polaroid-1">
            <Image
              src="/polaroid1.png"
              alt="Where it all began"
              width={240}
              height={240}
            />
            <div className="handwritten note-bottom">
              where it all began
            </div>
          </div>

          <div className="polaroid polaroid-2">
            <Image
              src="/polaroid2.png"
              alt="Still that same curiosity"
              width={340}
              height={340}
            />
            <div className="handwritten note-bottom">
              still that same curiosity
            </div>
          </div>

          <svg className="curved-arrow" width="100" height="80" viewBox="0 0 100 80" style={{ position: 'absolute', bottom: '-10px', left: '210px', zIndex: 15 }}>
            <path d="M10,10 Q40,60 80,70" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 3" />
            <path d="M70,65 L80,70 L75,60" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
          </svg>

          <div className="handwritten note-right">
            that obsession quietly shaped me into a designer ✦
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="arsenal-section">
        <h2 className="arsenal-title">Tech <span className="serif">Stack</span></h2>

        <div className="arsenal-grid">
          {/* Languages */}
          <div className="arsenal-box">
            <h3 className="category-title languages">LANGUAGES</h3>
            <div className="skill-icons-grid">
              <div className="skill-card-container">
                <div className="skill-card js"><Code2 size={24} /></div>
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card ts"><Terminal size={24} /></div>
                <span className="skill-name">TypeScript</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card py"><Globe size={24} /></div>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card go"><Database size={24} /></div>
                <span className="skill-name">Go</span>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="arsenal-box">
            <h3 className="category-title frontend">FRONTEND</h3>
            <div className="skill-icons-grid">
              <div className="skill-card-container">
                <div className="skill-card react"><Layers size={24} /></div>
                <span className="skill-name">React</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card tw"><Layout size={24} /></div>
                <span className="skill-name">Tailwind</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card next"><HardDrive size={24} /></div>
                <span className="skill-name">Next.js</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card figma"><Search size={24} /></div>
                <span className="skill-name">Figma</span>
              </div>
            </div>
          </div>

          {/* Backend & DevOps */}
          <div className="arsenal-box">
            <h3 className="category-title backend">BACKEND & DEVOPS</h3>
            <div className="skill-icons-grid">
              <div className="skill-card-container">
                <div className="skill-card node"><Server size={24} /></div>
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card mysql"><Database size={24} /></div>
                <span className="skill-name">MySQL</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card docker"><HardDrive size={24} /></div>
                <span className="skill-name">Docker</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card kube"><ShieldCheck size={24} /></div>
                <span className="skill-name">K8s</span>
              </div>
            </div>
          </div>

          {/* Data Science & Analytics */}
          <div className="arsenal-box">
            <h3 className="category-title data">DATA SCIENCE</h3>
            <div className="skill-icons-grid">
              <div className="skill-card-container">
                <div className="skill-card pandas"><BarChart3 size={24} /></div>
                <span className="skill-name">Pandas</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card numpy"><PieChart size={24} /></div>
                <span className="skill-name">NumPy</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card plot"><Globe size={24} /></div>
                <span className="skill-name">Matplotlib</span>
              </div>
              <div className="skill-card-container">
                <div className="skill-card sea"><ShieldCheck size={24} /></div>
                <span className="skill-name">Seaborn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-header">
          <h2 className="section-title">
            Selected <span className="serif">Work</span> <span className="star">✦</span>
          </h2>

        </div>

        <div className="testimonials-grid">
          {/* Projects as Paperclip Cards */}
          <div className="testimonial-card rotate-neg">
            <div className="paper-clip"></div>
            <div className="testi-header sky-blue"></div>
            <div className="testi-body" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="handwritten" style={{ fontSize: '3rem', color: '#111' }}>Project One</div>
            </div>
          </div>

          <div className="testimonial-card rotate-pos">
            <div className="paper-clip"></div>
            <div className="testi-header orchid-pink"></div>
            <div className="testi-body" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="handwritten" style={{ fontSize: '3rem', color: '#111' }}>Project Two</div>
            </div>
          </div>

          <div className="testimonial-card rotate-neg">
            <div className="paper-clip"></div>
            <div className="testi-header mint-green"></div>
            <div className="testi-body" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="handwritten" style={{ fontSize: '3rem', color: '#111' }}>Project Three</div>
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
            img="/way_com_ux_showcase_1775204723472.png"
            company="GitHub"
            year="2024"
            devices="💻"
            category="Contribution"
            title="React Core Contributions"
            desc="Improving accessibility and performance in the React ecosystem."
            part={["Bug Fixes", "Feature Implementation"]}
            impact="Reduced re-render cycles by 15% in complex dashboard scenarios."
            shipped={true}
            bgColorClass="way-bg"
          />
          <ProjectCard
            img="/cashback_ux_showcase_1775204750677.png"
            company="Next.js"
            year="2023"
            devices="💻"
            category="Open Source"
            title="Documentation Overhaul"
            desc="Revamping the routing documentation for better developer onboarding."
            part={["Technical Writing", "Examples"]}
            impact="Increased documentation satisfaction score by 40% based on community feedback."
            shipped={true}
            bgColorClass="shell-bg"
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
                <span className="folder-count">4 Profiles FOUND</span>
                <span className="folder-years"></span>
              </div>

              <div className="cards-stack">
                {/* Codolio Profile Card */}
                <div className="stack-card card-4 indigo-card">
                  <div className="card-label">CODOLIO</div>
                  <div className="profile-content" style={{ gap: '0.8rem', padding: '0', alignItems: 'center' }}>
                    <div className="profile-icon-circle" style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)' }}>
                      <Terminal size={30} color="white" />
                    </div>
                    <div className="profile-link-name" style={{ color: 'white', fontSize: '0.7rem' }}>@monikajakhar</div>
                    <div className="profile-stats">
                      <div className="stat-box">
                        <span className="stat-value" style={{ color: 'white', fontSize: '1rem' }}>ACTIVE</span>
                        <span className="stat-label-tiny" style={{ color: 'rgba(255,255,255,0.6)' }}>Status</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="card-year"></span>
                    <span className="card-number">04</span>
                  </div>
                </div>

                {/* GitHub Profile Card */}
                <div className="stack-card card-3 dark-card">
                  <div className="card-label">GITHUB</div>
                  <div className="profile-content" style={{ gap: '0.8rem', padding: '0', alignItems: 'center' }}>
                    <div className="profile-icon-circle" style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)' }}>
                      <Code2 size={30} color="white" />
                    </div>
                    <div className="profile-link-name" style={{ color: 'white', fontSize: '0.7rem' }}>@jakharmonika364</div>
                    <div className="profile-stats">
                      <div className="stat-box">
                        <span className="stat-value" style={{ color: 'white', fontSize: '1rem' }}>500+</span>
                        <span className="stat-label-tiny" style={{ color: 'rgba(255,255,255,0.6)' }}>Contribs</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="card-year"></span>
                    <span className="card-number">03</span>
                  </div>
                </div>

                {/* GFG Profile Card */}
                <div className="stack-card card-2 mint-card">
                  <div className="card-label">GEEKSFORGEEKS</div>
                  <div className="profile-content" style={{ gap: '0.8rem', padding: '0', alignItems: 'center' }}>
                    <div className="profile-icon-circle" style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)' }}>
                      <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: '900', fontFamily: 'serif' }}>G</span>
                    </div>
                    <div className="profile-link-name" style={{ color: 'white', fontSize: '0.7rem' }}>@monikajakhar</div>
                    <div className="profile-stats">
                      <div className="stat-box">
                        <span className="stat-value" style={{ color: 'white', fontSize: '1rem' }}>180+</span>
                        <span className="stat-label-tiny" style={{ color: 'rgba(255,255,255,0.6)' }}>Solved</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="card-year"></span>
                    <span className="card-number">02</span>
                  </div>
                </div>

                {/* LeetCode Profile Card */}
                <div className="stack-card card-1 main-orange">
                  <div className="card-label">LEETCODE</div>
                  <div className="profile-content" style={{ gap: '0.8rem', padding: '0', alignItems: 'center' }}>
                    <div className="profile-icon-circle" style={{ width: '60px', height: '60px', background: 'rgba(0,0,0,0.3)' }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.564 1.346 1.26 1.346H20.74c.696 0 1.26-.604 1.26-1.346z" fill="#B3B3B3" />
                        <path d="M18.83 7.686c-.504-.538-1.321-.538-1.825 0l-5.105 5.441c-.504.538-.504 1.41 0 1.948l.913.974c.504.538 1.321.538 1.825 0l5.105-5.441c.504-.538.504-1.41 0-1.948l-.913-.974z" fill="#FFA116" />
                        <path d="M5.17 14.814c-.504-.538-1.321-.538-1.825 0l-1.011 1.077c-.504.538-.504 1.41 0 1.948l3.226 3.439c.504.538 1.321.538 1.825 0l1.011-1.077c.504-.538.504-1.41 0-1.948l-3.226-3.439z" fill="#B3B3B3" />
                        <path d="M12.033 1.157c-.504-.538-1.321-.538-1.825 0L4.103 7.686c-.504.538-.504 1.41 0 1.948l.913.974c.504.538 1.321.538 1.825 0l6.105-6.529c.504-.538.504-1.41 0-1.948l-.913-.974z" fill="#B3B3B3" />
                      </svg>
                    </div>
                    <div className="profile-link-name" style={{ color: 'white', fontSize: '0.7rem' }}>@monikajakhar</div>
                    <div className="profile-stats">
                      <div className="stat-box">
                        <span className="stat-value" style={{ color: 'white', fontSize: '1rem' }}>250+</span>
                        <span className="stat-label-tiny" style={{ color: 'rgba(255,255,255,0.6)' }}>Solved</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer" style={{ marginTop: 'auto' }}>
                    <span className="card-year"></span>
                    <span className="card-number">01</span>
                  </div>
                </div>
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

      <section className="contact-section" id="contact">
        <div className="contact-container container">
          <div className="contact-left">
            <div className="contact-decoration">
              <div className="decor-blob"></div>
            </div>

            <h2 className="contact-title">Let&apos;s Talk <span className="arrow">→</span></h2>
            <a href="mailto:monikajakhar@gmail.com" className="contact-email">
              monikajakhar@gmail.com
            </a>
          </div>

          <div className="contact-right">
            <div className="contact-card">
              <p className="handwritten drop-message">drop me a message ✨</p>

              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your name" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="What's on your mind?" className="form-textarea"></textarea>
                </div>

                <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>
                  Send Message ✦
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
