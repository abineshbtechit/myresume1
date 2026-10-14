import { ExternalLink } from 'lucide-react';
import { ToolIcon } from './ToolIcons';

export default function CertificationCard({ cert }) {
  const renderIcon = () => {
    if (cert.iconType === 'aws') {
      return <ToolIcon name="aws" size={60} className="tool-card__icon" />;
    }
    if (cert.iconType === 'mongodb') {
      return <ToolIcon name="mongodb" size={60} className="tool-card__icon" />;
    }
    if (cert.iconType === 'oracle') {
      return (
        <svg
          width="60"
          height="60"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="tool-card__icon"
        >
          <rect x="8" y="16" width="48" height="32" rx="16" stroke="currentColor" strokeWidth="3.5" />
          <circle cx="32" cy="32" r="7" fill="currentColor" />
        </svg>
      );
    }
    // Infosys / AI
    return (
      <svg
        width="60"
        height="60"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="tool-card__icon"
      >
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3.5" />
        <path d="M22 32L29 39L42 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <article className="tool-card cert-card">
      <div className="tool-card__header">
        <h3 className="tool-card__title">{cert.title}</h3>
        <p className="tool-card__category">{cert.issuer} • {cert.year}</p>
      </div>

      <div className="tool-card__icon-wrap">
        {renderIcon()}
      </div>

      <p className="cert-card__desc">{cert.description}</p>

      <div className="tool-card__footer">
        <a
          href={cert.certificateFile || cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-card__btn"
          aria-label={`View Certificate for ${cert.title}`}
        >
          <span>View Certificate</span>
          <ExternalLink size={13} className="tool-card__btn-icon" />
        </a>
      </div>
    </article>
  );
}
