import React from 'react';
import EntryListFilters from '../../components/EntryListFilters';
import { renderWithState } from '../store/mockStore';

test('should render EntryListFilters correctly', () => {
  const component = renderWithState(<EntryListFilters />);
  expect(component).toMatchSnapshot();
});
