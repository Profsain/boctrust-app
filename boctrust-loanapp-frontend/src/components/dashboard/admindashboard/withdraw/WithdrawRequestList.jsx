import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const WithdrawRequestList = () => {
  const styles = {
    table: {
      // margin: "0 2rem 0 3rem",
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
    <div>
      <DashboardHeadline
        height="52px"
        mspacer="2rem 0 -2.95rem -1rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table borderless hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Customer</th>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kola Abiola</td>
              <td>7460615677</td>
              <td>N50,000</td>
              <td>Transfer</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mariam Salawu</td>
              <td>7460615997</td>
              <td>N500,000</td>
              <td>Deposit</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Emmanuel Opopo</td>
              <td>7460615643</td>
              <td>N20,000</td>
              <td>Transfer</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Faith Igwe</td>
              <td>7460615698</td>
              <td>N80,000</td>
              <td>Deposit</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Glory John</td>
              <td>7460615645</td>
              <td>N40,000</td>
              <td>Transfer</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>

           
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default WithdrawRequestList;
