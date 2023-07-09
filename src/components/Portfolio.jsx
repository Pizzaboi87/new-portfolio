import SectionText from "./SectionText";
import MobileProjectCard from "./MobileProjectCard";
import DesktopProjectCard from "./DesktopProjectCard";
import { useContext } from "react";
import { SectionWrapper } from "../hoc";
import { CheckSizeContext, DatabaseContext } from "../context";

const Portfolio = () => {
  const smallView = useContext(CheckSizeContext);
  const data = useContext(DatabaseContext);

  const mobile = data.projects.map((project, index) => (
    <MobileProjectCard key={project.id} {...project} index={index} />
  ));

  const desktop = data.projects.map((project, index) => (
    <DesktopProjectCard key={project.id} {...project} index={index} />
  ));

  return (
    <section>
      <SectionText
        sub={data.portfolioSection.sub}
        titleFirst={data.portfolioSection.titleFirst}
        titleSec={data.portfolioSection.titleSec}
        text={data.portfolioSection.text}
      />

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {smallView ? mobile : desktop}
      </div>
    </section>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
