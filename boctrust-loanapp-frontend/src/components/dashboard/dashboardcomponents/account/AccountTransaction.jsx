import Table from "react-bootstrap/Table";
import BocButton from "../../shared/BocButton";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const AccountTransaction = () => {
  const styles = {
    table: {
      margin: "0 2.9rem 0 0rem",
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
    <div className=" SecCon">
      <DashboardHeadline
        height="46px"
        mspacer="2rem 4rem -2.55rem -1.5rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table borderless hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Date</th>
              <th>Acc Number</th>
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
              <td>7640232221</td>
              <td>N21760</td>
              <td>Cr</td>
              <td>Transfer</td>
              <td style={styles.booked}>Booked</td>
              <td>
                <BocButton bradius="18px" cursor="pointer" bgcolor="#145098">
                  View
                </BocButton>
              </td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>7640232221</td>
              <td>N21760</td>
              <td>Dr</td>
              <td>Deposit</td>
              <td style={styles.withcredit}>With Credit Officer</td>
              <td>
                <BocButton bradius="18px" cursor="pointer" bgcolor="#145098">
                  View
                </BocButton>
              </td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>7640232221</td>
              <td>N21760</td>
              <td>Dr</td>
              <td>Fee</td>
              <td style={styles.completed}>Completed</td>
              <td>
                <BocButton bradius="18px" cursor="pointer" bgcolor="#145098">
                  View
                </BocButton>
              </td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>7640232221</td>
              <td>N21760</td>
              <td>Cr</td>
              <td>Deposit</td>
              <td style={styles.booked}>Booked</td>
              <td>
                <BocButton bradius="18px" cursor="pointer" bgcolor="#145098">
                  View
                </BocButton>
              </td>
            </tr>
            <tr>
              <td>2023-25-04</td>
              <td>7640232221</td>
              <td>N31760</td>
              <td>Dr</td>
              <td>Transfer</td>
              <td style={styles.withcredit}>With Operation</td>
              <td>
                <BocButton bradius="18px" cursor="pointer" bgcolor="#145098">
                  View
                </BocButton>
              </td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>7640232221</td>
              <td>N21760</td>
              <td>Dr</td>
              <td>Fee</td>
              <td style={styles.withdisbursement}>With Disbursement</td>
              <td>
                <BocButton bradius="18px" cursor="pointer" bgcolor="#145098">
                  View
                </BocButton>
              </td>
            </tr>
            <tr>
              <td>2023-25-07</td>
              <td>7640232221</td>
              <td>N41760</td>
              <td>Cr</td>
              <td>Deposit</td>
              <td style={styles.completed}>Completed</td>
              <td>
                <BocButton bradius="18px" cursor="pointer" bgcolor="#145098">
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

export default AccountTransaction;
