import { shallow } from 'enzyme';
import React from 'react';
import EntryForm from '../../components/EntryForm';
import entries from '../fixtures/entries';
import moment from '../__mocks__/moment';

test('should render EntryForm correctly', () => {
  const wrapper = shallow(<EntryForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render EntryForm correctly with entry data and delete button', () => {
  const wrapper = shallow(<EntryForm entry={entries[1]} canDelete={true} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<EntryForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.find('.form__error').length).toBeGreaterThan(0);
});

test('should set title on input change', () => {
  const value = 'This is a title';
  const wrapper = shallow(<EntryForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });
  expect(wrapper.find('.title').props().value).toBe(value);
});

test('should set entryText on textarea change', () => {
  const value = 'This is entry text';
  const wrapper = shallow(<EntryForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value },
  });
  expect(wrapper.find('textarea').props().value).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <EntryForm entry={entries[2]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.find('.form__error').length).toBe(0);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: entries[2].title,
    entryText: entries[2].entryText,
    createdAt: entries[2].createdAt,
  });
});

test('clicking edit date button should show date and time picker', () => {
  const wrapper = shallow(<EntryForm />);
  wrapper.find('.edit-button').simulate('click');
  expect(wrapper.find('SingleDatePicker').length).toBeGreaterThan(0);
  expect(wrapper.find('.input-time').length).toBeGreaterThan(0);
});

test('should set new date on date change after clicking edit date to bring up date picker', () => {
  const now = moment();
  const wrapper = shallow(<EntryForm />);
  wrapper.find('.edit-button').simulate('click');
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.find('SingleDatePicker').props().date).toEqual(now);
});

test('should set calendar focus after clicking edit date to bring up date picker', () => {
  const focused = true;
  const wrapper = shallow(<EntryForm />);
  wrapper.find('.edit-button').simulate('click');
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.find('SingleDatePicker').props().focused).toBe(focused);
});

test('should call closeModal prop on clicking cancel button', () => {
  const closeModalSpy = jest.fn();
  const wrapper = shallow(<EntryForm closeModal={closeModalSpy} />);
  wrapper.find('.button--cancel').simulate('click');
  expect(closeModalSpy).toBeCalled();
});

test('should call onRemove prop on clicking delete button', () => {
  const onRemoveSpy = jest.fn();
  const wrapper = shallow(
    <EntryForm onRemove={onRemoveSpy} canDelete={true} />
  );
  wrapper.find('.button--delete').simulate('click');
  expect(onRemoveSpy).toBeCalled();
});

// test('should set new time on time change after clicking edit date to bring up time picker', () => {
//   const currentDate = moment().startOf('day');
//   const timeOfDay = moment.duration(2, 'hours');
//   const createdAt = moment(moment().startOf('day')).add(timeOfDay);
//   const wrapper = shallow(<EntryForm />);
//   wrapper.find('button').at(0).simulate('click');
//   wrapper.find('input').at(1).simulate('change', {
//     target: { value },
//   });
//   expect(wrapper.state('createdAt')).toEqual(value);
// });
