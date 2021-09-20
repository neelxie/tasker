import PropTypes from "prop-types";

const Button = ({ color, label, onclick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onclick}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
