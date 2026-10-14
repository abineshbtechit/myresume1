import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import Footer from './components/Footer';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import LeetCodeSection from './components/LeetCodeSection';
import Contact from './pages/Contact';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import FloatingResumeButton from './components/FloatingResumeButton';
import { projects } from './data/projects';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeProjectDetail, setActiveProjectDetail] = useState(null);

  // Sync route params like /projects/:slug with the modal state
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/projects/') && path !== '/projects') {
      const slug = path.replace('/projects/', '').replace(/\/$/, '');
      const match = projects.find((p) => p.slug === slug);
      if (match) {
        setActiveProjectDetail(match);
      }
    } else {
      // Check legacy routes (/about, /resume, /projects, /contact) and scroll smoothly
      const section = path.replace('/', '').toLowerCase();
      if (['about', 'resume', 'tools', 'projects', 'leetcode', 'contact'].includes(section)) {
        const el = document.getElementById(section);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [location.pathname]);

  const handleOpenDetails = (project) => {
    setActiveProjectDetail(project);
    navigate(`/projects/${project.slug}`, { replace: true });
  };

  const handleCloseDetails = () => {
    setActiveProjectDetail(null);
    navigate('/', { replace: true });
  };

  return (
    <div className="app-shell">
      <div className="app-page-wrapper">
        <Navbar />
        <HeroHeader />
        <main className="main-stage">
          <About />
          <Resume />
          <Projects onViewDetails={handleOpenDetails} />
          <LeetCodeSection />
          <Contact />
        </main>
        <Footer />
      </div>

      <ProjectDetailsModal
        project={activeProjectDetail}
        onClose={handleCloseDetails}
      />

      <FloatingResumeButton />
    </div>
  );
}