import React from 'react';
import EditButton from '../../components/EditButton';
import { render } from '@testing-library/react';

test('should render EditButton correctly', () => {
  const component = render(<EditButton />);
  expect(component).toMatchSnapshot();
});
