import type { Project } from '../data/types';
import PresentationViewer from './PresentationViewer';
import YouTubeViewer from './YouTubeViewer';
import './ProjectDetail.css';

type Props = {
  project: Project;
  onBack: () => void;
};

const badgeModifier = (category: Project['category']) =>
  category.toLowerCase().replace(/\s+/g, '-');

const mediaSrc = (src: string) => src.startsWith('/')
  ? `${import.meta.env.BASE_URL}${src.slice(1)}`
  : src;

export default function ProjectDetail({ project, onBack }: Props) {
  const imageSrc = mediaSrc(project.image);
  const featuredVideo = project.links?.find((link) => link.featuredVideo);
  const featuredTrailer = project.trailer?.featured ? project.trailer : null;
  const mediaGroups = [
    { title: 'Videos', items: project.media?.filter((item) => item.type === 'video') ?? [] },
    { title: 'Photo Gallery', items: project.media?.filter((item) => item.type === 'image') ?? [] },
  ].filter((group) => group.items.length > 0);

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

        <div className={`project-detail__media-wrapper${featuredVideo || featuredTrailer ? ' project-detail__media-wrapper--video' : ''}`}>
          {featuredTrailer ? (
            <video controls playsInline preload="none" poster={mediaSrc(featuredTrailer.poster)} aria-label={featuredTrailer.title}>
              <source src={mediaSrc(featuredTrailer.src)} type="video/mp4" />
              <a href={mediaSrc(featuredTrailer.src)}>Download the trailer</a>
            </video>
          ) : featuredVideo ? (
            <YouTubeViewer url={featuredVideo.url} title={featuredVideo.label} featured />
          ) : <img
            src={imageSrc}
            alt={project.imageAlt}
            className="project-detail__main-image"
          />}
        </div>

        <section className="project-detail__content">
          {(project.medium || project.context) && (
            <div className="project-detail__section">
              <h2 className="display-sm project-detail__section-title">Project Context</h2>
              <div className="project-detail__paragraphs">
                {project.medium && <p className="project-detail__medium">{project.medium}</p>}
                {project.context && <p>{project.context}</p>}
              </div>
            </div>
          )}
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
              <h2 className="display-sm project-detail__section-title">My Contributions</h2>
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

          {project.presentations?.map((presentation) => (
            <PresentationViewer key={presentation.embedUrl} presentation={presentation} />
          ))}

          {project.trailer && !featuredTrailer && (
            <div className="project-detail__section">
              <h2 className="display-sm project-detail__section-title">{project.trailer.title}</h2>
              <div className="project-detail__gallery">
                <video controls playsInline preload="none" poster={mediaSrc(project.trailer.poster)} aria-label={project.trailer.title}>
                  <source src={mediaSrc(project.trailer.src)} type="video/mp4" />
                  <a href={mediaSrc(project.trailer.src)}>Download the trailer</a>
                </video>
              </div>
            </div>
          )}

          {project.team && project.team.length > 0 && (
            <div className="project-detail__section">
              <h2 className="display-sm project-detail__section-title">Team & Credits</h2>
              <ul className="project-detail__team">
                {project.team.map((member) => (
                  <li key={member.name}>
                    <strong>{member.url
                      ? <a href={member.url} target="_blank" rel="noopener noreferrer">{member.name}</a>
                      : member.name}</strong>
                    <span>{member.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.links?.filter((link) => link !== featuredVideo).map((link) => (
            <YouTubeViewer key={link.url} url={link.url} title={link.label} />
          ))}
          {project.linkUrl && <YouTubeViewer url={project.linkUrl} title={project.linkLabel ?? project.title} />}

          {mediaGroups.map((group) => (
            <div className="project-detail__section" key={group.title}>
              <h2 className="display-sm project-detail__section-title">{group.title}</h2>
              <div className="project-detail__gallery">
                {group.items.map((item) => (
                  <figure key={item.src}>
                    {item.type === 'video' ? (
                      <video controls playsInline preload="none" poster={item.poster && mediaSrc(item.poster)} aria-label={item.alt}>
                        <source src={mediaSrc(item.src)} type="video/mp4" />
                        <a href={mediaSrc(item.src)}>Watch the video</a>
                      </video>
                    ) : (
                      <a href={mediaSrc(item.src)} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${item.alt}`}>
                        <img src={mediaSrc(item.src)} alt={item.alt} loading="lazy" decoding="async" />
                      </a>
                    )}
                    {item.caption && <figcaption>{item.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          ))}

          {project.links && project.links.length > 0 && (
            <div className="project-detail__section">
              <h2 className="display-sm project-detail__section-title">Play & Resources</h2>
              <div className="project-detail__actions">
                {project.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="button">
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.credits && <p className="mono project-detail__credits">{project.credits}</p>}

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
