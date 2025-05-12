import '../assets/css/Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="section-header">💌 Get in Touch</h2>
      <p className="contact-subtext">I'd love to connect with you!</p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>yourname@email.com</p>
        </div>

        <div className="contact-card">
          <h3>💼 LinkedIn</h3>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourprofile
          </a>
        </div>

        <div className="contact-card">
          <h3>🐙 GitHub</h3>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            github.com/yourusername
          </a>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>Northern Virginia, USA</p>
        </div>

        <div className="contact-card">
          <h3>📄 Resume</h3>
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
