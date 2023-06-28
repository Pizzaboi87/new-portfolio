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
