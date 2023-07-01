import ExperienceCard from "./ExperienceCard";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-orange">Work </span>Experience
        </h2>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#ffffff">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              experienceSection={true}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
