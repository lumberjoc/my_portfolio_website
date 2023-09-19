import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // provides canvas to place on
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // helpers to allow us draw and import 3d models 

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
      />
    </mesh>
  )
}

// Load in
const ComputerCanvas = () => {
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
