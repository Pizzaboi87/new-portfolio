import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Tech,
  Portfolio,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Portfolio />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
