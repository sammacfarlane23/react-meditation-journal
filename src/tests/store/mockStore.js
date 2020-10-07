import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render as rtlRender } from '@testing-library/react';

const middlewares = [];
const mockStore = configureStore(middlewares);

const defaultInitialState = {
  entries: [],
  filters: {
    text: '',
  },
};

function renderWithState(ui, initialState = defaultInitialState) {
  const Wrapper = ({ children }) => {
    const store = mockStore(initialState);
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper });
}

export { renderWithState };
