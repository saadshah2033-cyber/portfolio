import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown,
  Code2, Command, Copy, Download, ExternalLink, FileCode2, GraduationCap,
  Layers3, Linkedin, Mail, MapPin, Menu, Moon, Send, Server,
  ShieldCheck, Sparkles, Sun, Terminal, Workflow, X
} from 'lucide-react'

const EMAIL = 'shahcloudeng@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/shahappdev'
const NAV = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'],
  ['Projects', 'projects'], ['Journey', 'journey'], ['Contact', 'contact']
]

const skillFilters = ['All', 'Frontend', 'Backend', 'Cloud & DevOps', 'Languages', 'ML & Data', 'Mobile']

const skills = [
  { name: 'React', symbol: '⚛', color: '#54d6fa', categories: ['Frontend'] },
  { name: 'JavaScript', symbol: 'JS', color: '#f5d44e', categories: ['Frontend', 'Languages'] },
  { name: 'HTML5', symbol: '5', color: '#f16f45', categories: ['Frontend'] },
  { name: 'CSS3', symbol: '3', color: '#44a4fa', categories: ['Frontend'] },
  { name: 'Bootstrap', symbol: 'B', color: '#a57af7', categories: ['Frontend'] },
  { name: 'React Router', symbol: '↗', color: '#f56a85', categories: ['Frontend'] },
  { name: 'Framer Motion', symbol: 'F', color: '#c890ff', categories: ['Frontend'] },
  { name: 'Node.js', symbol: '⬡', color: '#83ca65', categories: ['Backend'] },
  { name: 'Express.js', symbol: 'ex', color: '#c9c9da', categories: ['Backend'] },
  { name: 'REST APIs', symbol: 'API', color: '#8eaaff', categories: ['Backend'] },
  { name: 'MongoDB', symbol: '◈', color: '#63d395', categories: ['Backend'] },
  { name: 'SQL', symbol: 'DB', color: '#67c7ed', categories: ['Backend', 'Languages'] },
  { name: 'Python', symbol: 'Py', color: '#f5c95f', categories: ['Languages', 'ML & Data'] },
  { name: 'C++', symbol: 'C++', color: '#80a9ff', categories: ['Languages'] },
  { name: 'Java', symbol: 'J', color: '#ec8267', categories: ['Languages'] },
  { name: 'Dart', symbol: 'D', color: '#65c6f9', categories: ['Languages', 'Mobile'] },
  { name: 'AWS', symbol: 'aws', color: '#ffb347', categories: ['Cloud & DevOps'] },
  { name: 'Docker', symbol: '▣', color: '#55a9fa', categories: ['Cloud & DevOps'] },
  { name: 'Kubernetes', symbol: '⎈', color: '#82a4ff', categories: ['Cloud & DevOps'] },
  { name: 'Terraform', symbol: 'T', color: '#a486f8', categories: ['Cloud & DevOps'] },
  { name: 'Git', symbol: '⌁', color: '#ff845d', categories: ['Cloud & DevOps'] },
  { name: 'Linux', symbol: '⌘', color: '#f0c55f', categories: ['Cloud & DevOps'] },
  { name: 'Bash', symbol: '>_', color: '#a2e9ac', categories: ['Cloud & DevOps', 'Languages'] },
  { name: 'GitHub Actions', symbol: '⌥', color: '#a3b5ff', categories: ['Cloud & DevOps'] },
  { name: 'Flutter', symbol: '◢', color: '#65c6f9', categories: ['Mobile'] },
  { name: 'Scikit-learn', symbol: 'sk', color: '#ffaa63', categories: ['ML & Data'] },
  { name: 'Pandas', symbol: 'pd', color: '#beadfa', categories: ['ML & Data'] },
  { name: 'Flask', symbol: 'Fl', color: '#d4d4e7', categories: ['Backend', 'ML & Data'] },
]

const projects = [
  {
    id: 'verdant', title: 'Verdant', eyebrow: '01 / FULL-STACK WEB APPLICATION',
    subtitle: 'A little more green, every day.',
    description: 'A plant subscription experience with a thoughtfully designed React frontend, multi-page navigation, motion, and a Node/Express REST API.',
    technologies: ['React', 'Node.js', 'Express', 'REST API', 'Framer Motion'],
    highlights: ['Multi-page, responsive React interface', 'Reusable components and Context API', 'Node.js / Express API integration', 'Animations and interactive UI elements'],
    status: 'Personal project · Not deployed'
  },
  {
    id: 'news', title: 'Fake News Detector', eyebrow: '02 / MACHINE LEARNING APPLICATION',
    subtitle: 'Better signals for a noisy world.',
    description: 'An ML-powered news classifier with a React interface and a Python/Flask backend, featuring NLP preprocessing and multiple model choices.',
    technologies: ['Python', 'Scikit-learn', 'TF-IDF', 'Flask', 'React'],
    highlights: ['Trained on fake and real news datasets', 'TF-IDF and NLP text preprocessing', 'Logistic Regression and Random Forest models', 'React frontend with model selection and confidence display'],
    status: 'Academic / personal project · Not deployed'
  }
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(el => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -45px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function SectionTitle({ number, eyebrow, title, text }) {
  return <div className="section-heading" data-reveal>
    <div className="eyebrow"><span className="eyebrow-number">{number}</span><span className="eyebrow-rule" />{eyebrow}</div>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

function Header({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const targets = NAV.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 })
    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <header className="site-header">
    <div className="nav-shell container">
      <a href="#home" className="brand" onClick={closeMenu} aria-label="Saad Shah home">
        <span className="brand-mark">SS<span className="brand-dot">.</span></span>
        <span className="brand-name">Saad Shah<span className="brand-period">.</span></span>
      </a>
      <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        {NAV.map(([text, id]) => <a key={id} href={`#${id}`} onClick={closeMenu} className={active === id ? 'active' : ''}>{text}</a>)}
      </nav>
      <div className="nav-actions">
        <button className="icon-button theme-button" onClick={onThemeChange} title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="button button-purple resume-button" href="/Hafiz_Syed_Muhammad_Saad_Resume.pdf" download="Hafiz_Syed_Muhammad_Saad_Resume.pdf"><Download size={15} /> Resume</a>
        <button className="icon-button mobile-menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </div>
  </header>
}

function CodeWindow() {
  return <div className="code-scene" aria-label="Stylized code editor illustration">
    <div className="scene-halo" />
    <div className="orbit-icon orbit-react">⚛</div>
    <div className="orbit-icon orbit-node">⬡</div>
    <div className="orbit-icon orbit-cloud"><Server size={19} /></div>
    <div className="editor-window">
      <div className="editor-top"><div className="window-dots"><i /><i /><i /></div><span><FileCode2 size={12} /> developer.jsx</span><span className="editor-ellipsis">•••</span></div>
      <div className="editor-body">
        <div className="line-number">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10<br />11<br />12<br />13</div>
        <div className="code-lines">
          <div><span className="syntax-purple">const</span> <span className="syntax-sky">developer</span> = {'{'}</div>
          <div className="indent"><span className="syntax-lilac">name</span>: <span className="syntax-green">'Saad Shah'</span>,</div>
          <div className="indent"><span className="syntax-lilac">role</span>: <span className="syntax-green">'Software Engineer'</span>,</div>
          <div className="indent"><span className="syntax-lilac">focus</span>: [</div>
          <div className="indent2"><span className="syntax-green">'Full-Stack Development'</span>,</div>
          <div className="indent2"><span className="syntax-green">'Cloud Engineering'</span>,</div>
          <div className="indent"><span className="syntax-lilac">],</span></div>
          <div className="indent"><span className="syntax-lilac">location</span>: <span className="syntax-green">'Lahore, PK'</span>,</div>
          <div className="indent"><span className="syntax-lilac">curious</span>: <span className="syntax-orange">true</span>,</div>
          <div>{'}'}</div>
          <div>&nbsp;</div>
          <div><span className="syntax-purple">export default</span> developer<span className="syntax-caret">▍</span></div>
        </div>
      </div>
      <div className="editor-status"><span><span className="status-dot" /> All systems operational</span><span>JSX&nbsp; · &nbsp;UTF-8</span></div>
    </div>
    <div className="floating-terminal"><span className="terminal-arrow">➜</span> <span>building the future</span><span className="terminal-cursor">_</span></div>
    <div className="scene-grid" />
  </div>
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-glow hero-glow-left" /><div className="hero-glow hero-glow-right" />
    <div className="container hero-inner">
      <div className="hero-copy" data-reveal>
        <div className="availability"><span className="availability-dot" /> Open to internships & collaborations <ArrowUpRight size={13} /></div>
        <div className="hero-kicker"><span className="kicker-line" /> HELLO, WORLD. I'M</div>
        <h1>Hafiz Syed<br /><span className="hero-name-highlight">Muhammad Saad<span className="name-period">.</span></span></h1>
        <h2>Software Engineer <span className="amp">&</span><br /><span className="gradient-text">Full-Stack Web Developer</span></h2>
        <p>Crafting thoughtful web experiences and exploring the cloud infrastructure that makes them run. I turn ideas into functional, human-centered products.</p>
        <div className="hero-cta">
          <a href="#projects" className="button button-purple button-lg">Explore my work <ArrowUpRight size={17} /></a>
          <a href="#contact" className="button button-outline button-lg">Let's talk <ArrowRight size={17} /></a>
        </div>
        <div className="hero-socials"><span>FIND ME ON</span><span className="tiny-line" />
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Send email" title="Email"><Mail size={18} /></a>
        </div>
      </div>
      <CodeWindow />
    </div>
    <div className="container hero-stats" data-reveal>
      <div className="hero-stat"><span className="stat-icon"><Layers3 size={20} /></span><div><strong>02<span>+</span></strong><small>Featured projects</small></div></div>
      <div className="hero-stat"><span className="stat-icon"><Code2 size={20} /></span><div><strong>25<span>+</span></strong><small>Tools & technologies</small></div></div>
      <div className="hero-stat"><span className="stat-icon"><GraduationCap size={20} /></span><div><strong>7th</strong><small>Semester · BSSE</small></div></div>
      <div className="hero-stat location-stat"><span className="stat-icon"><MapPin size={20} /></span><div><strong className="location-name">Lahore</strong><small>Pakistan</small></div></div>
    </div>
    <a className="scroll-hint" href="#about">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
  </section>
}

function About() {
  return <section id="about" className="section about-section">
    <div className="container about-grid">
      <div className="about-content">
        <SectionTitle number="01" eyebrow="THE PERSON BEHIND THE CODE" title={<>More than just <span className="gradient-text">syntax.</span></>} />
        <div className="about-paragraphs" data-reveal>
          <p>I'm <strong>Hafiz Syed Muhammad Saad</strong>, a Software Engineering student at Lahore Garrison University with a passion for turning complex problems into clean, usable web applications.</p>
          <p>My strongest area is <strong>frontend development with React</strong>. I also build APIs with Node.js and Express, work with Python and machine learning, and actively develop my cloud and DevOps skills across AWS, Docker, Terraform, and Kubernetes.</p>
          <p>I care about the details: thoughtful interfaces, maintainable code, and always having something new to learn.</p>
        </div>
        <a className="text-link" href="#journey">A little more about my journey <ArrowUpRight size={17} /></a>
      </div>
      <div className="about-side" data-reveal>
        <div className="about-card about-feature-card">
          <span className="about-icon purple"><GraduationCap size={22} /></span>
          <span className="small-caps">CURRENTLY</span>
          <h3>BS Software<br />Engineering</h3>
          <p>Lahore Garrison University</p>
          <div className="card-bottom"><span className="tag tag-purple">7th Semester</span><span className="muted-detail">CGPA 2.96</span></div>
        </div>
        <div className="about-mini-row">
          <div className="about-card about-mini-card"><span className="about-icon blue"><Terminal size={20} /></span><strong>Build.</strong><span>Designing for real people.</span></div>
          <div className="about-card about-mini-card"><span className="about-icon mint"><Workflow size={20} /></span><strong>Learn.</strong><span>Always growing my stack.</span></div>
        </div>
      </div>
    </div>
  </section>
}

function Skills() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? skills : skills.filter(skill => skill.categories.includes(filter))
  return <section id="skills" className="section skills-section">
    <div className="container">
      <div className="section-heading-row">
        <SectionTitle number="02" eyebrow="MY TOOLKIT" title={<>Tech I <span className="gradient-text">work with.</span></>} text="A practical stack spanning the frontend, backend, cloud, and machine learning." />
        <div className="skill-count" data-reveal><span className="skill-count-number">{String(skills.length).padStart(2, '0')}</span><span>technologies<br />& tools</span></div>
      </div>
      <div className="skill-tabs" role="tablist" aria-label="Filter technologies" data-reveal>
        {skillFilters.map(item => <button key={item} type="button" role="tab" aria-selected={item === filter} className={`skill-tab ${item === filter ? 'active' : ''}`} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="skills-grid" role="tabpanel" aria-label={`${filter} technologies`}>
        {filtered.map(skill => <div key={skill.name} className="skill-card" style={{ '--brand-color': skill.color }}>
          <div className="skill-symbol" aria-hidden="true">{skill.symbol}</div><span>{skill.name}</span>
        </div>)}
      </div>
      <p className="skills-footnote">Beyond the logos: responsive UI, component design, MVC architecture, CI/CD, and a lot of problem solving.</p>
    </div>
  </section>
}

function PlantArt() {
  return <svg className="plant-art" width="290" height="260" viewBox="0 0 290 260" role="img" aria-label="Illustration of a potted green plant">
    <defs><linearGradient id="leafA" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#69df89" /><stop offset="1" stopColor="#125c3d" /></linearGradient><linearGradient id="leafB" x1="0" x2="1"><stop stopColor="#a8e89c" /><stop offset="1" stopColor="#27704d" /></linearGradient><linearGradient id="pot" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#d8c4a2" /><stop offset="1" stopColor="#857257" /></linearGradient></defs>
    <ellipse cx="149" cy="244" rx="66" ry="9" fill="#051d14" opacity=".5" />
    <path d="M146 211 C136 142 116 92 105 56 M146 211 C166 134 201 105 217 59 M146 211 C147 136 150 85 150 27 M145 207 C116 168 82 155 55 123 M146 208 C175 170 211 155 238 128" stroke="#477b43" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M108 91 C44 91 37 43 56 24 C102 21 127 59 108 91Z" fill="url(#leafA)" /><path d="M109 92 C88 53 68 39 56 24" stroke="#b1f2aa" strokeOpacity=".35" fill="none" />
    <path d="M151 97 C101 67 127 10 160 5 C194 33 189 76 151 97Z" fill="url(#leafB)" /><path d="M152 94 C153 52 155 25 160 5" stroke="#e1f4ba" strokeOpacity=".45" fill="none" />
    <path d="M190 112 C180 57 221 26 257 39 C261 83 230 122 190 112Z" fill="url(#leafA)" /><path d="M190 111 C211 76 239 52 257 39" stroke="#c6f1b2" strokeOpacity=".35" fill="none" />
    <path d="M123 173 C64 171 45 135 54 116 C90 106 128 137 123 173Z" fill="url(#leafB)" />
    <path d="M176 170 C178 130 221 107 247 118 C246 150 214 177 176 170Z" fill="url(#leafB)" />
    <path d="M111 200 L178 200 L168 245 Q145 253 122 245 Z" fill="url(#pot)" /><ellipse cx="144" cy="200" rx="34" ry="8" fill="#d7bd98" /><ellipse cx="144" cy="200" rx="28" ry="5" fill="#3b3b26" />
  </svg>
}

function ProjectPreview({ id }) {
  if (id === 'verdant') return <div className="project-preview verdant-preview">
    <div className="mini-nav"><span className="mini-brand">✿ verdant<span className="mini-dot">.</span></span><div>Home&nbsp;&nbsp;&nbsp; Plants&nbsp;&nbsp;&nbsp; Guides</div><span className="mini-get-started">Get Started</span></div>
    <div className="verdant-main"><div className="verdant-text"><span className="mini-label">GROW WITH US</span><h4>Bring nature<br />closer to home.</h4><p>Thoughtfully curated plants for<br />your everyday spaces.</p><span className="verdant-button">Explore plants ↗</span></div><PlantArt /></div>
    <span className="preview-bottom-label">THE PLANT SUBSCRIPTION EXPERIENCE</span>
  </div>
  return <div className="project-preview news-preview">
    <div className="mini-nav news-mini-nav"><span className="mini-brand">◈ Fake News Detector<span className="mini-dot">.</span></span><div>Classifier&nbsp;&nbsp;&nbsp; How it works</div><span className="mini-get-started">ML MODEL</span></div>
    <div className="news-preview-main"><div className="news-main-left"><span className="mini-label">AI-POWERED CLASSIFIER</span><h4>Can you trust<br />what you read?</h4><p>Analyze headlines and articles<br />with machine learning.</p><div className="news-input">Paste an article to analyze <span>↗</span></div></div><div className="news-score-card"><div className="news-score-ring"><div><strong>98.89%</strong><small>Model test accuracy</small></div></div><div className="news-score-footer"><span className="score-circle" /> Analysis ready</div></div></div>
    <span className="preview-bottom-label">FROM DATA TO BETTER DECISIONS</span>
  </div>
}

function Projects({ onOpen }) {
  return <section id="projects" className="section projects-section">
    <div className="container">
      <div className="section-heading-row">
        <SectionTitle number="03" eyebrow="SELECTED WORK" title={<>Things I've <span className="gradient-text">built.</span></>} text="Two projects that show how I approach interfaces, APIs, and data-driven applications." />
        <span className="projects-caption" data-reveal>FEATURED / 2025—2026</span>
      </div>
      <div className="projects-grid">
        {projects.map(project => <article className="project-card" key={project.id} data-reveal>
          <button className="project-image-button" type="button" onClick={() => onOpen(project)} aria-label={`Read about ${project.title}`}>
            <ProjectPreview id={project.id} />
            <span className="project-image-hover"><ArrowUpRight size={19} /></span>
          </button>
          <div className="project-info"><div className="project-eyebrow">{project.eyebrow}</div>
            <div className="project-title-row"><h3>{project.title}</h3><button type="button" onClick={() => onOpen(project)} aria-label={`Open ${project.title} case study`} className="project-arrow"><ArrowUpRight size={21} /></button></div>
            <p>{project.description}</p>
            <div className="project-tech">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
            <button type="button" onClick={() => onOpen(project)} className="text-link project-detail-link">Explore project <ArrowRight size={17} /></button>
          </div>
        </article>)}
      </div>
      <div className="projects-note" data-reveal><Sparkles size={17} /> Every project started with an idea and a lot of curiosity. More is in the works.</div>
    </div>
  </section>
}

function Journey() {
  return <section id="journey" className="section journey-section">
    <div className="container">
      <SectionTitle number="04" eyebrow="MY PATH SO FAR" title={<>Always a <span className="gradient-text">work in progress.</span></>} text="Formal education, practical training, and a habit of learning by building." />
      <div className="journey-grid">
        <div className="journey-feature" data-reveal><span className="journey-feature-icon"><GraduationCap size={25} /></span><span className="journey-type">EDUCATION</span><h3>BS Software<br />Engineering</h3><p>Lahore Garrison University</p><div className="journey-feature-bottom"><span>7th semester</span><span>CGPA 2.96</span></div><div className="journey-watermark">07</div></div>
        <div className="journey-list">
          <div className="journey-item" data-reveal><div className="journey-icon journey-icon-cloud"><Server size={21} /></div><div className="journey-item-copy"><div className="journey-item-header"><h3>Cloud Engineering & DevOps</h3><span className="tag tag-green">Topics studied</span></div><p>Hands-on study of AWS infrastructure, Linux, networking, Docker, Kubernetes fundamentals, Terraform, CI/CD, security, and monitoring.</p><div className="journey-tags"><span>AWS</span><span>Docker</span><span>Terraform</span><span>GitHub Actions</span></div></div></div>
          <div className="journey-item" data-reveal><div className="journey-icon journey-icon-flutter"><Code2 size={21} /></div><div className="journey-item-copy"><div className="journey-item-header"><h3>Flutter App Development</h3><span className="journey-date">SEP — NOV 2025</span></div><p>Completed training focused on Dart fundamentals, Flutter widgets, responsive layouts, and mobile UI development.</p><div className="journey-tags"><span>Flutter</span><span>Dart</span><span>Mobile UI</span></div></div></div>
          <div className="journey-item" data-reveal><div className="journey-icon journey-icon-code"><BookOpen size={21} /></div><div className="journey-item-copy"><div className="journey-item-header"><h3>Building & Exploring</h3><span className="tag tag-purple">Ongoing</span></div><p>Developing full-stack projects, sharpening software engineering foundations, and expanding practical cloud skills.</p><div className="journey-tags"><span>React</span><span>Node.js</span><span>Python</span></div></div></div>
        </div>
      </div>
    </div>
  </section>
}

function Contact() {
  const [name, setName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch { window.location.href = `mailto:${EMAIL}` }
  }

  function onSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${name.trim()}`)
    const body = encodeURIComponent(`${message.trim()}\n\nFrom: ${name.trim()} (${senderEmail.trim()})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return <section id="contact" className="section contact-section">
    <div className="container">
      <div className="contact-banner" data-reveal>
        <div className="contact-banner-glow" /><div className="contact-banner-copy"><span className="small-caps"><span className="contact-sparkle">✳</span> HAVE SOMETHING IN MIND?</span><h2>Let's make something <span>great.</span></h2><p>Open to web development roles, internships, interesting collaborations, and conversations about building useful things.</p></div>
        <a className="button button-light button-lg" href={`mailto:${EMAIL}?subject=Let's%20work%20together`}>Get in touch <ArrowUpRight size={17} /></a>
      </div>
      <div className="contact-grid">
        <div className="contact-info" data-reveal><div className="eyebrow"><span className="eyebrow-number">05</span><span className="eyebrow-rule" />CONTACT</div><h3>Say hello<span className="name-period">.</span></h3><p>Have a project, an opportunity, or a question? My inbox is open.</p>
          <div className="contact-method"><span className="contact-method-icon"><Mail size={20} /></span><div><small>EMAIL ME</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div><button type="button" title="Copy email address" aria-label="Copy email address" onClick={copyEmail} className="copy-button">{copied ? <Check size={17} /> : <Copy size={17} />}</button></div>
          <div className="contact-method"><span className="contact-method-icon"><Linkedin size={20} /></span><div><small>CONNECT WITH ME</small><a href={LINKEDIN} rel="noreferrer" target="_blank">linkedin.com/in/shahappdev <ExternalLink size={13} /></a></div></div>
          <div className="contact-location"><MapPin size={17} /> Based in Lahore, Pakistan</div>
        </div>
        <form className="contact-form" onSubmit={onSubmit} data-reveal><div className="contact-form-top"><span className="form-icon"><Send size={19} /></span><div><strong>Send a message</strong><p>Starts a draft in your email app.</p></div></div>
          <div className="form-row"><label>Your name<input value={name} maxLength="80" onChange={e => setName(e.target.value)} placeholder="Your name" required /></label><label>Your email<input type="email" value={senderEmail} maxLength="140" onChange={e => setSenderEmail(e.target.value)} placeholder="you@example.com" required /></label></div>
          <label>Your message<textarea value={message} onChange={e => setMessage(e.target.value)} rows="4" maxLength="2500" placeholder="Tell me what you're working on..." required /></label>
          <button type="submit" className="button button-purple button-lg form-submit">Prepare email <Send size={16} /></button>
        </form>
      </div>
    </div>
  </section>
}

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    if (!project) return
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', onKeyDown) }
  }, [project, onClose])
  if (!project) return null
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
    <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
      <div className="modal-head"><span className="small-caps">PROJECT CASE STUDY</span><button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Close project details"><X size={21} /></button></div>
      <div className="modal-preview"><ProjectPreview id={project.id} /></div>
      <div className="modal-body"><span className="project-eyebrow">{project.eyebrow}</span><h2 id="modal-heading">{project.title}</h2><p className="modal-description">{project.description}</p><h3>What I worked on</h3><ul>{project.highlights.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><h3>Technologies</h3><div className="project-tech">{project.technologies.map(item => <span key={item}>{item}</span>)}</div><p className="modal-status"><ShieldCheck size={15} />{project.status}</p></div>
    </section>
  </div>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <a className="footer-brand" href="#home">SS<span>.</span><span className="footer-brand-text">Saad Shah</span></a>
    <p>Built with <span>React</span> & a lot of coffee. © {new Date().getFullYear()} Hafiz Syed Muhammad Saad.</p>
    <a href="#home" className="back-to-top">Back to top ↑</a>
  </div></footer>
}

export default function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark' } catch { return 'dark' } })
  const [selectedProject, setSelectedProject] = useState(null)
  useReveal()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0a0b13' : '#f5f5fc')
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* storage may be disabled */ }
  }, [theme])

  return <>
    <Header theme={theme} onThemeChange={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
    <main><Hero /><About /><Skills /><Projects onOpen={setSelectedProject} /><Journey /><Contact /></main>
    <Footer />
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </>
}
