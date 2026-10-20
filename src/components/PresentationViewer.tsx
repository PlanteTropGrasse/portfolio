import { useState } from 'react';
import type { Presentation } from '../data/types';
import './PresentationViewer.css';

export default function PresentationViewer({ presentation }: { presentation: Presentation }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className="project-detail__section">
      <h2 className="display-sm project-detail__section-title">{presentation.title}</h2>
      <div className="presentation-viewer" aria-busy={status === 'loading'}>
        {status !== 'loaded' && (
          <div className="presentation-viewer__status" role="status" aria-live="polite">
            {status === 'loading' && <span className="presentation-viewer__spinner" aria-hidden="true" />}
            <span>{status === 'loading' ? 'Loading presentation…' : 'Unable to load the presentation. Please use the link below.'}</span>
          </div>
        )}
        <iframe
          className="project-detail__slides"
          src={presentation.embedUrl}
          title={presentation.title}
          loading="lazy"
          allowFullScreen
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
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
