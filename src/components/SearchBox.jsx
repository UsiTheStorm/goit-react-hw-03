import React from 'react';

function SearchBox() {
  return (
    <div className="section-container search-section">
      <div className="search">
        <div className="search-field">
          <label className="label" htmlFor="searchBox">
            Find contacts by name
          </label>
          <input
            className="input"
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="Search by name"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
