import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
  });
});

test('should set text filter to given text', () => {
  const text = 'search text';
  const action = {
    type: 'SET_TEXT_FILTER',
    text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});
