import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';

export const EntryModal = (props) => (
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
      canEdit={props.canEdit}
      onRemove={props.onRemove}
    />
  </ReactModal>
);

const mapStateToProps = (state, props) => {
  return {
    entry: state.entries.find((entry) => entry.id === props.id),
  };
};

export default connect(mapStateToProps)(EntryModal);
