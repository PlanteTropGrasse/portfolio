import { useState } from 'react';
import type { MouseEvent } from 'react';
import type { NavSection, SectionId } from '../data/types';
import { profile, socials } from '../data/portfolio';
import SocialIcon from './SocialIcon';
import './Nav.css';

type Props = {
  sections: NavSection[];
  active: SectionId;
  onNavigate: (id: SectionId) => void;
};

export default function Nav({ sections, active, onNavigate }: Props) {
  const [open, setOpen] = useState(false);

  const go = (id: SectionId) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`nav ${open ? 'nav--open' : ''}`}>
      <a className="nav__brand" href="?Page=Home" onClick={go('Home')}>
        {profile.firstName.charAt(0)}
        {profile.lastName.charAt(0)}
        <span className="nav__brand-dot" />
      </a>
      <button
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="nav__toggle-bar" />
        <span className="nav__toggle-bar" />
      </button>
      <nav id="nav-links" className="nav__links" aria-label="Sections">
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`?Page=${section.id}`}
            onClick={go(section.id)}
            className={`nav__link ${active === section.id ? 'is-active' : ''}`}
            aria-current={active === section.id ? 'page' : undefined}
          >
            <span className="mono nav__num">{String(i).padStart(2, '0')}</span>
            {section.label}
          </a>
        ))}
      </nav>
      <ul className="nav__socials">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              className="nav__social"
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              <SocialIcon icon={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
