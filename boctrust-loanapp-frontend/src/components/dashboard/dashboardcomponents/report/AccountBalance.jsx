import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Table } from "react-bootstrap";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  startDate: Yup.string().required("Start date is required"),
  endDate: Yup.string().required("End date is required"),
  accountNumber: Yup.string().required("Account number is required"),
});

const debitAccountOptions = [
  { value: "account1", label: "0249584744" },
  { value: "account2", label: "9854092312" },
  // Add more options as needed
];

const initialValues = {
  startDate: "",
  endDate: "",
  accountNumber: "",
};

const AccountBalance = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "2rem 0",
    },
    input: {
      width: "300px",
    },
    table: {
      marginLeft: "3rem",
      color: "#145098",
    },
    th: {
      color: "#145098",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
  };
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div style={ styles.accountCon}  className="SecCon">
      <div>
        <DashboardHeadline>Account Balance Report</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="createAccount">Start Date</label>
                <Field
                  type="date"
                  name="startDate"
                  className="Input"
                  style={styles.input}
                />
                <ErrorMessage name="startDate" component="div" />
              </div>
              <div className="FieldGroup">
                <label htmlFor="createAccount">End Date</label>
                <Field
                  type="date"
                  name="endDate"
                  className="Input"
                  style={styles.input}
                />
                <ErrorMessage name="endDate" component="div" />
              </div>
              <div className="FieldGroup">
                <label htmlFor="debitAccount">Account Number</label>
                <Field
                  as="select"
                  name="accountNumber"
                  className="Select"
                  style={styles.input}
                >
                  <option value="" label="Select one" />
                  {debitAccountOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="accountNumber" component="div" />
              </div>
            </div>
            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="submit"
                width="220px"
                bgcolor="#ecaa00"
                bradius="25px"
              >
                FILTER
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
      <div style={styles.container}>
        <BocButton
          bgcolor="#636363"
          bradius="22px"
          width="90px"
          margin="0 8px"
        >
          Copy
        </BocButton>
        <BocButton
          bgcolor="#636363"
          bradius="22px"
          width="90px"
          margin="0 8px"
        >
          Excel
        </BocButton>
        <BocButton
          bgcolor="#636363"
          bradius="22px"
          width="90px"
          margin="0 8px"
        >
          PDF
        </BocButton>
        <BocButton
          bgcolor="#636363"
          bradius="22px"
          width="90px"
          margin="0 8px"
        >
          Print
        </BocButton>
      </div>

      {/* balance table  */}
      <div >
        <Table borderless hover responsive="sm" style={styles.table} className="DTable">
          <thead>
            <tr style={styles.th}>
              <th>Date</th>
              <th>Account Number</th>
              <th>Account Name</th>
              <th>Balance</th>
              <th>Current Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-25-03</td>
              <td>1234567891</td>
              <td>Awolabi James</td>
              <td>N200134</td>
              <td>N200134</td>
            </tr>
            <tr>
              <td>2023-25-03</td>
              <td>1234567822</td>
              <td>Awolabi James</td>
              <td>N300000</td>
              <td>N300000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AccountBalance;
