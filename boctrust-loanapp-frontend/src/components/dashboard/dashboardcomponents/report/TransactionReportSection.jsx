import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import Table from "react-bootstrap/Table";

const TransactionReportSection = () => {
  const styles = {
    th: {
      color: "#145098",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
    completed: {
      color: "#5cc51c",
    },
  };

  return (
    <div>
      <DashboardHeadline mspacer="0 3rem 0 0">
        Recent Transaction
      </DashboardHeadline>
      <div className="TReport">
        <Table borderless hover responsive="sm" className="DTable">
          <thead>
            <tr style={styles.th}>
              <th>Date</th>
              <th>AC Number</th>
              <th>Amount</th>
              <th>Dr/Cr</th>
              <th>Type</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-25-03</td>
              <td>1234567891</td>
              <td>N2134</td>
              <td>Dr</td>
              <td>Loan Repayment</td>
              <td style={styles.completed}>Completed</td>
              <td>
                <BocButton cursor="pointer" bgcolor="#145098" bradius="18px">
                  View
                </BocButton>
              </td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>1234567891</td>
              <td>N2134</td>
              <td>Dr</td>
              <td>Loan Repayment</td>
              <td style={styles.completed}>Completed</td>
              <td>
                <BocButton cursor="pointer" bgcolor="#145098" bradius="18px">
                  View
                </BocButton>
              </td>
            </tr>
            <tr>
              <td>2023-25-05</td>
              <td>1234567891</td>
              <td>N1134</td>
              <td>Cr</td>
              <td>Loan Repayment</td>
              <td style={styles.completed}>Completed</td>
              <td>
                <BocButton cursor="pointer" bgcolor="#145098" bradius="18px">
                  View
                </BocButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionReportSection;
