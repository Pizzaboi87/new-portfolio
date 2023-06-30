import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

const ProjectCard = ({ name }) => {
  return <p>{name}</p>;
};

const Portfolio = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some of my previous projects</p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-orange">Portfolio </span>Gallery
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          I am happy to share with you a collection of projects that have been
          instrumental in shaping my journey as a front-end developer, with a
          strong emphasis on React and React Native. These projects have served
          as invaluable learning experiences, illustrating my commitment to
          continuous improvement and honing my skills.
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.name}-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Portfolio, 'portfolio');
