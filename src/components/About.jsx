import SectionText from "./SectionText";
import Tilt from "react-parallax-tilt";
import { useContext } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { CheckSizeContext, DatabaseContext } from "../context";

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
  const data = useContext(DatabaseContext);

  return (
    <>
      <SectionText
        sub={data.aboutSection.sub}
        titleFirst={data.aboutSection.titleFirst}
        titleSec={data.aboutSection.titleSec}
        text={data.aboutSection.text}
      />

      <div className="mt-20 flex flex-wrap gap-6 justify-center">
        {data.services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
