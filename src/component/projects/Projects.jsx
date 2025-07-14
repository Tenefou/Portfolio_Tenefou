import "./Projects.css";
import ProjectCard from "../../../public/ProjectCard";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__texte">
        <h1>Mes projets</h1>
        <div className="projects__projects">
          <ProjectCard
            title="Landing Page Boulangerie"
            desc={`Une landing page pour une boulangerie`}
            video="/LP_Boul.mp4"
            tags={["React", "Vite", "TS", "Framer Motion", "Tailwind"]}
          />

          <ProjectCard
            title="Landing Page bibliothèque modèles 3D"
            desc={`Une landing page pour une bibliothèque de modèle 3D`}
            video="/LP_3D.mp4"
            tags={["React", "Vite", "TS", "Framer Motion"]}
          />
          <ProjectCard
            title="Dawn"
            desc={`Platformer 3D pour la Pirate Software Game Jam 15`}
            video="/Dawn.mp4"
            tags={["Unity", "C#"]}
          />
          <ProjectCard
            title="Risk of Pain"
            desc={`Développement d'un jeu TPS inspiré de Risk of Rain 2`}
            video="/Cool.mov"
            tags={["Unity", "C#"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
