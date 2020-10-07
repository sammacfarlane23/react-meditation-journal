import { render } from '@testing-library/react';
import React from 'react';
import EntryModal from '../../components/EntryModal';

test('should render EntryModal correctly', () => {
  const component = render(<EntryModal />);
  expect(component).toMatchSnapshot();
});
