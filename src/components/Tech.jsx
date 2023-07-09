import { useContext, useMemo } from "react";
import { Icon } from "@iconify/react";
import { DatabaseContext } from "../context";

const Tech = () => {
  const data = useContext(DatabaseContext);

  const memoizedIcons = useMemo(
    () =>
      data.techLogos.map((logo, index) => (
        <li
          className="md:text-5xl text-4xl text-center"
          style={{ width: "var(--logo-width)" }}
          key={`${logo}-${index}`}
        >
          <Icon icon={logo} />
        </li>
      )),
    []
  );

  return (
    <div className="slider relative w-[100vw] md:h-24 h-16 bg-white flex items-center overflow-hidden mb-10 -mt-16">
      <ul
        className="brands flex list-none"
        style={{ width: "var(--total-logo-width)" }}
      >
        {memoizedIcons}
        {memoizedIcons}
      </ul>
    </div>
  );
};

export default Tech;
