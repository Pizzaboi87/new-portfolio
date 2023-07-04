import SectionText from './SectionText';
import ExperienceCard from './ExperienceCard';
import { useContext } from 'react';
import { experiences, experienceSection } from '../constants';
import { education, educationSection } from '../constants';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { CheckSizeContext, DarkModeContext } from '../context';
import 'react-vertical-timeline-component/style.min.css';

const Experience = ({ expOrEdu }) => {
  const smallView = useContext(CheckSizeContext);
  const [darkMode] = useContext(DarkModeContext);

  return (
    <section>
      <SectionText
        sub={expOrEdu ? experienceSection.sub : educationSection.sub}
        titleFirst={
          expOrEdu ? experienceSection.titleFirst : educationSection.titleFirst
        }
        titleSec={
          expOrEdu ? experienceSection.titleSec : educationSection.titleSec
        }
      />
      <div className="mt-16 mb-24 flex flex-col">
        <VerticalTimeline
          lineColor={darkMode ? '#ffffff' : '#58a9ff'}
          animate={smallView ? false : true}
        >
          {expOrEdu
            ? experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  experience={experience}
                  experienceSection={expOrEdu}
                  darkMode={darkMode}
                  smallView={smallView}
                />
              ))
            : education.map((eduPlace, index) => (
                <ExperienceCard
                  key={index}
                  experience={eduPlace}
                  experienceSection={expOrEdu}
                  darkMode={darkMode}
                  smallView={smallView}
                />
              ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
