import SectionText from './SectionText';
import MobileProjectCard from './MobileProjectCard';
import DesktopProjectCard from './DesktopProjectCard';
import { useContext } from 'react';
import { SectionWrapper } from '../hoc';
import { projects, portfolioSection } from '../constants';
import { CheckSizeContext } from '../context/checkSize.context';

const Portfolio = () => {
  const smallView = useContext(CheckSizeContext);

  const mobile = projects.map((project, index) => (
    <MobileProjectCard key={project.id} {...project} index={index} />
  ));

  const desktop = projects.map((project, index) => (
    <DesktopProjectCard key={project.id} {...project} index={index} />
  ));

  return (
    <section>
      <SectionText
        sub={portfolioSection.sub}
        titleFirst={portfolioSection.titleFirst}
        titleSec={portfolioSection.titleSec}
        text={portfolioSection.text}
      />

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {smallView ? mobile : desktop}
      </div>
    </section>
  );
};

export default SectionWrapper(Portfolio, 'portfolio');
