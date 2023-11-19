/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployers } from "../../../../redux/reducers/employersManagerReducer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditEmployer = (props) => {
  const dispatch = useDispatch();
  const employers = props.employerData;

  // form state
  const [editEmployerName, setEditEmployerName] = useState("");
  const [editEmployerAddress, setEditEmployerAddress] = useState("");
  const [editMandateTitle, setEditMandateTitle] = useState("");
  const [editMandateDuration, setEditMandateDuration] = useState("");
  const [editMaximumTenure, setEditMaximumTenure] = useState("");
  const [editMaximumAmount, setEditMaximumAmount] = useState("");

  // pass object data to form
  const updateFormObject = () => {
    // check if object is empty
    if (Object.keys(employers).length === 0) {
      return;
    }
    
    setEditEmployerName(employers.employersName);
    setEditEmployerAddress(employers.employersAddress);
    setEditMandateTitle(employers.mandateRule.mandateTitle);
    setEditMandateDuration(employers.mandateRule.mandateDuration);
    setEditMaximumTenure(employers.statementRule.maximumTenure);
    setEditMaximumAmount(employers.statementRule.maximumAmount);
  };

  useEffect(() => {
    updateFormObject();
  }, [employers]);

  // clear form fields
  const clearForm = () => {
    setEditEmployerName("");
    setEditEmployerAddress("");
    setEditMandateTitle("");
    setEditMandateDuration("");
    setEditMaximumTenure("");
    setEditMaximumAmount("");
  };

  // close model box
  const handleClose = () => {
    props.onHide();
    clearForm();
    dispatch(fetchEmployers());
  };

  // submit update to api endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = import.meta.env.VITE_BASE_URL;

    const updatedEmployer = {
      employersName: editEmployerName,
      employersAddress: editEmployerAddress,
      mandateTitle: editMandateTitle,
      mandateDuration: editMandateDuration,
      maximumTenure: editMaximumTenure,
      maximumAmount: editMaximumAmount,
    };
    await fetch(`${apiUrl}/api/agency/employers/${employers._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployer),
    });

    clearForm();
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
          Edit Employer Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* edit form */}
        <form onSubmit={handleSubmit}>
          <div className="FieldGroup">
            <label htmlFor="employerName" style={{ marginTop: "-1rem" }}>
              Employers Name
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editEmployerName}
              onChange={(e) => setEditEmployerName(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="employerAddress" style={{ marginTop: "-1rem" }}>
              Employers Address
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editEmployerAddress}
              onChange={(e) => setEditEmployerAddress(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="mandateTitle" style={{ marginTop: "-1rem" }}>
              Mandate Title
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editMandateTitle}
              onChange={(e) => setEditMandateTitle(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="mandateDuration" style={{ marginTop: "-1rem" }}>
              Mandate Duration
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editMandateDuration}
              onChange={(e) => setEditMandateDuration(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="maximumTenure" style={{ marginTop: "-1rem" }}>
              Maximum Tenure
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editMaximumTenure}
              onChange={(e) => setEditMaximumTenure(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="maximumAmount" style={{ marginTop: "-1rem" }}>
              Maximum Amount
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editMaximumAmount}
              onChange={(e) => setEditMaximumAmount(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        <Button variant="primary" type="button" onClick={handleSubmit}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditEmployer;
