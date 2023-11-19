import PropTypes from "prop-types";
const Headline = ({
  text = "Pass New Title",
  color = "#145088",
  fontSize = "26px",
  fontWeight = "600",
  align = "center",
  spacer = "20px 0"
}) => {
  const style = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: "Inter, sans-serif",
    textAlign: align,
    margin: spacer,
  };
  return <h3 style={style}>{text} </h3>;
};

Headline.propTypes = {
  text: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  spacer: PropTypes.string,
};

export default Headline;
