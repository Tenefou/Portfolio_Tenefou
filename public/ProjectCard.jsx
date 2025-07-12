import PropTypes from "prop-types";

function ProjectCard({
  title = "Mon projet",
  desc = "Description du projet",
  image = "",
  video = "",
  tags = [],
  ...props
}) {
  return (
    <div className="project-card" {...props}>
      {video ? (
        <video
          src={video}
          controls
          style={{
            width: "100%",
            height: "25vh",
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
      <h2
        style={{
          paddingLeft: "1vw",
          color: "var(--color-primary)",
          fontWeight: 1000,
          marginTop: "0px",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          paddingLeft: "1vw",
          paddingBottom: "2vw",
          whiteSpace: "pre-line",
          wordWrap: "break-word",
          color: "#fff",
        }}
      >
        {desc}
      </p>
      <div
        style={{
          paddingLeft: "1vw",
          paddingBottom: "1vw",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          height: "auto",
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
