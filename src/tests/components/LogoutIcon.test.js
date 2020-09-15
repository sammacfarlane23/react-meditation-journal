import React from 'react';
import { shallow } from 'enzyme';
import LogoutIcon from '../../components/LogoutIcon';

test('should render LogoutIcon correctly', () => {
  const wrapper = shallow(<LogoutIcon />);
  expect(wrapper).toMatchSnapshot();
});
