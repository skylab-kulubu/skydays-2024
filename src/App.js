import Landing from './components/Landing';
import background from './assets/background.png';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div className='App h-[100dvh] relative snap-mandatory snap-y overflow-y-scroll overflow-x-hidden'>
      <div
        style={{ backgroundImage: `url('${background}')` }}
        className='absolute h-[400vh] -z-10 w-screen bg-cover '
      ></div>
      <Nav />
      <Landing />
      <About />
    </div>
  );
}

export default App;
