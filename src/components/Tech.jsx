import { useMemo } from 'react';
import { techLogos } from '../constants';
import { Icon } from '@iconify/react';

const Tech = () => {
  const memoizedIcons = useMemo(
    () =>
      techLogos.map((logo, index) => (
        <li
          className="md:text-5xl text-4xl text-center"
          style={{ width: 'var(--logo-width)' }}
          key={`${logo}-${index}`}
        >
          <Icon icon={logo} />
        </li>
      )),
    []
  );

  return (
    <div className="slider relative w-[100vw] md:h-24 h-16 bg-white flex items-center overflow-hidden">
      <ul
        className="brands flex list-none"
        style={{ width: 'var(--total-logo-width)' }}
      >
        {memoizedIcons}
        {memoizedIcons}
      </ul>
    </div>
  );
};

export default Tech;
