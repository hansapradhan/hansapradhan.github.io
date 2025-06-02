import '../assets/css/Contact.css';
import Lottie from 'lottie-react';
import contactAnimation from '../assets/illustrations/sendMessage.json';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-hero-section">
      <div className="contact-left">
        <Lottie animationData={contactAnimation} loop={true} className="contact-lottie" />
      </div>

      <div className="contact-right">
       <h2 className="section-header">🌷 Let's Connect</h2>
      <p className="contact-subtext">I'm always open to new opportunities and conversations!</p>

        <div className="contact-info">  
          <div><FaEnvelope className="icon" /> pradhan.hansa@email.com</div>
          <div><FaLinkedin className="icon" /> <a href="https://linkedin.com/in/hansapradhan">linkedin.com/in/hansapradhan</a></div>
          <div><FaGithub className="icon" /> <a href="https://github.com/hansapradhan">github.com/hansapradhan</a></div>
          {/* <div><FaMapMarkerAlt className="icon" /> Northern Virginia, USA</div> */}
          <div><FaFileDownload className="icon" /> <a href="https://drive.google.com/file/d/1ZGZidOevXjbu1NRBobFlJWzXqrzl52dY/view?usp=sharing"  target="_blank" rel="noopener noreferrer">Download Resume</a></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
