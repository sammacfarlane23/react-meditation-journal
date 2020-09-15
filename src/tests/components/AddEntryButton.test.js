import React from 'react';
import { shallow } from 'enzyme';
import { AddEntryButton } from '../../components/AddEntryButton';

test('should render AddEntryButton correctly', () => {
  const wrapper = shallow(<AddEntryButton />);
  expect(wrapper).toMatchSnapshot();
});
