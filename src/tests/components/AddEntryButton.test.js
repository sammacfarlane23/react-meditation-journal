import React from 'react';
import { mountWithReduxState } from '../store/mockStore';
import AddEntryButton from '../../components/AddEntryButton';
import Modal from 'react-modal';

test('should render AddEntryButton correctly and modal is not open', () => {
  const wrapper = mountWithReduxState(<AddEntryButton />);
  expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
  expect(wrapper).toMatchSnapshot();
});

test('should open modal when button is clicked and unmount button', () => {
  const wrapper = mountWithReduxState(<AddEntryButton />);
  wrapper.find('button').simulate('click');
  expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
  expect(wrapper.contains(<button />)).toBe(false);
});
