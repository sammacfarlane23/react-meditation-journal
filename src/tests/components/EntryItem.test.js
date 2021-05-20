import React from 'react';
import EntryItem from '../../components/EntryItem';
import { mountWithReduxState, renderWithReduxState } from '../store/mockStore';
import Modal from 'react-modal';
import entries from '../fixtures/entries';

test('should render EntryItem without title correctly', () => {
  const component = renderWithReduxState(<EntryItem {...entries[0]} />);
  expect(component).toMatchSnapshot();
});

test('should render EntryItem correctly with title', () => {
  const component = renderWithReduxState(<EntryItem {...entries[1]} />);
  expect(component).toMatchSnapshot();
});

test('should render EntryModal in closed state', () => {
  const wrapper = mountWithReduxState(<EntryItem {...entries[1]} />);
  expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
});

test('should open modal to edit entry when entry is clicked', () => {
  const wrapper = mountWithReduxState(<EntryItem {...entries[1]} />);
  wrapper.find('button').simulate('click');
  expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
  expect(wrapper.find('.title').props().value).toBe(entries[1].title);
  expect(wrapper.find('.text-area').props().value).toBe(entries[1].entryText);
});
