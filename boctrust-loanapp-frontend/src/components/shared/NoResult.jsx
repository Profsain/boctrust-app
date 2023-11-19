

import PropTypes from "prop-types"
const NoResult = ({ name }) => {
    const style = {
        textAlign: "center",
        color: "#145098",
        fontSize: "1.5rem",
        paddingTop: "2rem",
    }

  return (
      <div style={style}>
          No {name} found!
    </div>
  )
}

NoResult.propTypes = {
  name: PropTypes.string
}

export default NoResult