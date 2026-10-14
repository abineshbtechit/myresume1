import { Download, ArrowUpRight, ArrowDown, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

// Colorful Floating Tech Badges (Bigger, Spread in white space, No links, No dotted lines)
const SPREAD_ICONS = [
  {
    id: 'python',
    name: 'Python',
    positionClass: 'hero-spread-icon--python',
    svg: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
        <path d="M11.91 2C6.84 2 7.18 4.2 7.18 4.2L7.19 6.46H12V7.17H5.21C2.04 7.17 0 9.3 0 13.62C0 17.94 1.8 18.42 1.8 18.42L3.82 18.42L3.82 15.65C3.82 12.48 6.46 12.21 6.46 12.21H11.27C15.26 12.21 15.45 9.3 15.45 9.3V5.1C15.45 2 11.91 2 11.91 2ZM9.17 4.21C9.88 4.21 10.46 4.78 10.46 5.5C10.46 6.21 9.88 6.79 9.17 6.79C8.45 6.79 7.88 6.21 7.88 5.5C7.88 4.78 8.45 4.21 9.17 4.21Z" fill="#387eb8"/>
        <path d="M12.09 22C17.16 22 16.82 19.8 16.82 19.8L16.81 17.54H12V16.83H18.79C21.96 16.83 24 14.7 24 10.38C24 6.06 22.2 5.58 22.2 5.58L20.18 5.58L20.18 8.35C20.18 11.52 17.54 11.79 17.54 11.79H12.73C8.74 11.79 8.55 14.7 8.55 14.7V18.9C8.55 22 12.09 22 12.09 22ZM14.83 19.79C14.12 19.79 13.54 19.22 13.54 18.5C13.54 17.79 14.12 17.21 14.83 17.21C15.55 17.21 16.12 17.79 16.12 18.5C16.12 19.22 15.55 19.79 14.83 19.79Z" fill="#ffe052"/>
      </svg>
    ),
  },
  {
    id: 'ai',
    name: 'AI & Applied ML',
    positionClass: 'hero-spread-icon--ai',
    svg: (
      <svg width="42" height="42" viewBox="0 0 28 28" fill="none">
        <defs>
          <linearGradient id="aiSpreadGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8b5cf6"/>
            <stop offset="1" stopColor="#ec4899"/>
          </linearGradient>
        </defs>
        <rect width="28" height="28" rx="7" fill="url(#aiSpreadGrad)"/>
        <path d="M14 5L16.2 11.2L22.5 13.5L16.2 15.8L14 22L11.8 15.8L5.5 13.5L11.8 11.2L14 5Z" fill="#ffffff"/>
        <circle cx="21" cy="7" r="1.6" fill="#ffffff"/>
        <circle cx="7" cy="20" r="1.3" fill="#ffffff"/>
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    positionClass: 'hero-spread-icon--github',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.444 4.867 20.198 8.84 21.523C9.34 21.616 9.52 21.306 9.52 21.041C9.52 20.806 9.51 20.021 9.51 19.191C6.73 19.794 6.14 17.852 6.14 17.852C5.69 16.702 5.03 16.398 5.03 16.398C4.12 15.776 5.1 15.789 5.1 15.789C6.11 15.86 6.64 16.828 6.64 16.828C7.53 18.358 8.98 17.917 9.55 17.662C9.64 17.016 9.9 16.577 10.18 16.327C7.96 16.075 5.63 15.215 5.63 11.385C5.63 10.293 6.02 9.4 6.66 8.702C6.56 8.45 6.21 7.433 6.76 6.07C6.76 6.07 7.6 5.801 9.5 7.091C10.3 6.868 11.15 6.757 12 6.753C12.85 6.757 13.7 6.868 14.5 7.091C16.4 5.801 17.24 6.07 17.24 6.07C17.79 7.433 17.44 8.45 17.34 8.702C17.98 9.4 18.37 10.293 18.37 11.385C18.37 15.226 16.03 16.072 13.81 16.319C14.16 16.621 14.48 17.226 14.48 18.151C14.48 19.479 14.47 20.551 14.47 20.875C14.47 21.143 14.65 21.458 15.16 21.357C19.13 20.026 22 16.276 22 12.017C22 6.484 17.522 2 12 2Z" fill="#18181b"/>
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    positionClass: 'hero-spread-icon--react',
    svg: (
      <svg width="42" height="42" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.2" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1.3" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    positionClass: 'hero-spread-icon--mongodb',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C11.5 2 7 7.5 7 15.5C7 20.5 10 22 12 22C14 22 17 20.5 17 15.5C17 7.5 12.5 2 12 2Z" fill="#13aa52"/>
        <path d="M12 2C12 7.5 12 22 12 22C14 22 17 20.5 17 15.5C17 7.5 12.5 2 12 2Z" fill="#00ed64"/>
        <path d="M12 21.5V11" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'flutter',
    name: 'Flutter',
    positionClass: 'hero-spread-icon--flutter',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M14.3 2L4 12.3L7.2 15.5L20.7 2H14.3Z" fill="#54c5f8"/>
        <path d="M14.3 12.3L8.6 18L11.8 21.2L20.7 12.3H14.3Z" fill="#02569b"/>
        <path d="M9.8 16.8L12.5 14.1L15.3 16.8L12.5 19.6L9.8 16.8Z" fill="#0175c2"/>
      </svg>
    ),
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    positionClass: 'hero-spread-icon--fastapi',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#009688"/>
        <path d="M12.5 4L7 13.5H12L11.5 20L17 10.5H12L12.5 4Z" fill="#FFFFFF"/>
      </svg>
    ),
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    positionClass: 'hero-spread-icon--postgres',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 5 7 5 11C5 15 7 17 9 19C10 20 11 21 11 22H13C13 21 14 20 15 19C17 17 19 15 19 11C19 7 17 3 12 3Z" stroke="#336791" strokeWidth="1.8" fill="#eaf2f8"/>
        <circle cx="9.5" cy="10" r="1.3" fill="#336791"/>
        <circle cx="14.5" cy="10" r="1.3" fill="#336791"/>
        <path d="M12 12V18" stroke="#336791" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8.5 15C10 16.5 14 16.5 15.5 15" stroke="#336791" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HeroHeader() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '#projects');
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '#contact');
  };

  return (
    <header className="hero-header">
      {/* Floating Colorful Tech Badges Spread in White Space (Without Dotted Links) */}
      <div className="hero-spread-icons-wrap" aria-hidden="true">
        {SPREAD_ICONS.map((item) => (
          <div
            key={item.id}
            className={`hero-spread-icon ${item.positionClass}`}
            title={item.name}
          >
            {item.svg}
          </div>
        ))}
      </div>

      <div className="hero-header__container">
        {/* Profile Avatar - Centered */}
        <div className="hero-avatar-wrap">
          <img
            src="/assets/images/abinesh-profile.png?v=2"
            alt={profile.name}
            className="hero-avatar"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/profile-portrait.jpg';
            }}
          />
        </div>

        {/* Content Area - Fully Centered with elegant hierarchy */}
        <div className="hero-content">
          <span className="hero-greeting">HELLO, I&apos;M</span>

          <h1 className="hero-name">
            {profile.name}
          </h1>

          <h2 className="hero-role">Developer &amp; creator.</h2>

          <p className="hero-lead">
            Building clean, thoughtful digital experiences with code, backend APIs, and applied AI.
          </p>

          {/* Action Buttons - Centered */}
          <div className="hero-actions">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="hero-btn-primary"
              aria-label="View projects"
            >
              <span>View projects</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/assets/resume/Abinesh_AS_Resume.pdf"
              download="Abinesh_AS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
              aria-label="Download CV"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="hero-btn-ghost"
              aria-label="Get in touch"
            >
              <span>Get in touch</span>
              <ArrowDown size={15} />
            </a>
          </div>

          {/* Meta & Social Row - Centered */}
          <div className="hero-meta-row">
            <div className="hero-meta-pill">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </div>

            <div className="hero-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hero-social-btn"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hero-social-btn hero-social-btn--blue"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="hero-social-btn"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
