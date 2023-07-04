import { useContext } from 'react';
import { Html, useProgress } from '@react-three/drei';
import { DarkModeContext } from '../context';

const Loader = () => {
  const { progress } = useProgress();
  const [darkMode] = useContext(DarkModeContext);

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: darkMode ? '#f1f1f1' : '#151030',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
