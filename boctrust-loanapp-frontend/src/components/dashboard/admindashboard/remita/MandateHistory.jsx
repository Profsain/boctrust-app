import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
import MandateHistoryDetailsModel from "./MandateHistoryDetailsModel";
import getNextMonthDate from "../../../../../utilities/getNextMonthDate";

const MandateHistory = () => {
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
      fontSize: "0.9rem",
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
  const remitaCustomers = customers.filter(
    (customer) => customer?.remita.loanStatus === "approved"
  );

  // handle mandate view
  const [show, setShow] = useState(false);
  const [viewLoader, setViewLoader] = useState(false);
  const [mandateObj, setMandateObj] = useState({});

  const handleMandateView = async (id) => {
    const apiUrl = import.meta.env.VITE_BASE_URL;

    setViewLoader(true);
    // find customer by id
    const customer = customers.find((customer) => customer._id === id);

    // call mandate history api
    const response = await fetch(
      `${apiUrl}/api/remita/mandate-history`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // send customer details to remita
        body: JSON.stringify({
          customer: customer,
        }),
      }
    );
    const data = await response.json();

    // update model object
    if (data.data.status === "success") {
      setMandateObj(data.data);
    }
    // open model
    setShow(true);

    setViewLoader(false);
  };

  return (
    <>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Today&apos;s Mandate
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
          mspacer="2rem 0 -2.5rem -1rem"
          bgcolor="#145098"
        ></DashboardHeadline>
        <div style={styles.table}>
          <Table borderless hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Salary Account Number</th>
                <th>Customer Name</th>
                <th>Employer Name</th>
                <th>Total Disbursed</th>
                <th>Date of Disbursement</th>
                <th>Collection Start Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {remitaCustomers.length === 0 && (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    No record found
                  </td>
                </tr>
              )}

              {remitaCustomers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.salaryaccountnumber}</td>
                  <td>
                    {customer.firstname} {customer.lastname}
                  </td>
                  <td>{customer.employername || "N/A"}</td>
                  <td>N{customer.loantotalrepayment}</td>
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
                  <td style={styles.padding}>
                    {viewLoader && <PageLoader width="25" />}
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="90px"
                      margin="0 4px"
                      bgcolor="#7dd50e"
                      func={() => handleMandateView(customer._id)}
                    >
                      View
                    </BocButton>
                  </td>
                </tr>
              ))}

              <tr>
                <td>2346161553</td>
                <td>Cynthia Bola</td>
                <td>NPF</td>
                <td>75,000</td>
                <td>03-03-2023</td>
                <td>03-04-2023</td>
                <td style={styles.padding}>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                </td>
              </tr>
              <tr>
                <td>2346161543</td>
                <td>John Doe</td>
                <td>Nigeria Custom</td>
                <td>750,000</td>
                <td>01-04-2023</td>
                <td>01-05-2023</td>
                <td style={styles.padding}>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                </td>
              </tr>
              <tr>
                <td>2346161599</td>
                <td>Musa Misola</td>
                <td>Immigration</td>
                <td>500,000</td>
                <td>01-03-2023</td>
                <td>01-04-2023</td>
                <td style={styles.padding}>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* mandate view model */}
      <MandateHistoryDetailsModel
        show={show}
        onHide={() => setShow(false)}
        customer={mandateObj}
      />
    </>
  );
};

export default MandateHistory;
