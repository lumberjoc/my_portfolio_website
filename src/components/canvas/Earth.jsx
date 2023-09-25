import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"; // where all 3d elmnts reside/appear
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // utility functions from helper library

import CanvasLoader from '../Loader';


const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />

  )
}

const EarthCanvas = () => {
  return (
    // <Suspense fallback={ <CanvasLoader />}></Suspense>
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov:45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      {/* Ensures something is showing while model is loading */}
      <Suspense fallback={ <CanvasLoader />}></Suspense> 
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      <Suspense />
    </Canvas>
    // </Suspense>
  )
}

export default EarthCanvas