import { GraduationCap, Briefcase, Code2, Sparkles, Cpu } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ToolsGrid from '../components/ToolsGrid';
import CertificationCard from '../components/CertificationCard';
import { certifications, education, experience } from '../data/experience';

export default function Resume() {
  // Ordered sequence for the marquee: Education first, then core experiences
  const qualifications = [
    education,
    ...experience,
  ];

  // Duplicate for seamless infinite loop from left to right
  const marqueeItems = [...qualifications, ...qualifications];

  const getIcon = (type) => {
    switch (type) {
      case 'Education':
        return <GraduationCap size={15} />;
      case 'Certification Training':
        return <Code2 size={15} />;
      case 'Virtual Internship':
        return <Sparkles size={15} />;
      case 'AI Engineering':
        return <Cpu size={15} />;
      default:
        return <Briefcase size={15} />;
    }
  };

  return (
    <section id="resume" className="portfolio-section resume-section-wrapper">
      {/* Centered Main Section Heading */}
      <div className="section-heading-wrap section-heading-wrap--center">
        <SectionTitle
          eyebrow="CAREER & QUALIFICATIONS"
          title="Experience & Education"
          subtitle="Continuous track record of academic achievement, full-stack engineering, and AI systems"
          align="center"
        />
      </div>

      {/* Marquee Track: Height > Width Portrait Cards Moving From Left to Right */}
      <div
        className="experience-marquee-container"
        aria-label="Experience and education marquee moving from left to right"
      >
        <div className="experience-marquee-track">
          {marqueeItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="qualification-card qualification-card--portrait"
            >
              {/* Card Header: Centered Type & Period */}
              <div className="qualification-card__header">
                <div className="qualification-card__meta">
                  <span className={`qualification-badge qualification-badge--${item.type.toLowerCase().replace(/\s+/g, '-')}`}>
                    {getIcon(item.type)}
                    <span>{item.type}</span>
                  </span>
                  <span className="qualification-period">
                    {item.period}
                  </span>
                </div>
                {item.grade && (
                  <span className="qualification-grade-pill">
                    {item.grade}
                  </span>
                )}
              </div>

              {/* Card Body: High-Impact Vertical Layout */}
              <div className="qualification-card__body">
                <h3 className="qualification-card__title">{item.title}</h3>
                <p className="qualification-card__org">{item.company || item.institution}</p>
                <p className="qualification-card__desc">{item.description}</p>
              </div>

              {/* Card Footer: Skills & Technologies */}
              {item.tags && (
                <div className="qualification-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="qualification-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Tools & Technologies (Centered Subheadings) */}
      <div id="tools" className="resume-tools-showcase-section">
        <div className="section-heading-wrap section-heading-wrap--center">
          <SectionTitle
            eyebrow="CORE TECH STACK"
            title="Tools & Technologies"
            subtitle="Programming languages, frameworks, AI libraries, and cloud platforms"
            align="center"
          />
        </div>
        <ToolsGrid />
      </div>

      {/* Certifications (Centered Subheadings) */}
      <div id="certifications" className="resume-certifications-section">
        <div className="section-heading-wrap section-heading-wrap--center">
          <SectionTitle
            eyebrow="VERIFIED CREDENTIALS"
            title="Certifications"
            subtitle="Industry qualifications from Oracle, NPTEL, and AWS"
            align="center"
          />
        </div>
        <div className="tools-grid cert-cards-grid">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}