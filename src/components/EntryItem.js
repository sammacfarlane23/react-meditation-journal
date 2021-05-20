import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import EntryModal from "./EntryModal";
import { startEditEntry, startRemoveEntry } from "../actions/entries";

const EntryItem = ({ id, title, entryText, createdAt }) => {
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
      <button className="entry-item" onClick={openModal}>
        <div>
          <h2 className="entry-item__date">
            {moment(createdAt).format("DD MMM YYYY HH:mm")}
          </h2>
        </div>
        {title && <h1 className="entry-item__title">{title}</h1>}
        <div className="entry-item__text">
          <p>{entryText}</p>
        </div>
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

export default EntryItem;
