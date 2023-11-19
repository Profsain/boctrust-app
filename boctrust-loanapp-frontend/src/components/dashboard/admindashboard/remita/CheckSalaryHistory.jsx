import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import PageLoader from "../../shared/PageLoader";
import NextPreBtn from "../../shared/NextPreBtn";
import CheckSalaryDetails from "./CheckSalaryDetails";
import "./Remita.css";
import "../customers/Customer.css";
import updateSalaryHistory from "./updateSalaryHistory.js";

const CheckSalaryHistory = () => {
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
  };

  // fetch all customer
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.customerReducer.customers.customer
  );
  const status = useSelector((state) => state.customerReducer.status);
  const [customerObj, setCustomerObj] = useState({});
  const [openDetails, setOpenDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchAllCustomer());
  }, [dispatch]);

  // handle salary check
  const handleCheck = async (id) => {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    // find customer by id and update the customerObj
    const customer = customers.find((customer) => customer._id === id);

    setIsLoading(true);

    // get customer history from remita
    const response = await fetch(
      `${apiUrl}/api/remita/get-salary-history`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authorisationCode: customer.bvnnumber,
          firstName: customer.firstname,
          lastName: customer.lastname,
          accountNumber: customer.salaryaccountnumber,
          bankCode: customer.bankcode,
          bvn: customer.bvnnumber || "041",
          authorisationChannel: "WEB",
        }),
      }
    );

    const data = await response.json();
    // set customerObj to remita data
    setCustomerObj(data);

    // update customer history
    await updateSalaryHistory(customer._id, data);

    setIsLoading(false);
    setOpenDetails(true);

    // call dispatch to update list
    dispatch(fetchAllCustomer());
  };

  // handle view
  const handleView = (id) => {
    // find customer by id
    const customer = customers.find((customer) => customer._id === id);
    // console.log(id, customer)

    // set customerObj to customer
    setCustomerObj(customer);
    setOpenDetails(true);
  };

  const handleAction = async (e, id) => {
    e.preventDefault();
    const actionBtn = e.target.innerText;

    // find customer by id
    const customer = customers.find((customer) => customer._id === id);
    const data = customer.remita.remitaDetails;

    if (actionBtn === "Process") {
      // update remitaStatus to processed
      await updateSalaryHistory(id, data, "processed");
    } else if (actionBtn === "Drop") {
      // update remitaStatus to droped
      await updateSalaryHistory(id, data, "dropped");

      // send email notification to customer
    }

    // call dispatch to update list
    dispatch(fetchAllCustomer());
  };

  return (
    <div>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Applicant Today
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Account Number</th>
                <th>BVN</th>
                <th>Do Check</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers?.map((customer) => {
                if (customer.kyc.isKycApproved) {
                  return (
                    <tr key={customer._id}>
                      <td>{customer.firstname}</td>
                      <td>{customer.lastname}</td>
                      <td>{customer.salaryaccountnumber}</td>
                      <td>{customer.bvnnumber}</td>

                      {customer.remita?.isRemitaCheck === true ? (
                        <td
                          style={styles.pending}
                          className="startBtn"
                          onClick={() => handleView(customer._id)}
                        >
                          View
                        </td>
                      ) : (
                        <td
                          style={styles.pending}
                          className="startBtn"
                          onClick={() => handleCheck(customer._id)}
                        >
                          Start
                        </td>
                      )}

                      <td>
                        {customer.remita?.remitaStatus === "processed" && (
                          <div>
                            <BocButton
                              bradius="12px"
                              fontSize="14px"
                              width="90px"
                              margin="0 4px"
                              bgcolor="#145088"
                            >
                              Processed
                            </BocButton>
                          </div>
                        )}
                        {customer.remita?.remitaStatus === "dropped" && (
                          <div>
                            <BocButton
                              bradius="12px"
                              fontSize="14px"
                              width="90px"
                              margin="0 4px"
                              bgcolor="#f64f4f"
                            >
                              Dropped
                            </BocButton>
                          </div>
                        )}
                        {customer.remita?.remitaStatus === "pending" && (
                          <div>
                            <BocButton
                              bradius="12px"
                              fontSize="14px"
                              width="90px"
                              margin="0 4px"
                              bgcolor="#145088"
                              func={(e) => handleAction(e, customer._id)}
                            >
                              Process
                            </BocButton>
                            <BocButton
                              bradius="12px"
                              fontSize="14px"
                              width="90px"
                              margin="0 4px"
                              bgcolor="#f64f4f"
                              func={(e) => handleAction(e, customer._id)}
                            >
                              Drop
                            </BocButton>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* details section */}
      {isLoading ? <PageLoader /> : null}
      {openDetails && (
        <CheckSalaryDetails
          customerObj={customerObj}
          setOpenDetails={setOpenDetails}
        />
      )}
    </div>
  );
};

export default CheckSalaryHistory;
