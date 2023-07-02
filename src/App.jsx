import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Portfolio,
  Education,
} from "./components";
import { CheckSizeContextProvider } from "./context/checkSize.context";

const App = () => {
  return (
    <BrowserRouter>
      <CheckSizeContextProvider>
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
      </CheckSizeContextProvider>
    </BrowserRouter>
  );
};

export default App;
