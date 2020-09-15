import React from 'react';
import { shallow } from 'enzyme';
import EditButton from '../../components/EditButton';

test('should render EditButton correctly', () => {
  const wrapper = shallow(<EditButton />);
  expect(wrapper).toMatchSnapshot();
});
