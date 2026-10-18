import { experiences } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import './Experience.css';

export default function Experience() {
  return (
    <div className="split">
      <SectionLabel index="04" label="Experience" />
      <ol className="timeline">
        {experiences.map((exp) => (
          <li className="timeline__item reveal" key={`${exp.company}-${exp.duration}`}>
            <p className="mono timeline__duration">{exp.duration}</p>
            <h3 className="timeline__title">{exp.title}</h3>
            <p className="timeline__company">
              {exp.company}
              {exp.project && (
                <>
                  {' '}
                  <span className="timeline__sep">/</span>{' '}
                  <span className="timeline__project">{exp.project}</span>
                </>
              )}
            </p>
            <ul className="timeline__bullets">
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
