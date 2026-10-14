import { Github, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

const THEMES = [
  { bg: '#fffbeb', border: '#fef3c7', tag: '#b45309' }, // Warm Cream (Currency Converter style)
  { bg: '#fdf2f8', border: '#fce7f3', tag: '#be185d' }, // Soft Rose (Weather App style)
  { bg: '#f0f9ff', border: '#e0f2fe', tag: '#0369a1' }, // Ice Blue (AOT fan site style)
  { bg: '#f0fdf4', border: '#dcfce7', tag: '#15803d' }, // Mint Green
  { bg: '#fefce8', border: '#fef08a', tag: '#a16207' }, // Warm Sand / Ochre
];

export default function ProjectCard({ project, index = 0, onViewDetails, onOpenLiveApp }) {
  const theme = THEMES[index % THEMES.length];
  const githubLink = project.githubUrl || profile.github;

  const handleCardClick = (e) => {
    // Avoid triggering when user clicks on GitHub link or live link directly
    if (e.target.closest('a')) return;
    if (onViewDetails) {
      onViewDetails(project);
    }
  };

  const handleViewClick = (e) => {
    e.stopPropagation();
    if (onViewDetails) {
      onViewDetails(project);
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      className="project-box-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onViewDetails) onViewDetails(project);
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Top Banner with Pastel Tint & Project Photo */}
      <div
        className="project-box-card__banner"
        style={{ backgroundColor: theme.bg, borderColor: theme.border }}
      >
        <div className="project-box-card__top-bar">
          <span className="project-box-card__category" style={{ color: theme.tag }}>
            {project.category}
          </span>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleGithubClick}
            className="project-box-card__github"
            aria-label={`GitHub repository for ${project.title}`}
            title="View GitHub Repository"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Project Photo / Thumbnail */}
        <div className="project-box-card__media-wrap">
          {project.mediaType === 'video' ? (
            <video
              src={project.media}
              muted
              playsInline
              preload="metadata"
              poster="/src/assets/videos/hospital-token-booking.mp4"
              className="project-box-card__media"
            />
          ) : (
            <img
              src={project.media}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="project-box-card__media"
            />
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="project-box-card__body">
        <h3 className="project-box-card__title">{project.title}</h3>
        <p className="project-box-card__desc">{project.description}</p>

        {/* Tech Tags */}
        <div className="project-box-card__tags">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="mini-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="mini-tag mini-tag--more">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer with Details / View button */}
        <div className="project-box-card__footer">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-box-card__live-link"
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenLiveApp) {
                  e.preventDefault();
                  onOpenLiveApp(project);
                }
              }}
            >
              <span>Live App</span>
              <ExternalLink size={12} />
            </a>
          ) : (
            <span className="project-box-card__year">{project.year}</span>
          )}

          <button
            type="button"
            className="project-box-card__btn-view"
            onClick={handleViewClick}
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
}