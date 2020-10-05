import React from 'react';
import { useSelector } from 'react-redux';
import EntryItem from './EntryItem';
import selectEntries from '../selectors/entries';

export default () => {
  const hasEntries = useSelector((state) => !!state.entries.length);
  const entries = useSelector((state) =>
    selectEntries(state.entries, state.filters)
  );

  return (
    <div className='entry-list'>
      {!hasEntries ? (
        <div className='entry-item entry-item--message'>
          Welcome to Meditation Journal App. Click the plus button below to add
          an entry.
        </div>
      ) : entries.length === 0 ? (
        <div className='entry-item entry-item--message'>
          <span>No matching entries :(</span>
        </div>
      ) : (
        entries.map((entry) => {
          return <EntryItem key={entry.id} {...entry} />;
        })
      )}
    </div>
  );
};
