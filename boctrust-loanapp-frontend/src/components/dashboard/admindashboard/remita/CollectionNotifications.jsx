import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import { Table } from "react-bootstrap";
import Headline from "../../../shared/Headline";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
import getNextMonthDate from "../../../../../utilities/getNextMonthDate";

const CollectionNotifications = () => {
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

  // fetch all customer
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.customerReducer.customers.customer
  );

  const status = useSelector((state) => state.customerReducer.status);

  useEffect(() => {
    dispatch(fetchAllCustomer());
  }, [dispatch]);


  // filter customer by remitaStatus
  const [remitaCustomers, setRemitaCustomers] = useState([]);
  // check if customer is not empty and filter by remitaStatus
  useEffect(() => {
    if (customers?.length > 0) {
      const remitaCustomers = customers.filter(
        (customer) => customer?.remita.loanStatus === "approved"
      );
      setRemitaCustomers(remitaCustomers);
    }
  }, [customers]);

  return (
    <div>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Collections Today
          </BocButton>
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Date Range
          </BocButton>
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Specific User
          </BocButton>
        </div>
      </div>

      {/* data loader */}
      {status === "loading" && <PageLoader />}

      {/* table section */}
      <div className="RBox">
        <DashboardHeadline
          height="52px"
          mspacer="2rem 0 -2.55rem -1rem"
          bgcolor="#145098"
        ></DashboardHeadline>
        <div style={styles.table}>
          <Table borderless hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Customer ID</th>
                <th>Loan Product</th>
                <th>Amount</th>
                <th>Balance Due</th>
                <th>Mandate Ref</th>
                <th>Payment Date</th>
                <th>Notification Date</th>
              </tr>
            </thead>
            <tbody>
              {remitaCustomers.length === 0 && (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No record found
                  </td>
                </tr>
              )}

              {remitaCustomers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.remita.remitaDetails.customerId}</td>
                  <td>{customer.loanproduct || "General Loan"}</td>
                  <td>N{customer.loanamount}</td>
                  <td>N{customer.loantotalrepayment}</td>
                  <td>
                    {customer.remita.disbursementDetails.data.mandateReference}
                  </td>
                  <td>
                    {customer.remita.remitaDetails.firstPaymentDate.slice(
                      0,
                      10
                    )}
                  </td>
                  <td>
                    {getNextMonthDate(
                      customer.remita.remitaDetails.firstPaymentDate.slice(
                        0,
                        10
                      )
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td>C001</td>
                <td>Car Loan</td>
                <td>2,000,000</td>
                <td>700,000</td>
                <td>443535545654</td>
                <td>03-03-2023</td>
                <td>21-03-2023</td>
              </tr>
              <tr>
                <td>C003</td>
                <td>Salary Advance</td>
                <td>200,000</td>
                <td>120,000</td>
                <td>123535545644</td>
                <td>02-04-2023</td>
                <td>30-05-2023</td>
              </tr>
              <tr>
                <td>C002</td>
                <td>SME Loan</td>
                <td>1,500,000</td>
                <td>1,000,000</td>
                <td>333535545609</td>
                <td>01-02-2023</td>
                <td>29-03-2023</td>
              </tr>
              <tr>
                <td>C001</td>
                <td>Travel Loan</td>
                <td>50,000</td>
                <td>20,000</td>
                <td>443535545654</td>
                <td>03-05-2023</td>
                <td>31-06-2023</td>
              </tr>
              <tr>
                <td>C004</td>
                <td>SME Loan</td>
                <td>1,000,000</td>
                <td>900,000</td>
                <td>993535545612</td>
                <td>03-04-2023</td>
                <td>21-05-2023</td>
              </tr>
              <tr>
                <td>C006</td>
                <td>Car Loan</td>
                <td>900,000</td>
                <td>700,000</td>
                <td>443535545699</td>
                <td>01-03-2023</td>
                <td>30-03-2023</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>
    </div>
  );
};

export default CollectionNotifications;
