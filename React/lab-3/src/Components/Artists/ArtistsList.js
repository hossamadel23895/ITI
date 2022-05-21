import { useEffect, useState } from "react";
import ArtistItem from "./ArtistItem.js";

const ArtistList = () => {
  let [artists, setArtists] = useState([]);
  let [errorMsg, setErrorMsg] = useState("");

  //ComponentDidMount
  useEffect(() => {
    fetch("http://localhost:3333/artists")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArtists(data);
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  }, []);

  //ComponentDidUpdate (put the updated variable in the array)
  useEffect(() => {}, []);

  const renderArtists = () => {
    if (artists.length) {
      return artists.map((artist) => {
        return (
          <div className="mx-2">
            <ArtistItem key={artist.id} artistInfo={artist} />
          </div>
        );
      });
    } else if (errorMsg) {
      return (
        <h3 className="alert alert-danger w-50">
          Failed to fetch artists data from the server, try refreshing the page
        </h3>
      );
    } else {
      return <h1>Getting Data...</h1>;
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-3">
        <div className="h1 my-3">All Artists</div>
      <div className="card-group" style={{ width: "90vw" }}>
        {renderArtists()}
      </div>
    </div>
  );
};

export default ArtistList;
