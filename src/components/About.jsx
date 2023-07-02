import Tilt from "react-parallax-tilt";
import { useContext } from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { CheckSizeContext } from "../context/checkSize.context";

const ServiceCard = ({ index, title, image }) => {
  const smallView = useContext(CheckSizeContext);
  const DynamicDiv = smallView ? "div" : motion.div;

  return (
    <Tilt
      className="topZ"
      max={25}
      scale={smallView ? 1 : 2}
      speed={450}
      glareEnable
      glarePosition="top"
      glareColor="#ffffff"
    >
      <DynamicDiv
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="md:w-[270px] w-full mx-auto"
      >
        <img src={image} alt={title} className="object-contain" />
      </DynamicDiv>
    </Tilt>
  );
};

const About = () => {
  const smallView = useContext(CheckSizeContext);
  const DynamicDiv = smallView ? "div" : motion.div;
  const DynamicP = smallView ? "p" : motion.p;

  return (
    <>
      <DynamicDiv variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-orange">About </span>Me
        </h2>
      </DynamicDiv>
      <DynamicP
        variants={fadeIn("right", "spring", 0, 0.5)}
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
      </DynamicP>

      <div className="mt-20 flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
