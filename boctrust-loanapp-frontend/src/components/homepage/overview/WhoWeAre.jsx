import "./Overview.css";

const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="VisionLeft col-md-6 col-sm-12">
          <h3>Boctrust Microfinance Bank Ltd</h3>
          <p>
            BOCTRUST MICROFINANCE BANK is a financial institution licensed by
            Central Bank of Nigeria to gives social and economic Support to the
            lower middle class, working class and the economically active poor.
          </p>

          <h3>Our People</h3>
          <p>
            Our Board of Directors comprising of seasoned administrators and
            Chief Executives with commitment, strategic focus and leadership are
            ably supported by the Management team with distinguished diverse
            background in banking innovative services, and risk management among
            others.
          </p>

          <p>
            We ensure quality with state of the art information technology and
            extra ordinary human capital committed to the highest standards in
            Financial services. Working with us; you will discover our
            differences the first time. Our primary focus is service, service,
            and service.
          </p>
          <p>
            In summary, we have a very hard working and result oriented
            management team, backed up by visionary Board comprising young and
            shrewd investors and professionals who have distinguished themselves
            in their respective fields of endeavours. Our staffs are well
            experienced in banking operations with friendly customer service
            excellence. With us, your needs and requests are best handled with
            our dynamic skilled workforce.
          </p>
        </div>
        <div className="VisionRight col-md-6 col-sm-12">
          <img
            className="TopImg"
            src="images/boctrust-staff1.avif"
            alt="bocstrust-microfinance-staff"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
