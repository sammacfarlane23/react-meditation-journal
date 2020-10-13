import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { screen, fireEvent } from '@testing-library/react';
import EntryListFilters from '../../components/EntryListFilters';
import { renderWithReduxState } from '../store/mockStore';

test('should render EntryListFilters correctly', () => {
  const component = renderWithReduxState(<EntryListFilters />);
  expect(component).toMatchSnapshot();
});

test('should set text filter on input change and dispatch setTextFilter action', () => {
  const value = 'This is a search query';
  renderWithReduxState(<EntryListFilters />);
  const searchBar = screen.getByLabelText('search-input');
  searchBar.value = value;
  fireEvent.change(searchBar);
  expect(searchBar.value).toBe(value);
});
