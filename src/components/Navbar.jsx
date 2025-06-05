// // src/components/Navbar.jsx
// import '../assets/css/Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar shimmer-border">
//       <h1 className="logo">✨ Hansa's Portfolio ✨</h1>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#work">Work</a></li>
//         <li><a href="#education">Education</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#certificates">Certificates</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import { useState, useEffect } from 'react';
import '../assets/css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar shimmer-border">
      <h1 className="logo">✨ Hansa's Portfolio ✨</h1>

      <div className="nav-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={` ${menuOpen ? 'nav-links mobile-open' : 'mobile-close'}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#work" onClick={closeMenu}>Work</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


