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
  ruleTitle: Yup.string().required("Rule title is required"),
  maximumTenure: Yup.string().required("Maximum tenure is required"),
  maximumAmount: Yup.string().required("Maximum amount is required"),
  rule: Yup.string().required("Statement rule is required"),
  addEmployer: Yup.string().required("Employer is required"),
});

const initialValues = {
  ruleTitle: "",
  maximumTenure: "",
  maximumAmount: "",
  rule: "",
  addEmployer: "",
};

// Define options for select inputs
const tenures = [
  { value: "3 months", label: "3 Months" },
  { value: "6 months", label: "6 Months" },
  { value: "12 months", label: "12 Months" },
  { value: "24 months", label: "24 Months" },
  { value: "36 months", label: "36 Months" },
  { value: "48 months", label: "48 Months" },
  { value: "Unlimited", label: "No Maximum Tenure" },
  // Add more options as needed
];

const StatementRules = () => {
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
    const id = values.addEmployer;
    const apiUrl = import.meta.env.VITE_BASE_URL;
    // Handle form submission logic here
    await fetch(
      `${apiUrl}/api/agency/employers/${id}/statementRule`,
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

    // Display success message
    setMessage("Statement rule created successfully");
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <div>
      <div className="TransContainer">
        <DashboardHeadline>Create New Statement Rule</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="ruleTitle">Rule Title</label>
                <Field
                  type="text"
                  name="ruleTitle"
                  id="ruleTitle"
                  className="Input"
                ></Field>
                <ErrorMessage name="ruleTitle" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="maximumTenure">Maximum Tenure</label>
                <Field
                  as="select"
                  name="maximumTenure"
                  id="maximumTenure"
                  className="Select"
                >
                  <option value="" label="Select tenure" />
                  {tenures.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="maximumTenure" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="RadioCon">
                <label htmlFor="rule">Rule</label>
                <div className="Input">
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="rule"
                      value="tenure"
                      className="Gap"
                    />
                    Tenure
                  </label>
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="rule"
                      value="amount"
                      className="Gap"
                    />
                    Amount
                  </label>
                </div>

                <ErrorMessage name="rule" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="maximumAmount">Maximum Amount</label>
                <Field
                  type="text"
                  name="maximumAmount"
                  id="maximumAmount"
                  className="Input"
                ></Field>
                <ErrorMessage name="maximumAmount" component="div" />
              </div>
            </div>

            {/* <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="addEmployers">Add Employers</label>
                <Field
                  type="text"
                  name="addEmployers"
                  id="addEmployers"
                  className="Input"
                ></Field>
                <ErrorMessage name="addEmployers" component="div" />
              </div>
            </div> */}
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="addEmployer">Add Employer</label>
                <Field
                  as="select"
                  name="addEmployer"
                  id="addEmployer"
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
                <ErrorMessage name="addEmployer" component="div" />
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
                Create Rule
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default StatementRules;
