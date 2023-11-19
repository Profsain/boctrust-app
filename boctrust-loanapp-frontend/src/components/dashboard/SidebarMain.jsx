import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./Dashboard.css";

const SidebarMain = ({ onMenuItemClick }) => {
  const [isLoanOpen, setIsLoanOpen] = useState(false);
  const openSubLoan = () => setIsLoanOpen(true);
  const closeSubLoan = () => setIsLoanOpen(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const openSubReport = () => setIsReportOpen(true);
  const closeSubReport = () => setIsReportOpen(false);
  const currentUser = useSelector((state) => state.adminAuth.user);
  const user = currentUser.userType;
  const userRole = currentUser.jobRole;

  return (
    <div className="NavIcons SideMain FixSideNav">
      <div className="BrandCon">
        <div className=" LgLogo">
          <img src="images/dlogo.png" alt="boctrust-logo" />
        </div>
        <p>{ userRole}</p>
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

      <div onMouseOver={openSubLoan} onMouseLeave={closeSubLoan}>
        <div id="myloan" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="myloan"
            onClick={onMenuItemClick}
            src="images/dmyloan.png"
            alt="loan"
          />
          <p id="myloan" onClick={onMenuItemClick}>
            My Loans
          </p>
        </div>
        {isLoanOpen ? (
          <div className="SubItem">
            <ul>
              <li id="myloan" onClick={onMenuItemClick}>
                All Loans
              </li>
              <li id="applyloan" onClick={onMenuItemClick}>
                Apply for Loan
              </li>
              <li id="loancalculator" onClick={onMenuItemClick}>
                Loan Calculator
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      {user === "customer1" ? (
        <div id="loanrepayment" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="loanrepayment"
            onClick={onMenuItemClick}
            src="images/dtransfer.png"
            alt="repayment"
          />
          <p id="loanrepayment" onClick={onMenuItemClick}>
            Repayments
          </p>
        </div>
      ) : null}

      {user === "customer2" ? (
        <div id="transfer" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="transfer"
            onClick={onMenuItemClick}
            src="images/dtransfer.png"
            alt="transfer"
          />
          <p id="transfer" onClick={onMenuItemClick}>
            Transfer Money
          </p>
        </div>
      ) : null}

      <div id="transaction" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="transaction"
          onClick={onMenuItemClick}
          src="images/daccount.png"
          alt="account"
        />
        <p id="transaction" onClick={onMenuItemClick}>
          Account Transaction
        </p>
      </div>

      <div id="profile" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="profile"
          onClick={onMenuItemClick}
          src="images/dprofile.png"
          alt="profile"
        />
        <p id="profile" onClick={onMenuItemClick}>
          Profile
        </p>
      </div>

      <div onMouseOver={openSubReport} onMouseLeave={closeSubReport}>
        <div id="report" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="report"
            onClick={onMenuItemClick}
            src="images/dreport.png"
            alt="report"
          />
          <p id="report" onClick={onMenuItemClick}>
            Report
          </p>
        </div>
        {isReportOpen ? (
          <div className="SubItem">
            <ul>
              <li id="report" onClick={onMenuItemClick}>
                Account Statement
              </li>
              <li id="transactionreport" onClick={onMenuItemClick}>
                Transaction Report
              </li>
              <li id="accountbalance" onClick={onMenuItemClick}>
                Account Balance
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

SidebarMain.propTypes = {
  onMenuItemClick: PropTypes.func,
};

export default SidebarMain;
