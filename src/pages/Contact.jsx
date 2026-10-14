import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="section-heading-wrap section-heading-wrap--center">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="Contact Me"
          subtitle="Available for full-stack engineering roles, technical inquiries, and project discussions"
          align="center"
        />
      </div>

      <div className="contact-layout">
        <div className="contact-copy">
          <p className="contact-copy__lead">
            I&apos;m always open to discussing new software engineering roles, full-stack development projects,
            applied AI collaborations, and technical partnerships. Let&apos;s build something impactful together.
          </p>

          <div className="contact-copy__grid">
            <a href={`mailto:${profile.email}`} className="contact-info contact-info--interactive">
              <div className="contact-info__icon">
                <Mail size={18} />
              </div>
              <div>
                <strong>Email</strong>
                <span>{profile.email}</span>
              </div>
            </a>

            <a href={`tel:${profile.phone}`} className="contact-info contact-info--interactive">
              <div className="contact-info__icon">
                <Phone size={18} />
              </div>
              <div>
                <strong>Phone</strong>
                <span>{profile.phone}</span>
              </div>
            </a>

            <div className="contact-info">
              <div className="contact-info__icon">
                <MapPin size={18} />
              </div>
              <div>
                <strong>Location</strong>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="contact-social-bar">
            <span className="contact-social-bar__label">Connect Directly:</span>
            <div className="profile-sidebar__socials profile-sidebar__socials--contact">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="social-btn"
              >
                <Github size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="social-btn social-btn--linkedin"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email Abinesh"
                className="social-btn"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}