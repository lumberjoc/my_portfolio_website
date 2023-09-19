import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // provides canvas to place on
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // helpers to allow us draw and import 3d models 

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
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
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
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
    // Event listener for changes in the screen's size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set intial value of state variable
    setIsMobile(mediaQuery.matches);  

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
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
          <Computers isMobile={isMobile} /> 
        <Preload all />
      </Canvas>
    </Suspense>

  )
}

export default ComputerCanvas
