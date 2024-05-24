import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [universities, setUniversities] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://universities.hipolabs.com/search",
        {
          params: { name: "middle" },
        }
      );
      setUniversities(response.data);
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  const handleFavourite = async (university) => {
    try {
      await axios.post("http://localhost:8000/api/favourites", {
        name: university.name,
        state_province: university["state-province"],
        web_page: university.web_pages[0],
      });
      alert("Added to favourites");
    } catch (error) {
      console.error("Error adding to favourites:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Search Universities</h1>
      <button onClick={handleSearch} className="btn btn-primary mb-3">
        Search
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Website</th>
            <th>Favourite</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university, index) => (
            <tr key={index}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <td>
                <a
                  href={university.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </td>
              <td>
                <button
                  onClick={() => handleFavourite(university)}
                  className="btn btn-success"
                >
                  Favourite
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
