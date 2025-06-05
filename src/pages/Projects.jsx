import '../assets/css/Projects.css';
import projects from '../data/projects';

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-header">🌸 Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              {project.institute && <p className="project-institute">🏛️ {project.institute}</p>}
              <p className="project-date">📅 {project.date}</p>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="buttons">
                {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                    ) : (
                    <span className="btn disabled-btn" title="Demo not available">🔒 Private</span>)}

                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>)}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
