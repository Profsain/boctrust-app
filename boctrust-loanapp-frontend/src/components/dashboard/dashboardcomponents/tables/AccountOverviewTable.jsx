import DashboardHeadline from "../../shared/DashboardHeadline";
import Table from "react-bootstrap/Table";

const AccountOverviewTable = () => {
  const styles = {
    table: {
      marginLeft: "2rem",
    },
    head: { color: "#145098", fontWeight: "bold", fontSize: "1.2rem" },
  };

  return (
    <div>
      <DashboardHeadline>Account Overview</DashboardHeadline>
      <Table borderless hover responsive="sm" style={styles.table} className="RBox">
        <thead>
          <tr style={styles.head}>
            <th>Account Number</th>
            <th>Account Type</th>
            <th>Balance</th>
            <th>Loan Guarantee</th>
            <th>Current Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7657547661</td>
            <td>Current Account</td>
            <td>N12123</td>
            <td>N2134</td>
            <td>N132900</td>
          </tr>
          <tr>
            <td>7647676673</td>
            <td>Savings Account</td>
            <td>N12123</td>
            <td>N2134</td>
            <td>N132900</td>
          </tr>
          <tr>
            <td>7647676689</td>
            <td>Fixed Deposit</td>
            <td>N12123</td>
            <td>N2134</td>
            <td>N132900</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AccountOverviewTable;
