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
      <Navbar />
      <div
        className={`${
          darkMode ? 'bg-primary' : 'bg-primaryLight'
        } relative z-0 overflow-x-hidden`}
      >
        <div
          className={`${
            darkMode ? 'hero__dark' : 'hero__light'
          } bg-cover bg-no-repeat bg-center`}
        >
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
