import React from 'react';
import { Header } from '../../components/Header';
import { render } from '@testing-library/react';
import { mountWithReduxState } from '../store/mockStore';
import EntryListFilters from '../../components/EntryListFilters';

test('should render Header correctly', () => {
  const component = render(<Header />);
  expect(component).toMatchSnapshot();
});

test('should mount EntryListFilters on search button click', () => {
  const setTextFilterMock = jest.fn();
  const wrapper = mountWithReduxState(
    <Header setTextFilter={setTextFilterMock} />
  );
  wrapper.find('button').at(0).simulate('click');
  expect(wrapper.find(EntryListFilters).length).toBe(1);
  expect(setTextFilterMock).toHaveBeenCalledWith('');
});

test('clicking search then cancel should set text filter to empty string and close search bar', () => {
  const setTextFilterMock = jest.fn();
  const wrapper = mountWithReduxState(
    <Header setTextFilter={setTextFilterMock} />
  );
  wrapper.find('button').at(0).simulate('click');
  wrapper.find('button').at(0).simulate('click');
  expect(wrapper.find(EntryListFilters).length).toBe(0);
  expect(wrapper.find('h1').length).toBe(1);
  expect(setTextFilterMock).toHaveBeenCalledWith('');
});

test('clicking logout button should dispatch startLogout', () => {
  const startLogoutMock = jest.fn();
  const wrapper = mountWithReduxState(<Header startLogout={startLogoutMock} />);
  wrapper.find('button').at(1).simulate('click');
  expect(startLogoutMock).toHaveBeenCalled();
});
