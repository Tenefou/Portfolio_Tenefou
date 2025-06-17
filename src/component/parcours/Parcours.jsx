import "./Parcours.css";
import ExperienceItem from "../experienceItems/ExperienceItem.jsx";
function Parcours() {
  return (
    <div className="parcours">
      <h1
        style={{ fontSize: "35px", marginTop: "-10px", marginBottom: "40px" }}
      >
        Expérience Professionnelle
      </h1>
      <h4 style={{ fontSize: "25px", fontFamily: "Kodchasan" }}>
        Aujourd&apos;hui
      </h4>
      <ExperienceItem
        titre="Alternance - Ingénieur Développeur FULLSTACK"
        entreprise="GROUPAMA SUPPORTS ET SERVICES"
        lieu="France"
        periode="OCTOBRE 2023 - AUJOURD'HUI"
        logo="public/G2S.jpg"
        alt="Logo Groupama"
        style={{ marginBottom: "70px" }}
      />
      <ExperienceItem
        titre="Alternance - Ingénieur Développeur FULLSTACK"
        entreprise="GROUPAMA SUPPORTS ET SERVICES"
        lieu="France"
        periode="OCTOBRE 2023 - AUJOURD'HUI"
        logo="public/G2S.jpg"
        alt="Logo Groupama"
        rightAligned={false}
      />
    </div>
  );
}

export default Parcours;
