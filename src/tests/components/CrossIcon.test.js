import React from 'react';
import { shallow } from 'enzyme';
import CrossIcon from '../../components/CrossIcon';

test('should render CrossIcon correctly', () => {
  const wrapper = shallow(<CrossIcon />);
  expect(wrapper).toMatchSnapshot();
});
