import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
import "./Kyc.css";
// function
import getDateOnly from "../../../../../utilities/getDate";
import getTime from "../../../../../utilities/getTime";
import OtherDocuments from "./OtherDocuments";

const KycCheck = () => {
  const styles = {
    btnBox: {
      display: "flex",
      justifyContent: "center",
    },
    table: {
      //   margin: "0 2rem 0 3rem",
      fontSize: "14px",
    },
    head: {
      color: "#fff",
      fontSize: "1rem",
    },
    approved: {
      color: "#5cc51c",
    },
    completed: {
      color: "#f64f4f",
    },
    padding: {
      color: "#ecaa00",
    },
  };

  const apiUrl = import.meta.env.VITE_BASE_URL;
  
  // fetch all customer
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.customerReducer.customers.customer
  );
  const status = useSelector((state) => state.customerReducer.status);
  // component state
  const [customerId, setCustomerId] = useState("");
  const [currentCustomer, setCurrentCustomer] = useState({});
  const [showKycDetails, setShowKycDetails] = useState(false);
  // form input state
  const [isFacialMatch, setIsFacialMatch] = useState(null);
  const [isIdCardValid, setIsIdCardValid] = useState(null);
  const [isPhotoCaptured, setIsPhotoCaptured] = useState(null);
  const [isSignatureValid, setIsSignatureValid] = useState(null);
  const [isOtherDocsValidated, setIsOtherDocsValidated] = useState(null);
  const [isKycApproved, setIsKycApproved] = useState(null);
  const [showOtherDocs, setShowOtherDocs] = useState(false);
  // processing bar state
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    dispatch(fetchAllCustomer());
  }, [dispatch, showKycDetails]);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showKycDetails]);

  // handle radio input changes
  const handleRadioChange = (name, value) => {
    switch (name) {
      case "isFacialMatch":
        setIsFacialMatch(value);
        break;
      case "isIdCardValid":
        setIsIdCardValid(value);
        break;
      case "isPhotoCaptured":
        setIsPhotoCaptured(value);
        break;
      case "isSignatureValid":
        setIsSignatureValid(value);
        break;
      case "isOtherDocsValidated":
        setIsOtherDocsValidated(value);
        break;
      case "isKycApproved":
        setIsKycApproved(value);
        break;
      default:
        break;
    }
  };

  // handle view docs
  const handleViewDocs = (id) => {
    setCustomerId(id);

    // filter customer by id and update current customer state
    const customer = customers.filter((customer) => customer._id === id);
    setCurrentCustomer(customer[0]);
    setShowOtherDocs(true);
  };

  // handle credit check start btn
  const handleStartCheck = (id) => {
    setCustomerId(id);
    setShowKycDetails(true);

    // filter customer by id and update current customer state
    const customer = customers.filter((customer) => customer._id === id);
    setCurrentCustomer(customer[0]);
  };

  // handle save kyc check and create bankone account
  const handleSaveCheck = async () => {
    setProgress(true);
    const data = {
      loanstatus: "with coo",
      isFacialMatch,
      isIdCardValid,
      isPhotoCaptured,
      isSignatureValid,
      isOtherDocsValidated,
      isKycApproved,
    };

    // send update to backend
    await fetch(`${apiUrl}/api/updatecustomer/kyc/${customerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // create bankone account for customer
    if (isKycApproved) {
      const newAccount = await fetch(
        `${apiUrl}/api/bankone/createCustomerAccount`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(currentCustomer),
        }
      );
      const account = await newAccount.json();

      // update customer data with account details
      const accountData = {
        isAccountCreated: true,
        accountDetails: account.data,
      }
      await fetch(
        `${apiUrl}/api/updatecustomer/banking/${customerId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(accountData),
        }
      );

     }
    setShowKycDetails(false);
    setProgress(false);
  };

  return (
    <>
      {!showOtherDocs && (
        <div>
          <div>
            <Headline text="View by:" />
            <div style={styles.btnBox} className="VBox">
              <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
                Recent Application
              </BocButton>
              <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
                Date Range
              </BocButton>
              <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
                Specific User
              </BocButton>
            </div>
          </div>

          {/* data loader */}
          {status === "loading" && <PageLoader />}

          {/* table section */}
          <div className="Section RBox DCard">
            <DashboardHeadline
              height="52px"
              mspacer="2rem 0 -2.55rem -1rem"
              bgcolor="#145098"
            ></DashboardHeadline>
            <div style={styles.table}>
              <Table borderless hover responsive="sm">
                <thead style={styles.head}>
                  <tr>
                    <th>Customer ID</th>
                    <th>Full Name</th>
                    <th>View Document</th>
                    <th>Do Review</th>
                  </tr>
                </thead>
                <tbody>
                  {customers?.map((customer) => (
                    <tr key={customer._id}>
                      <td>{customer.phonenumber.slice(1)}</td>
                      <td>{customer.firstname + " " + customer.lastname}</td>
                      <td
                        onClick={() => handleViewDocs(customer._id)}
                        style={styles.padding}
                        className="viewDocs"
                      >
                        View
                      </td>
                      <td>
                        <div>
                          {customer.kyc.isKycApproved ? (
                            <BocButton
                              bradius="12px"
                              fontSize="14px"
                              margin="0 4px"
                              bgcolor="#5cc51c"
                            >
                              Done
                            </BocButton>
                          ) : (
                            <a href="#kycSection">
                              <BocButton
                                bradius="12px"
                                fontSize="14px"
                                margin="0 4px"
                                bgcolor="#f64f4f"
                                func={() => handleStartCheck(customer._id)}
                              >
                                Check
                              </BocButton>
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <NextPreBtn />
          </div>

          {/* kyc detail section */}
          {showKycDetails && (
            <div className="KSection" id="kycSection">
              <Headline text="Check Customer KYC Details" />
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <Headline fontSize="24px" text="Valid ID Card View" />
                  <div className="IdCard">
                    {currentCustomer?.valididcard ? (
                      <img
                        src={currentCustomer.valididcard}
                        alt="official-id"
                        className="OfficialIdCard"
                      />
                    ) : (
                      <img
                        src="images/officialid.png"
                        alt="official-id"
                        className="OfficialIdCard"
                      />
                    )}

                    <div className="MatchCon">
                      <Headline
                        fontSize="16px"
                        align="left"
                        text="Admin Review"
                      />
                      <div className="Match">
                        <p>Is there a Facial Match?</p>
                        <div className="Radio">
                          <input
                            type="radio"
                            className="yes"
                            name="isFacialMatch"
                            value={true}
                            onChange={(e) =>
                              handleRadioChange("isFacialMatch", e.target.value)
                            }
                          />
                          <label htmlFor="yes">Yes</label>

                          <input
                            type="radio"
                            className="no"
                            name="isFacialMatch"
                            value={false}
                            onChange={(e) =>
                              handleRadioChange("isFacialMatch", e.target.value)
                            }
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>

                      <div className="Match">
                        <p>Is there a Valid ID Card?</p>
                        <div className="Radio">
                          <input
                            type="radio"
                            className="yes"
                            name="isIdCardValid"
                            value={true}
                            onChange={(e) =>
                              handleRadioChange("isIdCardValid", e.target.value)
                            }
                          />
                          <label htmlFor="yes">Yes</label>

                          <input
                            type="radio"
                            className="no"
                            name="isIdCardValid"
                            value={false}
                            onChange={(e) =>
                              handleRadioChange("isIdCardValid", e.target.value)
                            }
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>

                      <div className="Match">
                        <p>Is there a Photo Capture?</p>
                        <div className="Radio">
                          <input
                            type="radio"
                            className="yes"
                            name="isPhotoCaptured"
                            value={true}
                            onChange={(e) => {
                              handleRadioChange(
                                "isPhotoCaptured",
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor="yes">Yes</label>

                          <input
                            type="radio"
                            className="no"
                            name="isPhotoCaptured"
                            value={false}
                            onChange={(e) => {
                              handleRadioChange(
                                "isPhotoCaptured",
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>

                      <div className="Match">
                        <p>Is there a Valid Signature?</p>
                        <div className="Radio">
                          <input
                            type="radio"
                            className="yes"
                            name="isSignatureValid"
                            value={true}
                            onChange={(e) => {
                              handleRadioChange(
                                "isSignatureValid",
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor="yes">Yes</label>

                          <input
                            type="radio"
                            className="no"
                            name="isSignatureValid"
                            value={false}
                            onChange={(e) => {
                              handleRadioChange(
                                "isSignatureValid",
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>

                      <div className="Match">
                        <p>Is Other Document Verified?</p>
                        <div className="Radio">
                          <input
                            type="radio"
                            className="yes"
                            name="isOtherDocsValidated"
                            value={true}
                            onChange={(e) => {
                              handleRadioChange(
                                "isOtherDocsValidated",
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor="yes">Yes</label>

                          <input
                            type="radio"
                            className="no"
                            name="isOtherDocsValidated"
                            value={false}
                            onChange={(e) => {
                              handleRadioChange(
                                "isOtherDocsValidated",
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>

                      <div className="Match matchKyc">
                        <p>KYC Completed & Approved</p>
                        <div className="Radio">
                          <input
                            type="radio"
                            className="yes"
                            name="isKycApproved"
                            value={true}
                            onChange={(e) => {
                              handleRadioChange(
                                "isKycApproved",
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor="yes">Yes</label>

                          <input
                            type="radio"
                            className="no"
                            name="isKycApproved"
                            value={false}
                            onChange={(e) => {
                              handleRadioChange(
                                "isKycApproved",
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6">
                  <Headline
                    fontSize="24px"
                    text=" Application Facial Capture View"
                  />
                  <div className="Capture DCard">
                    {currentCustomer?.photocapture ? (
                      <img
                        src={currentCustomer.photocaptureImg}
                        alt="face-capture"
                        className="FaceCapture"
                      />
                    ) : (
                      <img
                        src="https://shorturl.at/dexyZ"
                        alt="face-capture"
                        className="FaceCapture"
                      />
                    )}

                    <div className="TimeStamp">
                      <p>Time Stamp:</p>
                      <div>
                        <p>{getDateOnly(currentCustomer.createdAt)}</p>
                        <p className="Time">
                          {getTime(currentCustomer.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Headline fontSize="24px" text="Signature View" />
                    {currentCustomer?.signature ? (
                      <img
                        src={currentCustomer.signature}
                        alt="official signature"
                        className="Signature"
                      />
                    ) : (
                      <img
                        src="images/signature1.png"
                        alt="official signature"
                        className="Signature"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="checkBtn">
                <BocButton
                  bradius="12px"
                  fontSize="18px"
                  margin="8px 28px"
                  bgcolor="#f64f4f"
                  func={() => setShowKycDetails(false)}
                >
                  Invalid/Cancel
                </BocButton>
                {!progress ? (
                  <BocButton
                    bradius="12px"
                    fontSize="18px"
                    margin="8px 28px"
                    bgcolor="#145098"
                    func={handleSaveCheck}
                  >
                    Valid/Create Account
                  </BocButton>
                ) : (
                  <PageLoader />
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* other document component */}
      {showOtherDocs && (
        <OtherDocuments
          customerObj={currentCustomer}
          setShowDocs={setShowOtherDocs}
        />
      )}
    </>
  );
};

export default KycCheck;
