import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployers } from "../../../../redux/reducers/employersManagerReducer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  mandateTitle: Yup.string().required("Mandate title is required"),
  mandateDuration: Yup.string().required("Mandate duration is required"),
  mandateUser: Yup.string().required("Mandate user is required"),
  allowStacking: Yup.string().required("Allow stacking is required"),
  dateCreated: Yup.string().required("Date created is required"),
  // secondaryDuration: Yup.string().required("Secondary duration is required"),
  addEmployerStack: Yup.string().required("Add employer stack is required"),
});

const initialValues = {
  mandateTitle: "",
  mandateDuration: "",
  mandateUser: "",
  allowStacking: "",
  dateCreated: "",
  secondaryDuration: "",
  addEmployerStack: "",
};

// Define options for select inputs
const mandateTitles = [
  {
    value: "365 Days Eligibility",
    label: "Loan Eligibility after 365 days",
  },
  {
    value: "365 Days Eligibility (Stacked)",
    label: "Loan Eligibility after 365 days (stacked)",
  },
  {
    value: "180 Days Eligibility",
    label: "Loan Eligibility after 180 days",
  },
  {
    value: "90 Days Eligibility",
    label: "Loan Eligibility after 90 days",
  },
  {
    value: "30 Days Eligibility",
    label: "Loan Eligibility after 30 days",
  },

  // Add more options as needed
];

const durationOptions = [
  { value: "365 days", label: "365 Days" },
  { value: "180 days", label: "180 Days" },
  { value: "90 days", label: "90 Days" },
  { value: "30 days", label: "30 Days" },
  // Add more options as needed
];

const secondaryDuration = [
  { value: "365", label: "365 Days" },
  { value: "180", label: "180 Days" },
  { value: "90", label: "90 Days" },
  { value: "30", label: "30 Days" },
  // Add more options as needed
];

const MandateRules = () => {
  const [message, setMessage] = useState(null);
  // Fetch employers from redux store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployers());
  }, [dispatch]);

  // Get employers from redux store
  const employers = useSelector(
    (state) => state.employersManagerReducer.employers.employers
  );

  const employerOptions = employers?.map((employer) => ({
    value: employer._id,
    label: employer.employersName,
  }));

  const handleSubmit = async (values, { resetForm }) => {
    const id = values.addEmployerStack;
    const apiUrl = import.meta.env.VITE_BASE_URL;
    // Handle form submission logic here
    await fetch(
      `${apiUrl}/api/agency/employers/${id}/mandateRule`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    // Reset form after submission
    resetForm();
    // Set message after successful submission
    setMessage("Mandate rule added successfully");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div>
      <div className="TransContainer">
        <DashboardHeadline>Create New Mandate Rule</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="mandateTitle">Mandate Title</label>
                <Field
                  as="select"
                  name="mandateTitle"
                  id="mandateTitle"
                  className="Select"
                >
                  <option value="" label="Select a title" />
                  {mandateTitles.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="mandateTitle" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="mandateDuration">Duration</label>
                <Field
                  as="select"
                  name="mandateDuration"
                  id="mandateDuration"
                  className="Select"
                >
                  <option value="" label="Select duration" />
                  {durationOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="mandateDuration" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="RadioCon">
                <label htmlFor="mandateUser">Mandate User</label>
                <div className="Input">
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="mandateUser"
                      value="employer"
                      className="Gap"
                    />
                    Employer
                  </label>
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="mandateUser"
                      value="admin"
                      className="Gap"
                    />
                    Admin
                  </label>
                </div>

                <ErrorMessage name="mandateUser" component="div" />
              </div>

              <div className="RadioCon">
                <label htmlFor="allowStacking">
                  Allow Remita Rule Stacking
                </label>
                <div className="Input">
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="allowStacking"
                      value="yes"
                      className="Gap"
                    />
                    Yes
                  </label>
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="allowStacking"
                      value="no"
                      className="Gap"
                    />
                    No
                  </label>
                </div>

                <ErrorMessage name="allowStacking" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="dateCreated">Date Created</label>
                <Field
                  type="date"
                  name="dateCreated"
                  id="dateCreated"
                  className="Input"
                />
                <ErrorMessage name="dateCreated" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="secondaryDuration">
                  Secondary Rule Duration
                </label>
                <Field
                  as="select"
                  name="secondaryDuration"
                  id="secondaryDuration"
                  className="Select"
                >
                  <option value="" label="Select duration" />
                  {secondaryDuration.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="secondaryDuration" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="addEmployerStack">
                  Add Employer for Rule Stacking
                </label>
                <Field
                  as="select"
                  name="addEmployerStack"
                  id="addEmployerStack"
                  className="Select"
                >
                  <option value="" label="Select employers" />
                  {employerOptions?.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="addEmployerStack" component="div" />
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
                Create Mandate
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default MandateRules;
