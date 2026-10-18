import type { Project } from '../data/types';
import './ProjectDetail.css';

type Props = {
  project: Project;
  onBack: () => void;
};

const badgeModifier = (category: Project['category']) =>
  category.toLowerCase().replace(/\s+/g, '-');

export default function ProjectDetail({ project, onBack }: Props) {
  const imageSrc = project.image.startsWith('/')
    ? `${import.meta.env.BASE_URL}${project.image.slice(1)}`
    : project.image;

  return (
    <article className="project-detail">
      <div className="container">
        <nav className="project-detail__nav">
          <button type="button" className="project-detail__back mono" onClick={onBack}>
            <span aria-hidden="true">←</span> Back to projects
          </button>
        </nav>

        <header className="project-detail__header">
          <div className="project-detail__meta">
            <span className={`badge badge--${badgeModifier(project.category)}`}>
              {project.category}
            </span>
            <span className="mono project-detail__duration">{project.duration}</span>
            <span className="chip chip--role">{project.role}</span>
          </div>

          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__pitch">{project.description}</p>

          <ul className="chips project-detail__tags" aria-label="Tags">
            {project.tags.map((tag) => (
              <li className="chip" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div className="project-detail__media-wrapper">
          <img
            src={imageSrc}
            alt={project.imageAlt}
            className="project-detail__main-image"
          />
        </div>

        <section className="project-detail__content">
          {project.longDescription && project.longDescription.length > 0 && (
            <div className="project-detail__section">
              <h2 className="display-sm project-detail__section-title">Overview & Concept</h2>
              <div className="project-detail__paragraphs">
                {project.longDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <div className="project-detail__section">
              <h2 className="display-sm project-detail__section-title">Key Contributions & Systems</h2>
              <ul className="project-detail__highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="project-detail__bullet" aria-hidden="true">✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.linkUrl && (
            <div className="project-detail__actions">
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                {project.linkLabel ?? 'View Project'} <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </section>

        <footer className="project-detail__footer">
          <button type="button" className="button button--ghost" onClick={onBack}>
            ← Back to all projects
          </button>
        </footer>
      </div>
    </article>
  );
}
