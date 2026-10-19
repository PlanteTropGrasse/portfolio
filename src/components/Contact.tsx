import { contact, profile } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const channels = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'LinkedIn', value: contact.linkedin.label, href: contact.linkedin.url },
  ];

  return (
    <footer className="contact">
      <div className="container">
        <p className="label reveal">Contact</p>
        <h2 className="contact__title reveal">
          Let's make <br />
          something <span className="accent-outline">playable.</span>
        </h2>
        <ul className="contact__list">
          {channels.map((channel) => (
            <li className="reveal" key={channel.label}>
              <a
                className="contact__link"
                href={channel.href}
                {...(channel.label === 'LinkedIn' ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="mono contact__kind">{channel.label}</span>
                <span className="contact__value">{channel.value}</span>
                <span className="contact__arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="contact__footer mono">
          <span>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          </span>
          <span>{profile.title}</span>
        </div>
      </div>
    </footer>
  );
}
