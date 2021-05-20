import { mount, render } from '@testing-library/react';
import React from 'react';
import EntryModal from '../../components/EntryModal';
import entries from '../fixtures/entries';
import { mountWithReduxState } from '../store/mockStore';

test('should render EntryModal correctly', () => {
  const component = render(<EntryModal />);
  expect(component).toMatchSnapshot();
});

test('should render EntryForm with entry data passed down as prop', () => {
  const component = mountWithReduxState(
    <EntryModal selectedEntry={{ ...entries[0] }} />
  );
  expect(component).toMatchSnapshot();
});
