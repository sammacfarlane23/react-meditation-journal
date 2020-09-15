import entriesReducer from '../../reducers/entries';
import entries from '../fixtures/entries';

test('should set default state', () => {
  const state = entriesReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual([]);
});

test('should remove entry by id', () => {
  const action = {
    type: 'REMOVE_ENTRY',
    id: entries[1].id,
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual([entries[0], entries[2]]);
});

test('should not remove entry by non-existent id', () => {
  const action = {
    type: 'REMOVE_ENTRY',
    id: '-1',
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual(entries);
});

test('should add an entry', () => {
  const entry = {
    id: '4',
    entryText: 'An extra entry',
    title: 'title',
    createdAt: 2000,
  };
  const action = {
    type: 'CREATE_ENTRY',
    entry,
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual([...entries, entry]);
});

test('should edit an entry', () => {
  const entryText = 'Updated text';
  const updates = {
    entryText,
  };
  const action = {
    type: 'EDIT_ENTRY',
    id: entries[0].id,
    updates,
  };
  const state = entriesReducer(entries, action);
  expect(state[0].entryText).toBe(entryText);
});

test('should not edit entry if id not found', () => {
  const entryText = 'Updated text';
  const updates = {
    entryText,
  };
  const action = {
    type: 'EDIT_ENTRY',
    id: '-1',
    updates,
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual(entries);
});

test('should set entries', () => {
  const action = {
    type: 'SET_ENTRIES',
    entries,
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual(entries);
});

test('should select entry for edit', () => {
  const entry = entries[0];
  const action = {
    type: 'SELECT_ENTRY_FOR_EDIT',
    entry,
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual(entry);
});
