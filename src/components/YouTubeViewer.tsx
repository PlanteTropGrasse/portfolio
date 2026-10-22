import './YouTubeViewer.css';

function videoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^(www\.|m\.)/, '');
    const parts = parsed.pathname.split('/').filter(Boolean);
    const id = host === 'youtu.be'
      ? parts[0]
      : ['youtube.com', 'youtube-nocookie.com'].includes(host)
        ? parsed.pathname === '/watch'
          ? parsed.searchParams.get('v')
          : ['embed', 'shorts', 'live'].includes(parts[0]) ? parts[1] : null
        : null;
    return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

export default function YouTubeViewer({ url, title }: { url: string; title: string }) {
  const id = videoId(url);
  if (!id) return null;

  return (
    <div className="project-detail__section">
      <h2 className="display-sm project-detail__section-title">{title}</h2>
      <iframe
        className="youtube-viewer"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="encrypted-media; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
