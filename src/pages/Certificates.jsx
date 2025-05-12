import '../assets/css/Certificates.css';
import certificates from '../data/certificates';

function Certificates() {
  return (
    <div className="certificates-section">
      <h2 className="section-header">🎓 Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
            <div className="certificate-card" key={idx}>
  <div className="certificate-top">
    {cert.logo && (
      <img src={cert.logo} alt={cert.issuer} className="certificate-logo" />
    )}
    {cert.image && (
      <img src={cert.image} alt={cert.title} className="certificate-image" />
    )}
  </div>
  <div className="certificate-info">
    <h3>🎀 {cert.title}</h3>
    <p className="issuer">🏛️ {cert.issuer}</p>
    <p className="date">📅 {cert.date}</p>
    {cert.link && (
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        View Credential
      </a>
    )}
  </div>
</div>

        ))}
      </div>
    </div>
  );
}

export default Certificates;
