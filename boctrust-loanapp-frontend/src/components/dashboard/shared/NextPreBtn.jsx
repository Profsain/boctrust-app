import PropTypes from "prop-types"
import "../Dashboard.css"

const NextPreBtn = ({prevFunc, nextFunc, count}) => {
    const styles = {
        container: {
            // width: "100%",
            display: "flex",
            justifyContent: "flex-end",
        },
        btnBox: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          fontSize: "19px",
        },
        btn: {
            padding: "5px 15px",
            border: "none",
            backgroundColor: "#145098",
        },
        btnP: {
            borderRaduis: "25px 0 0 25px",
        },
        img: {
            width: "20px",
            height: "20px",
      },
      p: {
        padding: "0 20px",
        }

    }
  return (
    <div style={styles.container}>
      <div style={styles.btnBox}>
        <button style={styles.btn} id="PrevBtn" value="prev" onClick={prevFunc}>
          <img style={styles.img} src="images/arrowleft.png" alt="prev"/>{" "}
        </button>
        <p style={styles.p}>{ count}</p>
        <button style={styles.btn} id="NextBtn" value="next" onClick={(e)=> nextFunc(e)}>
          <img style={styles.img} src="images/arrowright.png" alt="next" />
        </button>
      </div>
    </div>
  );
};

NextPreBtn.propTypes = {
  nextFunc: PropTypes.func,
  prevFunc: PropTypes.func,
  count: PropTypes.number
}

export default NextPreBtn;
