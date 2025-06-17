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
            fontSize: "30px",
            paddingLeft: rightAligned ? "250px" : "0",
            paddingRight: rightAligned ? "0" : "250px",
            marginBottom: "20px",
            color: "var(--color-primary)",
          }}
        >
          {titre}
        </h4>
        <h4
          style={{
            fontWeight: "100",
            fontSize: "20px",
            lineHeight: "30px",
          }}
        >
          {entreprise}, {lieu}
          <br />
          {periode}
        </h4>
      </div>
      <img
        style={{
          paddingRight: rightAligned ? "400px" : "0",
          paddingLeft: rightAligned ? "0" : "400px",
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
