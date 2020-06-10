import React from 'react';
import EntryList from './EntryList';
import Footer from './Footer';

export default () => (
  <div className='dashboard-layout'>
    <div className='content-container'>
      <EntryList />
    </div>
    <Footer />
  </div>
);
