import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import EditButton from './EditButton';

export default class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryText: props.entry ? props.entry.entryText : '',
      createdAt: props.entry ? moment(props.entry.createdAt) : moment(),
      error: '',
      calendarFocused: false,
      title: props.entry ? props.entry.title : '',
      editDate: false,
    };
  }

  onEntryTextChange = (e) => {
    const entryText = e.target.value;
    this.setState(() => ({ entryText }));
  };

  onRemove = () => {
    this.props.onRemove(this.props.entry);
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onTimeChange = (e) => {
    const currentDate = moment(this.state.createdAt).startOf('day');
    const timeOfDay = moment.duration(
      moment(e.target.value, 'HH:mm') -
        moment(e.target.value, 'HH:mm').startOf('day')
    );
    const createdAt = moment(currentDate).add(timeOfDay);
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onDateChange = (createdAt) => {
    const timeOfDay =
      moment(this.state.createdAt) -
      moment(this.state.createdAt).startOf('day');
    const addTime = moment(moment(createdAt).startOf('day') + timeOfDay);
    if (createdAt) {
      this.setState(() => ({ createdAt: addTime }));
    }
  };

  onEditDate = () => {
    this.setState(() => ({ editDate: true }));
  };

  closeModal = () => {
    this.props.closeModal();
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.entryText) {
      this.setState(() => ({
        error: 'Please add an entry',
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        entryText: this.state.entryText,
        createdAt: this.state.createdAt.valueOf(),
        title: this.state.title,
      });
    }
  };

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <input
          className='title'
          type='text'
          placeholder='Title (optional)'
          value={this.state.title ? this.state.title : ''}
          onChange={this.onTitleChange}
        />
        <hr className='horizontal-line' />
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <textarea
          rows='10'
          value={this.state.entryText}
          className='text-area'
          placeholder='Describe your experience here...'
          onChange={this.onEntryTextChange}
        ></textarea>
        {!this.state.editDate && (
          <div className='createdAt-section'>
            <p className='createdAt-section__text'>
              {moment(this.state.createdAt).format('DD MMM YYYY HH:mm')}
            </p>
            <button
              type='button'
              className='edit-button'
              onClick={this.onEditDate}
            >
              <EditButton />
            </button>
          </div>
        )}
        {this.state.editDate && (
          <div className='date-edit'>
            <div className='single-date-picker'>
              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                onFocusChange={this.onFocusChange}
                focused={this.state.calendarFocused}
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
              onChange={this.onTimeChange}
              value={moment(this.state.createdAt).format('HH:mm')}
              max={
                moment()
                  .startOf('day')
                  .isSame(moment(this.state.createdAt).startOf('day'))
                  ? moment().format('HH:mm')
                  : '23:59'
              }
            />
          </div>
        )}
        <div className='button-container'>
          <div className='remove-button-container'>
            {this.props.canEdit && (
              <button
                type='button'
                className='button button--delete'
                onClick={this.onRemove}
              >
                Delete
              </button>
            )}
          </div>
          <div className='other-button-container'>
            <button className='button button--right'>Save</button>
            <button
              type='button'
              onClick={this.closeModal}
              className='button button--right button--cancel'
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}
