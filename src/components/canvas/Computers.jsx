import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // provides canvas to place on
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // helpers to allow us draw and import 3d models 

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (

  )
}

export default Computers