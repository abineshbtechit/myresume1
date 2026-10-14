import { Cloud, Code2, Smartphone, Cpu } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: Code2,
    title: 'Python Backend Development',
    description: 'Building secure, high-throughput, and maintainable REST APIs using Flask, FastAPI, and modular architecture.',
  },
  {
    icon: Smartphone,
    title: 'Frontend & Mobile Engineering',
    description: 'Crafting responsive, performance-driven web interfaces with React and cross-platform native apps with Flutter.',
  },
  {
    icon: Cpu,
    title: 'AI & Applied Machine Learning',
    description: 'Integrating computer vision, transformers, NLP, predictive algorithms, and intelligent automation into production systems.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Deploying robust containerized applications via AWS, Render, Vercel, Nginx, PostgreSQL, and CI/CD pipelines.',
  },
];

export default function About() {
  return (
    <section id="about" className="portfolio-section about-section">
      <div className="section-heading-wrap section-heading-wrap--center">
        <SectionTitle
          eyebrow="CORE CAPABILITIES"
          title="What I Do"
          subtitle="Specialized in building full-stack platforms, scalable APIs, and applied AI systems"
          align="center"
        />
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}