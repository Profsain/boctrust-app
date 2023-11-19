import PropTypes from "prop-types"
import { useState } from "react";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import "./Credit.css";
// function
import addMoreLenders from "./addMoreLender";

const PaySlipAnalysis = ({ customerId }) => {
  const [isApplicantCivilianPolice, setIsApplicantCivilianPolice] =
    useState(false);
  const [
    isPaySlipContainsMoreThenFiveLenders,
    setIsPaySlipContainsMoreThenFiveLenders,
  ] = useState(false);
  const [
    monthlyDeductionNotMoreThan50Percent,
    setMonthlyDeductonNotMoreThan50Percent,
  ] = useState(false);
  const [takeHomePayNotLessThan20Percent, setTakeHomePayNotLessThan20Percent] =
    useState(false);
  const [takeHomePayNotLessThan30K, setTakeHomePayNotLessThan30K] =
    useState(false);
  const [netPayNotLessThan30K, setNetPayNotLessThan30K] = useState(false);
  // const [customerId, setCustomerId] = useState("64fecbd663898c27692bea4c");

  const handleCivilianPolice = () => {
    setIsApplicantCivilianPolice(!isApplicantCivilianPolice);
  };
  const handleChange = () => {
    setMonthlyDeductonNotMoreThan50Percent(
      !monthlyDeductionNotMoreThan50Percent
    );
  };
  const handleDeduction = () => {
    setTakeHomePayNotLessThan20Percent(!takeHomePayNotLessThan20Percent);
  };
  const handleTakehome = () => {
    setTakeHomePayNotLessThan30K(!takeHomePayNotLessThan30K);
  };
  const handlePayslip = () => {
    setIsPaySlipContainsMoreThenFiveLenders(
      !isPaySlipContainsMoreThenFiveLenders
    );
  };
  const handleNetPay = () => {
    setNetPayNotLessThan30K(!netPayNotLessThan30K);
  };

  // form state
  const [formState, setFormState] = useState({
    netPay: "",
    grossPay: "",
    lenders: "",
    extraLenders: "",
    extraLenderName: "",
    extraLenderDeduction: "",
    monthlyLoanRepayment: "",
    dateOfBirth: "",
    dateOfAppointment: "",
    uploadPaySlip: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // submit form data to backend
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = import.meta.env.VITE_BASE_URL;

    const formData = new FormData(); // create a new FormData object
    formData.append("netPay", formState.netPay); // add the fields to formData
    formData.append("grossPay", formState.grossPay);
    formData.append("lenders", formState.lenders);
    formData.append("extraLenders", formState.extraLenders);
    formData.append("monthlyLoanRepayment", formState.monthlyLoanRepayment);
    formData.append("dateOfBirth", formState.dateOfBirth);
    formData.append("dateOfAppointment", formState.dateOfAppointment);
    formData.append("isApplicantCivilianPolice", isApplicantCivilianPolice);
    formData.append("uploadPaySlip", formState.uploadPaySlip);
    formData.append(
      "isPaySlipContainsMoreThenFiveLenders",
      isPaySlipContainsMoreThenFiveLenders
    );
    formData.append("extraLenderName", formState.extraLenderName);
    formData.append("extraLenderDeduction", formState.extraLenderDeduction);
    formData.append(
      "monthlyDeductionNotMoreThan50Percent",
      monthlyDeductionNotMoreThan50Percent
    );
    formData.append(
      "takeHomePayNotLessThan20Percent",
      takeHomePayNotLessThan20Percent
    );
    formData.append("takeHomePayNotLessThan30K", takeHomePayNotLessThan30K);
    formData.append("netPayNotLessThan30K", netPayNotLessThan30K);


    // send formData object to backend
    await fetch(
      `${apiUrl}/api/updatecustomer/paySlipAnalysis/${customerId}`,
      {
        method: "PUT",
        enctype: "multipart/form-data",
        body: formData,
      }
    );

    // clear form fields
    setFormState({
      netPay: "",
      grossPay: "",
      lenders: "",
      extraLenders: "",
      extraLenderName: "",
      extraLenderDeduction: "",
      monthlyLoanRepayment: "",
      dateOfBirth: "",
      dateOfAppointment: "",
      uploadPaySlip: "",
    });
  };

  return (
    <div className="TransContainer RBox">
      <div className=" d-flex justify-content-center p-5">
        <h4>Pay Slip Analysis</h4>
      </div>

      {/* step 1 */}
      <div>
        {/* Pay slip check */}
        <form
          className="row"
          encType="multipart/form-data"
          onSubmit={handleFormSubmit}
        >
          <div className="col-sm-12 col-md-6">
            <h6 className="creditTitle">Pay Slip Data</h6>

            <div className="row mb-3">
              <label htmlFor="netPay" className="col-form-label col-4 mt-2">
                Enter Net Pay
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="netPay"
                  value={formState.netPay}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Enter Gross Pay
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="grossPay"
                  value={formState.grossPay}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Number of Lenders on Slip
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="lenders"
                  value={formState.lenders}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Extra Lenders discovered
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="extraLenders"
                  value={formState.extraLenders}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            {/* extra lender details */}
            <div id="extraLender">
              <hr />
              <h5>Add Extra Lender Details</h5>
              <div className="row mb-3">
                <label
                  htmlFor="dSearchDate"
                  className="col-form-label col-4 mt-2"
                >
                  Name of Lender
                </label>
                <div className="col-8">
                  <input type="text" className="form-control lenderName" />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="dSearchDate"
                  className="col-form-label col-4 mt-2"
                >
                  Monthly Deductions
                </label>
                <div className="col-8">
                  <input type="text" className="form-control lenderDeduction" />
                </div>
              </div>
              <div id="extraDetails"></div>
              <div className="moreBox">
                <button
                  onClick={addMoreLenders}
                  type="button"
                  className="btnAdd"
                >
                  +
                </button>
                <p>Add More Lenders</p>
              </div>
            </div>
            {/* extra lender details end */}

            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Monthly Loan Repayment
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="monthlyLoanRepayment"
                  value={formState.monthlyLoanRepayment}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Date of Birth
              </label>
              <div className="col-8">
                <input
                  type="date"
                  className="form-control"
                  name="dateOfBirth"
                  value={formState.dateOfBirth}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Date of Appointment
              </label>
              <div className="col-8">
                <input
                  type="date"
                  className="form-control"
                  name="dateOfAppointment"
                  value={formState.dateOfAppointment}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Is applicant a civilian police?
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isApplicantCivilianPolice}
                  onChange={handleCivilianPolice}
                />
                <label className="form-check-label mx-3 checked">
                  {isApplicantCivilianPolice ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Upload Pay Slip
              </label>
              <div className="col-8">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    e.target.files[0];
                  }}
                />
              </div>
            </div>
          </div>

          {/* report confirmation */}
          <div className="col-sm-12 col-md-6 midBorder">
            <h6 className="creditTitle">Report Confirmation</h6>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Applicant Payslip does not contain more than 5 lenders
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isPaySlipContainsMoreThenFiveLenders}
                  onChange={handlePayslip}
                />
                <label className="form-check-label mx-3 checked">
                  {isPaySlipContainsMoreThenFiveLenders ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Customer Deduction for monthly loan not more than 50% of Net
                  pay
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={monthlyDeductionNotMoreThan50Percent}
                  onChange={handleChange}
                />
                <label className="form-check-label mx-3 checked">
                  {monthlyDeductionNotMoreThan50Percent ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Customer Take home not less than 20% of Gross Pay
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={takeHomePayNotLessThan20Percent}
                  onChange={handleDeduction}
                />
                <label className="form-check-label mx-3 checked">
                  {takeHomePayNotLessThan20Percent ? "Yes" : "No"}
                </label>
              </div>
            </div>
            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Customer Take home not less than N30,000
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={takeHomePayNotLessThan30K}
                  onChange={handleTakehome}
                />
                <label className="form-check-label mx-3 checked">
                  {takeHomePayNotLessThan30K ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Customer Net Pay is N30,000 or more
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={netPayNotLessThan30K}
                  onChange={handleNetPay}
                />
                <label className="form-check-label mx-3 checked">
                  {netPayNotLessThan30K ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row mx-5 align-items-center">
              <button type="submit" className="btn btn-warning mt-3">
                Update Report
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

PaySlipAnalysis.propTypes = {
  customerId: PropTypes.string
}

export default PaySlipAnalysis;
