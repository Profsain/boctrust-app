import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";
import NextPreBtn from "../../shared/NextPreBtn";
import AccountList from "./AccountList";

const AccountDashboard = () => {
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
      <div className="ListSec">
        {/* customers list  */}
        <AccountList />
        {/* next and previous button  */}
        <NextPreBtn />
      </div>
    </div>
  );
};

export default AccountDashboard;
