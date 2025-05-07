// src/sections/Education.jsx
import '../assets/css/Education.css';
import Lottie from 'lottie-react';
import educationAnimation from '../assets/illustrations/educationAnimation.json';
import educationData from '../data/education';

function Education() {
  return (
    <div className="education-section">
      <h2 className="section-header">🎓 My Education</h2>
      <div className="education-content">
        <div className="lottie-wrapper">
          <Lottie animationData={educationAnimation} loop={true} className="lottie" />
        </div>

        <div className="cards-wrapper">
          {educationData.map((edu, idx) => (
            <div className="edu-card fancy" key={idx}>
              <div className="edu-header">
                <h3>{edu.degree}</h3>
                <span className="badge">{edu.school}</span>
              </div>
              <p className="edu-duration">{edu.duration}</p>
              <p className="edu-location">📍 {edu.location}</p>
              <ul>
                {edu.details.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
