import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { DarkModeContext } from '../context/darkMode.context';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [darkMode] = useContext(DarkModeContext);

  const textColor = (link) => {
    if (darkMode) {
      if (active === link.title) return 'text-orange';
      else return 'text-secondary hover:text-orange';
    } else {
      if (active === link.title) return 'text-blue';
      else return 'text-tertiary hover:text-blue';
    }
  };

  return (
    <nav
      className={`${styles.paddingX} ${
        darkMode ? 'bg-primary' : 'bg-primaryLight'
      } w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className={`${darkMode ? null : 'invert'} w-9 h-9 object-contain`}
          />
          <p
            className={`${
              darkMode ? 'text-white' : 'text-tertiary'
            } text-[18px] font-bold cursor-pointer flex`}
          >
            <span className="sm:block hidden">Peter &nbsp;</span>Weiser
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${textColor(
                link
              )} text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`${
              darkMode ? null : 'invert'
            } w-[28px] h-[28px] object-contain cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'navOff' : 'navOn'} ${
              darkMode ? 'bg-tertiary' : 'bg-tertiaryLight'
            } absolute flex -z-[1] flex-col`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${textColor(
                    link
                  )} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
