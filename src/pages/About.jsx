// import '../assets/css/About.css';
// import { FaFileDownload, FaLaptopCode, FaBrain, FaCloud, FaMusic, FaRocket } from 'react-icons/fa';

// function About() {
//   return (
//     <div className="about-section" id="about">
//       <div className="about-content">
//         <div className="about-text">
//           <h2 className="section-header">✨ About Me</h2>

//           <p className="about-intro">
//             Hi! I’m <strong>Hansa</strong> — a curious and creative software engineer passionate about AI, data, and building thoughtful, user-focused technology.
//           </p>

//           <p className="about-detail">
//             I recently completed my Master’s in Computer Science from <strong>Virginia Tech</strong>, specializing in Data Analytics & AI. With 3+ years of full-stack experience at Infosys and a strong pivot into machine learning and cloud solutions, I love blending tech with impact.
//           </p>

//           <h3 className="about-subheading">🌟 What I bring to the table:</h3>
//           <div className="highlights-grid">
//             <div className="highlight"><FaLaptopCode /> 3+ years in Full-Stack Dev</div>
//             <div className="highlight"><FaBrain /> ML & LLM Projects at VT</div>
//             <div className="highlight"><FaCloud /> Azure Certified</div>
//             <div className="highlight"><FaRocket /> Built 10+ impactful apps</div>
//             <div className="highlight"><FaMusic /> Grade 5 Pianist (Trinity College London)</div>
//           </div>

//           <p className="about-detail">
//             I’m currently looking for a <strong>full-time role in Software Engineering, Data Engineering, or AI/ML Development</strong>. I care about clean design, ethical AI, and making tech feel a little more human ✨
//           </p>

//           <a
//             href="https://drive.google.com/file/d/1ZGZidOevXjbu1NRBobFlJWzXqrzl52dY/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="resume-button"
//           >
//             <FaFileDownload className="icon" /> View Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;


import '../assets/css/About.css';
import { FaFileDownload } from 'react-icons/fa';

function About() {
  return (
    
    <section className="about-section" id="about">

      <h2 className="section-header">🌸 About Me</h2>

      <div className="about-wrapper">
        <div className="about-block">
          <h3 className="about-subheading">👩🏻‍💻 Who I Am</h3>
          <p>
            {/* I'm <strong>Hansa</strong>, a software engineer pivoting into Data Analytics and Machine Learning with a love for bold ideas and human-first design. With 3+ years of experience at <strong>Infosys</strong> and a Master’s degree in Computer Science from <strong>Virginia Tech</strong>, I thrive where creativity meets systems thinking. */}
            I'm <strong>Hansa</strong>, a software engineer transitioning into AI/ML and data analytics, where I combine my coding background with an interest in data-driven problem-solving. I hold a Masters degree in Computer Science from <strong>Virginia Tech</strong>, specializing in Data Analytics and AI. During my studies, I received recognition for high-impact projects in real-time AI analytics. I participated in top-tier hackathons, including HooHacks and VT Hacks, where my work focused on LLM-based tools and decision support systems.
          </p>
          <p>
            {/* My career has been rooted in full-stack development, but I’ve grown passionate about ML, data analyis, and building tools that truly help people. My expertise lies in building responsive and user-friendly web interfaces, designing efficient APIs, and implementing secure and reliable back-end systems. I care about the *how* as much as the *what* — balancing technical skill with empathy, ethics, and curiosity. */}
            {/* Previously, I worked as a Full-Stack Developer at <strong>Infosys</strong> for 3 years in the Strategic Technology Group.  I led agile teams across seven product cycles, developed microservice-based applications using .NET and Google Cloud, and cut API response times by 8%. My contributions to a business lending platform earned me repeated client appreciation and the STG Excellence Award for delivering high-impact solutions. */}
            Previously, I worked as a Full-Stack Developer at <strong>Infosys</strong> for 3 years in the Strategic Technology Group. I led agile teams across seven product cycles, developed microservice-based applications using .NET and Google Cloud, and cut API response times by 8%. My contributions to a business lending platform earned me repeated client appreciation and the STG Excellence Award for delivering high-impact solutions.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-subheading">🧠 What I Do</h3>
          {/* <p>
            I build smart, scalable, and visually thoughtful solutions — from AI-powered financial chatbots to real-time healthcare dashboards. My favorite projects are the ones that bring clarity to complexity and comfort to chaos.
          </p> */}
            <p>
    I design and build intelligent systems that connect <strong>data, software, and people</strong>.
    With a foundation in full-stack development and a growing specialization in <strong>AI/ML and data Analysis</strong>, 
    I focus on crafting scalable, real-world solutions that empower users and enhance automation.
  </p>

  <ul>
    <li>🧩 <strong>Backend Systems & APIs:</strong> Microservices with Python, .NET, FastAPI, and SQL</li>
    <li>📊 <strong>Data Analytics & Visualization:</strong> Dashboards and data pipelines using Tableau, SQL, and Python</li>
    <li>🤖 <strong>AI/ML Integration:</strong> Tools powered by LLMs, LangChain, and predictive models (90% accuracy)</li>
    <li>⚙️ <strong>Cloud & DevOps:</strong> Deployment with Docker, GCP, and CI/CD best practices</li>
  </ul>

  <p>
    My work spans <strong>finance, healthcare, aviation</strong>, and <strong>enterprise tech</strong> — always focused on clarity, automation, and impact.
  </p>
          {/* <p>
            I've worked with tools like <strong>FastAPI, LangChain, React, Azure, GCP, Scikit-learn, and Tableau</strong> — always looking for the most elegant way to connect backend power with frontend experience.
          </p> */}
        </div>

        <div className="about-block">
          <h3 className="about-subheading">🚀 What I’m Looking For</h3>
          <p>
            I’m currently seeking a <strong>full-time role as a Software Engineer role with more AI/ML related tasks</strong> where I can work on high-impact systems, data pipelines, or user-facing AI products. I thrive in collaborative teams which foster open communication and are open to new ideas.
          </p>

          <p><strong>Open to:</strong></p>
<ul>
  <li>✅ Full-time roles starting <strong>June 2025</strong></li>
  <li>✅ <strong>AI/ML</strong> or <strong>Backend-focused Software Engineering</strong> positions</li>
  <li>✅ <strong>Relocation</strong></li>
</ul>
        </div>

        <div className="about-block">
          <h3 className="about-subheading">✨ Highlights</h3>
          <ul className="highlight-tags">
            <li>🌐 3+ years at Infosys (Full Stack + Cloud)</li>
            <li>🧩 FastAPI, LangChain & LLM Integration</li>
            <li>📊 Built 10+ interactive dashboards (Tableau + Plotly)</li>
            <li>☁️ Azure certified | Cloud migration experience</li>
            <li>🧠 Capstone: Real-time Surgical AI Dashboard</li>
            <li>🎹 Grade 5 Piano – Trinity College London</li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1ZGZidOevXjbu1NRBobFlJWzXqrzl52dY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <FaFileDownload className="icon" /> View My Resume
          </a>
        </div>

        {/* <div className="about-block text-center">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <FaFileDownload className="icon" /> View My Resume
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default About;
