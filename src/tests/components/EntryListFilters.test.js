import React from 'react';
import EntryListFilters from '../../components/EntryListFilters';
import { renderWithReduxState } from '../store/mockStore';

test('should render EntryListFilters correctly', () => {
  const component = renderWithReduxState(<EntryListFilters />);
  expect(component).toMatchSnapshot();
});
