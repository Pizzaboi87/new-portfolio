import SectionText from './SectionText';
import ExperienceCard from './ExperienceCard';
import { useContext } from 'react';
import { education, educationSection } from '../constants';
import { SectionWrapper } from '../hoc';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { CheckSizeContext, DarkModeContext } from '../context';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  const smallView = useContext(CheckSizeContext);
  const [darkMode] = useContext(DarkModeContext);

  return (
    <>
      <SectionText
        sub={educationSection.sub}
        titleFirst={educationSection.titleFirst}
        titleSec={educationSection.titleSec}
      />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor={darkMode ? '#ffffff' : '#58a9ff'}
          animate={smallView ? false : true}
        >
          {education.map((educationPlace, index) => (
            <ExperienceCard
              key={index}
              experience={educationPlace}
              experienceSection={false}
              darkMode={darkMode}
              smallView={smallView}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
