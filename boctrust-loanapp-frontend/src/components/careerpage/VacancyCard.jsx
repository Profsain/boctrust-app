import PropTypes from "prop-types";
import { Card, Button, Stack } from "react-bootstrap";
import "./Career.css";

const VacancyCard = ({
  id,
  img = "images/hiring.jpg",
  title,
  description,
  postdate,
  deadline,
  func,
}) => {
  return (
    <Card style={{ width: "22rem", padding: "6px", margin: "6px" }}>
      <Card.Img
        variant="top"
        src={img}
        style={{ width: "100%", height: "250px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Stack direction="horizontal" gap={2}>
          <div className="bg-warning border">
            <p className="JobDate">Posted on: {postdate}</p>
          </div>
          <div className="bg-warning border ms-auto">
            <p className="JobDate">Deadline: {deadline}</p>
          </div>
        </Stack>

        <Button
          id={id}
          variant="primary my-3"
          style={{ backgroudColor: "#145088" }}
          onClick={func}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

VacancyCard.propTypes = {
  description: PropTypes.string,
  deadline: PropTypes.string,
  func: PropTypes.func,
  img: PropTypes.string,
  postdate: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.any,
};

export default VacancyCard;
