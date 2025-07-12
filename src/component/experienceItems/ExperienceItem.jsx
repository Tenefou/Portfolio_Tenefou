import PropTypes from "prop-types";

function ExperienceItem({
  titre = "Titre du poste",
  entreprise = "Nom entreprise",
  lieu = "France",
  periode = "DATE - DATE",
  logo = "",
  alt = "Logo entreprise",
  rightAligned = true,
  style = {},
}) {
  return (
    <div
      className="parcours__current"
      style={{
        flexDirection: rightAligned ? "row" : "row-reverse",
        gap: "8vw",
        ...style,
      }}
    >
      <div
        className="parcours__current__texte"
        style={{
          alignItems: rightAligned ? "flex-end" : "flex-start",
          textAlign: rightAligned ? "right" : "left",
        }}
      >
        <h4
          style={{
            paddingLeft: rightAligned ? "0vw" : "0",
            paddingRight: rightAligned ? "0" : "0vw",
            marginBottom: "20px",
            color: "var(--color-primary)",
          }}
        >
          {titre}
        </h4>
        <h4
          className="parcours__current__texte__infos"
          style={{
            fontWeight: "100",
            lineHeight: "30px",
          }}
        >
          {entreprise}, {lieu}
          <br />
          {periode}
        </h4>
      </div>
      <img
        className="parcours__current__logo"
        style={{
          paddingRight: rightAligned ? "30vw" : "0",
          paddingLeft: rightAligned ? "0" : "10vw",
          width: "10vw",
          height: "10vw",
        }}
        src={logo}
        alt={alt}
      />
    </div>
  );
}

ExperienceItem.propTypes = {
  titre: PropTypes.string,
  entreprise: PropTypes.string,
  lieu: PropTypes.string,
  periode: PropTypes.string,
  logo: PropTypes.string,
  alt: PropTypes.string,
  rightAligned: PropTypes.bool,
  style: PropTypes.object,
};

export default ExperienceItem;
