import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EntryList from '../../components/EntryList';
import entries from '../fixtures/entries';
import { renderWithReduxState } from '../store/mockStore';

test('should render EntryList with entries', () => {
  const initialState = {
    entries,
    filters: {
      text: '',
    },
  };
  const component = renderWithReduxState(<EntryList />, initialState);
  expect(component).toMatchSnapshot();
});

test('should render welcome message if no entries', () => {
  renderWithReduxState(<EntryList />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});

test('should render no entries message if there are entries but none selected', () => {
  const initialState = {
    entries,
    filters: {
      text: 'search query',
    },
  };
  renderWithReduxState(<EntryList />, initialState);
  expect(screen.getByText(/no matching entries/i)).toBeInTheDocument();
});
