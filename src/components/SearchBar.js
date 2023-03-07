// SearchBar.js

import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rentals, setRentals] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:4567/rentals?search=${searchTerm}`);
    const data = await response.json();
    setRentals(data);
  };
  

  return (
    <form className="form-inline ml-auto">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search Rentals"
        aria-label="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
      {rentals.map((rental) => (
        <div key={rental.id}>
          <h3>{rental.name}</h3>
          <p>Price: {rental.price}</p>
          <p>Size: {rental.size}</p>
        </div>
      ))}
    </form>
  );
}

export default SearchBar;
