import DashboardHeadline from "../../shared/DashboardHeadline";
import "./Customer.css";
import CustomersList from "./CustomersList";
import NextPreBtn from "../../shared/NextPreBtn";

const CustomersDashboard = () => {
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
        {/* customers list  */}
        <div className="ListSec">

        <CustomersList />
        </div>
        {/* next and previous button  */}
        <NextPreBtn />
      </div>
    </div>
  );
};

export default CustomersDashboard;
