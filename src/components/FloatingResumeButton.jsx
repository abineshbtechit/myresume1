import { useState, useEffect } from 'react';
import { FileText, Download, ExternalLink, X, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';

const RESUME_PDF_URL = '/assets/resume/Abinesh_AS_Resume.pdf';

export default function FloatingResumeButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Persistent Floating Button (Bottom Right) */}
      <aside aria-label="Resume quick access" className="floating-resume-wrap">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="floating-resume-btn"
          aria-label="Open and view resume"
          title="View Abinesh's Resume"
        >
          <div className="floating-resume-btn__icon-wrap">
            <FileText size={18} className="floating-resume-btn__icon" />
            <span className="floating-resume-btn__pulse" />
          </div>
          <span className="floating-resume-btn__label">View Resume</span>
          <span className="floating-resume-btn__badge">PDF</span>
        </button>
      </aside>

      {/* Modern High-End Resume Modal */}
      {isOpen && (
        <div
          className="resume-modal-overlay"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume Viewer Dialog"
        >
          <div
            className="resume-modal-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="resume-modal-header">
              <div className="resume-modal-header__title-group">
                <div className="resume-modal-header__icon">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="resume-modal-header__name">{profile.name} — Resume</h2>
                  <p className="resume-modal-header__subtitle">
                    Python Full-Stack Developer • B.Tech IT (8.43 CGPA)
                  </p>
                </div>
              </div>

              <div className="resume-modal-header__actions">
                <a
                  href={RESUME_PDF_URL}
                  download="Abinesh_AS_Resume.pdf"
                  className="btn btn--blue resume-modal-action-btn"
                  title="Download Resume PDF"
                >
                  <Download size={15} />
                  <span>Download</span>
                </a>

                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost resume-modal-action-btn"
                  title="Open in new tab"
                >
                  <ExternalLink size={15} />
                  <span>Open Tab</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="resume-modal-close-btn"
                  aria-label="Close resume modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF with Fallback Quick Summary */}
            <div className="resume-modal-body">
              <div className="resume-pdf-container">
                <object
                  data={RESUME_PDF_URL}
                  type="application/pdf"
                  className="resume-pdf-embed"
                >
                  <iframe
                    src={`${RESUME_PDF_URL}#toolbar=1`}
                    title="Abinesh A S Resume"
                    className="resume-pdf-iframe"
                  />
                </object>
              </div>

              {/* Bottom Quick-Action Bar */}
              <div className="resume-modal-footer">
                <div className="resume-modal-footer__verified">
                  <CheckCircle2 size={15} className="resume-verified-icon" />
                  <span>Latest Updated Version • Verified Credentials</span>
                </div>
                <div className="resume-modal-footer__links">
                  <a
                    href={RESUME_PDF_URL}
                    download="Abinesh_AS_Resume.pdf"
                    className="resume-footer-link"
                  >
                    <Download size={13} />
                    <span>Save to Device</span>
                  </a>
                  <a
                    href={RESUME_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-footer-link"
                  >
                    <Eye size={13} />
                    <span>Direct Full-Screen PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
