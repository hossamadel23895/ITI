import { NavLink } from "react-router-dom";
import { Card} from "react-bootstrap";

let ArtistItem = ({ artistInfo }) => {
  return (
    <div className="alert bg-dark">
      <Card className="bg-dark" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            process.env.PUBLIC_URL +
            "/images/artists/" +
            artistInfo.cover +
            ".jpg"
          }
        />
        <Card.Body className="d-flex align-items-center flex-column">
          <Card.Title>{artistInfo.name}</Card.Title>
          <NavLink
            className={"btn btn-success mt-2"}
            to={`/artists/${artistInfo.id}`}
          >
            Artist Details
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArtistItem;
