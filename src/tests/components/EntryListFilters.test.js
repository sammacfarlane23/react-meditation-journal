import React from 'react';
import { shallow } from 'enzyme';
import { EntryListFilters } from '../../components/EntryListFilters';

test('should render EntryListFilters correctly', () => {
  const text = '';
  const wrapper = shallow(<EntryListFilters filters={{ text }} />);
  expect(wrapper).toMatchSnapshot();
});
