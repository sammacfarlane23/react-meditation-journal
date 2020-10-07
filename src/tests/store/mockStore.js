import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render as rtlRender } from '@testing-library/react';

const middlewares = [];
const mockStore = configureStore(middlewares);

let store;

beforeEach(() => {
  store = mockStore();
});

function renderWithStoreProvider(ui) {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper });
}

export { renderWithStoreProvider };
