import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorkExperience from './pages/WorkExperience';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="work"><WorkExperience /></section>
         <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
