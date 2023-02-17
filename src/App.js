import "./App.css";
import Cookies from "js-cookie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharacterInComics from "./pages/CharacterInComics";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

//components
import Header from "./components/Header";

function App() {
  const [favoris, setFavoris] = useState(Cookies.get["favoris"] || []);
  Cookies.set("favoris", favoris, { expires: 1 });
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/comics"
            element={<Comics setFavoris={setFavoris} favoris={favoris} />}
          />
          <Route
            path="/characters"
            element={<Characters setFavoris={setFavoris} favoris={favoris} />}
          />
          <Route path="/comics/:id" element={<CharacterInComics />} />
          <Route
            path="/favorites"
            element={<Favorites setFavoris={setFavoris} favoris={favoris} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
