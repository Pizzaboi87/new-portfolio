import ExperienceCard from "./ExperienceCard";
import { useContext } from "react";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { CheckSizeContext } from "../context/checkSize.context";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const smallView = useContext(CheckSizeContext);
  const DynamicDiv = smallView ? "div" : motion.div;

  return (
    <>
      <DynamicDiv variants={textVariant(0)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-orange">Work </span>Experience
        </h2>
      </DynamicDiv>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="#ffffff"
          animate={smallView ? false : true}
        >
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
