// src/sections/Skills.jsx
import '../assets/css/Skills.css';
import skills from '../data/skills';

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="section-header">💡 Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <div key={idx} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-grid">
              {skillList.map((skill, i) => (
                <span key={i} className="skill-bubble">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
