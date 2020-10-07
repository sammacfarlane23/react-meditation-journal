import React from 'react';
import { shallow } from 'enzyme';
import EntryItem from '../../components/EntryItem';
import { setupStoreAndRender } from '../store/mockStore';
import entries from '../fixtures/entries';

test('should render EntryItem correctly', () => {
  const component = setupStoreAndRender(<EntryItem />, entries);
  expect(component).toMatchSnapshot();
});

// test('should render EntryItem correctly without title', () => {
//   const startEditEntry = jest.fn();
//   const startRemoveEntry = jest.fn();
//   const wrapper = shallow(
//     <EntryItem {...entries[0]} startEditEntry={startEditEntry} />
//   );
//   expect(wrapper).toMatchSnapshot();
// });

// test('should render EntryItem correctly with title', () => {
//   const wrapper = shallow(<EntryItem {...entries[1]} />);
//   expect(wrapper).toMatchSnapshot();
// });
