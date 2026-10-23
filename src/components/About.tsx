import { about } from '../data/portfolio';
import MarqueeBanner from './MarqueeBanner';
import SectionLabel from './SectionLabel';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import './About.css';

export default function About() {
  return (
    <section id="AboutMe" className="section">
      <MarqueeBanner text="About me" reverse />
      <div className="container">
        <div className="about">
          <SectionLabel index="01" label="About" />
          <div className="about__body">
            <h2 className="about__lead reveal">{about.lead}</h2>
            {about.paragraphs.map((paragraph) => (
              <p className="about__text reveal" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <Skills />
        <Education />
      </div>
      <Contact />
    </section>
  );
}
