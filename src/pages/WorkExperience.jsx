// src/pages/WorkExperience.jsx
import '../assets/css/WorkExperience.css';
import workData from '../data/work'; // Modular data import

function WorkExperience() {
  return (
    <div className="work-container">
      <h2 className="section-title">💼 My Work Experience</h2>
      <div className="timeline">
        {workData.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot shimmer-dot" />
            <div className="timeline-content">
              <h3>{job.role} @ {job.company}</h3>
              <p className="date">{job.duration}</p>
              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
