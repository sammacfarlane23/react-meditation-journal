import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import EntryModal from './EntryModal';
import { startEditEntry, startRemoveEntry } from '../actions/entries';

export default ({ id, title, entryText, createdAt }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const onRemove = () => {
    dispatch(startRemoveEntry({ id }));
    closeModal();
  };

  const onSubmit = (entry) => {
    dispatch(startEditEntry(id, entry));
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className='entry-item' onClick={openModal}>
        <div>
          <h1 className='entry-item__date'>
            {moment(createdAt).format('DD MMM YYYY HH:mm')}
          </h1>
        </div>
        {title && <h1 className='entry-item__title'>{title}</h1>}
        <div className='entry-item__text'>{entryText}</div>
      </button>
      <EntryModal
        showModal={showModal}
        selectedEntry={{ id, title, entryText, createdAt }}
        onSubmit={onSubmit}
        closeModal={closeModal}
        canDelete={true}
        onRemove={onRemove}
      />
    </div>
  );
};
