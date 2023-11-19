import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const TransactionList = () => {
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
              <th>Date</th>
              <th>Customer</th>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Debit/Credit</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25-03-2023</td>
              <td>Kola Abiola</td>
              <td>7460615677</td>
              <td>N50,000</td>
              <td>Dr</td>
              <td>Withdraw</td>
              <td style={styles.completed}>Completed</td>
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
              <td>25-03-2023</td>
              <td>Kanu James</td>
              <td>7460615677</td>
              <td>N400,000</td>
              <td>Dr</td>
              <td>Withdraw</td>
              <td style={styles.completed}>Completed</td>
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
              <td>25-04-2023</td>
              <td>Kola Abiola</td>
              <td>7460615677</td>
              <td>N20,000</td>
              <td>Cr</td>
              <td>Deposit</td>
              <td style={styles.completed}>Completed</td>
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
              <td>26-03-2023</td>
              <td>Glory John</td>
              <td>7460615674</td>
              <td>N90,000</td>
              <td>Dr</td>
              <td>Transfer</td>
              <td style={styles.completed}>Completed</td>
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
              <td>21-05-2023</td>
              <td>Mariam Makoko</td>
              <td>7460615623</td>
              <td>N500,000</td>
              <td>Cr</td>
              <td>Deposit</td>
              <td style={styles.completed}>Completed</td>
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

export default TransactionList;
