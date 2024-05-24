import React, { useState, useEffect } from "react";
import axios from "axios";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/favourites"
        );
        console.log("response", response);
        setFavourites(response.data);
      } catch (error) {
        console.error("Error fetching favourites:", error);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <div>
      <h1>Favourite Universities</h1>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>State/Province</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {favourites.map((favourite, index) => (
            <tr key={index}>
              <td>{favourite.name}</td>
              <td>{favourite.state_province || ""}</td>
              <td>
                <a
                  href={favourite.web_page}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Favourites;
