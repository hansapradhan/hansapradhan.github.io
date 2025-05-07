// src/pages/Home.jsx
// import './Home.css';
// import devGirl from '../assets/illustrations/dev-girl.png'; // Add an illustration you like here
// import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import devGirl from "../assets/illustrations/devGirl.json"
import '../assets/css/Home.css';
import Lottie from 'lottie-react';
function Home() {
  return (
    <div className="home-container">

      <div className="intro-card shimmer-bg">
        {/* <img src={devGirl} alt="Developer Girl" className="home-image" /> */}
        <div className="lottie-wrapper"><Lottie animationData={devGirl} /></div>
        <h1>Hi, I'm Hansa! </h1>
        <p>A passionate Software Engineer + Data Analyst</p>
        <p>I love building elegant, smart, and helpful solutions 💡</p>
      </div>

      <div className="section-glow">
        <p>✨ Scroll through to explore my journey ✨</p>
      </div>
    </div>
  );
}

export default Home;
