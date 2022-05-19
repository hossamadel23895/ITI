import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumItem from "./AlbumItem.js";

const ArtistDetails = () => {
  const artistId = useParams().id;
  let [artist, setArtist] = useState({});
  let [errorMsg, setErrorMsg] = useState("");

  let [albumsRendered, setAlbumsRendered] = useState(false);

  //ComponentDidMount
  useEffect(() => {
    fetch(`http://localhost:3333/artists/${artistId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArtist(data);
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  }, []);

  //ComponentDidUpdate (put the updated variable in the array)
  useEffect(() => {}, []);

  const renderArtist = () => {
    if (artist.name) {
      return (
        <div className="card bg-dark w-25">
          <div className="card-body d-flex flex-column align-items-center">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/artists/" +
                artist.cover +
                ".jpg"
              }
              className="card-img-top"
              style={{ width: "300px" }}
              alt="artist_photo"
            />
            <h3 className="card-title my-3">{artist.name}</h3>
            <p className="card-text text-center">{artist.bio}</p>
          </div>
          <h3 className="card-title my-3 text-center">Albums</h3>
          <div className="albumsDiv d-flex flex-wrap">{renderAlbums()}</div>
        </div>
      );
    } else if (errorMsg) {
      return (
        <h3 className="alert alert-danger w-50">
          Failed to fetch artist data from the server, try refreshing the page.
        </h3>
      );
    } else {
      return <h1>Getting Data...</h1>;
    }
  };

  const renderAlbums = () => {
    return artist.albums.map((album) => {
      return <AlbumItem key={album.albumId} albumInfo={album} />;
    });
  };

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <div className="h1 my-3">Artist Details</div>
      {renderArtist()}
    </div>
  );
};

export default ArtistDetails;
