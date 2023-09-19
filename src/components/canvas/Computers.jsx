import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // provides canvas to place on
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // helpers to allow us draw and import 3d models 

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

// Load in
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Logic to change isMobile variable and change the model
  // size 
  useEffect(() => {
    // Check to see if we are on media device 
    const mediaQuery = window.matchMedia('max-width: 500');

    setIsMobile(mediaQuery.matches);  // are we on device that's fewer than 500px width 
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [third])
  return (
    // React component to enable loader while model is loading
    <Suspense fallback={<CanvasLoader />}> 
      <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }} // used to properly render model
      >
          <OrbitControls // enables movement of model from left to right 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers /> 
        <Preload all />
      </Canvas>
    </Suspense>

  )
}

export default ComputerCanvas
