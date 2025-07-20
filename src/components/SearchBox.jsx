import React from 'react';

function SearchBox() {
  return (
    <div>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input type="text" name="searchBox" id="searchBox" />
    </div>
  );
}

export default SearchBox;
