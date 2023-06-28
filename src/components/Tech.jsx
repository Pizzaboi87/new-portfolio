/*import { useMemo } from "react";
import { technologies } from "../constants";

const Tech = () => {
  const memoizedIcons = useMemo(
    () =>
      technologies.map((tech, index) => (
        <img
          key={`${tech.name}-${index}`}
          src={tech.icon}
          alt={tech.name}
          className="h-[80%] w-auto"
        />
      )),
    []
  );

  return (
    <div className="h-20 mt-20 bg-[#feffee] border-t-2 border-b-2 border-orange overflow-hidden">
      <div className="flex items-center h-20 justify-around absolute left-0 animate gap-12 animate">
        {memoizedIcons}
        {memoizedIcons}
      </div>
    </div>
  );
};

export default Tech;*/

import { useMemo } from "react";
import { techLogos } from "../constants";
import { Icon } from "@iconify/react";

const Tech = () => {
  const memoizedIcons = useMemo(
    () =>
      techLogos.map((logo, index) => (
        <li className="brand-logo" key={`${logo}-${index}`}>
          <Icon icon={logo} />
        </li>
      )),
    []
  );

  return (
    <div className="slider">
      <ul className="brands">
        {memoizedIcons}
        {memoizedIcons}
      </ul>
    </div>
  );
};

export default Tech;
