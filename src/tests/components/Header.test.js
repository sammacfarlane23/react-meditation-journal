import React from 'react';
import { Header } from '../../components/Header';
import { render } from '@testing-library/react';

test('should render Header correctly', () => {
  const component = render(<Header />);
  expect(component).toMatchSnapshot();
});
