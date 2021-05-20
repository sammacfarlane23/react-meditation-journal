import React from 'react';
import DashboardPage from '../../components/DashboardPage';
import { mountWithReduxState } from '../store/mockStore';

test('should render dashboard page correctly', () => {
  const wrapper = mountWithReduxState(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
