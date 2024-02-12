import Landing from './components/Landing';
import background from './assets/background.png';
import About from './components/About';
import Nav from './components/Nav';
import Speakers from './components/Speakers';
import { useEffect, useState } from 'react';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import CTF from './components/CTF';
import SSS from './components/SSS';

function App() {
  const [sections, setSections] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  useEffect(() => {
    if (sections.length > 0) return;
    document.querySelectorAll('section').forEach((section) => {
      setSections((prev) => [...prev, section]);
    });
  }, []);

  useEffect(() => {
    if (sections.length === 0) return;
    let total = 0;
    for (let i = 0; i < sections.length; i++) {
      total += sections[i].clientHeight;
    }

    setTotalLength(total);
  }, [sections]);

  console.log(totalLength);

  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    sections[currentSection]?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return (
    <div className='App h-[100dvh] relative snap-proximity snap-y overflow-y-scroll overflow-x-hidden'>
      <div
        style={{
          backgroundImage: `url('${background}')`,
          height: totalLength + 200,
        }}
        className='absolute -z-10 w-screen bg-cover'
      ></div>
      <Nav setCurrentSection={setCurrentSection} />
      <Landing />
      <About />
      <Speakers />
      <Sponsors />
      <CTF />
      <SSS />
      <Footer />
    </div>
  );
}

export default App;
