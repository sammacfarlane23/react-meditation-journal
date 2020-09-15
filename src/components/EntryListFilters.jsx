import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class EntryListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type='text'
          autoFocus
          placeholder='Search entries'
          value={this.props.filters.text}
          onChange={this.onTextChange}
          className='search-bar'
        ></input>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryListFilters);
