import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import { Table } from "react-bootstrap";
import DashboardHeadline from "../../shared/DashboardHeadline";
import Headline from "../../../shared/Headline";
import BocButton from "../../shared/BocButton";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
import "./Remita.css";

import getDateOnly from "../../../../../utilities/getDate";
import LoanDetailModel from "./LoanDetailModel";

const RemitaDashboard = () => {
  const styles = {
    container: {
      margin: "0 4rem 0 0",
    },
    btnBox: {
      display: "flex",
      justifyContent: "center",
    },
    view: {
      backgroundColor: "#f5f5f7",
      padding: "0.3rem 0.9rem 4rem 0.9rem",
      marginTop: "3rem",
    },
    ref: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1.9rem 4rem ",
    },
    inputBox: {
      color: "#145098",
    },
    spanIn: {
      paddingRight: "1.5rem",
    },
    head: {
      color: "#fff",
      fontSize: "14px",
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
  };

  // fetch all customer
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.customerReducer.customers.customer
  );

  const status = useSelector((state) => state.customerReducer.status);

  // current login admin user
  const currentUser = useSelector((state) => state.adminAuth.user);
  const userType = currentUser.userType;
 

  const [openModel, setOpenModel] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState("");

  useEffect(() => {
    dispatch(fetchAllCustomer());
  }, [dispatch]);

  // filter customer by remitaStatus
  const remitaCustomers = customers.filter(
    (customer) => customer?.remita.remitaStatus === "processed"
  );

  // handle view details
  const handleView = (id) => {
    const customer = customers.find((customer) => customer._id === id);
    setCurrentCustomer(customer);
    setOpenModel(true);
  };

  return (
    <>
      <div className="DetailSection DCard" style={styles.container}>
        <div>
          <Headline text="View by:" />
          <div style={styles.btnBox} className="VBox">
            <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
              Disbursement Today
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
            height="79px"
            mspacer="3.9rem -1rem -3.9rem -1rem"
            bgcolor="#145098"
          ></DashboardHeadline>
          <div style={styles.table}>
            <Table borderless hover responsive="sm">
              <thead style={styles.head}>
                <tr>
                  <th>Customer Acct No</th>
                  <th>Name</th>
                  <th>Income from Employer</th>
                  <th>Loan Amount</th>
                  <th>Collection Amount</th>
                  <th>Date of Disbursement</th>
                  <th>Date of Collection </th>
                  <th>COO Approval</th>
                  <th>Booked Loan</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {remitaCustomers?.map((customer) => {
                  return (
                    <tr key={customer._id}>
                      <td>
                        {customer.disbursementaccountnumber ||
                          customer.salaryaccountnumber}
                      </td>
                      <td>
                        {customer.firstname} {customer.lastname}
                      </td>
                      <td>N{customer.netmonthlyincome || "0.00"}</td>
                      <td>N{customer.loanamount}</td>
                      <td>N{customer.loantotalrepayment || "0.00"}</td>
                      <td>{getDateOnly(customer.updatedAt)}</td>
                      <td>
                        {customer?.remita?.remitaDetails?.data?.data?.firstPaymentDate.slice(
                          0,
                          10
                        ) || "N/A"}
                        {/* Date */}
                      </td>
                      {customer?.remita.loanStatus === "approved" ? (
                        <td style={styles.approved}>Done</td>
                      ) : (
                        <td style={styles.pending}>Pending</td>
                      )}

                      {customer?.remita.loanStatus === "approved" ? (
                        <td style={styles.approved}>Processed</td>
                      ) : (
                        <td style={styles.completed}>Pending</td>
                      )}

                      <td
                        onClick={() => handleView(customer._id)}
                        className="startBtn"
                        style={styles.completed}
                      >
                        View
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>7456161553</td>
                  <td>Cynthia Aremu</td>
                  <td>N230,000</td>
                  <td>N75,000</td>
                  <td>N80,500</td>
                  <td>03-03-2023</td>
                  <td>30-03-2023</td>
                  <td style={styles.approved}>Done</td>
                  <td style={styles.approved}>Processed</td>
                  <td style={styles.completed}>View</td>
                </tr>
                <tr>
                  <td>7456161598</td>
                  <td>Ebuka Akim</td>
                  <td>N300,000</td>
                  <td>N750,000</td>
                  <td>N900,000</td>
                  <td>01-02-2023</td>
                  <td>30-03-2023</td>
                  <td style={styles.pending}>Pending</td>
                  <td style={styles.pending}>Pending</td>
                  <td style={styles.completed}>View</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <NextPreBtn />
        </div>

        {/* loan details model */}
        <LoanDetailModel
          customer={currentCustomer}
          usertype={userType}
          show={openModel}
          onHide={() => setOpenModel(false)}
        />
      </div>
    </>
  );
};

export default RemitaDashboard;
