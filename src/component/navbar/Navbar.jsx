import "./Navbar.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Button from "../button/Button";

import { Model } from "../RG";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Canvas>
          <ambientLight intensity={1} />
          <mesh rotation={[0, -Math.PI / 2, 0]} position={[0, -1, 0]}>
            <Model scale={0.8} args={[2, 2, 2]} />
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
      <div className="navbar__links">
        <Button size="medium" radius="4px" height="30px" width="125px">
          Contact
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
