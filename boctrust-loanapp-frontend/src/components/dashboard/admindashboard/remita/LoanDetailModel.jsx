/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DetailsCard from "./DetailsCard";
import PageLoader from "../../shared/PageLoader";
import updateSalaryHistory from "./updateSalaryHistory.js";
import "./Remita.css";

const LoanDetailModel = (props) => {
  const customer = props.customer;
  const userType = props.usertype;
  const remitaData = customer?.remita?.remitaDetails;
  const [isLoading, setIsLoading] = useState(false);

  // close model box
  const handleClose = () => {
    props.onHide();
  };

  // submit update to api endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = import.meta.env.VITE_BASE_URL;

    setIsLoading(true);

    // get customer history from remita
    const response = await fetch(
      `${apiUrl}/api/remita/loan-disbursement-notification`,
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

    const disbursement = await response.json();

    if (disbursement.data.status === "success") {
      // update customer loan approval status
      await updateSalaryHistory(
        customer._id,
        remitaData,
        "processed",
        "approved",
        disbursement.data
      );
    }

    setIsLoading(false);

    handleClose();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {customer.firstname} {customer.lastname} Loan Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* details section */}
        <div className="row">
          <div className="col-sm12 col-md-6 left-col">
            <DetailsCard
              title="Disbursement Account Number"
              text={
                customer.disbursementaccountnumber ||
                customer.salaryaccountnumber
              }
            />
            <DetailsCard
              title="Disbursement Bank"
              text={customer.disbursementbankname || customer.salarybankname}
            />

            <DetailsCard title="Income from employer" text="N250,000" />

            <DetailsCard
              title="Loan Amount"
              text={`N${customer.loanamount || "0.00"}`}
            />

            <DetailsCard
              title="Collection Amount"
              text={`N${customer.loantotalrepayment || "0.00"}`}
            />
          </div>
          <div className="col-sm12 col-md-6">
            <DetailsCard
              title="Date of Disbursement"
              text="23-02-2023 .  16:49"
            />

            <DetailsCard
              title="Date of Collection"
              text="23-03-2023 .  17:25"
            />

            <DetailsCard title="Total Collection amount" text="N122,500" />

            <DetailsCard title="Number of Repayements" text="2" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {isLoading && <PageLoader />}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {userType === "admin" && (
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Approve Loan
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default LoanDetailModel;
