

import PropTypes from "prop-types"
const DashboardHeadline = ({height, padding="0.7rem", mspacer = "2rem 0 1rem 0", bgcolor = "#636363", children}) => {
    const style = {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        margin: mspacer,
        padding: padding,
        height: height,
        borderRadius: '2rem',
        backgroundColor: bgcolor,
    }
  return (
      <div style={style} className="DashHeader">{ children}</div>
  )
}

DashboardHeadline.propTypes = {
    children: PropTypes.any,
    bgcolor: PropTypes.string,
    mspacer: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string
}

export default DashboardHeadline