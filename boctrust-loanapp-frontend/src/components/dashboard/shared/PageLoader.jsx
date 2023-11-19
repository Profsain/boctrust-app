
import PropTypes from "prop-types"
import { RotatingLines } from "react-loader-spinner";

const PageLoader = ({width="96"}) => {
    const style = {
        display: "flex",
        placeContent: "center",
    }
  return (
    <div style={style}>
      <RotatingLines
        strokeColor="#ecaa00"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </div>
  );
}

PageLoader.propTypes = {
  width: PropTypes.string
}

export default PageLoader