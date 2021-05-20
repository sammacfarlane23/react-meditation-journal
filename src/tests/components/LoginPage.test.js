import React from 'react';
import LoginPage from '../../components/LoginPage';
import { renderWithReduxState } from '../store/mockStore';

test('should render login page correctly', () => {
  const component = renderWithReduxState(<LoginPage />);
  expect(component).toMatchSnapshot();
});
