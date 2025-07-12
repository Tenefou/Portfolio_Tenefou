import "./Parcours.css";
import ExperienceItem from "../experienceItems/ExperienceItem.jsx";
function Parcours() {
  return (
    <div className="parcours">
      <h1>Expérience Professionnelle</h1>
      <h4 style={{ fontSize: "25px", fontFamily: "Kodchasan" }}>
        Aujourd&apos;hui
      </h4>
      <ExperienceItem
        titre="Alternance - Ingénieur Développeur FULLSTACK"
        entreprise="GROUPAMA SUPPORTS ET SERVICES"
        lieu="France"
        periode="OCTOBRE 2023 - AUJOURD'HUI"
        logo="/G2S.png"
        alt="Logo Groupama"
        style={{ marginLeft: "8vw" }}
      />
      <div className="parcours__right">
        <ExperienceItem
          titre="Stage technicien - Développeur Informatique"
          entreprise="KORBANK"
          lieu="Pologne"
          periode="AOUT - OCTOBRE 2024 "
          logo="/korbank.png"
          alt="Logo Groupama"
          rightAligned={false}
          style={{ marginLeft: "30vw" }}
        />
      </div>

      <ExperienceItem
        titre="Stage exécutant  - Agent d’entretien"
        entreprise="MIKAZUKI HOTEL"
        lieu="Japon"
        periode="AOUT 2023"
        logo="/Mika.png"
        alt="Logo Groupama"
        rightAligned={true}
        style={{ marginLeft: "40vw" }}
      />
    </div>
  );
}

export default Parcours;
