import MobileProjectCard from './MobileProjectCard';
import DesktopProjectCard from './DesktopProjectCard';
import { useContext } from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { CheckSizeContext } from '../context/checkSize.context';
import { DarkModeContext } from '../context/darkMode.context';

const Portfolio = () => {
  const smallView = useContext(CheckSizeContext);
  const [darkMode] = useContext(DarkModeContext);
  const DynamicDiv = smallView ? 'div' : motion.div;
  const DynamicP = smallView ? 'p' : motion.p;

  const mobile = projects.map((project, index) => (
    <MobileProjectCard key={project.id} {...project} index={index} />
  ));

  const desktop = projects.map((project, index) => (
    <DesktopProjectCard key={project.id} {...project} index={index} />
  ));

  return (
    <section>
      <DynamicDiv variants={textVariant(0)}>
        <p className={darkMode ? styles.sectionSubText : styles.sectionSubTextLight}>Some of my previous projects</p>
        <h2 className={darkMode ? styles.sectionHeadText : styles.sectionHeadTextLight}>
          <span className={darkMode ? 'text-orange' : 'text-blue'}>Portfolio </span>Gallery
        </h2>
      </DynamicDiv>

      <div className="w-full flex">
        <DynamicP
          variants={fadeIn('right', 'spring', 0, 0.5)}
          className={`${darkMode ? 'text-secondary' : 'text-tertiary'} mt-3 text-[17px] max-w-3xl leading-[30px] text-justify`}
        >
          I am happy to share with you a collection of projects that have been
          instrumental in shaping my journey as a front-end developer, with a
          strong emphasis on React and React Native. These projects have served
          as invaluable learning experiences, illustrating my commitment to
          continuous improvement and honing my skills.
        </DynamicP>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {smallView ? mobile : desktop}
      </div>
    </section>
  );
};

export default SectionWrapper(Portfolio, 'portfolio');
