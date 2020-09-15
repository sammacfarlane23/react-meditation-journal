import React from 'react';
import { shallow } from 'enzyme';
import EntryForm from '../../components/EntryForm';
import entries from '../fixtures/entries';

test('should render EntryForm correctly', () => {
  const wrapper = shallow(<EntryForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render EntryForm correctly with entry data and delete button', () => {
  const wrapper = shallow(<EntryForm entry={entries[2]} canEdit={true} />);
  expect(wrapper).toMatchSnapshot();
});
