import Landing from './components/Landing';
import background from './assets/background.png';
import About from './components/About';
import Nav from './components/Nav';
import Speakers from './components/Speakers';
import { useEffect, useState } from 'react';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import CTF from './components/CTF';

function App() {
  const sections = [];
  document.querySelectorAll('section').forEach((section) => {
    sections.push(section);
  });

  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    sections[currentSection]?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return (
    <div className='App h-[100dvh] relative snap-proximity snap-y overflow-y-scroll overflow-x-hidden'>
      <div
        style={{ backgroundImage: `url('${background}')` }}
        className='absolute h-[580dvh] -z-10 w-screen bg-cover '
      ></div>
      <Nav setCurrentSection={setCurrentSection} />
      <Landing />
      <About />
      <Speakers />
      <Sponsors />
      <CTF />
      <Footer />
    </div>
  );
}

export default App;
