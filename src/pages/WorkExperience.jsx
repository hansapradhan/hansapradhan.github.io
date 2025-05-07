// // src/pages/WorkExperience.jsx
// import '../assets/css/WorkExperience.css';
// import workData from '../data/work'; // Modular data import

// function WorkExperience() {
//   return (
//     <div className="work-container">
//       <h2 className="section-title">💼 My Work Experience</h2>
//       <div className="timeline">
//         {workData.map((job, index) => (
//           <div className="timeline-item" key={index}>
//             <div className="timeline-dot shimmer-dot" />
//             <div className="timeline-content">
//               <h3>{job.role} @ {job.company}</h3>
//               <p className="date">{job.duration}</p>
//               <ul>
//                 {job.responsibilities.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WorkExperience;



// src/sections/WorkExperience.jsx
import '../assets/css/WorkExperience.css';
import { FaCode, FaChartBar } from 'react-icons/fa';
import Lottie from 'lottie-react';
import workAnimation from '../assets/illustrations/workAnimation.json';
import workData from '../data/work';

const iconMap = {
  code: <FaCode />,
  chart: <FaChartBar />
};

function WorkExperience() {
  return (
        <div className="work-container">
      <h2 className="section-header">💼 My Work Experience</h2>
<div className="work-wrapper">
  <div className="lottie-wrapper-work">
    <Lottie animationData={workAnimation} loop={true} className="lottie" />
  </div>
  <div className="timeline">
    {workData.map((job, idx) => (
      <div className="work-card" key={idx}>
        <div className="icon-circle">{iconMap[job.icon]}</div>
        <div className="card-content">
          <h3>{job.role} @ {job.company}</h3>
          <p className="date">{job.duration}</p>
          <p className="location">📍 {job.location}</p>
          <ul>
            {job.responsibilities.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>
</div>

  );
}

export default WorkExperience;
