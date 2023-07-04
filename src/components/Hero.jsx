import { useRef, useContext } from "react";
import { motion, useInView } from "framer-motion";
import { styles } from "../styles";
import { CanvasWrapper, AtAtModel } from "./canvas";
import { CheckSizeContext, DarkModeContext } from "../context";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [darkMode] = useContext(DarkModeContext);
  const smallView = useContext(CheckSizeContext);

  return (
    <section
      className={`${
        darkMode ? "hero__dark" : "hero__light"
      } bg-cover bg-no-repeat bg-center relative w-full h-screen mx-auto grid`}
    >
      <div className="top-0 w-full h-[320px] absolute z-10" />
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className={`${
              darkMode ? "bg-[#ff8d00]" : "bg-[#58a9ff]"
            } w-5 h-5 rounded-full`}
          />
          <div
            className={`${
              darkMode ? "orange-gradient" : "blue-gradient"
            } w-1 sm:h-80 h-40`}
          />
        </div>
        <div>
          <h1
            className={
              darkMode ? styles.heroHeadText : styles.heroHeadTextLight
            }
          >
            Hi, I'm{" "}
            <span className={darkMode ? "text-orange" : "text-blue"}>
              Peter
            </span>
          </h1>
          <p
            className={`${
              darkMode ? styles.heroSubText : styles.heroSubTextLight
            } mt-2`}
          >
            I'm a junior front-end <br className="sm:block hidden" />
            developer from Hungary.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="justify-self-end md:h-full md:mt-12 right-0 mt-28 w-full h-[80%] relative overflow-hidden"
      >
        {isInView && (
          <CanvasWrapper rotate={true}>
            <AtAtModel smallView={smallView} />
          </CanvasWrapper>
        )}
      </div>
      <div
        className={`${
          smallView
            ? "bottom-20 justify-center p-0"
            : "bottom-5 justify-end pr-6"
        } absolute w-full flex items-center`}
      >
        <a className="cursor-pointer z-10" href="#about">
          <div
            className={`${
              darkMode ? "border-orange" : "border-blue"
            } w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2`}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`${
                darkMode ? "bg-orange" : "bg-blue"
              } w-3 h-3 rounded-full mb-1`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
