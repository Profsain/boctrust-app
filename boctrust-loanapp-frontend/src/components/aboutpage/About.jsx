import { useEffect } from "react";
// animation library
import AOS from "aos";
import "aos/dist/aos.css";
// component
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import CustomerProduct from "./CustomerProduct";
import OurValue from "./OurValue";
import TopCard from "../shared/TopCard";
import TopCardSection from "./TopCardSection";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header imgurl="images/bocoverview.png" />
      <TopCardSection />
      <div className="container">
        <div>
          <div data-aos="fade-up">
            <TopCard
              spacer="0 68px 28px 68px"
              size="1.5rem"
              lineHeight="38px"
              letterSpacing="0.02em"
              padding="28px"
              title={<Headline text="Our Vision" />}
              text="To be the Number 1 Microfinance Bank in terms of customer service, profitability and returns on investment."
            />
          </div>
          <div data-aos="fade-up">
            <TopCard
              spacer="0 68px 28px 68px"
              size="1.5rem"
              lineHeight="38px"
              letterSpacing="0.02em"
              padding="28px"
              title={<Headline text="Our Goal" />}
              text="Our core objective is to provide avenue for saving, access to credit and financial advisory services to individuals and micro, small & medium enterprises with competitive advantages. We believe in Growing Together with our customer."
            />
          </div>
          <div data-aos="fade-up">
            <TopCard
              spacer="0 68px 28px 68px"
              size="1.4rem"
              lineHeight="38px"
              letterSpacing="0.02em"
              padding="28px"
              title={<Headline text="Our People" />}
              text="Experience Unmatched Financial Excellence: Join our exceptional financial institution led by seasoned administrators, accomplished Chief Executives, and a diverse management team. With a relentless focus on customer service and innovation, we prioritize understanding and meeting your needs, delivering the best-in-class financial services. 
              Backed by a visionary Board and experienced staff, we guarantee efficient and friendly customer service, ensuring your financial goals are met with excellence. Join us today and experience the difference in financial services.."
            />
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <CustomerProduct />
      </div>
      <div data-aos="fade-up">
        <OurValue />
      </div>
    </>
  );
};

export default About;
