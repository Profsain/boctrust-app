
import TopCardSec from "./TopCardSec";
import AccountOverviewTable from "./tables/AccountOverviewTable";
import RecentTransaction from "./tables/RecentTransaction";
import UpcomingLoanPayment from "./tables/UpcomingLoanPayment";

const DashboardHome = () => {

  return (
    <div className="DashboardHome">
      <TopCardSec />
      <div className="PCont">
        <AccountOverviewTable />
        <UpcomingLoanPayment />
        <RecentTransaction />
      </div>
    </div>
  );
}

export default DashboardHome