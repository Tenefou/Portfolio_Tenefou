import PropTypes from "prop-types";

function Button({
  children,
  size = "medium",
  radius = "8px",
  color = "#DBC072",
  height = "auto",
  fontFamily = "Kameron",
  ...props
}) {
  const sizeStyles = {
    small: { padding: "6px 14px", fontSize: "0.9rem" },
    medium: { padding: "10px 20px", fontSize: "1rem" },
    large: { padding: "14px 28px", fontSize: "1.2rem" },
  };

  return (
    <button
      style={{
        borderRadius: radius,
        ...sizeStyles[size],
        border: "none",
        background: "#222",
        backgroundColor: color,
        cursor: "pointer",
        height: height,
        lineHeight: "0.1",
        fontFamily: fontFamily,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  radius: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
};

export default Button;
