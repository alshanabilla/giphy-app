import React from 'react';

const SearchBar = (props) => {
  const { getGifs, handleInput } = props;
  return (
    <form className="form-search" onSubmit={getGifs}>
      <input type="text" className="form-search__input" required onChange={handleInput}/>
      <button type="submit" className="form-search__button">Search</button>
    </form>
  )
}

export default SearchBar;