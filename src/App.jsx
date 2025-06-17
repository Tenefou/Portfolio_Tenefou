import "./App.css";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Parcours from "./component/parcours/Parcours";
import Projects from "./component/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Parcours />
    </>
  );
}

export default App;
