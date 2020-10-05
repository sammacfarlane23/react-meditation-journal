import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import EntryModal from './EntryModal';
import { startEditEntry, startRemoveEntry } from '../actions/entries';

// Should probably just switch this over to using the props given by EntryList
export default (props) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const entryItem = useSelector((state) =>
    state.entries.find((entry) => entry.id === props.id)
  );

  const openModal = () => {
    setShowModal(true);
  };

  const onRemove = () => {
    dispatch(startRemoveEntry({ id: entryItem.id }));
    closeModal();
  };

  const onSubmit = (entry) => {
    dispatch(startEditEntry(entryItem.id, entry));
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
            {moment(entryItem.createdAt).format('DD MMM YYYY HH:mm')}
          </h1>
        </div>
        {entryItem.title && (
          <h1 className='entry-item__title'>{entryItem.title}</h1>
        )}
        <div className='entry-item__text'>{entryItem.entryText}</div>
      </button>
      <EntryModal
        showModal={showModal}
        selectedEntry={entryItem}
        onSubmit={onSubmit}
        closeModal={closeModal}
        canDelete={true}
        onRemove={onRemove}
      />
    </div>
  );
};
