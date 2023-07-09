import { SectionWrapper } from "../hoc";
import Experience from "./Experience";

const History = () => {
  return (
    <section>
      <Experience expOrEdu={true} />
      <Experience expOrEdu={false} />
    </section>
  );
};

export default SectionWrapper(History, "work");
