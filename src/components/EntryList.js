import React from 'react';
import { connect } from 'react-redux';
import EntryItem from './EntryItem';
import selectEntries from '../selectors/entries';

export const EntryList = (props) => {
  return (
    <div className='entry-list'>
      {!props.hasEntries ? (
        <div style={props}>
          <div className='entry-item entry-item--message'>
            Welcome to Meditation Journal App. Click the plus button below to
            add an entry.
          </div>
        </div>
      ) : props.entries.length === 0 ? (
        <div className='entry-item entry-item--message'>
          <span>No matching entries :(</span>
        </div>
      ) : (
        props.entries.map((entry) => {
          return <EntryItem key={entry.id} {...entry} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hasEntries: !!state.entries.length,
    entries: selectEntries(state.entries, state.filters),
  };
};

export default connect(mapStateToProps)(EntryList);
