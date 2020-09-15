import React from 'react';
import { shallow } from 'enzyme';
import { EntryModal } from '../../components/EntryModal';

test('should render EntryModal correctly', () => {
  const wrapper = shallow(<EntryModal />);
  expect(wrapper).toMatchSnapshot();
});
