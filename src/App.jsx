import "./App.css";
import { useRef } from "react";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Parcours from "./component/parcours/Parcours";
import Projects from "./component/projects/Projects";
import Contact from "./component/contact/Contact";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar onContactClick={scrollToContact} />
      <Hero />
      <Projects />
      <Parcours />
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
