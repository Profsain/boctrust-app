import { Row, Col } from "react-bootstrap";
import FigCard from "../shared/FigCard";
import "../Dashboard.css";

const TopCardSec = () => {
  return (
    <div className="TopCard">
      <Row>
        <Col xs={6} md={3}>
          <FigCard classname="MobCard">
            <img
              width="28px"
              height="28px"
              src="images/whitenaira.png"
              alt="naira"
            />
            <h5 className="FigNum">1,329,00</h5>
            <p>Balance</p>
          </FigCard>
        </Col>

        <Col xs={6} md={3}>
          <FigCard classname="MobCard">
            <img
              width="28px"
              height="28px"
              src="images/whitenaira.png"
              alt="naira"
            />
            <h5 className="FigNum">5,342,234</h5>
            <p>Total Balance</p>
          </FigCard>
        </Col>

        <Col xs={6} md={3}>
          <FigCard classname="MobCard">
            <img
              width="28px"
              height="28px"
              src="images/whitenaira.png"
              alt="naira"
            />
            <h5 className="FigNum">20,312</h5>
            <p>Upcoming Payments</p>
          </FigCard>
        </Col>

        <Col xs={6} md={3}>
          <FigCard classname="YellowCard MobCard">
            <div id="CardText">
              <h5>
                <span>
                  <img
                    width="18px"
                    height="18px"
                    src="images/whitenaira.png"
                    alt="naira"
                  />
                </span>
                20,312
              </h5>
              <p>00 - 00 - 0000</p>
              <p>From</p>
              <p>1234567890123</p>
              <p>To</p>
              <p>1234567890123</p>
              <p>Recent Transaction</p>
            </div>
          </FigCard>
        </Col>
      </Row>
    </div>
  );
};

export default TopCardSec;
