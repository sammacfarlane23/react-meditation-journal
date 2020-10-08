import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render as rtlRender } from '@testing-library/react';
import { mount } from 'enzyme';

const middlewares = [];
const mockStore = configureStore(middlewares);

const defaultInitialState = {
  entries: [],
  filters: {
    text: '',
  },
};

function renderWithReduxState(ui, initialState = defaultInitialState) {
  const Wrapper = ({ children }) => {
    const store = mockStore(initialState);
    store.dispatch = jest.fn();
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper });
}

function mountWithReduxState(component, initialState = defaultInitialState) {
  const store = mockStore(initialState);
  store.dispatch = jest.fn();
  return mount(<Provider store={store}>{component}</Provider>);
}

export { renderWithReduxState, mountWithReduxState };
