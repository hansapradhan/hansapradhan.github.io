// // src/sections/Skills.jsx
// import '../assets/css/Skills.css';
// import skills from '../data/skills';

// function Skills() {
//   return (
//     <div className="skills-section">
//       <h2 className="section-header">💡 Skills</h2>
//       <div className="skills-container">
//         {Object.entries(skills).map(([category, skillList], idx) => (
//           <div key={idx} className="skill-category">
//             <h3>{category}</h3>
//             <div className="skill-grid">
//               {skillList.map((skill, i) => (
//                 <span key={i} className="skill-bubble">{skill}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Skills;

// ------------------------------------------------
// // src/sections/Skills.jsx
// import '../assets/css/Skills.css';
// import skills from '../data/skills';

// function Skills() {
//   return (
//     <div className="skills-section">
//       <h2 className="section-header">🧠 My Magical Skill Set</h2>
//       <p className="section-subtext">Hover to see them shimmer ✨</p>

//       <div className="skills-bubble-container">
//         {Object.entries(skills).map(([category, skillList], idx) => (
//           <div key={idx} className="bubble-category">
//             <h3>{category}</h3>
//             <div className="bubble-grid">
//               {skillList.map((skill, i) => (
//                 <span key={i} className="bubble animate-bubble">{skill}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Skills;

// ------------------------------------
// src/sections/Skills.jsx
import '../assets/css/Skills.css';
import skills from '../data/skills';
import skillDetails from '../data/skillDetails';
import { useState } from 'react';
import Lottie from 'lottie-react';
import skillsAnimation from '../assets/illustrations/skillsAnimation.json';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    // <div className="skills-section">
    //   <h2 className="section-header">🧠 Skill Set</h2>
    //   <p className="section-subtext">Hover over a skill to see what it does ✨</p>
    //   <div className="skills-animation-wrapper">
    //     <Lottie animationData={skillsAnimation} loop={true} className="skills-lottie" />
    //   </div>
    //   <div className="skills-bubble-container">
    //     {Object.entries(skills).map(([category, skillList], idx) => (
    //       <div key={idx} className="bubble-category">
    //         <h3>{category}</h3>
    //         <div className="bubble-grid">
    //           {skillList.map((skill, i) => (
    //             <div
    //               key={i}
    //               className="bubble-wrapper"
    //               onMouseEnter={() => setHoveredSkill(skill)}
    //               onMouseLeave={() => setHoveredSkill(null)}
    //             >
    //               <span className="bubble animate-bubble">{skill}</span>

    //               {hoveredSkill === skill && skillDetails[skill] && (
    //                 <div className="tooltip-bubble">{skillDetails[skill]}</div>
    //               )}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="skills-section">
    <h2 className="section-header">🧠 Skill Set</h2>
    <p className="section-subtext">Hover over a skill to see what it does ✨</p>

    <div className="skills-flex-wrapper">
      <div className="skills-bubble-container">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <div key={idx} className="bubble-category">
            <h3>{category}</h3>
            <div className="bubble-grid">
              {skillList.map((skill, i) => (
                <div
                  key={i}
                  className="bubble-wrapper"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className="bubble animate-bubble">{skill}</span>
                  {hoveredSkill === skill && skillDetails[skill] && (
                    <div className="tooltip-bubble">{skillDetails[skill]}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-animation-wrapper side">
        <Lottie animationData={skillsAnimation} loop={true} className="skills-lottie" />
      </div>
    </div>
  </div>
  );
}

export default Skills;

