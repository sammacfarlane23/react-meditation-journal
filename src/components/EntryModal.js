import React from "react";
import ReactModal from "react-modal";
import EntryForm from "./EntryForm";

const EntryModal = (props) => {
  return (
    <ReactModal
      ariaHideApp={false}
      className="modal"
      isOpen={props.showModal}
      onRequestClose={props.closeModal}
      contentLabel="Entry View"
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

export default EntryModal;
