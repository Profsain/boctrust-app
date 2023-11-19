import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import "./Credit.css";
import PaySlipAnalysis from "./PaySlipAnalysis";
import DecisionSummary from "./DecisionSummary";
import PdfDocument from "../../../shared/PdfDocument";
import PageLoader from "../../shared/PageLoader";


const creditBureauOptions = [
  { value: "first_central", label: "First Central" },
  { value: "crc_bureau", label: "CRC" },
  { value: "credit_register", label: "Credit Register" },
  // Add more options as needed
];

const apiUrl = import.meta.env.VITE_BASE_URL;
const reportOptions = [
  { value: "consumer", label: "Consumer Report" },
  { value: "finance", label: "Financial Report" },
  // Add more options as needed
];

const searchTypes = [
  { value: "defaulters", label: "Defaulters" },
  { value: "request", label: "Request" },
  { value: "issuance", label: "Issuance" },
  // Add more options as needed
];

const CreditCheckhtmlForm = ({ customerId }) => {
  const [isCreditDbCheck, setIsCreditDbCheck] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [searchByDeduct, setSearchByDeduct] = useState("");
  const [applicantNameDeduct, setApplicantNameDeduct] = useState("");
  const [searchDateDeduct, setSearchDateDeduct] = useState("");
  const [remarksDeduct, setRemarksDeduct] = useState("");
  const [reportObj, setReportObj] = useState({});
  const [reportTitle, setReportTitle] = useState("");
  const [dbSearchReport, setDbSearchReport] = useState("");

  const [isBureauChecked, setIsBureauChecked] = useState(false);
  const [isDeductCheck, setIsDeductCheck] = useState(false);
  const [deductSearchReport, setDeductSearchReport] = useState("");
  const [bureauSearchReport, setBureauSearchReport] = useState("");

  const handleChange = () => {
    setIsCreditDbCheck(!isCreditDbCheck);
  };
  const handleDbChange = () => {
    setIsDeductCheck(!isDeductCheck);
  };
  const handleBureauChange = () => {
    setIsBureauChecked(!isBureauChecked);
  };

  // handle file update
  const handleFileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (isCreditDbCheck) {
      formData.append("dbSearchReport", dbSearchReport);
      await fetch(
        `${apiUrl}/api/updatecustomer/creditDbSearch/${customerId}`,
        {
          method: "PUT",
          enctype: "multipart/form-data",
          body: formData,
        }
      );
      setDbSearchReport("");
      setIsCreditDbCheck(false);
    }
    if (isDeductCheck) {
      formData.append("deductSearchReport", deductSearchReport);
      await fetch(
        `${apiUrl}/api/updatecustomer/deductcheck/${customerId}`,
        {
          method: "PUT",
          enctype: "multipart/form-data",
          body: formData,
        }
      );
      setDeductSearchReport("");
      setIsDeductCheck(false);
    }
    if (isBureauChecked) {
      console.log("bureau check");
    }
    console.log("Update file");
  };

  // clear form fields
  const clearForm = () => {
    setSearchType("");
    setSearchBy("");
    setApplicantName("");
    setSearchDate("");
    setRemarks("");
    setReportTitle("");
    setDbSearchReport("");
  };

  // handle Credit DB check
  const handleDbCheck = async (e) => {
    e.preventDefault();

    const searchReport = {
      searchType,
      searchBy,
      searchDate,
      remarks,
      dbSearchReport,
      isCreditDbCheck,
    };
    // setDbSearchReport(dbSearchReport);
    // generate pdf and download
    setReportTitle(() => "Credit DB Check Report");
    const pdfReport = {
      reportTitle,
      applicantName,
      searchType: searchType,
      searchBy: searchBy,
      searchDate: searchDate,
      remarks: remarks,
    };
    setReportObj(pdfReport);

    // send update to backend
    await fetch(
      `${apiUrl}/api/updatecustomer/creditDbSearch/${customerId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchReport),
      }
    );

    clearForm();
  };

  // handle Credit DB check
  const handleDeductCheck = async (e) => {
    e.preventDefault();

    const searchReport = {
      searchByDeduct,
      searchDateDeduct,
      remarksDeduct,
      deductSearchReport,
      isDeductCheck,
    };

    // setDbSearchReport(dbSearchReport);
    // generate pdf and download
    setReportTitle(() => "Deduct Check Report");
    const pdfReport = {
      reportTitle,
      applicantName: applicantNameDeduct,
      searchType: "Deduct Check",
      searchBy: searchByDeduct,
      searchDate: searchDateDeduct,
      remarks: remarksDeduct,
    };
    setReportObj(pdfReport);

    // send update to backend
    await fetch(
      `${apiUrl}/api/updatecustomer/deductcheck/${customerId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchReport),
      }
    );

    // clear form fields
    setSearchByDeduct("");
    setApplicantNameDeduct("");
    setRemarksDeduct("");
    setSearchDateDeduct("");
    setReportTitle("");
  };

  // credit bureau check logic
  const [bureauData, setBureauData] = useState({
    bureauName: "",
    bvnNo: "",
    reportType: "",
    reportReason: "",
    bureauDate: "",
  });

  const handleBureauDataChange = (e) => {
    const { name, value } = e.target;
    setBureauData({ ...bureauData, [name]: value });
  };

  const [bureauReport, setBureauReport] = useState({});
  const [bureauLoading, setBureauLoading] = useState(false);

  const handleBureauCheck = async (e) => {
    e.preventDefault();
    setBureauLoading(true);
    if (bureauData.bureauName === "first_central") {
       try {
         const bvn = bureauData.bvnNo;
         const response = await fetch(
           `${apiUrl}/api/firstcentral/firstcentralreport`,
           {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ bvn }),
           }
         );
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }

         const data = await response.json();
         // set bureau report
         setBureauReport(data.data);
         // set bureau loading
         setBureauLoading(false);
         // updateBureauLoading("success");
       } catch (error) {
         throw new Error(error.message);
       }
    }

    if (bureauData.bureauName === "crc_bureau") {
      try {
         const bvn = bureauData.bvnNo;
         const response = await fetch(`${apiUrl}/api/crc/getcrc`, {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ bvn }),
         });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // set bureau report 
        setBureauReport(data.data);
        // set bureau loading
        setBureauLoading(false);
        // updateBureauLoading("success");
      } catch (error) {
        throw new Error(error.message);
      }
    }

    if (bureauData.bureauName === "credit_register") {
       try {
         const bvn = bureauData.bvnNo;
         const response = await fetch(
           `${apiUrl}/api/creditregistry/getreport`,
           {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ bvn }),
           }
         );
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }

         const data = await response.json();
         // set bureau report
         setBureauReport(data.data);
         // set bureau loading
         setBureauLoading(false);
         // updateBureauLoading("success");
       } catch (error) {
         throw new Error(error.message);
       }
    }
  };

  // check if bureauReport is not empty
  if (Object.keys(bureauReport).length > 0) {
    console.log("bureau report", bureauReport);
  }


  // handle next prev form step start
  const [formStep, setFormStep] = useState(1);
  const handleNext = () => {
    if (formStep === 1) {
      setFormStep(2);
    } else if (formStep === 2) {
      setFormStep(3);
    } else {
      setFormStep(3);
    }
  };

  const handlePrev = () => {
    if (formStep === 2) {
      setFormStep(1);
    } else if (formStep === 3) {
      setFormStep(2);
    } else {
      setFormStep(1);
    }
  };

  // scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [formStep]);


  return (
    <>
      {formStep === 1 && (
        <div className="TransContainer RBox">
          {/* step 1 */}
          <div className="row">
            {/* credit DB check */}
            <div className="col-sm-12 col-md-4">
              <h6 className="creditTitle">Do Credit DB Check</h6>
              <form onSubmit={handleDbCheck}>
                <div className="row mb-3">
                  <label htmlFor="searchType" className="col-form-label">
                    Choose Search Type
                  </label>
                  <div>
                    <select
                      id="searchType"
                      className="form-select"
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      {searchTypes.map((searchType) => (
                        <option key={searchType.value} value={searchType.value}>
                          {searchType.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="searchInput" className="col-form-label">
                    IPPIS, BVN, or Phone No
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={searchBy}
                      onChange={(e) => setSearchBy(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="searchInput" className="col-form-label">
                    Applicant Full-name
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="dSearchDate" className="col-form-label">
                    Search Date
                  </label>
                  <div>
                    <input
                      type="date"
                      className="form-control"
                      value={searchDate}
                      onChange={(e) => setSearchDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <label htmlFor="netPay" className="col-form-label">
                    Remarks
                  </label>
                  <div>
                    <textarea
                      className="form-control"
                      id="netPay"
                      placeholder="Enter remarks here..."
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row mx-5 align-items-center">
                  <button type="submit" className="btn btn-warning mt-3">
                    Generate Manual Report
                  </button>
                </div>
              </form>
            </div>

            {/* deduct check */}
            <div className="col-sm-12 col-md-4 midBorder">
              <h6 className="creditTitle">Do Deduct Check</h6>
              <form onSubmit={handleDeductCheck}>
                <div className="row mb-3">
                  <label htmlFor="dSearchInput" className="col-form-label">
                    IPPIS
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={searchByDeduct}
                      onChange={(e) => setSearchByDeduct(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="searchInput" className="col-form-label">
                    Applicant Full-name
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={applicantNameDeduct}
                      onChange={(e) => setApplicantNameDeduct(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="dSearchDate" className="col-form-label">
                    Search Date
                  </label>
                  <div>
                    <input
                      type="date"
                      className="form-control"
                      value={searchDateDeduct}
                      onChange={(e) => setSearchDateDeduct(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <label htmlFor="netPay" className="col-form-label">
                    Remarks
                  </label>
                  <div>
                    <textarea
                      className="form-control"
                      id="netPay"
                      placeholder="Enter remarks here..."
                      value={remarksDeduct}
                      onChange={(e) => setRemarksDeduct(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row mx-5 align-items-center">
                  <button type="submit" className="btn btn-warning mt-3">
                    Generate Manual Report
                  </button>
                </div>
              </form>
            </div>

            {/* credit bureau check */}
            <div className="col-sm-12 col-md-4">
              <h6 className="creditTitle">Do Credit Bureau Check</h6>
              <form onSubmit={handleBureauCheck}>
                <div className="row mb-3">
                  <label htmlFor="searchType" className="col-form-label">
                    Select Credit Bureau
                  </label>
                  <div>
                    <select
                      id="searchType"
                      className="form-select"
                      name="bureauName"
                      value={bureauData.bureauName}
                      onChange={handleBureauDataChange}
                    >
                      <option selected>Choose...</option>
                      {creditBureauOptions.map((creditBureauOption) => (
                        <option
                          key={creditBureauOption.value}
                          value={creditBureauOption.value}
                        >
                          {creditBureauOption.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="dSearchInput" className="col-form-label">
                    BVN
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="bvnNo"
                      value={bureauData.bvnNo}
                      onChange={handleBureauDataChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="searchType" className="col-form-label">
                    Select Report Type
                  </label>
                  <div>
                    <select
                      id="searchType"
                      className="form-select"
                      name="reportType"
                      value={bureauData.reportType}
                      onChange={handleBureauDataChange}
                    >
                      <option selected>Choose...</option>
                      <option value="credit">Credit Report</option>
                      <option value="kyc">KYC</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="reportType" className="col-form-label">
                    Reason of Report
                  </label>
                  <div>
                    <select
                      id="reportType"
                      className="form-select"
                      name="reportReason"
                      value={bureauData.reportReason}
                      onChange={handleBureauDataChange}
                    >
                      <option selected>Choose...</option>
                      {reportOptions.map((reportOption) => (
                        <option
                          key={reportOption.value}
                          value={reportOption.value}
                        >
                          {reportOption.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="dSearchInput" className="col-form-label">
                    Search Date
                  </label>
                  <div>
                    <input
                      type="date"
                      className="form-control"
                      name="bureauDate"
                      value={bureauData.bureauDate}
                      onChange={handleBureauDataChange}
                    />
                  </div>
                </div>

                <div className="row mx-5 align-items-center">
                  <button type="submit" className="btn btn-warning mt-3">
                    Generate Report
                  </button>
                </div>
              </form>
            </div>
            {/* loading bar */}
            <div>
              {bureauLoading && <PageLoader />}
            </div>
          </div>

          <div className="row m-5">
            {/* generated pdf report component */}
            {Object.keys(reportObj).length > 0 && (
              <PdfDocument report={reportObj} />
            )}
          </div>

          {/* attach report */}
          <div className="row m-5">
            <h4>Upload Reports</h4>
            <form onSubmit={handleFileUpdate} encType="multipart/form-data">
              <div className="row reportRow">
                <div className="col-sm-8 col-md-4">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Is there a Credit DB Report?
                  </label>
                </div>

                <div className="form-check form-switch col-sm-4 col-md-2 mt-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    checked={isCreditDbCheck}
                    onChange={handleChange}
                  />
                  <label className="form-check-label mx-3 checked">
                    {isCreditDbCheck ? "Yes" : "No"}
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setDbSearchReport(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>

              <div className="row reportRow">
                <div className="col-sm-8 col-md-4">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Is there a Deduct Report?
                  </label>
                </div>

                <div className="form-check form-switch col-sm-4 col-md-2 mt-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    checked={isDeductCheck}
                    onChange={handleDbChange}
                  />
                  <label className="form-check-label mx-3 checked">
                    {isDeductCheck ? "Yes" : "No"}
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setDeductSearchReport(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>

              <div className="row reportRow">
                <div className="col-sm-8 col-md-4">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Is there a Credit Bureau Report?
                  </label>
                </div>

                <div className="form-check form-switch col-sm-4 col-md-2 mt-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    checked={isBureauChecked}
                    onChange={handleBureauChange}
                  />
                  <label className="form-check-label mx-3 checked">
                    {isBureauChecked ? "Yes" : "No"}
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      value={bureauSearchReport}
                      onChange={(e) => setBureauSearchReport(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row mx-5 align-items-center">
                <div className="col-sm-12 col-md-3"></div>
                <button
                  type="submit"
                  className="btn btn-warning mt-3 col-sm-12 col-md-6"
                >
                  Update Report
                </button>
                <div className="col-sm-12 col-md-3"></div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* pay slip analysis component */}
      {formStep === 2 && <PaySlipAnalysis customerId={customerId} />}
      {/* decision summary */} {formStep === 3 && <DecisionSummary />}
      {/* next prev button */}
      <div className="row justify-content-center">
        <button className="btn btn-warning btn-prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn btn-primary btn-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

CreditCheckhtmlForm.propTypes = {
  customerId: PropTypes.string,
};

export default CreditCheckhtmlForm;
