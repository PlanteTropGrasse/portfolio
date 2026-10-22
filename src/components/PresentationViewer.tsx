import { useState } from 'react';
import type { Presentation } from '../data/types';
import './PresentationViewer.css';

export default function PresentationViewer({ presentation }: { presentation: Presentation }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const previewSrc = presentation.previewImage
    ? `${import.meta.env.BASE_URL}${presentation.previewImage.replace(/^\//, '')}`
    : null;

  return (
    <div className="project-detail__section">
      <h2 className="display-sm project-detail__section-title">{presentation.title}</h2>
      <div className={`presentation-viewer${status === 'loaded' ? ' presentation-viewer--loaded' : ''}${!previewSrc ? ' presentation-viewer--live' : ''}`} aria-busy={status === 'loading'}>
        {previewSrc && <img className="presentation-viewer__preview" src={previewSrc} alt={`${presentation.title} — first slide`} loading="eager" aria-hidden={status === 'loaded'} />}
        {(status === 'loading' || status === 'error') && (
          <div className="presentation-viewer__status" role="status" aria-live="polite">
            {status === 'loading' && <span className="presentation-viewer__spinner" aria-hidden="true" />}
            <span>{status === 'loading' ? 'Loading presentation…' : 'Unable to load the presentation. Please use the link below.'}</span>
          </div>
        )}
        {(status === 'loading' || status === 'loaded') && <iframe
          className="project-detail__slides"
          src={presentation.embedUrl}
          title={presentation.title}
          loading="eager"
          tabIndex={status === 'loaded' || !previewSrc ? 0 : -1}
          aria-hidden={!!previewSrc && status !== 'loaded'}
          allowFullScreen
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />}
      </div>
      <div className="project-detail__actions">
        {status === 'error' && (
          <button className="button" type="button" onClick={() => setStatus('loading')}>
            Retry loading slides
          </button>
        )}
        <a className="button" href={presentation.url} target="_blank" rel="noopener noreferrer">
          Open presentation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
