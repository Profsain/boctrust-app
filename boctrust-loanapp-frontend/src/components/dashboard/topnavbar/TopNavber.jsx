import PropTypes from "prop-types";
import "./TopNavbar.css";

const TopNavber = ({ title, user="Femi Akinwade" }) => {
  return (
    <div className="Inline">
      <div>
        <h4 id="Title">{title}</h4>
      </div>
      <div className="Inline Profile">
        <img src="images/notificationicon.png" alt="alert" />
        <div className="Inline UserCard">
          <p>{user}</p>
          <img src="images/smallavater.png" alt="user" />
        </div>
      </div>
    </div>
  );
};

TopNavber.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
};

export default TopNavber;
