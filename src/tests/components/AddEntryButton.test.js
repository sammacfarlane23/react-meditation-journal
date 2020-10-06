import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStore } from '../store/mockStore';
import AddEntryButton from '../../components/AddEntryButton';

test('should render AddEntryButton correctly with isModalOpen false', () => {
  const component = renderWithStore(<AddEntryButton />);
  expect(component).toMatchSnapshot();
});

test('Clicking the button should set isModalOpen to true', () => {});
