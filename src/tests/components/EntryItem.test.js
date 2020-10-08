import React from 'react';
import EntryItem from '../../components/EntryItem';
import { renderWithReduxState } from '../store/mockStore';
import entries from '../fixtures/entries';

test('should render EntryItem without title correctly', () => {
  const component = renderWithReduxState(<EntryItem {...entries[0]} />);
  expect(component).toMatchSnapshot();
});

test('should render EntryItem correctly with title', () => {
  const component = renderWithReduxState(<EntryItem {...entries[1]} />);
  expect(component).toMatchSnapshot();
});
