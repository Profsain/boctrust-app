import Headline from "../shared/Headline";
import TopCard from "../shared/TopCard";

const TopCardSection = () => {
    const style = {
      marginTop: "-248px",
    }
  return (
    <div className="container" style={style}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <TopCard
            spacer="78px"
            size="1.2rem"
            title={<Headline text="Who we are" />}
            text="BOCTRUST MICROFINANCE BANK is a financial institution licensed by Central Bank of Nigeria to gives social and economic Support to the lower middle class, working class and the economically active poor."
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <TopCard
            spacer="78px"
            size="1.2rem"
            title={<Headline text="Our Mission" />}
            text="We are committed to offering the highest level of professionalism and service with integrity to our partners and customers while ensuring profitable returns to our shareholders."
          />
        </div>
      </div>
    </div>
  );
};

export default TopCardSection;
