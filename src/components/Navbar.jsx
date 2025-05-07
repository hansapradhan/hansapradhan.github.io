// src/components/Navbar.jsx
import '../assets/css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar shimmer-border">
      <h1 className="logo">✨ Hansa's Portfolio ✨</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

