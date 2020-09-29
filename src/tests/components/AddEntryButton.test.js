import React from 'react';
import { shallow } from 'enzyme';
import { AddEntryButton } from '../../components/AddEntryButton';

test('should render AddEntryButton correctly', () => {
  const startCreateEntry = jest.fn();
  const wrapper = shallow(
    <AddEntryButton startCreateEntry={startCreateEntry} />
  );
  expect(wrapper).toMatchSnapshot();
});
