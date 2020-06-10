import database from '../firebase/firebase';

export const createEntry = (entry) => ({
  type: 'CREATE_ENTRY',
  entry,
});

export const startCreateEntry = (entryData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { entryText = '', createdAt = 0, title = '' } = entryData;
    const entry = {
      entryText,
      createdAt,
      title,
    };

    return database
      .ref(`users/${uid}/entries`)
      .push(entry)
      .then((ref) => {
        dispatch(
          createEntry({
            id: ref.key,
            ...entry,
          })
        );
      });
  };
};

export const removeEntry = ({ id } = {}) => ({
  type: 'REMOVE_ENTRY',
  id,
});

export const startRemoveEntry = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/entries/${id}`)
      .remove()
      .then(() => {
        dispatch(removeEntry({ id }));
      });
  };
};

export const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates,
});

export const startEditEntry = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/entries/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editEntry(id, updates));
      });
  };
};

export const setEntries = (entries) => {
  return {
    type: 'SET_ENTRIES',
    entries,
  };
};

export const startSetEntries = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/entries`)
      .once('value')
      .then((snapshot) => {
        const entries = [];

        snapshot.forEach((childSnapshot) => {
          entries.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setEntries(entries));
      });
  };
};

export const selectEntryForEdit = (entry) => {
  return {
    type: 'SELECT_ENTRY_FOR_EDIT',
    entry,
  };
};
