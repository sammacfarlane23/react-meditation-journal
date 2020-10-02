import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export const EntryListFilters = (props) => {
  const onTextChange = (e) => {
    props.setTextFilter(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        autoFocus
        placeholder='Search entries'
        value={props.filters.text}
        onChange={onTextChange}
        className='search-bar'
      ></input>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryListFilters);
