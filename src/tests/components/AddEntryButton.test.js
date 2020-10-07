import React from 'react';
import { renderWithState } from '../store/mockStore';
import AddEntryButton from '../../components/AddEntryButton';

test('should render AddEntryButton correctly with isModalOpen false', () => {
  const component = renderWithState(<AddEntryButton />);
  expect(component).toMatchSnapshot();
});

test('Clicking the button should set isModalOpen to true', () => {});
