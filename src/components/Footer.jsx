import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp } from 'lucide-react';
import { LeetCodeLogo } from './LeetCodeSection';
import { profile } from '../data/profile';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Experience & Education' },
  { id: 'tools', label: 'Tools & Technologies' },
  { id: 'projects', label: 'Projects' },
  { id: 'leetcode', label: 'LeetCode Progress' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -30;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="footer-v2">
      <div className="footer-v2__container">
        {/* Top 3-Column Layout */}
        <div className="footer-v2__grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-v2__brand-col">
            <div className="footer-v2__badge">
              <span className="footer-v2__status-dot" />
              <span>Available for Opportunities</span>
            </div>
            <h3 className="footer-v2__brand-name">{profile.name}</h3>
            <p className="footer-v2__brand-desc">
              Python Full-Stack Developer specializing in scalable backend APIs with Flask & FastAPI,
              cross-platform frontends with React & Flutter, and production AI/ML integrations.
            </p>
            <div className="footer-v2__location">
              <MapPin size={15} />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-v2__nav-col">
            <h4 className="footer-v2__col-title">Navigation</h4>
            <ul className="footer-v2__nav-list">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="footer-v2__nav-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="footer-v2__contact-col">
            <h4 className="footer-v2__col-title">Connect</h4>
            <div className="footer-v2__contact-items">
              <a href={`mailto:${profile.email}`} className="footer-v2__contact-item">
                <div className="footer-v2__icon-circle">
                  <Mail size={15} />
                </div>
                <span>{profile.email}</span>
              </a>

              <a href={`tel:${profile.phone}`} className="footer-v2__contact-item">
                <div className="footer-v2__icon-circle">
                  <Phone size={15} />
                </div>
                <span>{profile.phone}</span>
              </a>
            </div>

            <div className="footer-v2__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="footer-v2__social-btn"
                title="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="footer-v2__social-btn footer-v2__social-btn--blue"
                title="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={profile.leetcode || 'https://leetcode.com/u/abin788207/'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="footer-v2__social-btn footer-v2__social-btn--blue"
                title="LeetCode"
              >
                <LeetCodeLogo size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-v2__bottom">
          <p className="footer-v2__copyright">
            © {new Date().getFullYear()} {profile.name}. Clean Minimalist Design (60% White • 30% Black • 10% Blue).
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-v2__back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}