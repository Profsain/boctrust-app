import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BocButton from "../../../shared/BocButton";
import DashboardHeadline from "../../../shared/DashboardHeadline";
// import "../../customers/Customer.css";
import "../Report.css";
import AccountStatementList from "./AccountStatementList";
import NextPreBtn from "../../../shared/NextPreBtn"

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  startDate: Yup.string().required("Start date isRequired"),
  endDate: Yup.string().required("End date is required"),
  accountNumber: Yup.string().required("Account number is required"),
});

const initialValues = {
  accountNumber: "",
  startDate: "",
  endDate: "",
};

const AccountStatement = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div>
      <div className="TransContainer">
        <DashboardHeadline>
          Generate New Account Statement Report
        </DashboardHeadline>
        {/* form section */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="startDate">Start Date</label>
                <Field
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="InputElem"
                />
                <ErrorMessage name="startDate" component="div" />
              </div>
              <div className="FieldGroup">
                <label htmlFor="endDate">End Date</label>
                <Field
                  type="date"
                  name="endDate"
                  id="endDate"
                  className="InputElem"
                />
                <ErrorMessage name="endDate" component="div" />
              </div>
              <div className="FieldGroup">
                <label htmlFor="accountNumber">Account Number</label>
                <Field
                  type="text"
                  name="accountNumber"
                  id="accountNumber"
                  className="InputElem"
                />
                <ErrorMessage name="accountNumber" component="div" />
              </div>
            </div>
            <div className="BtnRow">
              <div className="BtnContainer">
                <BocButton
                  margin="0"
                  fontSize="1.6rem"
                  type="submit"
                  bgcolor="#ecaa00"
                  bradius="18px"
                >
                  Submit
                </BocButton>
              </div>
            </div>
          </Form>
        </Formik>
        {/* format section btn */}
        <div className="FormatBtn">
          <p>Output As:</p>
          <div>
            <BocButton width="70px" bgcolor="gray">Copy</BocButton>
            <BocButton width="70px" bgcolor="green">Excel</BocButton>
            <BocButton width="70px" bgcolor="#145098">PDF</BocButton>
            <BocButton width="70px">Print</BocButton>
          </div>
        </div>
      </div>
      <div className="ReportCon">
        {/* report table  */}
        <AccountStatementList />

        {/* next prev btn  */}
        <NextPreBtn />
      </div>
    </div>
  );
};

export default AccountStatement;
