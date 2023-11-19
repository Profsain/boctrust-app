 import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";
import AllLoans from "./AllLoans";

const LoanDashboard = () => {
  return (
    <div className="MainBox">

      {/* top search bar */}
      <div className="Search">
        <DashboardHeadline padding="0" height="70px" bgcolor="#d9d9d9">
          <div className="SearchBar">
            <div className="FormGroup">
              <label htmlFor="show">Show</label>
              <input name="showCount" type="number" step={10} min={10} />
            </div>
            <div className="FormGroup SBox">
              <input name="search" placeholder="Search" />
              <img src="images/search.png" alt="search-icon" />
            </div>
          </div>
        </DashboardHeadline>
      </div>
      <div>
        <div className="ListSec">
          {/* Loans list  */}
          <AllLoans />
        </div>
      </div>
    </div>
  );
};

export default LoanDashboard;
