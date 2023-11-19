import Headline from "../shared/Headline";
const OurValue = () => {
  const styles = {
    container: {
      backgroundColor: "#ecaa00",
      color: "#fff",
      padding: "50px 0",
    },
    value: {
      paddingLeft: "2rem"
    },
    text: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      lineHeight: "1.5",
      textAlign: "left",
      letterSpacing: "0.5px",
    },
  };

  return (
    <div style={styles.container} className="container-fluid ">
      <Headline text="Our Values" color="#fff" />
      <div className="container">
        <div className="row OurValue" style={styles.value}>
          <div className="col-md-6 col-sm-12 px-5">
            <div>
              <Headline
                text="Innovation"
                color="#fff"
                fontSize="22px"
                align="left"
              />
              <p style={styles.text}>
                Creativity in our products development and leveraging on a
                robust information technology.
              </p>
            </div>

            <div style={styles.box}>
              <Headline
                text="Respect"
                color="#fff"
                fontSize="22px"
                align="left"
              />
              <p style={styles.text}>
                Demonstrating respect for all individuals.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 px-5">
            <div style={styles.box}>
              <Headline
                text="Customer Service"
                color="#fff"
                fontSize="22px"
                align="left"
              />
              <p style={styles.text}>
                We are committed to providing excellent customer service.
              </p>
            </div>

            <div style={styles.box}>
              <Headline
                text="Integrity"
                color="#fff"
                fontSize="22px"
                align="left"
              />
              <p style={styles.text}>Honesty and honorable competition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
