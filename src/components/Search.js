import React from "react";

function Search({plants, search, setSearch}) {



  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={e => {
          setSearch(e.target.value)
          console.log(search)
          }}
      />
    </div>
  );
}

export default Search;
