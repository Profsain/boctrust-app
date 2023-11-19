import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "../../Dashboard.css";

const SideNavMain = ({ onMenuItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoanOpen, setIsLoanOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isRemitaOpen, setIsRemitaOpen] = useState(false);
  const [isEmployerOpen, setIsEmployerOpen] = useState(false);
  const [isWebManagerOpen, setIsWebManagerOpen] = useState(false);
  const [isKycOpen, setIsKycOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  const openSubItem = () => setIsOpen(true);
  const closeSubItem = () => setIsOpen(false);

  const openSubLoan = () => setIsLoanOpen(true);
  const closeSubLoan = () => setIsLoanOpen(false);

  const openSubAccount = () => setIsAccountOpen(true);
  const closeSubAccount = () => setIsAccountOpen(false);

  const openSubRemita = () => setIsRemitaOpen(true);
  const closeSubRemita = () => setIsRemitaOpen(false);

  const openSubEmployer = () => setIsEmployerOpen(true);
  const closeSubEmployer = () => setIsEmployerOpen(false);

  const openSubWebManager = () => setIsWebManagerOpen(true);
  const closeSubWebManager = () => setIsWebManagerOpen(false);

  const openSubKyc = () => setIsKycOpen(true);
  const closeSubKyc = () => setIsKycOpen(false);

  const openSubReports = () => setIsReportsOpen(true);
  const closeSubReports = () => setIsReportsOpen(false);

  // current login admin user
  const currentUser = useSelector((state) => state.adminAuth.user);
  const userRole = currentUser.jobRole;

  return (
    <div className="NavIcons SideMain FixSideNav">
      <div className="BrandCon">
        <div className=" LgLogo">
          <img src="images/dlogo.png" alt="boctrust-logo" />
        </div>
        <p>{userRole}</p>
      </div>

      <div id="dashboard" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="dashboard"
          onClick={onMenuItemClick}
          src="images/ddashboard.png"
          alt="dashboard"
        />
        <p id="dashboard" onClick={onMenuItemClick}>
          Dashboard
        </p>
      </div>
      <div id="branches" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="branches"
          onClick={onMenuItemClick}
          src="images/dmda.png"
          alt="branches"
        />
        <p id="branches" onClick={onMenuItemClick}>
          Branches
        </p>
      </div>

      {/* Menu with sub item */}
      <div onMouseOver={openSubItem} onMouseLeave={closeSubItem}>
        <div className="IconBox">
          <img src="images/dprofile.png" alt="customer" />
          <p>Customer</p>
        </div>
        {isOpen ? (
          <div className="SubItem">
            <ul>
              <li id="customer" onClick={onMenuItemClick}>
                All Customer
              </li>
              {/* <li id="addcustomer" onClick={onMenuItemClick}>
                Add Customer
              </li> */}
              <li id="customerrequest" onClick={onMenuItemClick}>
                Customer Request
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div onMouseOver={openSubLoan} onMouseLeave={closeSubLoan}>
        <div className="IconBox">
          <img src="images/dmyloan.png" alt="loan" />
          <p>My Loans</p>
        </div>
        {isLoanOpen ? (
          <div className="SubItem">
            <ul>
              <li id="myloan" onClick={onMenuItemClick}>
                All Loans
              </li>
              <li id="pendingloans" onClick={onMenuItemClick}>
                Pending Loan
              </li>
              <li id="activeloans" onClick={onMenuItemClick}>
                Active Loan
              </li>
              <li id="loancalculator" onClick={onMenuItemClick}>
                Loan Calculator
              </li>
              <li id="loanproducts" onClick={onMenuItemClick}>
                Loan Products
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="repayment" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="repayment"
          onClick={onMenuItemClick}
          src="images/dtransfer.png"
          alt="repayment"
        />
        <p id="repayment" onClick={onMenuItemClick}>
          Repayments
        </p>
      </div>

      <div onMouseOver={openSubAccount} onMouseLeave={closeSubAccount}>
        <div className="IconBox">
          <img src="images/daccount.png" alt="accounts" />
          <p>Accounts</p>
        </div>
        {isAccountOpen ? (
          <div className="SubItem">
            <ul>
              <li id="accounts" onClick={onMenuItemClick}>
                All Accounts
              </li>
              <li id="accounttypes" onClick={onMenuItemClick}>
                Account Types
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="withdraw" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="withdraw"
          onClick={onMenuItemClick}
          src="images/dwithdraw.png"
          alt="withdrawer"
        />
        <p id="withdraw" onClick={onMenuItemClick}>
          Disbursement
        </p>
      </div>

      <div id="transaction" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="transaction"
          onClick={onMenuItemClick}
          src="images/daccount.png"
          alt="transaction"
        />
        <p id="transaction" onClick={onMenuItemClick}>
          Transactions
        </p>
      </div>

      <div onMouseOver={openSubRemita} onMouseLeave={closeSubRemita}>
        <div className="IconBox">
          <img
            
            src="images/dremita.png"
            alt="remita"
          />
          <p>Remita Collections</p>
        </div>
        {isRemitaOpen ? (
          <div className="SubItem">
            <ul>
              <li id="checksalaryhistory" onClick={onMenuItemClick}>
                Check Salary History
              </li>
              <li id="remita" onClick={onMenuItemClick}>
                Loan Disbursements
              </li>

              <li id="collectionnotifications" onClick={onMenuItemClick}>
                Collection Notification
              </li>
              <li id="mandatehistory" onClick={onMenuItemClick}>
                Mandate History
              </li>
              <li id="stopcollections" onClick={onMenuItemClick}>
                Stop Collections
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="creditbureau" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="creditbureau"
          onClick={onMenuItemClick}
          src="images/dreport.png"
          alt="creditbureau"
        />
        <p id="creditbureau" onClick={onMenuItemClick}>
          Credit Assessment
        </p>
      </div>

      <div onMouseOver={openSubEmployer} onMouseLeave={closeSubEmployer}>
        <div className="IconBox">
          <img src="images/dmda.png" alt="mdas" />
          <p>Employer Manager</p>
        </div>
        {isEmployerOpen ? (
          <div className="SubItem">
            <ul>
              <li id="addemployer" onClick={onMenuItemClick}>
                Add Employer
              </li>
              <li id="mandaterules" onClick={onMenuItemClick}>
                Mandate Rules
              </li>
              <li id="statementrules" onClick={onMenuItemClick}>
                Statement Rules
              </li>
              <li id="mdas" onClick={onMenuItemClick}>
                All Employers
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div onMouseOver={openSubKyc} onMouseLeave={closeSubKyc}>
        <div className="IconBox">
          <img src="images/dkyc.png" alt="kyc" />
          <p>KYC Review</p>
        </div>

        {isKycOpen ? (
          <div className="SubItem">
            <ul>
              <li id="kyc" onClick={onMenuItemClick}>
                Do KYC Review
              </li>
              <li id="signature" onClick={onMenuItemClick}>
                Review Report
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div onMouseOver={openSubWebManager} onMouseLeave={closeSubWebManager}>
        <div className="IconBox">
          <img src="images/dwebsite.png" alt="webmanager" />
          <p>Website Manager</p>
        </div>

        {isWebManagerOpen ? (
          <div className="SubItem">
            <ul>
              <li id="website" onClick={onMenuItemClick}>
                All Pages
              </li>
              <li id="contactForm" onClick={onMenuItemClick}>
                Contact Form
              </li>
              <li id="webmanager" onClick={onMenuItemClick}>
                Blogs
              </li>
              <li id="addwiki" onClick={onMenuItemClick}>
                Wiki/FAQ
              </li>
              <li id="customerAsk" onClick={onMenuItemClick}>
                Customer Ask
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="withdrawmethod" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="withdrawmethod"
          onClick={onMenuItemClick}
          src="images/dwithdrawmethod.png"
          alt="withdrawmethod"
        />
        <p id="withdrawmethod" onClick={onMenuItemClick}>
          Disbursement Methods
        </p>
      </div>

      <div id="usermanager" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="usermanager"
          onClick={onMenuItemClick}
          src="images/dusermanage.png"
          alt="usermanager"
        />
        <p id="usermanager" onClick={onMenuItemClick}>
          User Manager
        </p>
      </div>

      <div onMouseOver={openSubReports} onMouseLeave={closeSubReports}>
        <div className="IconBox">
          <img src="images/dreport.png" alt="report" />
          <p>Reports</p>
        </div>

        {isReportsOpen ? (
          <div className="SubItem">
            <ul>
              <li id="report" onClick={onMenuItemClick}>
                Account Statement
              </li>
              <li id="accountbalance" onClick={onMenuItemClick}>
                Account Balance
              </li>
              <li id="loanreporting" onClick={onMenuItemClick}>
                Loan Report
              </li>
              <li id="loanduereport" onClick={onMenuItemClick}>
                Loan Due Report
              </li>
              <li id="transactionreport" onClick={onMenuItemClick}>
                Transaction Report
              </li>
              {/* <li id="expensereport" onClick={onMenuItemClick}>
                Expense Report
              </li>
              <li id="revenuereport" onClick={onMenuItemClick}>
                Revenue Report
              </li> */}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

SideNavMain.propTypes = {
  onMenuItemClick: PropTypes.func,
};

export default SideNavMain;
