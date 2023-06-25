import { motion } from "framer-motion";
import { styles } from "../styles";
import { AtAtCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff8d00]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ff8d00]">Peter</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a junior front-end <br className="sm:block hidden" />
            developer from Hungary.
          </p>
        </div>
      </div>
      <div className="md:w-[80%] md:h-full md:mt-12 right-0 mt-28 w-full h-[80%] absolute">
        <AtAtCanvas />
      </div>
    </section>
  );
};

export default Hero;
