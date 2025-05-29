import "./Hero.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Model } from "../TexturePC";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__texte">
        <h1>
          Hey, moi c’est <br />
          <span style={{ color: "var(--color-primary)" }}>Gaspar</span>
        </h1>
      </div>
      <div className="hero__logo">
        <Canvas>
          <ambientLight intensity={1} />
          <mesh rotation={[0, Math.PI / 2.5, 0]} position={[0, -1, 0]}>
            <Model scale={2} args={[2, 2, 2]} />
          </mesh>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.4}
            enableZoom={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default Hero;
