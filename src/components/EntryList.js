import React from 'react';
import { connect } from 'react-redux';
import EntryItem from './EntryItem';
import selectEntries from '../selectors/entries';

export const EntryList = (props) => (
  <div className='entry-list'>
    {props.entries.length === 0 ? (
      <div className='entry-item entry-item--message'>
        <span>No entries</span>
      </div>
    ) : (
      props.entries.map((entry) => {
        return <EntryItem key={entry.id} {...entry} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    entries: selectEntries(state.entries, state.filters),
  };
};

export default connect(mapStateToProps)(EntryList);
