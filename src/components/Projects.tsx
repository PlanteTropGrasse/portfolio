import { useMemo, useState } from 'react';
import type { Project, ProjectCategory } from '../data/types';
import { projectCategories, projects } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import MarqueeBanner from './MarqueeBanner';
import ProjectCard from './ProjectCard';
import './Projects.css';

const filters = projectCategories.map((category) => category.id);

type Props = {
  onSelectProject?: (project: Project) => void;
};

export default function Projects({ onSelectProject }: Props) {
  const [filter, setFilter] = useState<ProjectCategory>(filters[0]);
  const visible = useMemo(
    () => projects.filter((p) => p.category === filter),
    [filter],
  );
  useReveal([filter]);

  return (
    <section id="Projects" className="section">
      <MarqueeBanner text="Projects" />
      <div className="container">
        <div className="projects__header reveal">
          <h2 className="display-lg">
            Selected <br />
            work<span className="accent">.</span>
          </h2>
          <p className="projects__intro">
            {projects.length} projects across released games, school productions and game jam
            prototypes. Each one taught me meaningful lessons.
          </p>
        </div>

        <div className="filters reveal" role="group" aria-label="Filter projects by category">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter ${filter === f ? 'is-active' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="mono filter__count">
                {projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
