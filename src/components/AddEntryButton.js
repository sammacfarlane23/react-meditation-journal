import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EntryModal from './EntryModal';
import { startCreateEntry } from '../actions/entries';

export const AddEntryButton = (props) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const onSubmit = (entry) => {
    props.startCreateEntry(entry);
    setShow(false);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className='button-position'>
      {!show && (
        <button className='button--big circular-container' onClick={showModal}>
          <FontAwesomeIcon icon={faPlus} size='2x' />
        </button>
      )}
      <EntryModal
        showModal={show}
        onSubmit={onSubmit}
        closeModal={closeModal}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startCreateEntry: (entry) => dispatch(startCreateEntry(entry)),
});

export default connect(undefined, mapDispatchToProps)(AddEntryButton);
