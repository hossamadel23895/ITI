import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Error from "./Components/Error.js";
import ArtistsList from "./Components/Artists/ArtistsList.js";
import ArtistDetails from "./Components/Artists/ArtistDetails.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="artists" element={<ArtistsList />} />
          <Route path="artists/:id" element={<ArtistDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
