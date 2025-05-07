// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar shimmer-border">
      <h1 className="logo">✨ Hansa's Portfolio ✨</h1>
      <ul className="nav-links">
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
