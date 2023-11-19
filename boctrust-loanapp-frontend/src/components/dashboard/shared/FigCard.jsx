import PropTypes from "prop-types";
const FigCard = ({ classname, children }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    padding: "20px",
    paddingTop: "50px",
    borderRadius: "18px",
    color: "#fff",
    background: "linear-gradient(to bottom, #48A7FF, #145098)",
  };
  return <div className={classname } style={style}>{children}</div>;
};

FigCard.propTypes = {
  children: PropTypes.any,
  classname: PropTypes.string,
};

export default FigCard;
