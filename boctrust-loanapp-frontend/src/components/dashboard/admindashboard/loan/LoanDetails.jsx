import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import Headline from "../../../shared/Headline";
import RowCard from "../remita/RowCard";

const LoanDetails = ({
  loanObj,
  show,
  handleClose,
  handleApproval,
  currentPage,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Headline text={loanObj.banking.accountDetails.Message.FullName} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RowCard
            title="Loan ID:"
            text={loanObj.banking.accountDetails.Message.Id}
          />
          <hr />
          <RowCard title="Valid BVN:" text={loanObj.bvnnumber} />
          <hr />
          <RowCard title="KYC:" text="Completed" />
          <hr />
          <RowCard
            title="Loan Product:"
            text={loanObj.loanProduct || "General Loan"}
          />
          <hr />
          <RowCard title="Loan Amount:" text={loanObj.loanamount} />
          <hr />
          <RowCard title="Total Repayment:" text={loanObj.loantotalrepayment} />
          <hr />
          <RowCard title="Repayment Month:" text={loanObj.numberofmonth} />
          <hr />
          <RowCard title="Loan Status:" text={loanObj.kyc.loanstatus} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {currentPage === "pending" && (
            <Button onClick={handleApproval} variant="primary">
              Approve
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

LoanDetails.propTypes = {
  handleClose: PropTypes.func,
  handleApproval: PropTypes.func,
  show: PropTypes.bool,
  currentPage: PropTypes.string,
  loanObj: PropTypes.object,
};

export default LoanDetails;
