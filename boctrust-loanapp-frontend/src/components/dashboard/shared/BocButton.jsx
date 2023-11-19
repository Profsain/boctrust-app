import PropTypes from "prop-types";
const BocButton = ({fontSize="1rem", type, width, bgcolor = "#f64f4f", bradius, cursor, margin, func, disable, id, children }) => {
  const style = {
    backgroundColor: bgcolor,
    color: "#fff",
    border: "none",
    borderRadius: bradius,
    padding: "0.3rem 1.3rem",
    fontSize: fontSize,
    fontWeight: "500",
    cursor: cursor,
    width: width,
    margin: margin,
  };

  return <button id={id} onClick={func} disabled={disable} type={type} style={style}>{children}</button>;
};

BocButton.propTypes = {
  id: PropTypes.string,
  bgcolor: PropTypes.string,
  bradius: PropTypes.string,
  children: PropTypes.string,
  cursor: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  func: PropTypes.func,
  disable: PropTypes.bool,
}

export default BocButton;
