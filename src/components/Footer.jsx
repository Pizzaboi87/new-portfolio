import { contact } from '../constants';
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { CheckSizeContext } from '../context/checkSize.context';

const Footer = () => {
  const smallView = useContext(CheckSizeContext);

  return (
    <div className="w-full pb-10 bg-primary">
      <div className="text-secondary flex flex-row gap-10 items-center justify-center">
        {contact.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:text-orange"
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
