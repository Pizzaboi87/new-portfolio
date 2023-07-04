import { useContext } from 'react';
import { DarkModeContext } from '../context';
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Portfolio,
  Footer,
  History,
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
        <History />
        <Tech />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
