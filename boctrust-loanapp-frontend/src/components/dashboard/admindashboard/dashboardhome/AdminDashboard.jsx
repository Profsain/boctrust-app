import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../Dashboard.css";
import TopNavber from "../../topnavbar/TopNavber";
import SideNavIcons from "./SideNavIcons";
import SideNavMain from "./SideNavMain";
import AccountDashboard from "../account/AccountDashboard";
import AccountTypes from "../account/AccountTypes";
import CreditBureauDashboard from "../creditbureau/CreditBureauDashboard";
import CustomersDashboard from "../customers/CustomersDashboard";
import AddCustomer from "../customers/AddCustomer";
import CustomersRequest from "../customers/CustomersRequest"
import HomeDashboard from "./HomeDashboard";
import Branches from "../branches/Branches";
import MdasEmployers from "../employersmanager/MdasEmployers";
import AddEmployer from "../employersmanager/AddEmployer";
import MandateRules from "../employersmanager/MandateRules";
import KycCheck from "../kyc/KycCheck";
import GovernmentID from "../kyc/GovernmentID";
import FacialCapture from "../kyc/FacialCapture";
import ReviewSignature from "../kyc/ReviewSignature";
import OtherDocuments from "../kyc/OtherDocuments";
import LoanDashboard from "../loan/LoanDashboard";
import PendingLoans from "../loan/PendingLoans";
import ActiveLoans from "../loan/ActiveLoans";
import LoanCalculator from "../loan/LoanCalculator";
import LoanProducts from "../loan/LoanProducts";
import RemitaDashboard from "../remita/RemitaDashboard";
import CheckSalaryHistory from "../remita/CheckSalaryHistory";
import CollectionNotifications from "../remita/CollectionNotifications";
import MandateHistory from "../remita/MandateHistory";
import StopCollection from "../remita/StopCollection";
import RepaymentDashboard from "../repayment/RepaymentDashboard";
import AccountStatement from "../report/accountstatement/AccountStatement";
import AccountBalance from "../report/accountbalance/AccountBalance";
import LoanReport from "../report/loanreport/LoanReport";
import LoanDueReport from "../report/loanduereport/LoanDueReport";
import TransactionReport from "../report/transactionreport/TransactionReport";
import ExpenseReport from "../report/expensereport/ExpenseReport";
import RevenueReport from "../report/revenuereport/RevenueReport";
import TransactionDashboard from "../transaction/TransactionDashboard";
import UserManagerDashboard from "../usersmanager/UserManagerDashboard";
import UserControls from "../usersmanager/UserControls";
import AccessControls from "../usersmanager/AccessControls";
import WebsiteManagerDashboard from "../website/WebsiteManagerDashboard";
import WithdrawRequestDashboard from "../withdraw/WithdrawRequestDashboard";
import WithdrawMethodDashboard from "../withdrawmethod/WithdrawMethodDashboard";
import AddWiki from "../website/AddWiki";
import CustomerAsk from "../website/CustomerAsk";
import StatementRules from "../employersmanager/StatementRules";
import AllWebsitePages from "../website/AllWebsitePages";
import ContactForm from "../website/ContactForm";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("dashboard");
  const [currentTitle, setCurrentTitle] = useState("Dashboard");

  // scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentComponent]);

  const handleMouseOver = () => {
    setShowSidebar(true);
  };

  const handleMouseOut = () => {
    setShowSidebar(false);
  };

  const handleMenuItemClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    setCurrentComponent(id);
    switch (id) {
      case "dashboard":
        setCurrentTitle("Dashboard");
        break;
      case "branches":
        setCurrentTitle("Branches");
        break;
      case "customer":
        setCurrentTitle("Customer List");
        break;
      case "addcustomer":
        setCurrentTitle("Add New Customer");
        break;
      case "customerrequest":
        setCurrentTitle("Customers Request");
        break;
      case "myloan":
        setCurrentTitle("Loan Dashboard");
        break;
      case "pendingloans":
        setCurrentTitle("Pending Loans");
        break;
      case "activeloans":
        setCurrentTitle("Active Loans");
        break;
      case "loancalculator":
        setCurrentTitle("Loan Calculator");
        break;
      case "loanproducts":
        setCurrentTitle("Loan Products");
        break;
      case "transfer":
        setCurrentTitle("Transfer Money");
        break;
      case "repayment":
        setCurrentTitle("Repayments");
        break;
      case "accounts":
        setCurrentTitle("Accounts");
        break;
      case "accounttypes":
        setCurrentTitle("Account Types");
        break;
      case "withdraw":
        setCurrentTitle("Disbursement Requests");
        break;
      case "transaction":
        setCurrentTitle("Transaction History");
        break;
      case "remita":
        setCurrentTitle("Loan Disbursements");
        break;
      case "checksalaryhistory":
        setCurrentTitle("Check Salary History");
        break;
      case "collectionnotifications":
        setCurrentTitle("Collection Notification");
        break;
      case "mandatehistory":
        setCurrentTitle("Mandate History");
        break;
      case "stopcollections":
        setCurrentTitle("Stop Collections Dashboard");
        break;
      case "creditbureau":
        setCurrentTitle("Credit Assessment");
        break;
      case "mdas":
        setCurrentTitle("Employers/MDAs Manager");
        break;
      case "addemployer":
        setCurrentTitle("Employers/MDAs Manager");
        break;
      case "mandaterules":
        setCurrentTitle("Employers/MDAs Manager");
        break;
      case "statementrules":
        setCurrentTitle("Employers/MDAs Manager");
        break;
      case "kyc":
        setCurrentTitle("Check Customer KYC Details");
        break;
      case "governmentid":
        setCurrentTitle("Check Government ID card Details");
        break;
      case "facialcapture":
        setCurrentTitle("Check Facial Capture Details");
        break;
      case "signature":
        setCurrentTitle("Check Customer Admin Review and Signature");
        break;
      case "otherdocs":
        setCurrentTitle("Check Customer Other Documents");
        break;
      case "webmanager":
        setCurrentTitle("Blogs Manager ");
        break;
      case "website":
        setCurrentTitle("Website Manager");
        break;
      case "addwiki":
        setCurrentTitle("Add New FAQs/Wiki");
        break;
      case "customerAsk":
        setCurrentTitle("Customer FAQ Request");
        break;
      case "contactForm":
        setCurrentTitle("Contact Us Record");
        break;
      case "withdrawmethod":
        setCurrentTitle("Disbursement Methods");
        break;
      case "usermanager":
        setCurrentTitle("User Manager");
        break;
      case "userroles":
        setCurrentTitle("User Roles");
        break;
      case "accesscontrols":
        setCurrentTitle("Access Controls");
        break;
      case "report":
        setCurrentTitle("Account Statement");
        break;
      case "accountbalance":
        setCurrentTitle("Account Balance");
        break;
      case "loanreporting":
        setCurrentTitle("Loan Report");
        break;
      case "loanduereport":
        setCurrentTitle("Loan Due Report");
        break;
      case "transactionreport":
        setCurrentTitle("Transaction Report");
        break;
      case "expensereport":
        setCurrentTitle("Expense Report");
        break;
      case "revenuereport":
        setCurrentTitle("Revenue Report");
        break;
      default:
        setCurrentTitle("Dashboard");
        break;
    }
    setShowSidebar(false);
  };

  // handle component rendering
  const renderComponent = () => {
    switch (currentComponent) {
      case "dashboard":
        return <HomeDashboard />;
      case "branches":
        return <Branches />;
      case "customer":
        return <CustomersDashboard />;
      case "addcustomer":
        return <AddCustomer />;
      case "customerrequest":
        return <CustomersRequest />;
      case "myloan":
        return <LoanDashboard />;
      case "pendingloans":
        return <PendingLoans />;
      case "activeloans":
        return <ActiveLoans />;
      case "loancalculator":
        return <LoanCalculator />;
      case "loanproducts":
        return <LoanProducts />;
      case "repayment":
        return <RepaymentDashboard />;
      case "accounts":
        return <AccountDashboard />;
      case "accounttypes":
        return <AccountTypes />;
      case "withdraw":
        return <WithdrawRequestDashboard />;
      case "transaction":
        return <TransactionDashboard />;
      case "remita":
        return <RemitaDashboard />;
      case "checksalaryhistory":
        return <CheckSalaryHistory />;
      case "collectionnotifications":
        return <CollectionNotifications />;
      case "mandatehistory":
        return <MandateHistory />;
      case "stopcollections":
        return <StopCollection />;
      case "creditbureau":
        return <CreditBureauDashboard />;
      case "mdas":
        return <MdasEmployers />;
      case "addemployer":
        return <AddEmployer />;
      case "mandaterules":
        return <MandateRules />;
      case "statementrules":
        return <StatementRules />;
      case "kyc":
        return <KycCheck />;
      case "governmentid":
        return <GovernmentID />;
      case "facialcapture":
        return <FacialCapture />;
      case "signature":
        return <ReviewSignature />;
      case "otherdocs":
        return <OtherDocuments />;
      case "webmanager":
        return <WebsiteManagerDashboard />;
      case "addwiki":
        return <AddWiki />;
      case "customerAsk":
        return <CustomerAsk />;
      case "contactForm":
        return <ContactForm />;
      case "website":
        return <AllWebsitePages />;
      case "usermanager":
        return <UserManagerDashboard />;
      case "userroles":
        return <UserControls />;
      case "accesscontrols":
        return <AccessControls />;
      case "withdrawmethod":
        return <WithdrawMethodDashboard />;
      case "report":
        return <AccountStatement />;
      case "accountbalance":
        return <AccountBalance />;
      case "loanreporting":
        return <LoanReport />;
      case "loanduereport":
        return <LoanDueReport />;
      case "transactionreport":
        return <TransactionReport />;
      case "expensereport":
        return <ExpenseReport />;
      case "revenuereport":
        return <RevenueReport />;
      default:
        return null;
    }
  };

  // current login admin user
  const currentUser = useSelector((state) => state.adminAuth.user);
  const adminName = currentUser.fullName;

  return (
    <div className="DashboardContainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 SideNavContainer">
            {/* desktop navbar */}
            <div className="DesktopNav">
              <SideNavMain onMenuItemClick={handleMenuItemClick} />
            </div>
            {/* mobile navbar */}
            <div className="MobileNav">
              {!showSidebar ? (
                <div className="SideNavIcon" onMouseOver={handleMouseOver}>
                  <SideNavIcons />
                </div>
              ) : (
                <div className="SideNavMain" onMouseLeave={handleMouseOut}>
                  <SideNavMain onMenuItemClick={handleMenuItemClick} />
                </div>
              )}
            </div>
          </div>
          <div className="col-10">
            <div className="TopNavber">
              <TopNavber title={currentTitle} user={adminName} />
              {renderComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
