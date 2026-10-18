import { education } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import './Experience.css';

export default function Education() {
  return (
    <div className="split">
      <SectionLabel index="03" label="Education" />
      <ol className="timeline">
        {education.map((item) => (
          <li className="timeline__item reveal" key={item.degree}>
            <p className="mono timeline__duration">{item.duration}</p>
            <h3 className="timeline__title">{item.degree}</h3>
            <p className="timeline__company">{item.school}</p>
            <p className="timeline__detail">{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
