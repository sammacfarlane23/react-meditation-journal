import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import EditButton from './EditButton';

export default (props) => {
  const [title, setTitle] = useState(props.entry ? props.entry.title : '');

  const [entryText, setEntryText] = useState(
    props.entry ? props.entry.entryText : ''
  );

  const [createdAt, setCreatedAt] = useState(
    props.entry ? moment(props.entry.createdAt) : moment()
  );

  const [editDate, setEditDate] = useState(false);

  const [calendarFocused, setCalendarFocused] = useState(false);

  const [error, setError] = useState('');

  const onEntryTextChange = (e) => {
    setEntryText(e.target.value);
  };

  const onRemove = () => {
    props.onRemove(props.entry);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onTimeChange = (e) => {
    const currentDate = moment(createdAt).startOf('day');
    const timeOfDay = moment.duration(
      moment(e.target.value, 'HH:mm') -
        moment(e.target.value, 'HH:mm').startOf('day')
    );
    setCreatedAt(moment(currentDate).add(timeOfDay));
  };

  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };

  const onDateChange = (createdAt) => {
    const timeOfDay = moment(createdAt) - moment(createdAt).startOf('day');
    const addTime = moment(moment(createdAt).startOf('day') + timeOfDay);
    if (createdAt) {
      setCreatedAt(addTime);
    }
  };

  const onEditDate = () => {
    setEditDate(true);
  };

  const closeModal = () => {
    props.closeModal();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!entryText) {
      setError('Please add an entry');
    } else {
      setError('');
      props.onSubmit({
        entryText,
        createdAt: createdAt.valueOf(),
        title,
      });
    }
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        className='title'
        type='text'
        placeholder='Title (optional)'
        value={title ? title : ''}
        onChange={onTitleChange}
      />
      <hr className='horizontal-line' />
      {error && <p className='form__error'>{error}</p>}
      <textarea
        rows='10'
        value={entryText}
        className='text-area'
        placeholder='Describe your experience here...'
        onChange={onEntryTextChange}
      ></textarea>
      {!editDate && (
        <div className='createdAt-section'>
          <p className='createdAt-section__text'>
            {moment(createdAt).format('DD MMM YYYY HH:mm')}
          </p>
          <button type='button' className='edit-button' onClick={onEditDate}>
            <EditButton />
          </button>
        </div>
      )}
      {editDate && (
        <div className='date-edit'>
          <div className='single-date-picker'>
            <SingleDatePicker
              date={createdAt}
              onDateChange={onDateChange}
              onFocusChange={onFocusChange}
              focused={calendarFocused}
              numberOfMonths={1}
              isOutsideRange={() => false}
              displayFormat='DD/MM/YYYY'
              isOutsideRange={(d) => d.isAfter(moment())}
              withPortal={true}
            />
          </div>
          <input
            className='input-time'
            type='time'
            onChange={onTimeChange}
            value={moment(createdAt).format('HH:mm')}
            max={
              moment().startOf('day').isSame(moment(createdAt).startOf('day'))
                ? moment().format('HH:mm')
                : '23:59'
            }
          />
        </div>
      )}
      <div className='button-container'>
        <div className='remove-button-container'>
          {props.canDelete && (
            <button
              type='button'
              className='button button--delete'
              onClick={onRemove}
            >
              Delete
            </button>
          )}
        </div>
        <div className='other-button-container'>
          <button type='submit' className='button button--right'>
            Save
          </button>
          <button
            type='button'
            onClick={closeModal}
            className='button button--right button--cancel'
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};
