import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const ReportDetails = () => {
  const styles = {
    table: {
      margin: "0 1rem 4rem 0rem",
    },
    head: {
      color: "#fff",
      fontSize: "1.2rem",
    },
    booked: {
      color: "#145098",
    },
    completed: {
      color: "#5cc51c",
    },
    withcredit: {
      color: "#f64f4f",
    },
    withdisbursement: {
      color: "#ecaa00",
    },
  };
  return (
    <div className="SecCon">
      <DashboardHeadline
        height="46px"
        mspacer="2rem 4rem -2.55rem -2rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table borderless hover responsive="sm" className="DTable">
          <thead style={styles.head}>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-25-03</td>
              <td>Debit on A/c - 746232329 to ---</td>
              <td>N2134</td>
              <td></td>
              <td>N212234</td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>Debit on A/c - 746232329 to ---</td>
              <td>N2134</td>
              <td></td>
              <td>N212234</td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>Debit on A/c - 746232329 to ---</td>
              <td>N2134</td>
              <td></td>
              <td>N212234</td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>Credit on A/c - 74606565 from ---</td>
              <td></td>
              <td>N2134</td>
              <td>N12234</td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>Credit on A/c - 74606565 from ---</td>
              <td></td>
              <td>N2134</td>
              <td>N14234</td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>Debit on A/c - 746232329 to ---</td>
              <td>N1234</td>
              <td></td>
              <td>N18234</td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>Debit on A/c - 746232329 to ---</td>
              <td>N2134</td>
              <td></td>
              <td>N12234</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ReportDetails;
