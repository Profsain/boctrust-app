import FigCard from "../../shared/FigCard";
import DashboardHeadline from "../../shared/DashboardHeadline";
import Headline from "../../../shared/Headline";
import "./AdminDashboard.css";
import LoansCard from "./LoansCard";
import StatCard from "./StatCard";
import BocChart from "./BocChart";
const HomeDashboard = () => {
  return (
    <>
      <div className="TopCard">
        <FigCard>
          <h4 className="Title">5,345</h4>
          <img className="CardIcon" src="images/eyes.png" alt="icon" />
          <p>Total Customers</p>
        </FigCard>
        <div className="Spacer"></div>
        <FigCard>
          <h4 className="Title">500</h4>
          <img className="CardIcon" src="images/eyes.png" alt="icon" />
          <p>Total No Disbursed</p>
        </FigCard>
      </div>

      <div className="Stat">
        <div className="LoansStat">
          <Headline spacer="0 0 0.6rem 0" align="left" text="Loans" />
          <div className="InlineCard">
            <div className="MStat">
              <LoansCard
                img="images/padding.png"
                title="With Operations"
                stat="0"
                bgcolor="#ea5767"
              />
              <LoansCard
                img="images/star.png"
                title="With Credit"
                stat="0"
                bgcolor="#f6ab60"
              />
            </div>
            <div className="MStat">
              <LoansCard
                img="images/thumbup.png"
                title="With COO"
                stat="0"
                bgcolor="#32c6c7"
              />
              <LoansCard
                img="images/star.png"
                title="Booked"
                stat="0"
                bgcolor="#ecaa00"
              />
            </div>
            <LoansCard
              img="images/active.png"
              title="Completed"
              stat="0"
              bgcolor="#2bb294"
            />
            {/* add here */}
          </div>
        </div>

        <div className="LoansStat">
          <Headline
            spacer="1.5rem 0 0.6rem 0"
            align="left"
            text="Collections"
          />
          <div className="InlineCard">
            <StatCard
              day="Today"
              date="March 27, 2023"
              stat="0.00"
              datecolor="#2bb294"
            />
            <StatCard
              day="Yesterday"
              date="March 26, 2023"
              stat="0.00"
              datecolor="#20c0ec"
            />
            <StatCard
              day="This Month"
              date="March 2023"
              stat="0.00"
              datecolor="#2585c3"
            />
            <StatCard
              day="Last Month"
              date="February 2023"
              stat="0.00"
              datecolor="#f6ab60"
            />
          </div>
        </div>
        <div className="LoansStat">
          <Headline
            spacer="1.5rem 0 0.6rem 0"
            align="left"
            text="Disbursement"
          />
          <div className="InlineCard">
            <StatCard
              day="Today"
              date="March 27, 2023"
              stat="0.00"
              datecolor="#2bb294"
            />
            <StatCard
              day="Yesterday"
              date="March 26, 2023"
              stat="0.00"
              datecolor="#20c0ec"
            />
            <StatCard
              day="This Month"
              date="March 2023"
              stat="0.00"
              datecolor="#2585c3"
            />
            <StatCard
              day="Last Month"
              date="February 2023"
              stat="0.00"
              datecolor="#f6ab60"
            />
          </div>
        </div>
      </div>

      {/* stat chart section */}
      <div className="Stat">
        <DashboardHeadline mspacer="0 0 4rem 0">
          Deposit & Withdraw Analytics - 2023
        </DashboardHeadline>
        <BocChart />
      </div>
    </>
  );
};

export default HomeDashboard;
