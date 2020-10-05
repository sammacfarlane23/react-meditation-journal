import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export default () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const onTextChange = (e) => {
    dispatch(setTextFilter(e.target.value));
  };

  return (
    <div>
      <input
        type='text'
        autoFocus
        placeholder='Search entries'
        value={filters.text}
        onChange={onTextChange}
        className='search-bar'
      ></input>
    </div>
  );
};
