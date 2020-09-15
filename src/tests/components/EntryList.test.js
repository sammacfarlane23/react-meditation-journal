import React from 'react';
import { shallow } from 'enzyme';
import { EntryList } from '../../components/EntryList';
import entries from '../fixtures/entries';

test('should render EntryList with entries', () => {
  const wrapper = shallow(<EntryList hasEntries={true} entries={entries} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render welcome message if no entries', () => {
  const wrapper = shallow(<EntryList hasEntries={false} entries={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render no entries message if there are entries but none selected', () => {
  const wrapper = shallow(<EntryList hasEntries={true} entries={[]} />);
  expect(wrapper).toMatchSnapshot();
});
