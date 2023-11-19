import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  loanProduct: Yup.string().required("Loan product is required"),
  duration: Yup.string().required("Loan duration is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required"),
  note: Yup.string().required("Note is required"),
});

const loanProductOptions = [
  { value: "car loan", label: "Car Loan" },
  { value: "salary advance", label: "Salary Advance" },
  // Add more options as needed
];

const initialValues = {
  loanProduct: "",
  duration: "",
  amount: "",
  note: "",
};

const ApplyLoan = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div className="TransContainer SecCon">
      <DashboardHeadline>Apply for New Loan</DashboardHeadline>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="loanProduct">Loan Product</label>
              <Field
                as="select"
                name="loanProduct"
                id="loanProduct"
                className="Select"
              >
                <option value="" label="Select a product" />
                {loanProductOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </Field>
              <ErrorMessage name="loanProduct" component="div" />
            </div>

            <div className="FieldGroup">
              <label htmlFor="duration">Duration</label>
              <Field
                type="text"
                name="duration"
                id="duration"
                className="Input"
              />
              <ErrorMessage name="duration" component="div" />
            </div>
          </div>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="amount">Amount</label>
              <Field type="text" name="amount" id="amount" className="Input" />
              <ErrorMessage name="amount" component="div" />
            </div>

            <div className="FieldGroup">
              <label htmlFor="note">Note</label>
              <Field type="text" name="note" id="note" className="Input" />
              <ErrorMessage name="note" component="div" />
            </div>
          </div>
          <div className="BtnContainer">
            <BocButton
              fontSize="1.6rem"
              type="submit"
              bgcolor="#ecaa00"
              bradius="18px"
            >
              Submit Application
            </BocButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ApplyLoan;
