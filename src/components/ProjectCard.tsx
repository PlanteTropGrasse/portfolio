import type { Project } from '../data/types';
import './ProjectCard.css';

type Props = {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
};

const badgeModifier = (category: Project['category']) =>
  category.toLowerCase().replace(/\s+/g, '-');

export default function ProjectCard({ project, index, onSelect }: Props) {
  const imageSrc = project.image.startsWith('/')
    ? `${import.meta.env.BASE_URL}${project.image.slice(1)}`
    : project.image;

  const handleClick = () => {
    onSelect?.(project);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect?.(project);
    }
  };

  return (
    <article
      className={`project-card reveal ${onSelect ? 'project-card--interactive' : ''}`}
      tabIndex={0}
      role={onSelect ? 'button' : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="project-card__media">
        <img src={imageSrc} alt={project.imageAlt} loading="lazy" />
        <div className="project-card__overlay">
          <p className="project-card__desc">{project.description}</p>
          <ul className="chips" aria-label="Role and tags">
            <li className="chip chip--role">{project.role}</li>
            {project.tags.map((tag) => (
              <li className="chip" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          {onSelect && (
            <span className="project-card__cta mono">
              View project details →
            </span>
          )}
        </div>
      </div>
      <div className="project-card__body">
        <header className="project-card__top">
          <span className={`badge badge--${badgeModifier(project.category)}`}>
            {project.category}
          </span>
          <span className="mono project-card__index">{String(index + 1).padStart(2, '0')}</span>
        </header>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="mono project-card__duration">{project.duration}</p>
      </div>
    </article>
  );
}
