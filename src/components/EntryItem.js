import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import EntryModal from './EntryModal';
import { startEditEntry, startRemoveEntry } from '../actions/entries';

export const EntryItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [canDelete] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const onRemove = () => {
    props.startRemoveEntry({ id: props.entry.id });
    closeModal();
  };

  const onSubmit = (entry) => {
    props.startEditEntry(props.entry.id, entry);
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
            {moment(props.createdAt).format('DD MMM YYYY HH:mm')}
          </h1>
        </div>
        {props.title && <h1 className='entry-item__title'>{props.title}</h1>}
        <div className='entry-item__text'>{props.entryText}</div>
      </button>
      <EntryModal
        showModal={showModal}
        selectedEntry={props.entry}
        onSubmit={onSubmit}
        closeModal={closeModal}
        canDelete={canDelete}
        onRemove={onRemove}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    entry: state.entries.find((entry) => entry.id === props.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditEntry: (id, entry) => dispatch(startEditEntry(id, entry)),
  startRemoveEntry: (entry) => dispatch(startRemoveEntry(entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryItem);
