import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Search from "./components/Search";
import Favourites from "./components/Favourites";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">
                Favourites
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
