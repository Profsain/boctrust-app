/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../../../redux/reducers/productReducer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditLoanProduct = (props) => {
  const dispatch = useDispatch();
  const product = props.product;

  // form state
  const [editProductName, setEditProductName] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editFeatures, setEditFeatures] = useState("");
  const [editBenefits, setEditBenefits] = useState("");
  const [editInterestRate, setEditInterestRate] = useState("");
  const [editInterestType, setEditInterestType] = useState("");
  const [editMaxTerm, setEditMaxTerm] = useState("");
  const [editTermPeriod, setEditTermPeriod] = useState("");
  const [editNote, setEditNote] = useState("");

  // pass object data to form
  const updateFormObject = () => {
    setEditProductName(product.productName);
    setEditCategory(product.category);
    setEditFeatures(product.features);
    setEditBenefits(product.benefits);
    setEditInterestRate(product.interestRate);
    setEditInterestType(product.interestType);
    setEditMaxTerm(product.maxTerm);
    setEditTermPeriod(product.termPeriod);
    setEditNote(product.note);
  };

  useEffect(() => {
    updateFormObject();
  }, [product]);

  // clear form fields
  const clearForm = () => {
    setEditProductName("");
    setEditCategory("");
    setEditFeatures("");
    setEditBenefits("");
    setEditInterestRate("");
    setEditInterestType("");
    setEditMaxTerm("");
    setEditTermPeriod("");
    setEditNote("");
    dispatch(fetchProduct());
  };

  // close model box
  const handleClose = () => {
    props.onHide();
    clearForm();
  };

  // submit update to api endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = import.meta.env.VITE_BASE_URL;
    
    const updatedProduct = {
      productName: editProductName,
      category: editCategory,
      features: editFeatures,
      benefits: editBenefits,
      interestRate: editInterestRate,
      interestType: editInterestType,
      maxTerm: editMaxTerm,
      termPeriod: editTermPeriod,
      note: editNote,
    };

    await fetch(`${apiUrl}/api/product/products/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
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
          Edit Loan Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* edit form */}
        <form onSubmit={handleSubmit}>
          <div className="FieldGroup">
            <label htmlFor="productName" style={{ marginTop: "-1rem" }}>
              Product Name
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editProductName}
              onChange={(e) => setEditProductName(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="category" style={{ marginTop: "-1rem" }}>
              Product Category
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="features" style={{ marginTop: "-1rem" }}>
              Features
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editFeatures}
              onChange={(e) => setEditFeatures(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="benefits" style={{ marginTop: "-1rem" }}>
              Benefits
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editBenefits}
              onChange={(e) => setEditBenefits(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="interestRate" style={{ marginTop: "-1rem" }}>
              Interest Rate
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editInterestRate}
              onChange={(e) => setEditInterestRate(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="interestType" style={{ marginTop: "-1rem" }}>
              Interest Type
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editInterestType}
              onChange={(e) => setEditInterestType(e.target.value)}
            />
          </div>
          
          <div className="FieldGroup">
            <label htmlFor="maxTerm" style={{ marginTop: "-1rem" }}>
              Max Term
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editMaxTerm}
              onChange={(e) => setEditMaxTerm(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="termPeriod" style={{ marginTop: "-1rem" }}>
              Term Period
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editTermPeriod}
              onChange={(e) => setEditTermPeriod(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="note" style={{ marginTop: "-1rem" }}>
              Note
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editNote}
              onChange={(e) => setEditNote(e.target.value)}
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

export default EditLoanProduct;
