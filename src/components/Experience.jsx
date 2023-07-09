import SectionText from "./SectionText";
import ExperienceCard from "./ExperienceCard";
import { useContext } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { CheckSizeContext, DarkModeContext, DatabaseContext } from "../context";
import "react-vertical-timeline-component/style.min.css";

const Experience = ({ expOrEdu }) => {
  const smallView = useContext(CheckSizeContext);
  const data = useContext(DatabaseContext);
  const [darkMode] = useContext(DarkModeContext);

  return (
    <section>
      <SectionText
        sub={expOrEdu ? data.experienceSection.sub : data.educationSection.sub}
        titleFirst={
          expOrEdu
            ? data.experienceSection.titleFirst
            : data.educationSection.titleFirst
        }
        titleSec={
          expOrEdu
            ? data.experienceSection.titleSec
            : data.educationSection.titleSec
        }
      />
      <div className="mt-16 mb-24 flex flex-col">
        <VerticalTimeline
          lineColor={darkMode ? "#ffffff" : "#58a9ff"}
          animate={smallView ? false : true}
        >
          {expOrEdu
            ? data.experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  experience={experience}
                  experienceSection={expOrEdu}
                  darkMode={darkMode}
                  smallView={smallView}
                />
              ))
            : data.education.map((eduPlace, index) => (
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
