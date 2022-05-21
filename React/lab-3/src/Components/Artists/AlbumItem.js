import { Card } from "react-bootstrap";

let AlbumItem = ({ albumInfo }) => {
  console.log(albumInfo);
  return (
    <div className="alert bg-dark w-50">
      <Card className="bg-dark">
        <Card.Img
          variant="top"
          src={
            process.env.PUBLIC_URL +
            "/images/albums/" +
            albumInfo.cover +
            ".jpg"
          }
        />
        <Card.Body className="d-flex align-items-center flex-column">
          <div>Title : {albumInfo.title}</div>
          <div>Year : {albumInfo.year}</div>
          <div>Price : {albumInfo.price} $</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AlbumItem;
