const entriesReducerDefaultState = [];

export default (state = entriesReducerDefaultState, action) => {
  switch (action.type) {
    case 'CREATE_ENTRY':
      return [...state, action.entry];
    case 'REMOVE_ENTRY':
      return state.filter(({ id }) => action.id !== id);
    case 'EDIT_ENTRY':
      return state.map((entry) => {
        if (entry.id === action.id) {
          return {
            ...entry,
            ...action.updates,
          };
        } else {
          return entry;
        }
      });
    case 'SET_ENTRIES':
      return action.entries;
    case 'SELECT_ENTRY_FOR_EDIT':
      return action.entry;
    default:
      return state;
  }
};
