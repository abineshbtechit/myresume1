import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectLaunchDialog from '../components/ProjectLaunchDialog';
import ProjectDetailsModal from '../components/ProjectDetailsModal';
import { projects } from '../data/projects';

export default function Projects({ onViewDetails: externalOnViewDetails }) {
  const [launchProject, setLaunchProject] = useState(null);
  const [internalDetailProject, setInternalDetailProject] = useState(null);
  const firstProjectSlug = projects[0]?.slug;

  const handleOpenLiveApp = (project) => {
    if (project.slug === firstProjectSlug) {
      setLaunchProject(project);
      return;
    }
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewDetails = (project) => {
    if (externalOnViewDetails) {
      externalOnViewDetails(project);
    } else {
      setInternalDetailProject(project);
    }
  };

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="section-heading-wrap section-heading-wrap--center">
        <SectionTitle
          eyebrow="SELECTED WORKS"
          title="Projects & Engineering"
          subtitle="Production-ready web applications, mobile platforms, and applied AI systems"
          align="center"
        />
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onOpenLiveApp={handleOpenLiveApp}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      <ProjectLaunchDialog
        project={launchProject}
        onClose={() => setLaunchProject(null)}
      />

      <ProjectDetailsModal
        project={internalDetailProject}
        onClose={() => setInternalDetailProject(null)}
      />
    </section>
  );
}
