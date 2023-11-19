import { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  photo: Yup.string().required("Photo is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{11}$/, "Invalid phone number format")
    .required("Phone number is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, one letter, one number, and one special character"
    ),
  userType: Yup.string().required("User type is required"),
  jobRole: Yup.string().required("Job role is required"),
});

const initialValues = {
  fullName: "",
  photo: "",
  email: "",
  phone: "",
  username: "",
  password: "",
  userType: "",
  jobRole: "",
};

const userTypes = [
  { value: "admin", label: "Admin" },
  { value: "md", label: "MD" },
  { value: "coo", label: "COO" },
  { value: "credit_head", label: "Credit Head" },
  { value: "credit_analyst", label: "Credit Analyst" },
  { value: "operation_staff", label: "Operation Staff" },
  { value: "loan_officer", label: "Loan Officer" },
];

const CreateNewAdmin = ({ func }) => {
  const [notification, setNotification] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    // Handle form submission logic here
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("photo", values.photo);
    formData.append("email", values.email.toLowerCase());
    formData.append("phone", values.phone);
    formData.append("username", values.username.toLowerCase());
    formData.append("password", values.password);
    formData.append("userType", values.userType);
    formData.append("jobRole", values.jobRole);

    await fetch(`${apiUrl}/api/admin/register`, {
      method: "POST",
      enctype: "multipart/form-data",
      body: formData,
    });

    // clear fields
    resetForm();

    setNotification("New admin user added successfully");

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const handleClose = () => {
    func(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="TransContainer">
      <DashboardHeadline>Add New Method</DashboardHeadline>
      <form onSubmit={formik.handleSubmit}>
        <div className="FieldRow">
          <div className="FieldGroup">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            {formik.errors.fullName && formik.touched.fullName ? (
              <div className="Error">{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div className="FieldGroup IUpload">
            <label htmlFor="photo">Profile Photo</label>
            <input
              type="file"
              name="photo"
              accept=".jpg, .jpeg, .png"
              id="photo"
              className="Input"
              onChange={(event) => {
                formik.setFieldValue("photo", event.currentTarget.files[0]);
              }}
              style={{ paddingBottom: "38px", fontSize: "12px" }}
            />
            {formik.errors.photo && formik.touched.photo ? (
              <div className="Error">{formik.errors.photo}</div>
            ) : null}
          </div>
        </div>

        <div className="FieldRow">
          <div className="FieldGroup">
            <label htmlFor="email">Office Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="Error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="FieldGroup IUpload">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="Input"
              onChange={formik.handleChange}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <div className="Error">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>

        <div className="FieldRow">
          <div className="FieldGroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username ? (
              <div className="Error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="FieldGroup IUpload">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="Input"
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="Error">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>

        <div className="FieldRow">
          <div className="FieldGroup">
            <label htmlFor="jobRole">Job Role</label>
            <input
              type="text"
              name="jobRole"
              id="jobRole"
              className="Input"
              onChange={formik.handleChange}
              value={formik.values.jobRole}
            />
            {formik.errors.jobRole && formik.touched.jobRole ? (
              <div className="Error">{formik.errors.jobRole}</div>
            ) : null}
          </div>

          <div className="FieldGroup">
            <label htmlFor="userType">Admin Role</label>
            <select
              name="userType"
              id="userType"
              className="Input"
              onChange={formik.handleChange}
            >
              <option value="">Select Role</option>
              {userTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {formik.errors.userType && formik.touched.userType ? (
              <div className="Error">{formik.errors.userType}</div>
            ) : null}
          </div>
        </div>

        {/* notification message */}
        <div className="Notification">
          <p>{notification}</p>
        </div>

        <div className="BtnRow">
          <div className="BtnContainer">
            <BocButton
              fontSize="1.6rem"
              type="button"
              bgcolor="gray"
              bradius="18px"
              func={handleClose}
            >
              Cancel
            </BocButton>
          </div>
          <div className="BtnContainer">
            <BocButton
              fontSize="1.6rem"
              type="submit"
              bgcolor="#ecaa00"
              bradius="18px"
            >
              Submit
            </BocButton>
          </div>
        </div>
      </form>
    </div>
  );
};

CreateNewAdmin.propTypes = {
  func: PropTypes.func,
};

export default CreateNewAdmin;
