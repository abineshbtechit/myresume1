import { useEffect } from 'react';
import { X, ExternalLink, Github, Linkedin, Check } from 'lucide-react';
import { profile } from '../data/profile';

export default function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isMobileProject = project.type === 'mobile';
  const isHospitalTokenBooking = project.slug === 'hospital-token-booking';
  const gallery = project.detail?.gallery || [project.detail?.screenshot || project.media];

  return (
    <div className="project-detail-modal" onClick={onClose} role="presentation">
      <div className="project-detail-modal__backdrop" aria-hidden="true" />
      <div
        className="project-detail-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-detail-modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <div className="project-detail-modal__header">
          <div className="project-detail-modal__tags">
            <span className="badge badge--year">{project.year}</span>
            <span className="badge badge--category">{project.category}</span>
            {project.featured && <span className="badge badge--featured">Featured</span>}
          </div>
          <h2 id="modal-project-title">{project.title}</h2>
          <p className="project-detail-modal__overview">
            {project.detail?.overview || project.description}
          </p>
        </div>

        <div className="project-detail-modal__body">
          {/* Key Features */}
          {project.detail?.features && (
            <div className="detail-modal-section">
              <h3>Key Features & Capabilities</h3>
              <ul className="detail-modal-features">
                {project.detail.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Technologies */}
          <div className="detail-modal-section">
            <h3>Tools & Technologies</h3>
            <div className="project-card__tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Architecture Summary */}
          {project.detail?.architecture && (
            <div className="detail-modal-section">
              <h3>Architecture Summary</h3>
              <p className="detail-modal-prose">{project.detail.architecture}</p>
            </div>
          )}

          {/* Demo Video if exists */}
          {isHospitalTokenBooking && project.detail?.video && (
            <div className="detail-modal-section">
              <h3>Interactive Demo Video</h3>
              <div className="detail-video-shell detail-video-shell--tablet">
                <video
                  className="detail-video-shell__video"
                  src={project.detail.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  disablePictureInPicture
                />
              </div>
            </div>
          )}

          {/* Screenshots Gallery */}
          <div className="detail-modal-section">
            <h3>Screenshots & Visuals</h3>
            <div className={`detail-gallery ${isMobileProject ? 'detail-gallery--mobile' : ''}`}>
              {gallery.map((image, idx) => (
                <div key={`${project.slug}-${idx}`} className="detail-gallery__item">
                  <img src={image} alt={`${project.title} screenshot ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="project-detail-modal__footer">
          <div className="project-card__actions">
            {project.liveUrl && (
              <a
                className="btn btn--blue"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.githubUrl && (
              <a
                className="btn btn--ghost"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
                <span>Show on GitHub</span>
              </a>
            )}
            <a
              className="btn btn--ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={15} />
              <span>Connect on LinkedIn</span>
            </a>
            <button
              type="button"
              className="btn btn--secondary ml-auto"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
