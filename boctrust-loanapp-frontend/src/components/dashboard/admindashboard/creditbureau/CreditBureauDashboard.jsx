import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import { Modal, Button } from "react-bootstrap";
import CreditCheckForm from "./CreditCheckForm";
import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
import "../customers/Customer.css";
import "../remita/Remita.css";

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
  pending: {
    color: "#ecaa00",
  },
  yes: {
    color: "#5cc51c",
    fontWeight: "bold",
  }
};

const CreditBureauDashboard = () => {
  const [customerId, setCustomerId] = useState("");
  const [showCreditCheckForm, setShowCreditCheckForm] = useState(false);
  const [show, setShow] = useState(false);
  const [creditAnalyst, setCreditAnalyst] = useState("Profsain");

  // fetch all customer
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.customerReducer.customers.customer
  );
  const status = useSelector((state) => state.customerReducer.status);

  useEffect(() => {
    dispatch(fetchAllCustomer());
  }, [dispatch]);

  // handle credit check start btn
  const handleStartCheck = (id) => {
    setCustomerId(id);
    setShow(true);
  };

  // handle cancel check
  const handleCancelCheck = () => {
    setShowCreditCheckForm(false);
    setCustomerId("");
    dispatch(fetchAllCustomer());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showCreditCheckForm]);

  // handle assignment and start credit check
  const assignCustomer = async () => {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    await fetch(
      `${apiUrl}/api/updatecustomer/assignto/${customerId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creditAnalyst,
          isCreditAnalystAssigned: true,
        }),
      }
    );
  };

  const handleProceed = () => {
    assignCustomer(); // assign customer to credit analyst
    setShow(false);
    setShowCreditCheckForm(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {!showCreditCheckForm ? (
        <div>
          <div>
            <Headline text="View by:" />
            <div style={styles.btnBox} className="VBox">
              <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
                Applicantion Today
              </BocButton>
              <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
                Date Range
              </BocButton>
              <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
                Specific User
              </BocButton>
            </div>
          </div>

          {/* table section */}
          {status === "loading" && <PageLoader />}
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
                    <th>Name</th>
                    <th>Employer Name</th>
                    <th>Loan Requested</th>
                    <th>Review</th>
                    <th>Assigned</th>
                    <th>Credit Check</th>
                  </tr>
                </thead>
                <tbody>
                  {customers?.map((customer) => (
                    <tr key={customer._id}>
                      <td>{customer.customerId}</td>
                      <td>
                        {customer.firstname} {customer.lastname}
                      </td>
                      {customer.employername ? (
                        <td>{customer.employername}</td>
                      ) : (
                        <td>N/A</td>
                      )}

                      <td>N{customer.loanamount}</td>
                      <td>Full Details</td>
                      {customer.creditCheck.assignment
                        .isCreditAnalystAssigned ? (
                        <td style={styles.yes}>Yes</td>
                      ) : (
                        <td style={styles.completed}>No</td>
                      )}

                      {!customer.creditCheck.decisionSummary
                        .isCreditOfficerApproved ? (
                        <td>
                          <div>
                            <BocButton
                              bradius="12px"
                              fontSize="14px"
                              width="80px"
                              margin="0 4px"
                              bgcolor="#f64f4f"
                              func={() => handleStartCheck(customer._id)}
                            >
                              Start
                            </BocButton>
                          </div>
                        </td>
                      ) : (
                        <td>
                          <div>
                            <BocButton
                              bradius="12px"
                              fontSize="14px"
                              width="80px"
                              margin="0 4px"
                              bgcolor="#f64f4f"
                              func={() => handleStartCheck(customer._id)}
                            >
                              Done
                            </BocButton>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <NextPreBtn />
          </div>
        </div>
      ) : (
        <div>
          {/* credit check form  */}
          <CreditCheckForm customerId={customerId} />
          <div className="row justify-content-right">
            <div className="col-md-4"></div>
            <button
              className="btn col-sm-12 col-md-4 btn-danger"
              onClick={handleCancelCheck}
            >
              Cancel Check
            </button>
          </div>
        </div>
      )}

      {/* pop up modal */}
      <div>
        <Modal show={show} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title> Assign Customer Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This customer will be assigned to you for credit check. Do you want
            to proceed?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleProceed}>
              Assign/Proceed
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CreditBureauDashboard;
