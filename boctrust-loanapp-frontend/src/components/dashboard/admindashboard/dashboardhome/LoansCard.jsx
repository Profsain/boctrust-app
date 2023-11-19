import PropTypes from "prop-types"
const LoansCard = ({img, title, stat, bgcolor}) => {
    const styles = {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "170px",
            height: "100px",
            padding: "0.9rem",
            backgroundColor: bgcolor,
            borderRadius: "10px",
            margin: "0.5rem 2rem 0.5rem 0",
            
        },
        text: {
            color: "#fff",
            fontsize: "2.9rem",
            fontWeight: "900px",
            textAlign: "right",
        }
    }
  return (
    <div style={styles.container} className="StatCard">
          <img src={img} alt="stat-icon" />
          <div>
              <p style={styles.text}>{ title}</p>
              <h4 style={styles.text}>{ stat}</h4>
          </div>
    </div>
  );
};

LoansCard.propTypes = {
  bgcolor: PropTypes.string,
  img: PropTypes.string,
  stat: PropTypes.string,
  title: PropTypes.string
}

export default LoansCard;
