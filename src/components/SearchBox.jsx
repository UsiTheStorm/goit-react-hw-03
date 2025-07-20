import React from 'react';

function SearchBox({ onFilter, value }) {
  //   function searchContacts(evt) {
  //     console.log(evt);
  //     el;
  //   }

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
            value={value}
            onChange={(e) => onFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
