import { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  productName: Yup.string().required("Product name is required"),
  category: Yup.string().required("Category is required"),
  productImage: Yup.string().required("Product image is required"),
  benefits: Yup.string().required("Benefits is required"),
  features: Yup.string().required("Features is required"),
  interestRate: Yup.number().required("Interest rate is required"),
  interestType: Yup.string().required("Interest type is required"),
  maxTerm: Yup.string().required("Max term is required"),
  termPeriod: Yup.string().required("Term period is required"),
  note: Yup.string().required("Note is required"),
});

const initialValues = {
  productName: "",
  category: "",
  productImage: "",
  benefits: "",
  features: "",
  interestRate: "",
  interestType: "",
  maxTerm: "",
  termPeriod: "",
  note: "",
};

const AddNewLoanProduct = ({ func }) => {
  const [notification, setNotification] = useState("");

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    // Handle form submission logic here
    // create form data
    const formData = new FormData();
    formData.append("productName", values.productName);
    formData.append("category", values.category);
    formData.append("productImage", values.productImage);
    formData.append("benefits", values.benefits);
    formData.append("features", values.features);
    formData.append("interestRate", values.interestRate);
    formData.append("interestType", values.interestType);
    formData.append("maxTerm", values.maxTerm);
    formData.append("termPeriod", values.termPeriod);
    formData.append("note", values.note);

    // send form data to server
    await fetch(`${apiUrl}/api/product/products`, {
      method: "POST",
      enctype: "multipart/form-data",
      body: formData,
    });

    // set open add branch component to true
    // func(false);
    setSubmitting(false);
    resetForm();

    setNotification("Product added successfully");

    // set notification to disappear after 5 seconds
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="TransContainer">
      <DashboardHeadline>New Loan Product</DashboardHeadline>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div className="FieldRow">
          <div className="FieldGroup">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.productName}
            />
            {formik.errors.productName && formik.touched.productName ? (
              <div className="Error">{formik.errors.productName}</div>
            ) : null}
          </div>

          <div className="FieldGroup">
            <label htmlFor="category">Category </label>
            <input
              type="text"
              name="category"
              id="category"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
            {formik.errors.category && formik.touched.category ? (
              <div className="Error">{formik.errors.category}</div>
            ) : null}
          </div>
        </div>

        <div className="FieldRow">
          <div className="FieldGroup">
            <label htmlFor="features">Features</label>
            <input
              type="text"
              name="features"
              id="features"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.features}
            />
            {formik.errors.features && formik.touched.features ? (
              <div className="Error">{formik.errors.features}</div>
            ) : null}
          </div>

          <div className="FieldGroup">
            <label htmlFor="benefits">Benefits </label>
            <input
              type="text"
              name="benefits"
              id="benefits"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.benefits}
            />
            {formik.errors.benefits && formik.touched.benefits ? (
              <div className="Error">{formik.errors.benefits}</div>
            ) : null}
          </div>
        </div>

        <div className="FieldRow">
          <div className="FieldGroup">
            <label htmlFor="interestRate">Interest Rate</label>
            <input
              type="number"
              name="interestRate"
              id="interestRate"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.interestRate}
            />
            {formik.errors.interestRate && formik.touched.interestRate ? (
              <div className="Error">{formik.errors.interestRate}</div>
            ) : null}
          </div>

          <div className="FieldGroup">
            <label htmlFor="interestType">Interest Type </label>
            <input
              type="text"
              name="interestType"
              id="interestType"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.interestType}
            />
            {formik.errors.interestType && formik.touched.interestType ? (
              <div className="Error">{formik.errors.interestType}</div>
            ) : null}
          </div>
        </div>

        <div className="FieldRow">
          <div className="FieldGroup">
            <label htmlFor="maxTerm">Maximum Term</label>
            <input
              type="text"
              name="maxTerm"
              id="maxTerm"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.maxTerm}
            />
            {formik.errors.maxTerm && formik.touched.maxTerm ? (
              <div className="Error">{formik.errors.maxTerm}</div>
            ) : null}
          </div>

          <div className="FieldGroup">
            <label htmlFor="termPeriod">Term Period </label>
            <input
              type="text"
              name="termPeriod"
              id="termPeriod"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.termPeriod}
            />
            {formik.errors.termPeriod && formik.touched.termPeriod ? (
              <div className="Error">{formik.errors.termPeriod}</div>
            ) : null}
          </div>
        </div>

        <div className="FieldRow">
          <div className="FieldGroup IUpload">
            <label htmlFor="productImage">Featured Image</label>
            <input
              type="file"
              name="productImage"
              id="productImage"
              className="Input"
              onChange={(event) => {
                formik.setFieldValue(
                  "productImage",
                  event.currentTarget.files[0]
                );
              }}
              // accept="image/*"
              style={{ paddingBottom: "38px", fontSize: "12px" }}
            />
            {formik.errors.productImage && formik.touched.productImage ? (
              <div className="Error">{formik.errors.productImage}</div>
            ) : null}
          </div>

          <div className="FieldGroup">
            <label htmlFor="note">Note</label>
            <input
              type="text"
              name="note"
              id="note"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.note}
            />
            {formik.errors.note && formik.touched.note ? (
              <div className="Error">{formik.errors.note}</div>
            ) : null}
          </div>
        </div>

        <div className="Notification">
          <p>{notification}</p>
        </div>

        <div className="BtnContainer">
          <BocButton
            type="submit"
            width="220px"
            bgcolor="#ecaa00"
            bradius="18px"
          >
            Submit
          </BocButton>
          <BocButton
            margin="1.5rem 0 0 0"
            type="submit"
            width="220px"
            bgcolor="gray"
            bradius="18px"
            func={() => func(false)}
          >
            Cancel
          </BocButton>
        </div>
      </form>
    </div>
  );
};

AddNewLoanProduct.propTypes = {
  func: PropTypes.func,
};

export default AddNewLoanProduct;
