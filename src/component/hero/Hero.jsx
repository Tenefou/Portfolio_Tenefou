import "./Hero.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Button from "../button/Button";

import { Model } from "../TexturePC";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__texte">
        <h1>
          Hey, moi c’est <br />
          <span style={{ color: "var(--color-primary)" }}>Gaspar</span>
        </h1>
        <h2>
          Actuellement{" "}
          <span style={{ color: "var(--color-primary)" }}>
            Developpeur FullStack
          </span>{" "}
          en alternance à{" "}
          <span style={{ color: "var(--color-primary)" }}>
            Groupama Supports et Services
          </span>
          , et aussi developpeur de site internet pour petite entreprise en{" "}
          <span style={{ color: "var(--color-primary)" }}>Freelance</span>
        </h2>
        <Button size="large" radius="2px" height="50px" width="250px">
          Me contacter
        </Button>
        <div className="hero__contact">
          <div className="hero__circle-vert"></div>
          <img src="public/20250404_185557.jpg" alt="" />
          <h2 style={{ fontWeight: "400" }}>
            <span style={{ fontWeight: "bolder" }}>Temps de réponse :</span> 1 à
            2 jours ouvré
          </h2>
        </div>
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
