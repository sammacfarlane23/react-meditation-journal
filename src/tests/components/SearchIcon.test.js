import React from 'react';
import { shallow } from 'enzyme';
import SearchIcon from '../../components/SearchIcon';

test('should render SearchIcon correctly', () => {
  const wrapper = shallow(<SearchIcon />);
  expect(wrapper).toMatchSnapshot();
});
