import PropTypes from "prop-types";
import { useState } from "react";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "./Kyc.css";

const OtherDocuments = ({ customerObj, setShowDocs }) => {
  const styles = {
    btnBox: {
      display: "flex",
      justifyContent: "center",
    },
    table: {
      //   margin: "0 2rem 0 3rem",
      fontSize: "14px",
    },
    head: {
      color: "#fff",
      fontSize: "1rem",
    },
    approved: {
      color: "#5cc51c",
    },
    completed: {
      color: "#f64f4f",
    },
    padding: {
      color: "#ecaa00",
    },
  };

  const [currentDocs, setCurrentDocs] = useState(customerObj.photocaptureImg);

  const handleDocs = (docs) => {
    console.log("current docs", docs);
    setCurrentDocs(docs);
  };

  console.log("current customer", customerObj);
  return (
    <div>
      {/* table section */}
      <div className="Section RBox DCard">
        <DashboardHeadline
          height="52px"
          mspacer="2rem 0 -2.55rem -1rem"
          bgcolor="#145098"
        ></DashboardHeadline>
        <div style={styles.table}>
          <Table hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Customer ID</th>
                <th>Full Name</th>
                <th>Employment Letters</th>
                <th>Bank Statements/Slip</th>
                <th>Time Stamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td style={styles.completed}>-</td>
                <td style={styles.approved}>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>{customerObj.customerId}</td>
                <td>{customerObj.firstname + " " + customerObj.lastname}</td>
                <td
                  onClick={() => handleDocs(customerObj.employmentletter)} className="viewDocsBtn"
                  style={styles.completed}>View</td>
                <td
                  onClick={() => handleDocs(customerObj.uploadpayslip)} className="viewDocsBtn"
                  style={styles.approved}>View</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="checkBtn">
          <BocButton 
            margin="1rem 0 3rem 0" 
            bgcolor="#ecaa00"
            bradius="25px"
            width="200px"
            func={() => setShowDocs(false)}
          >
            Close Docs View
          </BocButton>
        </div>
        <div className="checkBtn">
          <img src={currentDocs} alt="other docs" />
        </div>
      </div>
    </div>
  );
};

OtherDocuments.propTypes = {
  customerObj: PropTypes.string,
  setShowDocs: PropTypes.func,
};

export default OtherDocuments;
