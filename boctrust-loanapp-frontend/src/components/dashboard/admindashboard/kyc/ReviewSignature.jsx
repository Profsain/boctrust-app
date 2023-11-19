import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
import "./Kyc.css";

const ReviewSignature = () => {
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


  return (
    <div>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Recent Application
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
                <th>Is there a match</th>
                <th>Valid ID Submitted</th>
                <th>Facial Capture Done</th>
                <th>Valid Signature</th>
                <th>KYC Approved</th>
              </tr>
            </thead>
            <tbody>
              {customers?.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.customerId}</td>
                  <td>{customer.firstname + " " + customer.lastname}</td>
                  <td>
                    {customer.kyc.isFacialMatch ? (
                      <span style={styles.approved}>Yes</span>
                    ) : (
                      <span style={styles.completed}>No</span>
                    )}
                  </td>
                  <td>
                    {customer.kyc.isIdCardValid ? (
                      <span style={styles.approved}>Yes</span>
                    ) : (
                      <span style={styles.completed}>No</span>
                    )}
                  </td>
                  <td>
                    {customer.kyc.isPhotoCaptured ? (
                      <span style={styles.approved}>Yes</span>
                    ) : (
                      <span style={styles.completed}>No</span>
                    )}
                  </td>
                  <td>
                    {customer.kyc.isSignatureValid ? (
                      <span style={styles.approved}>Yes</span>
                    ) : (
                      <span style={styles.completed}>No</span>
                    )}
                  </td>
                  <td>
                    {customer.kyc.isKycApproved ? (
                      <span style={styles.approved}>Yes</span>
                    ) : (
                      <span style={styles.completed}>No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>
    </div>
  );
};

export default ReviewSignature;
