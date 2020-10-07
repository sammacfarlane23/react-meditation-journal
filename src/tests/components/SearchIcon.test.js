import React from 'react';
import SearchIcon from '../../components/SearchIcon';
import { render } from '@testing-library/react';

test('should render SearchIcon correctly', () => {
  const component = render(<SearchIcon />);
  expect(component).toMatchSnapshot();
});
