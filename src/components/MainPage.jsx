import { useContext } from 'react';
import { DarkModeContext } from '../context/darkMode.context';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Portfolio,
  Education,
  Footer,
} from './';

const MainPage = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <>
      <div
        className={`relative z-0 bg-primary overflow-x-hidden ${
          darkMode ? null : 'invert hue-rotate-[120deg]'
        }`}
      >
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
      <Footer />
    </>
  );
};

export default MainPage;
