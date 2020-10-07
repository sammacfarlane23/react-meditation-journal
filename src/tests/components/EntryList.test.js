import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EntryList from '../../components/EntryList';
import entries from '../fixtures/entries';
import { renderWithState } from '../store/mockStore';

test('should render EntryList with entries', () => {
  const initialState = {
    entries,
    filters: {
      text: '',
    },
  };
  const component = renderWithState(<EntryList />, initialState);
  expect(component).toMatchSnapshot();
});

test('should render welcome message if no entries', () => {
  renderWithState(<EntryList />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});

test('should render no entries message if there are entries but none selected', () => {
  const initialState = {
    entries,
    filters: {
      text: 'search query',
    },
  };
  renderWithState(<EntryList />, initialState);
  expect(screen.getByText(/no matching entries/i)).toBeInTheDocument();
});
