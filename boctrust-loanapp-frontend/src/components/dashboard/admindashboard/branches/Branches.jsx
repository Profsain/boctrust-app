import { useState } from "react";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";
import BranchesList from "./BranchesList";
import AddBranch from "./AddBranch";

const Branches = () => {
  const [openAddBranch, setOpenAddBranch] = useState(false);
  // open add branch component
  const openAddBranches = () => setOpenAddBranch(true);

  // handle search
  const [showCount, setShowCount] = useState(10);
  const [searchTerms, setSearchTerms] = useState("");

  return (
    <>
      {!openAddBranch ? (
        <div className="MainBox">
          <div className="AddBtn">
            <BocButton bgcolor="#ecaa00" bradius="22px" func={openAddBranches}>
              <span>+</span> Add New Branch
            </BocButton>
          </div>

          {/* top search bar */}
          <div className="Search">
            <DashboardHeadline padding="0" bgcolor="#d9d9d9">
              <div className="SearchBar">
                <div className="FormGroup">
                  <label htmlFor="show">Show</label>
                  <input
                    name="showCount"
                    type="number"
                    step={10}
                    min={10}
                    value={showCount}
                    onChange={(e) => setShowCount(e.target.value)}
                  />
                </div>
                <div className="FormGroup SBox">
                  <input
                    name="search"
                    placeholder="branch name"
                    value={searchTerms}
                    onChange={(e) => setSearchTerms(e.target.value)}
                  />
                  <img src="images/search.png" alt="search-icon" />
                </div>
              </div>
            </DashboardHeadline>
          </div>
          <div>
            {/* branches list  */}
            <div className="ListSec">
              <BranchesList showCount={showCount} searchTerms={searchTerms} />
            </div>
          </div>
        </div>
      ) : (
        <AddBranch func={setOpenAddBranch} />
      )}
    </>
  );
};

export default Branches;
