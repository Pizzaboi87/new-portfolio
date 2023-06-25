import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const AtAt = () => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const [mixer] = useState(() => new THREE.AnimationMixer(scene));

  useEffect(() => {
    animations.forEach((animation) => {
      mixer.clipAction(animation).play();
    });

    return () => {
      mixer.stopAllAction();
    };
  }, [animations, mixer]);

  useFrame((_, delta) => {
    mixer.update(delta);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-15, 100, 10]}
        angle={0.2}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={0.12}
        position={[0, -2, 0]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const AtAtCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <AtAt />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default AtAtCanvas;
