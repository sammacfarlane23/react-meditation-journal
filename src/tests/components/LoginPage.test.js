import React from 'react';
import LoginPage from '../../components/LoginPage';
import { renderWithState } from '../store/mockStore';

test('should render login page correctly', () => {
  const component = renderWithState(<LoginPage />);
  expect(component).toMatchSnapshot();
});
