import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  employersId: Yup.string().required("Employers ID is required"),
  employersName: Yup.string().required("Employers name is required"),
  employersAddress: Yup.string().required("Employer address is required"),
  dateAdded: Yup.string().required("Date is required"),
  mandateIssued: Yup.string().required("Mandate is required"),
});

const initialValues = {
  employersId: "",
  employersName: "",
  employersAddress: "",
  dateAdded: "",
  mandateIssued: "",
};

const AddEmployer = () => {
  const [message, setMessage] = useState(null);
  const handleSubmit = async (values, { resetForm }) => {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    // Handle form submission logic here
    await fetch(`${apiUrl}/api/agency/employers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    // Reset form after submission
    resetForm();
    // Set message after successful submission
    setMessage("Employer added successfully");
    setTimeout(() => {
      setMessage("");
    }, 5000);

  };

  return (
    <div>
      <div className="TransContainer">
        <DashboardHeadline>Add New Employer</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div style={{ padding: "0 1rem" }}>
              {" "}
              <div className="FieldGroup">
                <label htmlFor="employersId">Employers ID</label>
                <Field
                  type="text"
                  name="employersId"
                  id="employersId"
                  // className="Input"
                />
                <ErrorMessage name="employersId" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="employersName">Employers Name</label>
                <Field
                  type="text"
                  name="employersName"
                  id="employersName"
                  className="Input"
                />
                <ErrorMessage name="employersName" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="employersAddress">Employers Address</label>
                <Field
                  type="text"
                  name="employersAddress"
                  id="employersAddress"
                  className="Input"
                />
                <ErrorMessage name="employersAddress" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="dateAdded">Date Added</label>
                <Field
                  type="date"
                  name="dateAdded"
                  id="dateAdded"
                  className="Input"
                />
                <ErrorMessage name="dateAdded" component="div" />
              </div>

              <div className="RadioCon">
                <label htmlFor="mandateIssued">Mandate Issued</label>
                <div className="Input">
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="mandateIssued"
                      value="true"
                      className="Gap"
                    />
                    Yes
                  </label>
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="mandateIssued"
                      value="false"
                      className="Gap"
                    />
                    No
                  </label>
                </div>

                <ErrorMessage name="mandateIssued" component="div" />
              </div>
            </div>

            {message && (
              <div style={{ textAlign: "center", color: "#145098" }}>
                {message}
              </div>
            )}
            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="submit"
                bgcolor="#ecaa00"
                bradius="18px"
              >
                Add Employer
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddEmployer;
