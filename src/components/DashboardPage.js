import React from 'react';
import EntryList from './EntryList';
import AddEntryButton from './AddEntryButton';

export default () => (
  <div className='dashboard-layout'>
    <div className='content-container'>
      <EntryList />
    </div>
    <AddEntryButton />
  </div>
);
