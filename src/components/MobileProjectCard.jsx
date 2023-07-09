import Tilt from "react-parallax-tilt";
import { useContext } from "react";
import { Icon } from "@iconify/react";
import { DarkModeContext } from "../context";

const IconContainer = ({ icon, href }) => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      onClick={() => window.open(href, "_blank")}
      className={`${
        darkMode ? "orange-gradient-fullrim" : "blue-gradient-fullrim"
      } inset-0 m-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10`}
    >
      <Icon icon={icon} style={{ fontSize: "2rem" }} />
    </div>
  );
};

const MobileProjectCard = ({
  title,
  alt,
  link,
  github,
  cover,
  youTube,
  details,
}) => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <Tilt
      max={25}
      speed={450}
      glareEnable
      glarePosition="bottom"
      glareColor="#ffffff"
      className={`${
        darkMode ? "bg-cardBg" : "bg-cardBgLight"
      } sm:w-[360px] p-5 w-full min-h-[530px] flex flex-col justify-between`}
    >
      <div className="relative w-full h-[230px]">
        <img src={cover} alt={alt} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-around">
        <h3
          className={`${
            darkMode ? "text-white" : "text-tertiary"
          } font-bold text-[24px] mt-4`}
        >
          {title}
        </h3>
        <p
          className={`${
            darkMode ? "text-secondary" : "text-secondaryLight"
          } mt-2 text-[14px] text-justify`}
        >
          {details}
        </p>
      </div>

      <div className="flex justify-between">
        <IconContainer icon="vaadin:eye" href={link} />
        {youTube && <IconContainer icon="openmoji:youtube" href={youTube} />}
        <IconContainer icon="mdi:github" href={github} />
      </div>
    </Tilt>
  );
};

export default MobileProjectCard;
