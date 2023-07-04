import { contact } from '../constants';
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { CheckSizeContext } from '../context/checkSize.context';
import { DarkModeContext } from '../context/darkMode.context';

const Footer = () => {
  const smallView = useContext(CheckSizeContext);
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      className={`${darkMode ? 'bg-primary' : 'bg-primaryLight'} w-full pb-10`}
    >
      <div
        className={`${
          darkMode ? 'text-secondary' : 'text-secondaryLight'
        } flex flex-row gap-10 items-center justify-center`}
      >
        {contact.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`${
              darkMode ? 'hover:text-orange' : 'hover:text-blue'
            } flex items-center`}
            key={item.text}
          >
            <Icon icon={item.icon} className="text-4xl" />
            {!smallView && <p className="ml-3">{item.text}</p>}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
