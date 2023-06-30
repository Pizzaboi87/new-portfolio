import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { Icon } from '@iconify/react';

const MobileProjectCard = ({
  index,
  id,
  title,
  alt,
  link,
  github,
  cover,
  youTube,
  details,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        max={45}
        scale={1}
        speed={450}
        glareEnable
        glarePosition="bottom"
        glareColor="#ffffff"
        className="bg-tertiary p-5 sm:w-[360px] w-full min-h-[530px]"
      >
        <div className="relative w-full h-[230px]">
          <img src={cover} alt={alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex justify-start m-3">
            <div
              onClick={() => window.open(link, '_blank')}
              className="yellow-purple-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10"
            >
              <Icon icon="vaadin:eye" style={{ fontSize: '2rem' }} />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(github, '_blank')}
              className="yellow-purple-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10"
            >
              <Icon icon="mdi:github" style={{ fontSize: '2rem' }} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px] text-justify">
            {details}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
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

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <MobileProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Portfolio, 'portfolio');
