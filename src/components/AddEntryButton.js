import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EntryModal from './EntryModal';
import { startCreateEntry } from '../actions/entries';

export class AddEntryButton extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState(() => ({ show: true }));
  };

  onSubmit = (entry) => {
    this.props.startCreateEntry(entry);
    this.setState({ show: false });
  };

  closeModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className='button-position'>
        {!this.state.show && (
          <button
            className='button--big circular-container'
            onClick={this.showModal}
          >
            <FontAwesomeIcon icon={faPlus} size='2x' />
          </button>
        )}
        <EntryModal
          showModal={this.state.show}
          onSubmit={this.onSubmit}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startCreateEntry: (entry) => dispatch(startCreateEntry(entry)),
});

export default connect(undefined, mapDispatchToProps)(AddEntryButton);
