import devGirl from "../assets/illustrations/devGirl.json"
import '../assets/css/Home.css';
import Lottie from 'lottie-react';
import { FaLinkedin, FaFileDownload, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-container">

      <div className="intro-card shimmer-bg">
        {/* <img src={devGirl} alt="Developer Girl" className="home-image" /> */}
        <div className="lottie-wrapper"><Lottie animationData={devGirl} /></div>
        <h1>Hi, I'm Hansa! </h1>
        <p>A passionate Software Engineer + Data Analyst</p>
        <p>I love building elegant, smart, and helpful solutions 💡</p>
      
      <div className="home-buttons">
          <a
            href="https://drive.google.com/file/d/1ZGZidOevXjbu1NRBobFlJWzXqrzl52dY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn"
          >
            <FaFileDownload className="icon" /> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/hansapradhan"
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a
            href="mailto:pradhanhansa99@gmail.com"
            className="home-btn"
          >
            <FaEnvelope className="icon" /> Email Me
          </a>
        </div>
        </div>
      <div className="section-glow">
        <p>✨ Scroll through to explore my journey ✨</p>
      </div>
    </div>
  );
}

export default Home;
