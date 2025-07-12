import PropTypes from "prop-types";

function ExperienceItem({
  titre = "Titre du poste",
  stacks = [],
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
            marginBottom: "1vw",
            color: "var(--color-primary)",
          }}
        >
          {titre}
        </h4>
        <div
          style={{
            paddingBottom: "1vw",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            height: "auto",
            alignItems: "center",
          }}
        >
          {stacks.map((stack, idx) => (
            <span
              key={idx}
              style={{
                background: "#dbc07222",
                color: "#dbc072",
                borderRadius: "5px",
                padding: "2px 10px",
                fontWeight: 600,
                border: "1px solid #dbc07255",
                height: "100%",
                lineHeight: "1.3",
              }}
            >
              {stack}
            </span>
          ))}
        </div>

        <p
          className="parcours__current__texte__infos"
          style={{
            fontWeight: "100",
          }}
        >
          {entreprise}, {lieu}
          <br />
          {periode}
        </p>
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
  stacks: PropTypes.arrayOf(PropTypes.string),
  entreprise: PropTypes.string,
  lieu: PropTypes.string,
  periode: PropTypes.string,
  logo: PropTypes.string,
  alt: PropTypes.string,
  rightAligned: PropTypes.bool,
  style: PropTypes.object,
};

export default ExperienceItem;
