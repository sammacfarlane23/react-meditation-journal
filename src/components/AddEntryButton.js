import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EntryModal from './EntryModal';
import { startCreateEntry } from '../actions/entries';

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onSubmit = (entry) => {
    dispatch(startCreateEntry(entry));
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='button-position'>
      {!isModalOpen && (
        <button className='button--big circular-container' onClick={showModal}>
          <FontAwesomeIcon icon={faPlus} size='2x' />
        </button>
      )}
      <EntryModal
        showModal={isModalOpen}
        onSubmit={onSubmit}
        closeModal={closeModal}
      />
    </div>
  );
};
