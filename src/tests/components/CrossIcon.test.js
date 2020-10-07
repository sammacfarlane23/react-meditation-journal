import React from 'react';
import CrossIcon from '../../components/CrossIcon';
import { render } from '@testing-library/react';

test('should render CrossIcon correctly', () => {
  const component = render(<CrossIcon />);
  expect(component).toMatchSnapshot();
});
