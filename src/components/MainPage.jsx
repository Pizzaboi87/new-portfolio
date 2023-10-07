import { useContext } from "react";
import { DarkModeContext } from "../context";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Portfolio,
  Footer,
  History,
} from "./";

const MainPage = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-primary" : "bg-primaryLight"
      } relative z-0 overflow-x-hidden`}
    >
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <History />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
