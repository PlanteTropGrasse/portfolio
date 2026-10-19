import type { MouseEvent } from 'react';
import type { Project, SectionId } from '../data/types';
import { homeProjects, profile, projects, RECENT_PROJECTS_COUNT } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import './Hero.css';

type Props = {
  onNavigate: (id: SectionId) => void;
  onSelectProject?: (project: Project) => void;
};

export default function Hero({ onNavigate, onSelectProject }: Props) {
  const latestProjects = projects.slice(0, RECENT_PROJECTS_COUNT);

  const go = (id: SectionId) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(id);
  };

  return (
    <section id="Home" className="section hero-section">
      <div className="container recent">
        <div className="recent__meta mono">
          <span>Portfolio — {new Date().getFullYear()}</span>
          <span className="hero__status">
            <span className="hero__pulse" /> {profile.availability}
          </span>
        </div>

        <div className="recent__header reveal">
          <div className="recent__title-block">
            <h1 className="hero__title">
              {profile.firstName} <span className="hero__line--outline">{profile.lastName}</span>
            </h1>
            <p className="hero__subtitle">{profile.title}</p>
            <a className="hero__scroll hero__scroll--inline mono" href="?Page=AboutMe" onClick={go('AboutMe')}>
              <span className="hero__scroll-line" aria-hidden="true" />
              Scroll down
            </a>
          </div>
          <a className="link-arrow mono" href="?Page=Projects" onClick={go('Projects')}>
            See all projects →
          </a>
        </div>
        <div className="recent__group">
          <div className="recent__group-header reveal">
            <h2 className="display-md">{homeProjects.title}</h2>
          </div>
          <div className="project-grid">
            {latestProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
