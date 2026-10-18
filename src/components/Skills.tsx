import { secondarySkills, skills } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import './Skills.css';

export default function Skills() {
  return (
    <div className="skills">
      <SectionLabel index="02" label="Skills" />
      <div>
        <ol className="skills__list">
          {skills.map((skill, i) => (
            <li className="skills__item reveal" key={skill.name}>
              <span className="mono skills__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="skills__name">{skill.name}</span>
              <span className="skills__detail">{skill.detail}</span>
            </li>
          ))}
        </ol>

        <div className="skills__secondary reveal">
          <h3 className="label">Beyond game design</h3>
          <ul className="chips chips--lg">
            {secondarySkills.map((skill) => (
              <li className="chip" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
