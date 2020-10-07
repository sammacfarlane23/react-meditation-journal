import React from 'react';
import LogoutIcon from '../../components/LogoutIcon';
import { render } from '@testing-library/react';

test('should render LogoutIcon correctly', () => {
  const component = render(<LogoutIcon />);
  expect(component).toMatchSnapshot();
});
