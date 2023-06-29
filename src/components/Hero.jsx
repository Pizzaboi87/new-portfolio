import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { styles } from "../styles";
import { AtAtCanvas } from "./canvas";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
      <div
        ref={ref}
        className="md:w-[80%] md:h-full md:mt-12 right-0 mt-28 w-full h-[80%] absolute"
      >
        {isInView && <AtAtCanvas />}
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full pr-6 flex justify-end items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-orange flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-orange mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
