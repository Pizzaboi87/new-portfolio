import SectionText from './SectionText';
import ExperienceCard from './ExperienceCard';
import { useContext } from 'react';
import { experiences, experienceSection } from '../constants';
import { SectionWrapper } from '../hoc';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { CheckSizeContext } from '../context/checkSize.context';
import { DarkModeContext } from '../context/darkMode.context';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const smallView = useContext(CheckSizeContext);
  const [darkMode] = useContext(DarkModeContext);

  return (
    <>
      <SectionText
        sub={experienceSection.sub}
        titleFirst={experienceSection.titleFirst}
        titleSec={experienceSection.titleSec}
      />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor={darkMode ? '#ffffff' : '#58a9ff'}
          animate={smallView ? false : true}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              experienceSection={true}
              darkMode={darkMode}
              smallView={smallView}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
