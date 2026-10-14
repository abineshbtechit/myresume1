import { Mail, MapPin, Phone, Github, Linkedin, Download, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

export default function ProfileSidebar({ compact = false }) {
  return (
    <aside className={`profile-sidebar ${compact ? 'profile-sidebar--compact' : ''}`}>
      {/* Availability Status Badge */}
      <div className="profile-sidebar__status-badge">
        <span className="status-dot" />
        <span>Available for Hire</span>
      </div>

      <div className="profile-sidebar__avatarWrap">
        <img
          className="profile-sidebar__avatar"
          src="/assets/profile-avatar.svg"
          alt="Abinesh A S avatar"
        />
      </div>

      <h1 className="profile-sidebar__name">{profile.name}</h1>
      <p className="profile-sidebar__role">{profile.role}</p>

      <div className="profile-sidebar__cards">
        <a href={`tel:${profile.phone}`} className="profile-sidebar__infoCard">
          <Phone size={16} className="info-icon" />
          <div className="info-text">
            <span className="info-label">Phone</span>
            <span className="info-val">{profile.phone}</span>
          </div>
        </a>

        <div className="profile-sidebar__infoCard">
          <MapPin size={16} className="info-icon" />
          <div className="info-text">
            <span className="info-label">Location</span>
            <span className="info-val">{profile.location}</span>
          </div>
        </div>

        <a href={`mailto:${profile.email}`} className="profile-sidebar__infoCard">
          <Mail size={16} className="info-icon" />
          <div className="info-text">
            <span className="info-label">Email</span>
            <span className="info-val">{profile.email}</span>
          </div>
        </a>
      </div>

      {/* Quick Action Button */}
      <div className="profile-sidebar__cta">
        <a
          href="/assets/resume/Abinesh_AS_Resume.pdf"
          download="Abinesh_AS_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary btn--full"
        >
          <Download size={15} />
          <span>Download CV</span>
        </a>
      </div>

      <div className="profile-sidebar__socials">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="social-icon-btn"
        >
          <Github size={17} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="social-icon-btn social-icon-btn--linkedin"
        >
          <Linkedin size={17} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email Abinesh A S"
          className="social-icon-btn"
        >
          <Mail size={17} />
        </a>
      </div>
    </aside>
  );
}