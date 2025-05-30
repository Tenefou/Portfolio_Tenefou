import PropTypes from "prop-types";

function ProjectCard({
  title = "Mon projet",
  desc = "Description du projet",
  color = "#32213A",
  fontFamily = "Kameron",
  image = "",
  video = "",
  tags = [],
  ...props
}) {
  return (
    <div
      style={{
        borderRadius: "10px",
        border: "none",
        background: "#32213A",
        backgroundColor: color,
        cursor: "pointer",
        height: "50vh",
        width: "70vh",
        lineHeight: "0.1",
        fontFamily: fontFamily,
        fontSize: "18px",
        boxShadow: "0 5px 4px 0 #dbc07255",
      }}
      {...props}
    >
      {video ? (
        <video
          src={video}
          controls
          style={{
            width: "100%",
            height: "30vh",
            objectFit: "contain",
            borderRadius: "4px 4px 0 0",
            background: "#222",
          }}
        />
      ) : (
        image && (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "30vh",
              objectFit: "contain",
              borderRadius: "4px 4px 0 0",
              background: "#222",
            }}
          />
        )
      )}
      <h3
        style={{
          paddingLeft: "15px",
          color: "var(--color-primary)",
          fontWeight: 1000,
          paddingBottom: "20px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          paddingLeft: "15px",
          paddingBottom: "35px",
          whiteSpace: "pre-line",
        }}
      >
        {desc}
      </p>
      <div
        style={{
          paddingLeft: "15px",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          height: "20px",
          alignItems: "center",
        }}
      >
        {tags.map((tag, idx) => (
          <span
            key={idx}
            style={{
              background: "#dbc07222",
              color: "#dbc072",
              borderRadius: "5px",
              padding: "2px 10px",
              fontSize: "0.9em",
              fontWeight: 600,
              border: "1px solid #dbc07255",
              height: "100%",
              lineHeight: "1.3",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
  width: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
