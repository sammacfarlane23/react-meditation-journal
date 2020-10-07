import React from 'react';
import DashboardPage from '../../components/DashboardPage';
import { renderWithState } from '../store/mockStore';

test('should render dashboard page correctly', () => {
  const component = renderWithState(<DashboardPage />);
  expect(component).toMatchSnapshot();
});
