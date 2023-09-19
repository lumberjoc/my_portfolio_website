import { Html, useProgress } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Canvas>
      <Html>
        <span className="canvas-load">
          <p
            style={{
              fontSize: 14,
              color: '#f1f1f1',
              fontWeight: 800,
              marginTop: 40
            }}
          >{progress.toFixed(2)}%</p>
        </span>
      </Html>
    </Canvas>
  )
}

export default Loader