import React from 'react';
import ReactModal from 'react-modal';
import EntryForm from './EntryForm';

export default (props) => {
  return (
    <ReactModal
      className='modal'
      isOpen={props.showModal}
      onRequestClose={props.closeModal}
      contentLabel='Entry View'
      closeTimeoutMS={300}
    >
      <EntryForm
        closeModal={props.closeModal}
        entry={props.selectedEntry}
        onSubmit={props.onSubmit}
        canDelete={props.canDelete}
        onRemove={props.onRemove}
      />
    </ReactModal>
  );
};
