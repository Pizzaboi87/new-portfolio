import Loader from "../Loader";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { BB8Model } from "./BB8Scene";

const BB8Canvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.25} />
      <spotLight
        intensity={0.4}
        angle={0.1}
        penumbra={1}
        position={[5, 15, 10]}
        castShadow
      />
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <BB8Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BB8Canvas;