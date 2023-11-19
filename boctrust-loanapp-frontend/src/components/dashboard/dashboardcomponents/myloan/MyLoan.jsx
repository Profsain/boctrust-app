import Table from "react-bootstrap/Table";
import BocButton from "../../shared/BocButton";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const MyLoan = () => {
  const styles = {
    head: {
      color: "#fff",
      fontSize: "1rem",
    },
    table: {
      marginLeft: "-1rem",
    },
  };

  return (
    <div className="MLoan">
      <DashboardHeadline
        height="46px"
        mspacer="2rem 2rem -2.55rem -2rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <Table borderless hover responsive="sm" style={styles.table} className="DTable">
        <thead style={styles.head}>
          <tr>
            <th>Loan ID</th>
            <th>Loan Product</th>
            <th>Applied Amount</th>
            <th>Total Payable</th>
            <th>Amount Paid</th>
            <th>Due Amount</th>
            <th>Release Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#ecaa00">
                Booked
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1012</td>
            <td>Car Loan</td>
            <td>N2,200000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N223000</td>
            <td>18-05-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#ecaa66">
                With Credit
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1013</td>
            <td>SME Loan</td>
            <td>N2000000</td>
            <td>N290000</td>
            <td>N0.00</td>
            <td>N90300</td>
            <td>20-03-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#7dd50e">
                Completed
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1023</td>
            <td>Salary Advance</td>
            <td>N50000</td>
            <td>N28000</td>
            <td>N0.00</td>
            <td>N23000</td>
            <td>05-02-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#7dd50e">
                Completed
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#145098">
                With COO
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Car Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#f64f4f">
                With Operation
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N230000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-07-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#ecaa00">
                Booked
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Car Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#7dd50e">
                Completed
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="120px" cursor="pointer" bgcolor="#ecaa00">
                Booked
              </BocButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MyLoan;
