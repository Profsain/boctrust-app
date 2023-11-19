import Table from "react-bootstrap/Table";
import "../../../Dashboard.css";

const AccountStatementList = () => {
  const styles = {
    table: {
      // margin: "0 2rem 0 8rem",
    },
    head: {
      color: "#145098",
      fontSize: "1.2rem",
    },
    img: {
      width: "50px",
      height: "30px",
    },
    completed: {
      color: "#5cc51c",
    },
  };

  return (
    <div>
      {/* <DashboardHeadline
        height="52px"
        mspacer="2rem 0 -2.7rem 0.2rem"
        bgcolor="#145098"
      ></DashboardHeadline> */}
      <div style={styles.table} className="DCard">
        <Table hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Dr/Cr</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23-03-2023</td>
              <td>Bank Transfer</td>
              <td>Dr</td>
              <td style={styles.completed}>N250,000</td>
            </tr>
            <tr>
              <td>24-03-2023</td>
              <td>Loan repayment</td>
              <td>Cr</td>
              <td style={styles.completed}>N200,000</td>
            </tr>
            <tr>
              <td>26-03-2023</td>
              <td>Bank Transfer</td>
              <td>Dr</td>
              <td style={styles.completed}>N150,000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AccountStatementList;
