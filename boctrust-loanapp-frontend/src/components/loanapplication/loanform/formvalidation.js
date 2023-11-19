import * as Yup from "yup";
// validation Yup.Schema
const validationSchema = Yup.object({
  loanamount: Yup.number()
    .min(10000, "Please enter amount from 10000 upto 2000000 ")
    .max(2000000, "Please enter amount from 10000 upto 2000000 ")
    .required("Required"),
  numberofmonth: Yup.number()
    .min(1, "Please enter a number from 1 to 24")
    .max(24, "Please enter a number from 1 to 24")
    .required("Required"),
  loanpurpose: Yup.array()
    .min(1, "Please select at least one purpose")
    .required("Required"),
  bvnnumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(11, 'Must be exactly 11 digits').max(11, 'Must be exactly 11 digits'),
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  phonenumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(11, 'Must be exactly 11 digits').max(11, 'Must be exactly 11 digits'),
  dob: Yup.date().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  maritalstatus: Yup.string().required("Required"),
  noofdependent: Yup.number().required("Required"),
  eductionlevel: Yup.string().required("Required"),
  howdidyouhearaboutus: Yup.string().required("Required"),
  stateofresidence: Yup.string().required("Required"),
  houseaddress: Yup.string().required("Required"),
  lga: Yup.string().required("Required"),
  stateoforigin: Yup.string().required("Required"),
  ippis: Yup.string().required("Required"),
  servicenumber: Yup.string().required("Required"),
  valididcard: Yup.mixed().required("Required"),

  // next of kin
  nkinfirstname: Yup.string().required("Required"),
  nkinlastname: Yup.string().required("Required"),
  nkinphonenumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(11, 'Must be exactly 11 digits').max(11, 'Must be exactly 11 digits'),
  nkinrelationship: Yup.string().required("Required"),
  nkinresidentialaddress: Yup.string().required("Required"),

  // employment
  employername: Yup.string().required("Required"),
  employeraddress: Yup.string().required("Required"),
  employmentstartdate: Yup.date().required("Required"),
  netmonthlyincome: Yup.number().required("Required"),
  totalannualincome: Yup.number().required("Required"),
  officialemail: Yup.string().email("Invalid email format").required("Required"),
  uploadpayslip: Yup.mixed().required("Required"),

  // bank details and disbursement
  salarybankname: Yup.string().required("Required"),
  bankcode: Yup.string().required("Required"),
  salaryaccountnumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  sameasaboveaccount: Yup.boolean().required("Required"),
  disbursmentbankname: Yup.string().required("Required"),
  disbursmentaccountnumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  hasloan: Yup.string().required("Required"),
  loanbalance: Yup.string().required("Required"),
  loanprovider: Yup.string().required("Required"),
  buyoverloan: Yup.string().required("Required"),
  beneficiaryname: Yup.string().required("Required"),
  beneficiarybank: Yup.string().required("Required"),
  beneficiaryaccountnumber: Yup.number().required("Required").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  liquidationbalance: Yup.string().required("Required"),
  deductions: Yup.string().required("Required"),
  guarantee: Yup.string().required("Required"),

  // terms and conditions
  acceptterms: Yup.boolean().required("Required"),
  acceptpolicy: Yup.boolean().required("Required"),
  sharemyremita: Yup.boolean().required("Required"),
  agreefullname: Yup.string().required("Required"),
  agreedate: Yup.date().required("Required"),
  signature: Yup.mixed().required("Required"),
  photocapture: Yup.mixed().required("Required"),
  haveagent: Yup.boolean().required("Required"),
  agentname: Yup.string().required("Required"),
});
// end of validationSchema

export default validationSchema;