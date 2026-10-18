import type { MouseEvent } from 'react';
import type { SectionId } from '../data/types';
import { profile, projectCategories, projects, RECENT_PROJECTS_COUNT } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import './Hero.css';

type Props = {
  onNavigate: (id: SectionId) => void;
};

export default function Hero({ onNavigate }: Props) {
  const groups = projectCategories.map((category) => ({
    ...category,
    items: projects.filter((p) => p.category === category.id).slice(0, RECENT_PROJECTS_COUNT),
  }));

  const go = (id: SectionId) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(id);
  };

  return (
    <section id="Home" className="section hero-section">
      <div className="container recent">
        <div className="recent__header reveal">
          <h1 className="hero__title">
            {profile.firstName} <span className="hero__line--outline">{profile.lastName}</span>
          </h1>
          <p className="hero__subtitle">{profile.title}</p>
          <a className="link-arrow mono" href="?Page=Projects" onClick={go('Projects')}>
            See all projects →
          </a>
        </div>
        {groups.map((group) => (
          <div className="recent__group" key={group.id}>
            <div className="recent__group-header reveal">
              <h2 className="display-md">{group.id}</h2>
              <p className="mono recent__blurb">{group.blurb}</p>
            </div>
            <div className="project-grid">
              {group.items.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hero hero--intro">
        <div className="hero__meta mono">
          <span>Portfolio — {new Date().getFullYear()}</span>
          <span>{profile.location}</span>
          <span className="hero__status">
            <span className="hero__pulse" /> {profile.availability}
          </span>
        </div>

        <div className="hero__bottom">
          <div>
            <a className="button" href="?Page=AboutMe" onClick={go('AboutMe')}>
              About me <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="hero__tagline">
            Junior / freelance game designer at <strong>{profile.currentStudio}</strong>, with{' '}
            <strong>{profile.yearsOfExperience} years</strong> of experience and{' '}
            <strong>{profile.shippedTitles} shipped titles</strong>. I build readable systems, sharp
            levels and playful prototypes.
          </p>
        </div>

        <a className="hero__scroll mono" href="?Page=AboutMe" onClick={go('AboutMe')}>
          <span className="hero__scroll-line" aria-hidden="true" />
          Scroll down
        </a>
      </div>

    </section>
  );
}
