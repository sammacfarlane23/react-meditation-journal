import React from 'react';
import DashboardPage from '../../components/DashboardPage';
import { renderWithReduxState } from '../store/mockStore';

test('should render dashboard page correctly', () => {
  const component = renderWithReduxState(<DashboardPage />);
  expect(component).toMatchSnapshot();
});
