import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, image }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full yellow-purple-gradient p-[1px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={image} alt={title} className="object-contain" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        I am a self-taught front-end developer with growing experience in React
        development, who gained proficiency in JavaScript, TypeScript, React
        Native, Firebase, and currently learning C# and Unity Game Engine as
        well. I enjoy creating visually appealing, user-friendly, and responsive
        web pages and applications. My humility helps me stay open to learning,
        while passion ensures my enthusiasm and motivation. Effective
        communication is crucial for me to understand expectations, accept
        feedback and collaborate with others.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
