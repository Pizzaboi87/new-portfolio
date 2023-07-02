import MobileProjectCard from "./MobileProjectCard";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Portfolio = () => {
  return (
    <section>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Some of my previous projects</p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-orange">Portfolio </span>Gallery
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("right", "spring", 0, 0.5)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          I am happy to share with you a collection of projects that have been
          instrumental in shaping my journey as a front-end developer, with a
          strong emphasis on React and React Native. These projects have served
          as invaluable learning experiences, illustrating my commitment to
          continuous improvement and honing my skills.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <MobileProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
