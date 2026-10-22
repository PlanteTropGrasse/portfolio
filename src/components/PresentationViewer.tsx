import type { Presentation } from '../data/types';
import './PresentationViewer.css';

export default function PresentationViewer({ presentation }: { presentation: Presentation }) {
  return (
    <div className="project-detail__section">
      <h2 className="display-sm project-detail__section-title">{presentation.title}</h2>
      <div className="presentation-viewer">
        <iframe
          className="project-detail__slides"
          src={presentation.embedUrl}
          title={presentation.title}
          loading="eager"
          allowFullScreen
        />
      </div>
      <div className="project-detail__actions">
        <a className="button" href={presentation.url} target="_blank" rel="noopener noreferrer">
          Open presentation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
