import { useContext } from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { CheckSizeContext } from '../context/checkSize.context';
import { DarkModeContext } from '../context/darkMode.context';

const SectionText = ({ sub, titleFirst, titleSec, text }) => {
  const smallView = useContext(CheckSizeContext);
  const [darkMode] = useContext(DarkModeContext);
  const DynamicDiv = smallView ? 'div' : motion.div;
  const DynamicP = smallView ? 'p' : motion.p;

  return (
    <>
      <DynamicDiv variants={textVariant(0)}>
        <p
          className={
            darkMode ? styles.sectionSubText : styles.sectionSubTextLight
          }
        >
          {sub}
        </p>
        <h2
          className={
            darkMode ? styles.sectionHeadText : styles.sectionHeadTextLight
          }
        >
          <span
            className={darkMode ? 'text-orange' : 'text-blue'}
          >{`${titleFirst} `}</span>
          {titleSec}
        </h2>
      </DynamicDiv>
      {text && (
        <DynamicP
          variants={fadeIn('right', 'spring', 0, 0.5)}
          className={`${
            darkMode ? 'text-secondary' : 'text-tertiary'
          } mt-4 text-[17px] max-w-3xl leading-[30px] text-justify`}
        >
          {text}
        </DynamicP>
      )}
    </>
  );
};

export default SectionText;
