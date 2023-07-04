import { useContext } from 'react';
import { Icon } from '@iconify/react';
import Tilt from 'react-parallax-tilt';
import { DarkModeContext } from '../context/darkMode.context';

const IconContainer = ({ icon, href }) => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      onClick={() => window.open(href, '_blank')}
      className={`${
        icon === 'mdi:github'
          ? 'github'
          : icon === 'vaadin:eye'
          ? 'link'
          : 'youtube'
      } ${darkMode ? 'text-orange' : 'text-blue'} text-6xl glass inline-block`}
    >
      <Icon icon={icon} className="cursor-pointer" />
    </div>
  );
};

const DesktopProjectCard = ({
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
      className="topZ box w-[27rem] h-56 rounded-2xl m-10"
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
          darkMode ? 'text-orange' : 'text-blue'
        } glass title inline-block max-w-[20rem] m-0 text-right font-bold text-3xl`}
      >
        {title}
      </h1>
      <p className="glass details inline-block text-black">{details}</p>
    </Tilt>
  );
};

export default DesktopProjectCard;
