import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { render } from '@testing-library/react';

test('should render loading page correctly', () => {
  const component = render(<LoadingPage />);
  expect(component).toMatchSnapshot();
});
