import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../lib/config';
import { setQuery } from '../../query-slice';

const SearchBar = ({ onSuccess }) => {
  const query = useSelector((state) => state.query.value);
  const dispatch = useDispatch();
  
  const handleInput = (e) => {
    dispatch(setQuery(e.target.value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const gifs = await fetch(
        `${config.GIPHY_BASE_URL}/gifs/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
      ).then((response) => response.json());

    onSuccess(gifs.data);
  }
  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input type="text" className="form-search_input" required onChange={handleInput}/>
      <button type="submit" className="form-search_button">Search</button>
    </form>
  )
}

export default SearchBar;