import ExperienceCard from './ExperienceCard';
import { useContext } from 'react';
import { styles } from '../styles';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { CheckSizeContext } from '../context/checkSize.context';
import { DarkModeContext } from '../context/darkMode.context';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  const smallView = useContext(CheckSizeContext);
  const [darkMode] = useContext(DarkModeContext);
  const DynamicDiv = smallView ? 'div' : motion.div;

  return (
    <>
      <DynamicDiv
        variants={textVariant(0)}
        className={darkMode ? null : 'lightFilter'}
      >
        <p
          className={
            darkMode ? styles.sectionSubText : styles.sectionSubTextLight
          }
        >
          where have I studied so far?
        </p>
        <h2
          className={
            darkMode ? styles.sectionHeadText : styles.sectionHeadTextLight
          }
        >
          <span className="text-orange">Academic </span>History
        </h2>
      </DynamicDiv>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="#ffffff"
          animate={smallView ? false : true}
        >
          {education.map((educationPlace, index) => (
            <ExperienceCard
              key={index}
              experience={educationPlace}
              experienceSection={false}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
