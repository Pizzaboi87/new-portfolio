import ExperienceCard from "./ExperienceCard";
import { color, motion } from "framer-motion";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>where have I studied so far?</p>
        <h2 className={`${styles.sectionHeadText}`}>
          <span className="text-orange">Academic </span>History
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#ffffff">
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

export default SectionWrapper(Education, "education");
