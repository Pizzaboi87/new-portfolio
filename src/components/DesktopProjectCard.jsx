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
        icon === "mdi:github"
          ? "github"
          : icon === "vaadin:eye"
          ? "link"
          : "youtube"
      } ${
        darkMode ? "text-orange glass-dark" : "text-white glass-light"
      } text-6xl glass inline-block`}
    >
      <Icon icon={icon} className="cursor-pointer" />
    </div>
  );
};

const DesktopProjectCard = ({
  title,
  link,
  github,
  cover,
  youTube,
  details,
}) => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <Tilt
      className={`${
        darkMode ? "box-dark" : "box-light"
      } topZ box w-[27rem] h-56 rounded-2xl m-10`}
      perspective={800}
      scale={1}
      max={25}
      speed={450}
      glareEnable
      glarePosition="top"
      glareColor="#ffffff"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <IconContainer icon="mdi:github" href={github} />
      <IconContainer icon="vaadin:eye" href={link} />
      {youTube && <IconContainer icon="openmoji:youtube" href={youTube} />}
      <h1
        className={`${
          darkMode ? "text-orange glass-dark" : "text-white glass-light"
        } glass title inline-block max-w-[20rem] m-0 text-right font-bold text-3xl`}
      >
        {title}
      </h1>
      <p
        className={`${
          darkMode ? "glass-dark text-black" : "glass-light text-white"
        } glass details inline-block`}
      >
        {details}
      </p>
    </Tilt>
  );
};

export default DesktopProjectCard;
